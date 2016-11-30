var moduleName = "ConnectionGroups";

function getConnectionGroups() {
	$.ajax({
		url : 'getAllConnectionGroups',
		cache : false,
		data : {},
		success : function(result) {
			$('#allconnectiongroups').html(result);
		}
	});
}

function getAllSubnetworks() {
	$.ajax({
		url : 'getAllSubnetworks',
		cache : false,
		data : {},
		success : function(result) {
			$('#originsubnet').html(result).find("#ajaxAllSubnetworks");
			$('#terminationsubnet').html(result).find("#ajaxAllSubnetworks");
		}
	});

	$.ajax({
		url : 'getNetworkList',
		data : {},
		cache : false,
		success : function(result) {
			$("#terminationnetwork").html(result).find("#ajaxAllNetworks");
		}
	});
}

function getSitesByOriginSubnetName() {
	showPopup(true, moduleName);
	setPopupMessage("Fetching Sites By Origin Subnetwork Name...", moduleName);
	$.ajax({
		url : 'getSitesBySubnetName',
		cache : false,
		data : {
			'subnetName' : $("#originsubnet :selected").text()
		},
		success : function(result) {
			$('#originsite').html(result).find("#ajaxAllSitesBySubnetName");
			closePopup(moduleName);
		}
	});
}

function getSitesByTerminationSubnetName() {
	showPopup(true, moduleName);
	setPopupMessage("Fetching Sites By Termination Subnetwork Name...", moduleName);
	$.ajax({
		url : 'getSitesBySubnetName',
		cache : false,
		data : {
			'subnetName' : $("#terminationsubnet :selected").text()
		},
		success : function(result) {
			$('#terminationsite').html(result).find("#ajaxAllSitesBySubnetName");
			closePopup(moduleName);
		}
	});
}

function getSitesByNetworkName() {
	showPopup(true, moduleName);
	setPopupMessage("Fetching Sites By Network Name...", moduleName);
	$.ajax({
		url : 'getSitesByNetworkName',
		cache : false,
		data : {
			'networkName' : $("#terminationnetwork :selected").text()
		},
		success : function(result) {
			$('#terminationsite').html(result).find('#ajaxGetSitesByNetworkName');
			closePopup(moduleName);
		}
	});
}

function getSwitchByOriginSite() {
	showPopup(true, moduleName);
	setPopupMessage("Fetching Switches By Origin Site...", moduleName);
	$.ajax({
		url : 'getSwitchBySite',
		cache : false,
		data : {
			'siteName' : $("#originsite :selected").text()
		},
		success : function(result) {
			$('#originswitch').html(result).find('#ajaxGetSwitchBySite');
			closePopup(moduleName);
		}
	});
}

function getSwitchByTerminationSite() {
	showPopup(true, moduleName);
	setPopupMessage("Fetching Switches By Termination Site...", moduleName);
	$.ajax({
		url : 'getSwitchBySite',
		cache : false,
		data : {
			'siteName' : $("#terminationsite :selected").text()
		},
		success : function(result) {
			$('#terminationswitch').html(result).find('#ajaxGetSwitchBySite');
			closePopup(moduleName);
		}
	});
}

function getNNIDetails() {
	showPopup(true, moduleName);
	setPopupMessage("Fetching Network Connections By Connection Groups...", moduleName);
	$.ajax({
		url : 'getNNIDetails',
		cahce : false,
		data : {
			'switchNNIID' : $("#switchNNIId").val(),
			'terminationNetwork' : $("#terminationnetwork :selected").text(),
			'originSubnetwork' : $("#originsubnet :selected").text(),
			'terminationSubnetwork' : $("#terminationsubnetwork :selected").text(),
			'originSite' : $("#originsite :selected").text(),
			'terminationSite' : $("#terminationsite :selected").text(),
			'originSwitch' : $("#originSwitch :selected").text(),
			'terminationSwitch' : $("#terminationswitch :selected").text()
		},
		success : function(result) {
			$('#nniDetailsResult').html(result).find('#ajaxNNIDetails');
			closePopup(moduleName);
		}
	});
}

function creationGroup(priority, id) {
	$('#ajaxNNIAddDetails').show();
	$('#ajaxNNIDetailsOtherTable tbody').append(
			'<tr><td>' + priority + '</td><td>' + id + '</td></tr>');
}

