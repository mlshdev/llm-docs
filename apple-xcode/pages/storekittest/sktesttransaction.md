> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktesttransaction](https://developer.apple.com/documentation/storekittest/sktesttransaction)

# SKTestTransaction (Swift)

**Framework:** StoreKit Test  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A transaction that occurs in the testing environment.

## Declaration

```swift
class SKTestTransaction
```

<a id="overview"></a>

## Overview

The test transaction represents the test environment’s knowledge of the transaction, including its identifier and the transaction’s state. It represents all the transaction-related configurations you control manually in Xcode for interrupted purchases, Ask to Buy scenarios, and changes to a subscription’s auto-renew state.

The test environment creates an `SKTestTransaction` instance each time your test code calls any method of [SKTestSession](sktestsession.md) that affects in-app purchases.

## Topics

### Identifying Transactions and Products

- [identifier](sktesttransaction/identifier.md): The identifier of the transaction in the testing environment.
- [originalTransactionIdentifier](sktesttransaction/originaltransactionidentifier.md): The identifier of the original transaction.
- [productIdentifier](sktesttransaction/productidentifier.md): An identifier that uniquely represents a product, which you provide in the StoreKit configuration file.

### Getting Payment Transaction States

- [state](sktesttransaction/state.md): The state of the transaction in the test environment.

### Getting Dates

- [purchaseDate](sktesttransaction/purchasedate.md): The date of purchase for the transaction.
- [cancelDate](sktesttransaction/canceldate.md): The date when the system refunded the transaction.
- [expirationDate](sktesttransaction/expirationdate.md): The date a subscription expires.

### Getting Test Environment States

- [autoRenewingEnabled](sktesttransaction/autorenewingenabled.md): A Boolean value that indicates whether automatic renewal is enabled for the subscription.
- [hasPurchaseIssue](sktesttransaction/haspurchaseissue.md): A Boolean value that indicates whether you resolve this transaction using the test framework functions.
- [isPendingPriceIncreaseConsent](sktesttransaction/ispendingpriceincreaseconsent.md): A Boolean value that indicates whether the auto-renewable subscription has a price increase that’s awaiting user consent in the test environment.
- [pendingAskToBuyConfirmation](sktesttransaction/pendingasktobuyconfirmation.md): A Boolean value that indicates whether the transaction is awaiting an Ask to Buy confirmation.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### StoreKit transaction testing

- [Setting up StoreKit Testing in Xcode](../xcode/setting-up-storekit-testing-in-xcode.md): Prepare your test environment to test in-app purchases with data you configure locally.
- [SKTestSession](sktestsession.md): The controls and environment configuration you use to test StoreKit transactions in Xcode.

# SKTestTransaction (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A transaction that occurs in the testing environment.

## Declaration

```objectivec
@interface SKTestTransaction : NSObject
```

<a id="overview"></a>

## Overview

The test transaction represents the test environment’s knowledge of the transaction, including its identifier and the transaction’s state. It represents all the transaction-related configurations you control manually in Xcode for interrupted purchases, Ask to Buy scenarios, and changes to a subscription’s auto-renew state.

The test environment creates an `SKTestTransaction` instance each time your test code calls any method of [SKTestSession](sktestsession.md) that affects in-app purchases.

## Topics

### Identifying Transactions and Products

- [identifier](sktesttransaction/identifier.md): The identifier of the transaction in the testing environment.
- [originalTransactionIdentifier](sktesttransaction/originaltransactionidentifier.md): The identifier of the original transaction.
- [productIdentifier](sktesttransaction/productidentifier.md): An identifier that uniquely represents a product, which you provide in the StoreKit configuration file.

### Getting Payment Transaction States

- [state](sktesttransaction/state.md): The state of the transaction in the test environment.

### Getting Dates

- [purchaseDate](sktesttransaction/purchasedate.md): The date of purchase for the transaction.
- [cancelDate](sktesttransaction/canceldate.md): The date when the system refunded the transaction.
- [expirationDate](sktesttransaction/expirationdate.md): The date a subscription expires.

### Getting Test Environment States

- [autoRenewingEnabled](sktesttransaction/autorenewingenabled.md): A Boolean value that indicates whether automatic renewal is enabled for the subscription.
- [hasPurchaseIssue](sktesttransaction/haspurchaseissue.md): A Boolean value that indicates whether you resolve this transaction using the test framework functions.
- [pendingPriceIncreaseConsent](sktesttransaction/ispendingpriceincreaseconsent.md): A Boolean value that indicates whether the auto-renewable subscription has a price increase that’s awaiting user consent in the test environment.
- [pendingAskToBuyConfirmation](sktesttransaction/pendingasktobuyconfirmation.md): A Boolean value that indicates whether the transaction is awaiting an Ask to Buy confirmation.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### StoreKit transaction testing

- [SKTestSession](sktestsession.md): The controls and environment configuration you use to test StoreKit transactions in Xcode.
