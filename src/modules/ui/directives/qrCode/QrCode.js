(function () {
    'use strict';


    /**
     * @param {JQuery} $element
     * @return {QrCode}
     */
    const controller = function ($element) {

        class QrCode {

            constructor() {
                /**
                 * @private
                 * @type {string}
                 */
                this.url = null;
                /**
                 * @private
                 * @type {number}
                 */
                this.size = null;
                /**
                 * @type {HTMLElement}
                 */
                this.qrNode = document.createElement('DIV');

                $element.append(this.qrNode);
            }

            $onChanges() {
                QRCode.toDataURL(this.url, (error, encrypted) => {
                    this.qrNode.classList.add('qr-code-wrap');
                    this.qrNode.style.width = `${this.size}px`;
                    this.qrNode.style.height = `${this.size}px`;
                    this.qrNode.innerHTML = `<img style="display: block" src="${encrypted}">`;
                });
            }

            // create() {
            //     console.log("CREATING");
            //
            //     const node = document.createElement('DIV');
            //     node.classList.add('qr-code-wrap');
            //     node.style.width = `${this.size}px`;
            //     node.style.height = `${this.size}px`;
            //     $element.append(node);
            //
            //     QRCode.toDataURL(this.url, function (error, encrypted) {
            //         node.innerHTML = `<img style="display: block" src="${encrypted}">`;
            //     });
            //
            //     this.notnode = document.createElement('DIV');
            // }

            // update() {
            //     this.qrcode.clear();
            //     this.qrcode.makeCode(this.url);
            // }

        }

        return new QrCode();
    };

    controller.$inject = ['$element'];

    angular.module('app.ui')
        .component('wQrCode', {
            bindings: {
                size: '@',
                url: '<'
            },
            controller
        });
})();
