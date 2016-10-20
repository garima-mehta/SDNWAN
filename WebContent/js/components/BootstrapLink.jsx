define([
    'react', 'jquery', 'jsx!components/BootstrapButton', 'jsx!components/BootstrapModal'
], function(React, $, BootstrapButton, BootstrapModal) {

    var BootstrapLink = React.createClass({
        handleCancel: function() {
            this.refs.modal.close();

        },
        addRow: function(data) {
            this.props.addRow(data);

        },
        render: function() {
            var modal = null;
            modal = (
                <BootstrapModal ref="modal" confirm="OK" cancel="Cancel" onCancel={this.handleCancel} onConfirm={this.closeModal} onHidden={this.handleModalDidClose} title="Create New Forwarding Box Template"></BootstrapModal>
            );
            return (
                <div className="link">
                    {modal}
                    <BootstrapButton onClick={this.openModal} data={this.props.data}>
                        Open modal
                    </BootstrapButton>
                </div>
            );
        },
        openModal: function() {
            $(".link").find(".modal").appendTo("body");
            this.refs.modal.open();
        },
        closeModal: function(data) {
            if (data)
                this.addRow(data);
            this.refs.modal.close();
        },
        handleModalDidClose: function() {}
    });

    return BootstrapLink;

});
