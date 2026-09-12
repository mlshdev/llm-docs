> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession](https://developer.apple.com/documentation/storekittest/sktestsession)

# SKTestSession (Swift)

**Framework:** StoreKit Test  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The controls and environment configuration you use to test StoreKit transactions in Xcode.

## Declaration

```swift
class SKTestSession
```

<a id="overview"></a>

## Overview

This class controls the settings that the server uses when it processes transactions. Run tests that reconfigure the environment serially, not concurrently, to avoid overwriting each other’s environment settings.

> **Note**

>  There’s a single instance of the test environment. All `SKTestSession` instances control the same test environment.

The test environment creates an [SKTestTransaction](sktesttransaction.md) instance each time your test code calls any method of `SKTestSession` that affects in-app purchases, including:

- [buyProduct(productIdentifier:)](sktestsession/buyproduct%28productidentifier_%29.md)
- [refundTransaction(identifier:)](sktestsession/refundtransaction%28identifier_%29.md)
- [enableAutoRenewForTransaction(identifier:)](sktestsession/enableautorenewfortransaction%28identifier_%29.md)
- [disableAutoRenewForTransaction(identifier:)](sktestsession/disableautorenewfortransaction%28identifier_%29.md)
- [forceRenewalOfSubscription(productIdentifier:)](sktestsession/forcerenewalofsubscription%28productidentifier_%29.md)
- [expireSubscription(productIdentifier:)](sktestsession/expiresubscription%28productidentifier_%29.md)
- [approveAskToBuyTransaction(identifier:)](sktestsession/approveasktobuytransaction%28identifier_%29.md)
- [declineAskToBuyTransaction(identifier:)](sktestsession/declineasktobuytransaction%28identifier_%29.md)
- [resolveIssueForTransaction(identifier:)](sktestsession/resolveissuefortransaction%28identifier_%29.md)

You can manage the transactions in the test environment. To get a list of all transactions in the test environment, call [allTransactions()](sktestsession/alltransactions%28%29.md). To delete a single transaction, call [deleteTransaction(identifier:)](sktestsession/deletetransaction%28identifier_%29.md). To delete all the transactions, call [clearTransactions()](sktestsession/cleartransactions%28%29.md).

Before automating a test session with `SKTestSession`, you must create a StoreKit configuration file. For more information, see [Setting up StoreKit Testing in Xcode](../xcode/setting-up-storekit-testing-in-xcode.md) and [init(configurationFileNamed:)](sktestsession/init%28configurationfilenamed_%29.md). Set [disableDialogs](sktestsession/disabledialogs.md) to `true` to run tests without showing test environment UI.

## Topics

### Initializing test sessions

- [init(configurationFileNamed:)](sktestsession/init%28configurationfilenamed_%29.md): Initializes the test session with the provided configuration file that you include in your application’s bundle.
- [init(contentsOf:)](sktestsession/init%28contentsof_%29.md): Initializes the test session with a configuration file you provide through a URL.
- [resetToDefaultState()](sktestsession/resettodefaultstate%28%29.md): Removes all property overrides and resets all test session settings to their default state.

### Configuring the test environment

- [storefront](sktestsession/storefront.md): The three-letter code that represents the region associated with the App Store storefront.
- [locale](sktestsession/locale.md): The value that determines the localization metadata the test environment uses.
- [disableDialogs](sktestsession/disabledialogs.md): A Boolean value that determines whether the testing environment disables dialogs during automated testing.

### Managing transactions in the test environment

- [allTransactions()](sktestsession/alltransactions%28%29.md): Gets a list of all transactions in the test environment.
- [deleteTransaction(identifier:)](sktestsession/deletetransaction%28identifier_%29.md): Deletes a specific transaction from the test environment.
- [clearTransactions()](sktestsession/cleartransactions%28%29.md): Removes all transactions from the test environment.

### Forcing failed transactions

- [failTransactionsEnabled](sktestsession/failtransactionsenabled.md): Deprecated. A Boolean value that determines whether transactions fail in the testing environment.
- [failureError](sktestsession/failureerror.md): Deprecated. The error code that transactions return when you enable failing transactions.

### Testing interrupted purchases

- [interruptedPurchasesEnabled](sktestsession/interruptedpurchasesenabled.md): A Boolean value that determines whether the test environment simulates an interrupted purchase.
- [resolveIssueForTransaction(identifier:)](sktestsession/resolveissuefortransaction%28identifier_%29.md): Simulates resolving an issue when you test interrupted purchases or billing retry scenarios.

### Testing Ask To Buy transactions

- [askToBuyEnabled](sktestsession/asktobuyenabled.md): A Boolean value that determines whether the testing environment simulates an Ask to Buy scenario.
- [approveAskToBuyTransaction(identifier:)](sktestsession/approveasktobuytransaction%28identifier_%29.md): Resolves an Ask to Buy test scenario by approving the transaction.
- [declineAskToBuyTransaction(identifier:)](sktestsession/declineasktobuytransaction%28identifier_%29.md): Resolves an Ask to Buy test scenario by declining the transaction.

### Testing subscription renewals

- [timeRate](sktestsession/timerate-swift.property.md): The rate at which time passes for subscriptions in the test environment as compared to real time.
- [SKTestSession.TimeRate](sktestsession/timerate-swift.enum.md): The values for rates of time passing in the test environment.
- [enableAutoRenewForTransaction(identifier:)](sktestsession/enableautorenewfortransaction%28identifier_%29.md): Enables auto-renewing for an auto-renewable subscription in the test environment.
- [disableAutoRenewForTransaction(identifier:)](sktestsession/disableautorenewfortransaction%28identifier_%29.md): Disables auto-renewing for an auto-renewable subscription in the test environment.
- [forceRenewalOfSubscription(productIdentifier:)](sktestsession/forcerenewalofsubscription%28productidentifier_%29.md): Ends the previous subscription period and begins the next period in the test environment.
- [expireSubscription(productIdentifier:)](sktestsession/expiresubscription%28productidentifier_%29.md): Causes the identified auto-renewable subscription to expire immediately in the test environment.

### Testing billing retry and grace period

- [billingGracePeriodIsEnabled](sktestsession/billinggraceperiodisenabled.md): A Boolean value that indicates whether the test environment simulates a billing grace period for auto-renewable subscriptions.
- [shouldEnterBillingRetryOnRenewal](sktestsession/shouldenterbillingretryonrenewal.md): A Boolean value that indicates whether the testing environment enters a billing retry state when an auto-renewable subscription renews.
- [resolveIssueForTransaction(identifier:)](sktestsession/resolveissuefortransaction%28identifier_%29.md): Simulates resolving an issue when you test interrupted purchases or billing retry scenarios.

### Testing price increase consent

- [requestPriceIncreaseConsentForTransaction(identifier:)](sktestsession/requestpriceincreaseconsentfortransaction%28identifier_%29.md): Simulates a price increase that requires customer consent for an auto-renewable subscription.
- [consentToPriceIncreaseForTransaction(identifier:)](sktestsession/consenttopriceincreasefortransaction%28identifier_%29.md): Simulates a user consenting to a price increase for an auto-renewable subscription.
- [declinePriceIncreaseForTransaction(identifier:)](sktestsession/declinepriceincreasefortransaction%28identifier_%29.md): Simulates a user canceling an auto-renewable subscription by disabling auto-renew.

### Testing externally performed transactions

- [buyProduct(productIdentifier:)](sktestsession/buyproduct%28productidentifier_%29.md): Deprecated. Simulates buying an in-app purchase or subscription outside the app.
- [refundTransaction(identifier:)](sktestsession/refundtransaction%28identifier_%29.md): Simulates a refund for an in-app purchase that completes outside of the app.

### Instance Methods

- [buyProduct(identifier:options:)](sktestsession/buyproduct%28identifier_options_%29.md)
- [setSimulatedError(\_:forAPI:)](sktestsession/setsimulatederror%28__forapi_%29.md)
- [simulatedError(forAPI:)](sktestsession/simulatederror%28forapi_%29.md)

### Initializers

- [init(contentsOfURL:)](sktestsession/init%28contentsofurl_%29.md)

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
- [SKTestTransaction](sktesttransaction.md): A transaction that occurs in the testing environment.

# SKTestSession (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The controls and environment configuration you use to test StoreKit transactions in Xcode.

## Declaration

```objectivec
@interface SKTestSession : NSObject
```

<a id="overview"></a>

## Overview

This class controls the settings that the server uses when it processes transactions. Run tests that reconfigure the environment serially, not concurrently, to avoid overwriting each other’s environment settings.

> **Note**

>  There’s a single instance of the test environment. All `SKTestSession` instances control the same test environment.

The test environment creates an [SKTestTransaction](sktesttransaction.md) instance each time your test code calls any method of `SKTestSession` that affects in-app purchases, including:

- [buyProductWithIdentifier:error:](sktestsession/buyproduct%28productidentifier_%29.md)
- [refundTransactionWithIdentifier:error:](sktestsession/refundtransaction%28identifier_%29.md)
- [enableAutoRenewForTransactionWithIdentifier:error:](sktestsession/enableautorenewfortransaction%28identifier_%29.md)
- [disableAutoRenewForTransactionWithIdentifier:error:](sktestsession/disableautorenewfortransaction%28identifier_%29.md)
- [forceRenewalOfSubscriptionWithProductIdentifier:error:](sktestsession/forcerenewalofsubscription%28productidentifier_%29.md)
- [expireSubscriptionWithProductIdentifier:error:](sktestsession/expiresubscription%28productidentifier_%29.md)
- [approveAskToBuyTransactionWithIdentifier:error:](sktestsession/approveasktobuytransaction%28identifier_%29.md)
- [declineAskToBuyTransactionWithIdentifier:error:](sktestsession/declineasktobuytransaction%28identifier_%29.md)
- [resolveIssueForTransactionWithIdentifier:error:](sktestsession/resolveissuefortransaction%28identifier_%29.md)

You can manage the transactions in the test environment. To get a list of all transactions in the test environment, call [allTransactions](sktestsession/alltransactions%28%29.md). To delete a single transaction, call [deleteTransactionWithIdentifier:error:](sktestsession/deletetransaction%28identifier_%29.md). To delete all the transactions, call [clearTransactions](sktestsession/cleartransactions%28%29.md).

Before automating a test session with `SKTestSession`, you must create a StoreKit configuration file. For more information, see [Setting up StoreKit Testing in Xcode](../xcode/setting-up-storekit-testing-in-xcode.md) and [initWithConfigurationFileNamed:error:](sktestsession/init%28configurationfilenamed_%29.md). Set [disableDialogs](sktestsession/disabledialogs.md) to `true` to run tests without showing test environment UI.

## Topics

### Initializing test sessions

- [initWithConfigurationFileNamed:error:](sktestsession/init%28configurationfilenamed_%29.md): Initializes the test session with the provided configuration file that you include in your application’s bundle.
- [initWithContentsOfURL:error:](sktestsession/init%28contentsof_%29.md): Initializes the test session with a configuration file you provide through a URL.
- [resetToDefaultState](sktestsession/resettodefaultstate%28%29.md): Removes all property overrides and resets all test session settings to their default state.

### Configuring the test environment

- [storefront](sktestsession/storefront.md): The three-letter code that represents the region associated with the App Store storefront.
- [locale](sktestsession/locale.md): The value that determines the localization metadata the test environment uses.
- [disableDialogs](sktestsession/disabledialogs.md): A Boolean value that determines whether the testing environment disables dialogs during automated testing.

### Managing transactions in the test environment

- [allTransactions](sktestsession/alltransactions%28%29.md): Gets a list of all transactions in the test environment.
- [deleteTransactionWithIdentifier:error:](sktestsession/deletetransaction%28identifier_%29.md): Deletes a specific transaction from the test environment.
- [clearTransactions](sktestsession/cleartransactions%28%29.md): Removes all transactions from the test environment.

### Forcing failed transactions

- [failTransactionsEnabled](sktestsession/failtransactionsenabled.md): Deprecated. A Boolean value that determines whether transactions fail in the testing environment.
- [failureError](sktestsession/failureerror.md): Deprecated. The error code that transactions return when you enable failing transactions.

### Testing interrupted purchases

- [interruptedPurchasesEnabled](sktestsession/interruptedpurchasesenabled.md): A Boolean value that determines whether the test environment simulates an interrupted purchase.
- [resolveIssueForTransactionWithIdentifier:error:](sktestsession/resolveissuefortransaction%28identifier_%29.md): Simulates resolving an issue when you test interrupted purchases or billing retry scenarios.

### Testing Ask To Buy transactions

- [askToBuyEnabled](sktestsession/asktobuyenabled.md): A Boolean value that determines whether the testing environment simulates an Ask to Buy scenario.
- [approveAskToBuyTransactionWithIdentifier:error:](sktestsession/approveasktobuytransaction%28identifier_%29.md): Resolves an Ask to Buy test scenario by approving the transaction.
- [declineAskToBuyTransactionWithIdentifier:error:](sktestsession/declineasktobuytransaction%28identifier_%29.md): Resolves an Ask to Buy test scenario by declining the transaction.

### Testing subscription renewals

- [timeRate](sktestsession/timerate-swift.property.md): The rate at which time passes for subscriptions in the test environment as compared to real time.
- [SKTestTimeRate](sktestsession/timerate-swift.enum.md): The values for rates of time passing in the test environment.
- [enableAutoRenewForTransactionWithIdentifier:error:](sktestsession/enableautorenewfortransaction%28identifier_%29.md): Enables auto-renewing for an auto-renewable subscription in the test environment.
- [disableAutoRenewForTransactionWithIdentifier:error:](sktestsession/disableautorenewfortransaction%28identifier_%29.md): Disables auto-renewing for an auto-renewable subscription in the test environment.
- [forceRenewalOfSubscriptionWithProductIdentifier:error:](sktestsession/forcerenewalofsubscription%28productidentifier_%29.md): Ends the previous subscription period and begins the next period in the test environment.
- [expireSubscriptionWithProductIdentifier:error:](sktestsession/expiresubscription%28productidentifier_%29.md): Causes the identified auto-renewable subscription to expire immediately in the test environment.

### Testing billing retry and grace period

- [billingGracePeriodEnabled](sktestsession/billinggraceperiodisenabled.md): A Boolean value that indicates whether the test environment simulates a billing grace period for auto-renewable subscriptions.
- [billingRetryOnRenewalEnabled](sktestsession/shouldenterbillingretryonrenewal.md): A Boolean value that indicates whether the testing environment enters a billing retry state when an auto-renewable subscription renews.
- [resolveIssueForTransactionWithIdentifier:error:](sktestsession/resolveissuefortransaction%28identifier_%29.md): Simulates resolving an issue when you test interrupted purchases or billing retry scenarios.

### Testing price increase consent

- [requestPriceIncreaseConsentForTransactionWithIdentifier:error:](sktestsession/requestpriceincreaseconsentfortransaction%28identifier_%29.md): Simulates a price increase that requires customer consent for an auto-renewable subscription.
- [consentToPriceIncreaseForTransactionWithIdentifier:error:](sktestsession/consenttopriceincreasefortransaction%28identifier_%29.md): Simulates a user consenting to a price increase for an auto-renewable subscription.
- [declinePriceIncreaseForTransactionWithIdentifier:error:](sktestsession/declinepriceincreasefortransaction%28identifier_%29.md): Simulates a user canceling an auto-renewable subscription by disabling auto-renew.

### Testing externally performed transactions

- [buyProductWithIdentifier:error:](sktestsession/buyproduct%28productidentifier_%29.md): Deprecated. Simulates buying an in-app purchase or subscription outside the app.
- [refundTransactionWithIdentifier:error:](sktestsession/refundtransaction%28identifier_%29.md): Simulates a refund for an in-app purchase that completes outside of the app.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### StoreKit transaction testing

- [SKTestTransaction](sktesttransaction.md): A transaction that occurs in the testing environment.
