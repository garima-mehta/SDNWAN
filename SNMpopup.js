/*
 *  Copyright 2015 VERIZON, Inc.
 *  All Rights Reserved
 *
 *  This software is the confidential and proprietary information
 *  of VERIZON, Inc.  Unauthorized copying, adaptation, distribution,
 *  use, or display is prohibited.
 *
 *  Author: Naveen Chintala
 */

/**
 * @param show
 * @param module
 * @return
 */
function showPopup(show, module) {
	if (show) {
		if (module == 'EquipmentMgmt') {
			$('#equipmentMgmtPopup').show();
			$('#equipmentMgmtModalContent').show();
			$('#equipmentMgmtOperationStatusSpinner').show();
		} else if (module == 'NQ') {
			$('#networkQueryPopup').show();
			$('#networkQueryModalContent').show();
			$('#networkQueryOperationStatusSpinner').show();
		} else if (module == 'NNI') {
			$('#nniQueryPopup').show();
			$('#nniModalContent').show();
			$('#nniOperationStatusSpinner').show();
		} else if (module == 'ConnectionGroups') {
			$('#connectionGroupsQueryPopup').show();
			$('#connectionGroupsModalContent').show();
			$('#connectionGroupsOperationStatusSpinner').show();
		} else if (module == 'elanQueries') {
			$('#elanQueriesPopup').show();
			$('#elanQueriesModalContent').show();
			$('#elanQueriesStatusSpinner').show();
		} else if (module == 'Subnetwork') {
			$('#subnetworkPopup').show();
			$('#subnetworkPopupContent').show();
			$('#subnetworkOperationStatusSpinner').show();
		} else if (module == 'ServiceCatalog') {
			$('#serviceCatalogPopup').show();
			$('#serviceCatalogPopupContent').show();
			$('#serviceCatalogOperationStatusSpinner').show();
		}
	} else {
		if (module == 'EquipmentMgmt') {
			$('#equipmentMgmtPopup').hide();
			$('#equipmentMgmtModalContent').hide();
			$('#equipmentMgmtOperationStatusSpinner').hide();
		} else if (module == 'NQ') {
			$('#networkQueryPopup').hide();
			$('#networkQueryModalContent').hide();
			$('#networkQueryOperationStatusSpinner').hide();
		} else if (module == 'NNI') {
			$('#nniQueryPopup').hide();
			$('#nniModalContent').hide();
			$('#nniOperationStatusSpinner').hide();
		} else if (module == 'ConnectionGroups') {
			$('#connectionGroupsQueryPopup').hide();
			$('#connectionGroupsModalContent').hide();
			$('#connectionGroupsOperationStatusSpinner').hide();
		} else if (module == 'Subnetwork') {
			$('#subnetworkPopup').hide();
			$('#subnetworkPopupContent').hide();
			$('#subnetworkOperationStatusSpinner').hide();
		} else if (module == 'ServiceCatalog') {
			$('#serviceCatalogPopup').hide();
			$('#serviceCatalogPopupContent').hide();
			$('#serviceCatalogOperationStatusSpinner').hide();
		} else if (module == 'elanQueries') {
			$('#elanQueriesPopup').hide();
			$('#elanQueriesModalContent').hide();
			$('#elanQueriesStatusSpinner').hide();
		}

	}
}

/**
 * @return
 */
function closePopup(module) {
	showPopup(false, module);
}

/**
 * @param showSpinner
 * @param module
 * @return
 */
function showSpinnerInPopup(showSpinner, module) {
	if (showSpinner) {
		if (module == 'EquipmentMgmt') {
			$('#equipmentMgmtOperationStatusSpinner').show();
		} else if (module == 'NQ') {
			$('#networkQueryOperationStatusSpinner').show();
		} else if (module == 'NNI') {
			$('#nniOperationStatusSpinner').show();
		} else if (module == 'ConnectionGroups') {
			$('#connectionGroupsOperationStatusSpinner').show();
		} else if (module == 'Subnetwork') {
			$('#subnetworkOperationStatusSpinner').show();
		} else if (module == 'ServiceCatalog') {
			$('#serviceCatalogOperationStatusSpinner').show();
		} else if (module == 'elanQueries') {
			$('#elanQueriesStatusSpinner').show();
		}
	} else {
		if (module == 'EquipmentMgmt') {
			$('#equipmentMgmtOperationStatusSpinner').hide();
		} else if (module == 'NQ') {
			$('#networkQueryOperationStatusSpinner').hide();
		} else if (module == 'NNI') {
			$('#nniOperationStatusSpinner').hide();
		} else if (module == 'ConnectionGroups') {
			$('#connectionGroupsOperationStatusSpinner').hide();
		} else if (module == 'Subnetwork') {
			$('#subnetworkOperationStatusSpinner').hide();
		} else if (module == 'ServiceCatalog') {
			$('#serviceCatalogOperationStatusSpinner').hide();
		} else if (module == 'elanQueries') {
			$('#elanQueriesStatusSpinner').hide();
		}
	}
}

/**
 * @param message
 * @param module
 * @return
 */
function setPopupMessage(message, module) {
	if (module == 'EquipmentMgmt') {
		$('#equipmentMgmtPopupMessage').html(message);
	} else if (module == 'NQ') {
		$('#networkQueryPopupMessage').html(message);
	} else if (module == 'NNI') {
		$('#nniOperationsPopupMessage').html(message);
	} else if (module == 'ConnectionGroups') {
		$('#connectionGroupsPopupMessage').html(message);
	} else if (module == 'ServiceCatalog') {
		$('#serviceCatalogPopupMessage').html(message);
	} else if (module == 'Subnetwork') {
		$('#subnetworkPopupMessage').html(message);
	} else if (module == 'elanQueries') {
		$('#elanQueriesPopupMessage').html(message);
	}
}