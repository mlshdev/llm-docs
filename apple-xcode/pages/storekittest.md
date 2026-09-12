> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest](https://developer.apple.com/documentation/storekittest)

# StoreKit Test (Swift)

**Framework:** StoreKit Test  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.4+

Create and automate tests in Xcode for your app’s subscription and in-app purchase transactions, and SKAdNetwork implementations.

<a id="overview"></a>

## Overview

The StoreKitTest framework makes StoreKit testing in Xcode available for automation. Use this framework to write unit tests and continuous integration tests. Use [SKTestSession](storekittest/sktestsession.md) and [SKAdTestSession](storekittest/skadtestsession.md) to control the test environment.

For testing in-app purchase transactions, use `SKTestSession`. Each instance of `SKTestSession` gives you access to the same settings you manually change for StoreKit testing in Xcode. Use this class to test a variety of in-app purchase scenarios, such as subscription renewals and Ask to Buy transactions, and maintain control over the transactions in the testing environment.

For testing ad impressions and postbacks, use `SKAdTestSession`. Each instance of `SKAdTestSession` holds a set of test postbacks that you create and can use in multiple unit tests. Ad networks that use [SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork) APIs can use this class to validate the ad impressions that they sign, and test receiving postbacks on their server. Advertised apps can test their conversion value updates.

Testing StoreKit in iOS, watchOS, or tvOS apps requires Xcode 12 or later running on macOS 10.15 or later. Testing StoreKit in a macOS app requires Xcode 12 or later running on macOS 11 or later.

> **Related session from WWDC20**

>  Session 10659 : [Introducing StoreKit testing in Xcode](https://developer.apple.com/wwdc20/10659)

## Topics

### StoreKit transaction testing

- [Setting up StoreKit Testing in Xcode](xcode/setting-up-storekit-testing-in-xcode.md): Prepare your test environment to test in-app purchases with data you configure locally.
- [SKTestSession](storekittest/sktestsession.md): The controls and environment configuration you use to test StoreKit transactions in Xcode.
- [SKTestTransaction](storekittest/sktesttransaction.md): A transaction that occurs in the testing environment.

### StoreKit transaction testing errors

- [SKTestErrorDomain](storekittest/sktesterrordomain.md): A constant that represents the domain for error codes in the testing environment.
- [SKTestError](storekittest/sktesterror.md): Information about an error that the testing environment returns.

### Ad impression and postback testing

- [Testing and validating ad impression signatures and postbacks for SKAdNetwork](storekittest/testing-and-validating-ad-impression-signatures-and-postbacks-for-skadnetwork.md): Validate your ad impressions and test your postbacks by creating unit tests using the StoreKit Test framework.
- [SKAdTestSession](storekittest/skadtestsession.md): The class you use to test ad impressions and postbacks in Xcode.
- [SKAdTestPostback](storekittest/skadtestpostback.md): A test postback that contains ad conversion information in the testing environment.
- [SKAdTestPostbackResponse](storekittest/skadtestpostbackresponse.md): The status and error information for a postback that the system sends in the testing environment.
- [SKAdTestPostbackVersion](storekittest/skadtestpostbackversion.md): A constant that indicates the postback version.

### Ad impression and postback errors

- [SKAdTestErrorDomain](storekittest/skadtesterrordomain.md): A string that identifies the error domain for SKAdNetwork testing in the testing environment.
- [SKAdTestError](storekittest/skadtesterror.md): An error the testing environment returns for SKAdNetwork testing errors.

### Structures

- [StoreKitAppStoreSyncAPI](storekittest/storekitappstoresyncapi.md)
- [StoreKitAppTransactionAPI](storekittest/storekitapptransactionapi.md)
- [StoreKitLoadProductsAPI](storekittest/storekitloadproductsapi.md)
- [StoreKitManageSubscriptionsAPI](storekittest/storekitmanagesubscriptionsapi.md)
- [StoreKitOfferCodeRedeemAPI](storekittest/storekitoffercoderedeemapi.md)
- [StoreKitPurchaseAPI](storekittest/storekitpurchaseapi.md)
- [StoreKitRefundRequestAPI](storekittest/storekitrefundrequestapi.md)
- [StoreKitSubscriptionStatusAPI](storekittest/storekitsubscriptionstatusapi.md)
- [StoreKitVerificationAPI](storekittest/storekitverificationapi.md)

### Enumerations

- [SKTestFailures](storekittest/sktestfailures.md)

### Protocols

- [FailableStoreKitAPI](storekittest/failablestorekitapi.md)
- [SKTestFailure](storekittest/sktestfailure.md)

# StoreKit Test (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.4+

Create and automate tests in Xcode for your app’s subscription and in-app purchase transactions, and SKAdNetwork implementations.

<a id="overview"></a>

## Overview

The StoreKitTest framework makes StoreKit testing in Xcode available for automation. Use this framework to write unit tests and continuous integration tests. Use [SKTestSession](storekittest/sktestsession.md) and [SKAdTestSession](storekittest/skadtestsession.md) to control the test environment.

For testing in-app purchase transactions, use `SKTestSession`. Each instance of `SKTestSession` gives you access to the same settings you manually change for StoreKit testing in Xcode. Use this class to test a variety of in-app purchase scenarios, such as subscription renewals and Ask to Buy transactions, and maintain control over the transactions in the testing environment.

For testing ad impressions and postbacks, use `SKAdTestSession`. Each instance of `SKAdTestSession` holds a set of test postbacks that you create and can use in multiple unit tests. Ad networks that use [SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork) APIs can use this class to validate the ad impressions that they sign, and test receiving postbacks on their server. Advertised apps can test their conversion value updates.

Testing StoreKit in iOS, watchOS, or tvOS apps requires Xcode 12 or later running on macOS 10.15 or later. Testing StoreKit in a macOS app requires Xcode 12 or later running on macOS 11 or later.

> **Related session from WWDC20**

>  Session 10659 : [Introducing StoreKit testing in Xcode](https://developer.apple.com/wwdc20/10659)

## Topics

### StoreKit transaction testing

- [Setting up StoreKit Testing in Xcode](xcode/setting-up-storekit-testing-in-xcode.md): Prepare your test environment to test in-app purchases with data you configure locally.
- [SKTestSession](storekittest/sktestsession.md): The controls and environment configuration you use to test StoreKit transactions in Xcode.
- [SKTestTransaction](storekittest/sktesttransaction.md): A transaction that occurs in the testing environment.

### StoreKit transaction testing errors

- [SKTestErrorDomain](storekittest/sktesterrordomain.md): A constant that represents the domain for error codes in the testing environment.
- [SKTestErrorCode](storekittest/sktesterror/code.md): Error codes in the testing environment.

### Ad impression and postback testing

- [SKAdTestSession](storekittest/skadtestsession.md): The class you use to test ad impressions and postbacks in Xcode.
- [SKAdTestPostback](storekittest/skadtestpostback.md): A test postback that contains ad conversion information in the testing environment.
- [SKAdTestPostbackResponse](storekittest/skadtestpostbackresponse.md): The status and error information for a postback that the system sends in the testing environment.
- [SKAdTestPostbackVersion](storekittest/skadtestpostbackversion.md): A constant that indicates the postback version.

### Ad impression and postback errors

- [SKAdTestErrorDomain](storekittest/skadtesterrordomain.md): A string that identifies the error domain for SKAdNetwork testing in the testing environment.
- [SKAdTestErrorCode](storekittest/skadtesterror/code.md): Enumerated error codes related to ad network testing in the testing environment.
