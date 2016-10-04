define(
		[ 'linkMode','configurationEvents', 'bootstrap' ],
		function(linkMode,configurationEvents) {
			(function(nx) {
				// node tooltip class
				// see nx.graphic.Topology.Node reference to learn what node's
				// properties you're able to use
				nx
						.define(
								'TooltipNode',
								nx.ui.Component,
								{
									properties : {
										'node' : {}, // NeXt automatically
														// provides you the
														// access to the
														// selected
														// nx.graphic.Topology.Node
														// instance
										'topology' : {}, // NeXt also
															// provides you the
															// access to the
															// topology object
										'newNodeName' : '',
										'classNameConfig' : function() {
											if (linkMode.getFlag())
												return "popup-section linkhide ";
											else {
												return "popup-section "
											}
										},
										'classNamePort' : function() {
											if (linkMode.getFlag())
												return "popup-section  ";
											else {
												return "popup-section linkhide "
											}
										},
										portData:function(){
											return [{port:1245},{port:2456},{port:1444},{port:1444}];
										}
									},

									// 'view' defines the appearance of the
									// tooltip
									view : {
										content : {
											content : [
													{
														tag : 'div',
														props : {
															'class' : '{#classNameConfig}'
														},
														events : {
															'click' : '{#onClickEvent}'
														},
														content : [
																{
																	tag : "i",
																	props : {
																		'class' : "fa fa-cog",
																		'aria-hidden' : "true"
																	}
																},
																{
																	tag : "div",
																	content : "Config",
																	props : {
																		'class' : "label-data"
																	}
																}

														]
													},
													{
														tag : 'div',
														props : {
															'class' : '{#classNamePort}'
														},
														content : [ {
															tag:'h6',
															content:"Select Port"
														},{
															tag : 'div',
															props:{
																 items: "{#portData}",
											                        template: {
											                            tag: "div",
											                            content: [
																			{
																				tag : "input",
																				props : {
																					'type' : "radio",
																					'name' : "portselcted"
																				},
																				events : {
																					'click' : '{#onClickEvent2}'
																				},
																			},
																			{
																				tag : "div",
																				content : "{port}",
																				props : {
																					'class' : "label-data"
																				}
																			} ]
											                        }
															}

														}

														]
													}

											],
											// applies to the whole tooltip box
											props : {
												// css class; see
												// ./css/custom.css
												'class' : 'custom-tooltip'
											}
										}
									},
									methods : {

										"onClickEvent" : function() {
											var self=this.node();
											var fbName = $('g.node-selected')
													.attr('data-id');
											$("#pageModal")
													.load(
															"templates/tab.html",
															function() {
																$('#pageModal ')
																.modal(
																		'show')
																configurationEvents.init(self);
																configurationEvents.savingDetails();
																
															});
											
										},
										"onClickEvent2" : function() {
											if (!this.topology().srclink) {
												this.topology().srclink = this
														.node().id();
											} else {
												this
														.topology()
														.addLink(
																{
																	source : this
																			.topology().srclink,
																	target : this
																			.node()
																			.id()
																});
												this.topology().srclink = "";
											//	linkMode.setFlag(false);

											}

										},
										"modalEvent" : function() {

											$('#myModal').modal('show');

										},
										//
										'onRemoveNode' : function() {
											// get a selected node's id and pass it to removeNode() of topology instance
											this.topology().removeNode(
													this.node().id());
										},
										// what happens when you hit 'Save' button
										'onSaveName' : function() {
											// get current node's instance and access its label value. when pass something inside, NeXt consider
											// you set new value
											this.node().label(
													this.newNodeName());
										}
									}
								});
				// link tooltip class
				// see nx.graphic.Topology.Link reference to learn what link's properties you're able to use
				nx.define('TooltipLink', nx.ui.Component, {
					properties : {
						link : {},
						topology : {}
					},
					view : {
						content : {
							content : [ {
								tag : 'h1',
								content : [ {
									tag : 'span',
									content : 'Link #'
								}, {
									tag : 'span',
									content : '{#link.id}'
								} ]
							}, {
								tag : 'div',
								content : [ {
									tag : 'span',
									content : 'From: ',
									props : {
										'class' : 'bold-text'
									}
								}, {
									tag : 'span',
									// we access link's model to show a source node's name
									content : '{#link.model.source.name}'
								} ]
							}, {
								tag : 'div',
								content : [ {
									tag : 'span',
									content : 'To: ',
									props : {
										'class' : 'bold-text'
									}
								}, {
									tag : 'span',
									// we access link's model to show a target node's name
									content : '{#link.model.target.name}'
								} ]
							} ],
							props : {
								'class' : 'custom-tooltip'
							}
						}
					}
				});
			})(nx);
		});