function createNewConnectionGroup() {
	var attributePairStr = getNetworkConnectionForCreation();
	var connectionGroupName = $("#connectionGroupName").val();
	if(connectionGroupName!= ""){
		$.ajax({
			url : 'createConnectionGroup',
			cache : false,
			data : {
				'connectionGroupName' : $("#connectionGroupName").val(),
				'attributePairStr' : attributePairStr
			},
			success : function(result) {
				var ajaxResponseResult = $(result).find("#responseMessage").html();
				showPopup(true, moduleName);
				setPopupMessage(ajaxResponseResult, moduleName);
				showSpinnerInPopup(false, moduleName);		
				}

		});
	}
	else{
		showPopup(true, moduleName);
		setPopupMessage("Connection Group Name cannot be empty", moduleName);
		showSpinnerInPopup(false, moduleName);
	}
	

}

function getNetworkConnectionForCreation() {
	var rows = [];
	$('#ajaxNNIDetailsOtherTable tbody tr').each(function() {
		rows.push($(this));
	});
	var attributePairStr = "";
	for (var j = 0; j < rows.length; j++) {
		var td = rows[j].children('td');
		if (td.eq(0).text() != "" && td.eq(1).text() !== "") {
			attributePairStr = attributePairStr + $.trim(td.eq(0).text()) + ","
					+ $.trim(td.eq(1).text() + "@");
		}
	}
	return attributePairStr;
}

function showModule(module) {
	if (module == "Search by Switch NNI") {
		$('#create').hide();
		$('#connectionGroupInfo').hide();
		$('#nniDetailsResult').hide();
		$('#searchBySwitchNNIIdHolder').slideDown();
	} else if (module == "Search") {
		$('#create').hide();
		$('#searchBySwitchNNIIdHolder').hide();
		$('#nniDetailsResult').hide();
		getConnectionGroupsByConnectionGroupName();
	}
}

function getConnectionGroupsByConnectionGroupName() {
	var connectionGroup = $("#allconnectiongroups :selected").text();
	showPopup(true, moduleName);
	setPopupMessage("Querying Connection Groups for Group " + connectionGroup
			+ "...", moduleName);
	$.ajax({
		url : 'getConnectionGroupsByConnectionGroupName',
		cache : false,
		data : {
			"connectionGroup" : $.trim(connectionGroup)
		},
		success : function(result) {
			$('#connectionGroupInfo').html(result).find("#ajaxConnectionGroups");
			closePopup(moduleName);
		}
	});
}

function getConnectionGroupsByNetworkConnection() {
	var connectionGroupByNC = $("#connectionGroupByNC").val();
	showPopup(true, moduleName);
	if ($.trim(connectionGroupByNC).length > 0) {
		setPopupMessage("Querying Connection Groups for NNI " + connectionGroupByNC + "...", moduleName);
		$.ajax({
			url : 'getConnectionGroupsByNetworkConnection',
			cache : false,
			data : {
				"connectionGroupByNC" : $.trim(connectionGroupByNC)
			},
			success : function(result) {
				$('#connectionGroupsByNNIResults').html(result).find("ajaxConnectionGroupByNetworkConnection");
				closePopup(moduleName);
			}
		})
	} else {
		showSpinnerInPopup(false, moduleName);
		setPopupMessage("Please provide an NNI.", moduleName);
	}
}

function deleteSelectedNNI(networkConnectionName, priority) {
	var connectionGroupName = $("#allconnectiongroups :selected").text();
	var priority = "PRI";
	$(this).closest("tr").remove();
	$.ajax({
		url : 'deleteSelectedNNI',
		cahce : false,
		data : {
			"connectionGroupName" : connectionGroupName,
			"networkConnectionName" : networkConnectionName,
			"priority" : priority

		},
		success : function(result) {
			getConnectionGroupsByConnectionGroupName();
		}
	})

}

function showNameTab(){
	$("#nameTab").addClass("active_tab");
	$("#searchTab").removeClass("active_tab");
	$("#addTab").removeClass("active_tab");
	
	$("#nameTabContent").show();
	$("#searchTabContent").hide();
	$("#addTabContent").hide();
}

function showSearchTab(){
	$("#nameTab").removeClass("active_tab");
	$("#searchTab").addClass("active_tab");
	$("#addTab").removeClass("active_tab");
	
	$("#nameTabContent").hide();
	$("#searchTabContent").show();
	$("#addTabContent").hide();
}

function showAddTab(){
	$("#nameTab").removeClass("active_tab");
	$("#searchTab").removeClass("active_tab");
	$("#addTab").addClass("active_tab");
	
	$("#nameTabContent").hide();
	$("#searchTabContent").hide();
	$("#addTabContent").show();
}