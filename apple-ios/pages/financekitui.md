> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekitui](https://developer.apple.com/documentation/financekitui)

# FinanceKitUI

**Framework:** FinanceKitUI  
**Kind:** Framework  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Add orders to Apple Wallet.

<a id="Overview"></a>

## Overview

The `FinanceKitUI` framework contains a standardized UI that interacts securely with [FinanceKit](financekit.md) and the [FinanceStore](financekit/financestore.md) to support the addition of orders to a person’s Apple Wallet.

`FinanceKitUI` provides an `AddOrderToWalletButton` for SwiftUI. Add this button to your UI when you want to allow someone to add an order to their Apple Wallet. The button’s style options are consistent with the standard Apple Pay and Wallet design language, giving users a sense of familiarity and trust when they interact with it.

## Topics

### Adding an order to Apple Wallet

- [AddOrderToWalletButton](financekitui/addordertowalletbutton.md): A button you use to add an order to a person’s Apple Wallet.
- [AddOrderToWalletButtonStyle](financekitui/addordertowalletbuttonstyle.md): Values that determine the style of an Add Order to Apple Wallet button.

### Protocols

- [FinancialConnectionUIExtension](financekitui/financialconnectionuiextension.md)
- [FinancialConnectionUIExtensionProviding](financekitui/financialconnectionuiextensionproviding.md)
- [FinancialConnectionUIExtensionScene](financekitui/financialconnectionuiextensionscene.md)

### Structures

- [FinancialConnectionExtensionAuthorizationRequest](financekitui/financialconnectionextensionauthorizationrequest.md)
- [FinancialConnectionExtensionAuthorizationResult](financekitui/financialconnectionextensionauthorizationresult.md)
- [FinancialConnectionUIExtensionAuthorizationScene](financekitui/financialconnectionuiextensionauthorizationscene.md): Implement this scene to authorize your app’s Financial Connection
- [TransactionPicker](financekitui/transactionpicker.md): A view that displays a transaction picker for choosing transactions from FinanceKit.

### Type Aliases

- [FinancialConnectionExtensionAuthorizationParams](financekitui/financialconnectionextensionauthorizationparams.md)
