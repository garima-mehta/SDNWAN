define(['react','jsx!components/PolicyLink','jsx!components/BootstrapButton'], function(React,PolicyLink,BootstrapButton) {

    var PolicyBody = React.createClass({
        render: function() {
            return (
                <div>
                <div className="policies">
                    <div className="accordion">

                        <div className="panel-group">

                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" href="#WhiteListingPolicy" aria-expanded="true">White Listing Policy</a>
                                    </h4>
                                </div>

                                <div id="WhiteListingPolicy" className="panel-collapse collapse in" role="tabpanel">
                                    <div className="panel-body">

                                        <div className="row">
                                            <div>
                                                <table className="table table-bordered policytable">
                                                    <thead>
                                                        <tr>
                                                            <th>Bundle ID</th>
                                                            <th>Role</th>
                                                            <th>Default use</th>

                                                            <th>ID</th>
                                                            <th>Type</th>
                                                            <th>Use Override</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>6627</td>
                                                            <td>whitelisting</td>
                                                            <td>listing</td>
                                                            <td>661</td>
                                                            <td>unidirectional</td>
                                                            <td>yes</td>

                                                        </tr>

                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" href="#bandwidthPolicy" aria-expanded="true">Bandwidth Policy</a>
                                    </h4>
                                </div>

                                <div id="bandwidthPolicy" className="panel-collapse collapse in" role="tabpanel">
                                    <div className="panel-body">

                                        <div className="row">
                                            <div>
                                                <table className="table table-bordered policytable">
                                                    <thead>
                                                        <tr>
                                                            <th>Bundle ID</th>
                                                            <th>Role</th>
                                                            <th>Default use</th>

                                                            <th>ID</th>
                                                            <th>Type</th>
                                                            <th>Use Override</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>6628</td>
                                                            <td>bandwidth listing</td>
                                                            <td>listing</td>
                                                            <td>662</td>
                                                            <td>unidirectional</td>
                                                            <td>yes</td>

                                                        </tr>

                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" href="#vpnPolicy" aria-expanded="true">VPN Policy</a>
                                    </h4>
                                </div>

                                <div id="vpnPolicy" className="panel-collapse collapse in" role="tabpanel">
                                    <div className="panel-body">

                                        <div className="row">
                                            <div>
                                                <table className="table table-bordered policytable">
                                                    <thead>
                                                        <tr>
                                                            <th>Bundle ID</th>
                                                            <th>Role</th>
                                                            <th>Default use</th>

                                                            <th>ID</th>
                                                            <th>Type</th>
                                                            <th>Use Override</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>6629</td>
                                                            <td>VPN listing</td>
                                                            <td>listing</td>
                                                            <td>663</td>
                                                            <td>unidirectional</td>
                                                            <td>yes</td>

                                                        </tr>

                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <PolicyLink onClick={this.props.openModal} title="Create WhiteList Policy" className="btn btn-sm btn-primary policycreate" data="Create Whitelist Policy" template="WhiteList"></PolicyLink>
                        <PolicyLink onClick={this.props.openModal} heading="Create Bandwidth Policy" className="btn btn-sm btn-primary policycreate" data="Create Bandwidth Policy" template="Bandwidth"></PolicyLink>
                        <PolicyLink onClick={this.props.openModal} heading="Create VPN Policy" className="btn btn-sm btn-primary policycreate" data="Create VPN Policy" template="vpn"></PolicyLink>

                    </div>
                </div>

            </div>
            );
        }
    });

    return PolicyBody;
});
