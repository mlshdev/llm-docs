> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentnetwork](https://developer.apple.com/documentation/passkit/pkpaymentnetwork)

# PKPaymentNetwork (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A type that represents a payment method.

## Declaration

```swift
struct PKPaymentNetwork
```

## Topics

### Payment networks

- [amex](pkpaymentnetwork/amex.md): An American Express payment card.
- [bancomat](pkpaymentnetwork/bancomat.md): Deprecated. A Bancomat payment card.
- [bancontact](pkpaymentnetwork/bancontact.md): A Bancontact payment card.
- [bankAxept](pkpaymentnetwork/bankaxept.md)
- [barcode](pkpaymentnetwork/barcode.md): A QR code to use for payment.
- [carteBancaire](pkpaymentnetwork/cartebancaire.md): Deprecated.
- [cartesBancaires](pkpaymentnetwork/cartesbancaires.md): A Cartes Bancaires payment card.
- [chinaUnionPay](pkpaymentnetwork/chinaunionpay.md): A China Union Pay payment card.
- [dankort](pkpaymentnetwork/dankort.md): The Dankort payment card.
- [discover](pkpaymentnetwork/discover.md): A Discover payment card.
- [eftpos](pkpaymentnetwork/eftpos.md): The electronic funds transfer at point of sale (EFTPOS) payment method.
- [electron](pkpaymentnetwork/electron.md): An Electron debit card.
- [elo](pkpaymentnetwork/elo.md): The Elo payment card.
- [girocard](pkpaymentnetwork/girocard.md): A Girocard payment method.
- [idCredit](pkpaymentnetwork/idcredit.md): An iD payment card.
- [interac](pkpaymentnetwork/interac.md): The Interac payment method.
- [JCB](pkpaymentnetwork/jcb.md): A JCB payment card.
- [mada](pkpaymentnetwork/mada.md): A mada payment card.
- [maestro](pkpaymentnetwork/maestro.md): A Maestro payment card.
- [masterCard](pkpaymentnetwork/mastercard.md): A Mastercard payment card.
- [meeza](pkpaymentnetwork/meeza.md)
- [mir](pkpaymentnetwork/mir.md): A Mir payment card.
- [nanaco](pkpaymentnetwork/nanaco.md): A Nanaco payment card.
- [NAPAS](pkpaymentnetwork/napas.md)
- [pagoBancomat](pkpaymentnetwork/pagobancomat.md)
- [postFinance](pkpaymentnetwork/postfinance.md): A PostFinance AG payment card.
- [privateLabel](pkpaymentnetwork/privatelabel.md): Store credit and debit cards.
- [quicPay](pkpaymentnetwork/quicpay.md): A QUICPay payment card.
- [suica](pkpaymentnetwork/suica.md): A Suica payment card.
- [tmoney](pkpaymentnetwork/tmoney.md): The TMoney card.
- [visa](pkpaymentnetwork/visa.md): A Visa payment card.
- [vPay](pkpaymentnetwork/vpay.md): A Visa V Pay payment card.
- [waon](pkpaymentnetwork/waon.md): A WAON payment card.
- [carteBancaires](pkpaymentnetwork/cartebancaires.md): Deprecated. A Cartes Bancaires payment card.

### Initializers

- [init(\_:)](pkpaymentnetwork/init%28__%29.md): Creates a new payment network structure with the raw value you provide.
- [init(rawValue:)](pkpaymentnetwork/init%28rawvalue_%29.md): Creates a new payment network structure with the string you provide.

### Type Properties

- [conecs](pkpaymentnetwork/conecs.md)
- [elCorteIngles](pkpaymentnetwork/elcorteingles.md)
- [elcard](pkpaymentnetwork/elcard.md)
- [himyan](pkpaymentnetwork/himyan.md)
- [humo](pkpaymentnetwork/humo.md)
- [jaywan](pkpaymentnetwork/jaywan.md): A Jaywan payment card.
- [maal](pkpaymentnetwork/maal.md)
- [myDebit](pkpaymentnetwork/mydebit.md)
- [payPak](pkpaymentnetwork/paypak.md)
- [ruPay](pkpaymentnetwork/rupay.md)
- [uzCard](pkpaymentnetwork/uzcard.md)
- [verve](pkpaymentnetwork/verve.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting the payment networks

- [availableNetworks()](pkpaymentrequest/availablenetworks%28%29.md): Returns the list of available payment methods that Apple Pay supports.
- [supportedNetworks](pkpaymentrequest/supportednetworks.md): The payment methods that you support.

# PKPaymentNetwork (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A type that represents a payment method.

## Declaration

```objectivec
typedef NSString * PKPaymentNetwork;
```

## Topics

### Payment networks

- [PKPaymentNetworkAmex](pkpaymentnetwork/amex.md): An American Express payment card.
- [PKPaymentNetworkBancomat](pkpaymentnetwork/bancomat.md): Deprecated. A Bancomat payment card.
- [PKPaymentNetworkBancontact](pkpaymentnetwork/bancontact.md): A Bancontact payment card.
- [PKPaymentNetworkBankAxept](pkpaymentnetwork/bankaxept.md)
- [PKPaymentNetworkBarcode](pkpaymentnetwork/barcode.md): A QR code to use for payment.
- [PKPaymentNetworkCarteBancaire](pkpaymentnetwork/cartebancaire.md): Deprecated.
- [PKPaymentNetworkCartesBancaires](pkpaymentnetwork/cartesbancaires.md): A Cartes Bancaires payment card.
- [PKPaymentNetworkChinaUnionPay](pkpaymentnetwork/chinaunionpay.md): A China Union Pay payment card.
- [PKPaymentNetworkDankort](pkpaymentnetwork/dankort.md): The Dankort payment card.
- [PKPaymentNetworkDiscover](pkpaymentnetwork/discover.md): A Discover payment card.
- [PKPaymentNetworkEftpos](pkpaymentnetwork/eftpos.md): The electronic funds transfer at point of sale (EFTPOS) payment method.
- [PKPaymentNetworkElectron](pkpaymentnetwork/electron.md): An Electron debit card.
- [PKPaymentNetworkElo](pkpaymentnetwork/elo.md): The Elo payment card.
- [PKPaymentNetworkGirocard](pkpaymentnetwork/girocard.md): A Girocard payment method.
- [PKPaymentNetworkIDCredit](pkpaymentnetwork/idcredit.md): An iD payment card.
- [PKPaymentNetworkInterac](pkpaymentnetwork/interac.md): The Interac payment method.
- [PKPaymentNetworkJCB](pkpaymentnetwork/jcb.md): A JCB payment card.
- [PKPaymentNetworkMada](pkpaymentnetwork/mada.md): A mada payment card.
- [PKPaymentNetworkMaestro](pkpaymentnetwork/maestro.md): A Maestro payment card.
- [PKPaymentNetworkMasterCard](pkpaymentnetwork/mastercard.md): A Mastercard payment card.
- [PKPaymentNetworkMeeza](pkpaymentnetwork/meeza.md)
- [PKPaymentNetworkMir](pkpaymentnetwork/mir.md): A Mir payment card.
- [PKPaymentNetworkNanaco](pkpaymentnetwork/nanaco.md): A Nanaco payment card.
- [PKPaymentNetworkNAPAS](pkpaymentnetwork/napas.md)
- [PKPaymentNetworkPagoBancomat](pkpaymentnetwork/pagobancomat.md)
- [PKPaymentNetworkPostFinance](pkpaymentnetwork/postfinance.md): A PostFinance AG payment card.
- [PKPaymentNetworkPrivateLabel](pkpaymentnetwork/privatelabel.md): Store credit and debit cards.
- [PKPaymentNetworkQuicPay](pkpaymentnetwork/quicpay.md): A QUICPay payment card.
- [PKPaymentNetworkSuica](pkpaymentnetwork/suica.md): A Suica payment card.
- [PKPaymentNetworkTmoney](pkpaymentnetwork/tmoney.md): The TMoney card.
- [PKPaymentNetworkVisa](pkpaymentnetwork/visa.md): A Visa payment card.
- [PKPaymentNetworkVPay](pkpaymentnetwork/vpay.md): A Visa V Pay payment card.
- [PKPaymentNetworkWaon](pkpaymentnetwork/waon.md): A WAON payment card.
- [PKPaymentNetworkCarteBancaires](pkpaymentnetwork/cartebancaires.md): Deprecated. A Cartes Bancaires payment card.

### Macros

- [PKAutomaticReloadPaymentRequest_h](pkautomaticreloadpaymentrequest_h.md)
- [PKAutomaticReloadPaymentSummaryItem_h](pkautomaticreloadpaymentsummaryitem_h.md)
- [PKCONSTANTS_H](pkconstants_h.md)
- [PKPaymentTokenContext_h](pkpaymenttokencontext_h.md)
- [PKRecurringPaymentRequest_h](pkrecurringpaymentrequest_h.md)

## See Also

### Selecting the payment networks

- [availableNetworks](pkpaymentrequest/availablenetworks%28%29.md): Returns the list of available payment methods that Apple Pay supports.
- [supportedNetworks](pkpaymentrequest/supportednetworks.md): The payment methods that you support.
