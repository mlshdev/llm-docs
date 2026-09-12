> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestsession](https://developer.apple.com/documentation/storekittest/skadtestsession)

# SKAdTestSession (Swift)

**Framework:** StoreKit Test  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The class you use to test ad impressions and postbacks in Xcode.

## Declaration

```swift
class SKAdTestSession
```

<a id="overview"></a>

## Overview

Use the `SKAdTestSession` class to test your implementations of SKAdNetwork. Create one instance of this class to use in multiple test cases. The instance represents a test session, and holds a set of test postbacks. Use [SKAdTestPostback](skadtestpostback.md) to create test postbacks. Call [setPostbacks(\_:)](skadtestsession/setpostbacks%28__%29.md) to add test postbacks to the test session. The test session deletes the postbacks from the instance after you call [flushPostbacks(responses:)](skadtestsession/flushpostbacks%28responses_%29.md).

> **Note**

>  Check [SKAdTestPostbackVersion](skadtestpostbackversion.md) for the list of SKAdNetwork versions that the testing environment supports.

<a id="Validate-ad-impressions"></a>

### Validate ad impressions

In the production environment, ad networks sign the ad impressions that apps display. In the testing environment, you have the opportunity to validate the ad impression signature. Ad networks provide two types of ads: StoreKit-rendered ads and view-through ads. To validate the ad impressions, use the following methods:

- [validate(\_:publicKey:)](skadtestsession/validate%28__publickey_%29.md) to test your signature for view-through ads
- [validateImpression(parameters:publicKey:)](skadtestsession/validateimpression%28parameters_publickey_%29.md) to test your signature for StoreKit-rendered ads
- [validateWebAdImpressionPayload(\_:publicKey:)](skadtestsession/validatewebadimpressionpayload%28__publickey_%29.md) to test your signature for web ads

You need a cryptographic private key to generate signatures. Use a public/private key pair that you create using an Elliptic Curve Digital Signature Algorithm (ECDSA) with a prime256V1 curve. Provide the public key in the validation methods. Secure your private keys as you would other credentials, such as passwords. Never share your private keys, store keys in a code repository, or include keys in client-facing code.

<a id="Test-conversion-values-and-postbacks"></a>

### Test conversion values and postbacks

In the production environment, ad networks receive postbacks on their server after users install an advertised app and a timer expires. In the testing environment, you can control all aspects of the postback, including when it’s sent.

In the production environment, an advertised app may update a conversion value as the user interacts with the app. The final conversion value appears in the winning postback. In the testing environment, you have the opportunity to check the test postback before it’s sent to determine whether your app is updating conversion values as expected.

To perform tests on conversion values and postbacks, follow these steps:

1. Create up to six test postbacks using [SKAdTestPostback](skadtestpostback.md).
2. Add the test postbacks to the test session by calling [setPostbacks(\_:)](skadtestsession/setpostbacks%28__%29.md).
3. In the code representing the advertised app, register the test postbacks by calling [updatePostbackConversionValue(\_:completionHandler:)](https://developer.apple.com/documentation/storekit/skadnetwork/updatepostbackconversionvalue%28_:completionhandler:%29)or [registerAppForAdNetworkAttribution()](https://developer.apple.com/documentation/storekit/skadnetwork/registerappforadnetworkattribution%28%29).
4. To test conversion values, call [updatePostbackConversionValue(\_:completionHandler:)](https://developer.apple.com/documentation/storekit/skadnetwork/updatepostbackconversionvalue%28_:completionhandler:%29) to update the conversion value of the winning test postback.
5. Call [flushPostbacks(responses:)](skadtestsession/flushpostbacks%28responses_%29.md) when you’re done updating the conversion value and are ready to test receiving postbacks on your server. This method sends the test postbacks to your server, and removes them from the test session.

## Topics

### Validating impressions

- [validate(\_:publicKey:)](skadtestsession/validate%28__publickey_%29.md): Validates an impression for a view-through ad.
- [validateImpression(parameters:publicKey:)](skadtestsession/validateimpression%28parameters_publickey_%29.md): Validates an impression for a StoreKit-rendered ad.
- [validateWebAdImpressionPayload(\_:publicKey:)](skadtestsession/validatewebadimpressionpayload%28__publickey_%29.md): Validates an impression for a web ad.

### Adding and sending postbacks

- [setPostbacks(\_:)](skadtestsession/setpostbacks%28__%29.md): Add test postbacks to the test session.
- [postbacks](skadtestsession/postbacks.md): An array of test postbacks you set in the testing environment.
- [flushPostbacks(responses:)](skadtestsession/flushpostbacks%28responses_%29.md): Sends the test postbacks and handles the responses.
- [SKANTestPostbackResponseHandler](skantestpostbackresponsehandler.md): A type that represents the test postback response handler.

### Viewing the developer postback URL

- [developerPostbackURL](skadtestsession/developerpostbackurl.md): The URL that SKAdNetwork computes to send copies of winning postbacks to the advertised app’s developer.

### Initializing test sessions

- [init()](skadtestsession/init%28%29.md): Initializes an SKAdNetwork test session.

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

## See Also

### Ad impression and postback testing

- [Testing and validating ad impression signatures and postbacks for SKAdNetwork](testing-and-validating-ad-impression-signatures-and-postbacks-for-skadnetwork.md): Validate your ad impressions and test your postbacks by creating unit tests using the StoreKit Test framework.
- [SKAdTestPostback](skadtestpostback.md): A test postback that contains ad conversion information in the testing environment.
- [SKAdTestPostbackResponse](skadtestpostbackresponse.md): The status and error information for a postback that the system sends in the testing environment.
- [SKAdTestPostbackVersion](skadtestpostbackversion.md): A constant that indicates the postback version.

# SKAdTestSession (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The class you use to test ad impressions and postbacks in Xcode.

## Declaration

```objectivec
@interface SKAdTestSession : NSObject
```

<a id="overview"></a>

## Overview

Use the `SKAdTestSession` class to test your implementations of SKAdNetwork. Create one instance of this class to use in multiple test cases. The instance represents a test session, and holds a set of test postbacks. Use [SKAdTestPostback](skadtestpostback.md) to create test postbacks. Call [setPostbacks:error:](skadtestsession/setpostbacks%28__%29.md) to add test postbacks to the test session. The test session deletes the postbacks from the instance after you call [flushPostbacksWithResponses:](skadtestsession/flushpostbacks%28responses_%29.md).

> **Note**

>  Check [SKAdTestPostbackVersion](skadtestpostbackversion.md) for the list of SKAdNetwork versions that the testing environment supports.

<a id="Validate-ad-impressions"></a>

### Validate ad impressions

In the production environment, ad networks sign the ad impressions that apps display. In the testing environment, you have the opportunity to validate the ad impression signature. Ad networks provide two types of ads: StoreKit-rendered ads and view-through ads. To validate the ad impressions, use the following methods:

- [validateImpression:publicKey:error:](skadtestsession/validate%28__publickey_%29.md) to test your signature for view-through ads
- [validateImpressionWithParameters:publicKey:error:](skadtestsession/validateimpression%28parameters_publickey_%29.md) to test your signature for StoreKit-rendered ads
- [validateWebAdImpressionPayload:publicKey:error:](skadtestsession/validatewebadimpressionpayload%28__publickey_%29.md) to test your signature for web ads

You need a cryptographic private key to generate signatures. Use a public/private key pair that you create using an Elliptic Curve Digital Signature Algorithm (ECDSA) with a prime256V1 curve. Provide the public key in the validation methods. Secure your private keys as you would other credentials, such as passwords. Never share your private keys, store keys in a code repository, or include keys in client-facing code.

<a id="Test-conversion-values-and-postbacks"></a>

### Test conversion values and postbacks

In the production environment, ad networks receive postbacks on their server after users install an advertised app and a timer expires. In the testing environment, you can control all aspects of the postback, including when it’s sent.

In the production environment, an advertised app may update a conversion value as the user interacts with the app. The final conversion value appears in the winning postback. In the testing environment, you have the opportunity to check the test postback before it’s sent to determine whether your app is updating conversion values as expected.

To perform tests on conversion values and postbacks, follow these steps:

1. Create up to six test postbacks using [SKAdTestPostback](skadtestpostback.md).
2. Add the test postbacks to the test session by calling [setPostbacks:error:](skadtestsession/setpostbacks%28__%29.md).
3. In the code representing the advertised app, register the test postbacks by calling [updatePostbackConversionValue:completionHandler:](https://developer.apple.com/documentation/storekit/skadnetwork/updatepostbackconversionvalue%28_:completionhandler:%29)or [registerAppForAdNetworkAttribution](https://developer.apple.com/documentation/storekit/skadnetwork/registerappforadnetworkattribution%28%29).
4. To test conversion values, call [updatePostbackConversionValue:completionHandler:](https://developer.apple.com/documentation/storekit/skadnetwork/updatepostbackconversionvalue%28_:completionhandler:%29) to update the conversion value of the winning test postback.
5. Call [flushPostbacksWithResponses:](skadtestsession/flushpostbacks%28responses_%29.md) when you’re done updating the conversion value and are ready to test receiving postbacks on your server. This method sends the test postbacks to your server, and removes them from the test session.

## Topics

### Validating impressions

- [validateImpression:publicKey:error:](skadtestsession/validate%28__publickey_%29.md): Validates an impression for a view-through ad.
- [validateImpressionWithParameters:publicKey:error:](skadtestsession/validateimpression%28parameters_publickey_%29.md): Validates an impression for a StoreKit-rendered ad.
- [validateWebAdImpressionPayload:publicKey:error:](skadtestsession/validatewebadimpressionpayload%28__publickey_%29.md): Validates an impression for a web ad.

### Adding and sending postbacks

- [setPostbacks:error:](skadtestsession/setpostbacks%28__%29.md): Add test postbacks to the test session.
- [postbacks](skadtestsession/postbacks.md): An array of test postbacks you set in the testing environment.
- [flushPostbacksWithResponses:](skadtestsession/flushpostbacks%28responses_%29.md): Sends the test postbacks and handles the responses.
- [SKANTestPostbackResponseHandler](skantestpostbackresponsehandler.md): A type that represents the test postback response handler.

### Viewing the developer postback URL

- [developerPostbackURL](skadtestsession/developerpostbackurl.md): The URL that SKAdNetwork computes to send copies of winning postbacks to the advertised app’s developer.

### Initializing test sessions

- [init](skadtestsession/init%28%29.md): Initializes an SKAdNetwork test session.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Ad impression and postback testing

- [SKAdTestPostback](skadtestpostback.md): A test postback that contains ad conversion information in the testing environment.
- [SKAdTestPostbackResponse](skadtestpostbackresponse.md): The status and error information for a postback that the system sends in the testing environment.
- [SKAdTestPostbackVersion](skadtestpostbackversion.md): A constant that indicates the postback version.
