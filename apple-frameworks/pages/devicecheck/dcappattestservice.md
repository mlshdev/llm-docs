> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicecheck/dcappattestservice](https://developer.apple.com/documentation/devicecheck/dcappattestservice)

# DCAppAttestService (Swift)

**Framework:** DeviceCheck  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 9.0+

A service that you use to validate the instance of your app running on a device.

## Declaration

```swift
class DCAppAttestService
```

## Mentioned In

- [Establishing your app’s integrity](establishing-your-app-s-integrity.md)
- [Validating apps that connect to your server](validating-apps-that-connect-to-your-server.md)

<a id="overview"></a>

## Overview

Use the [shared](dcappattestservice/shared.md) instance of the [DCAppAttestService](dcappattestservice.md) class to assert the legitimacy of a particular instance of your app to your server. After ensuring service availability by reading the [isSupported](dcappattestservice/issupported.md) property, you use the service to:

- Create a cryptographic key in the Secure Enclave by calling the [generateKey(completionHandler:)](dcappattestservice/generatekey%28completionhandler_%29.md) method.
- Ask Apple to certify the key by calling the [attestKey(\_:clientDataHash:completionHandler:)](dcappattestservice/attestkey%28__clientdatahash_completionhandler_%29.md) method. - Prepare an assertion of your app’s integrity to accompany any or all server requests using the [generateAssertion(\_:clientDataHash:completionHandler:)](dcappattestservice/generateassertion%28__clientdatahash_completionhandler_%29.md) method.

For more information about how to support App Attest in your app, see [Establishing your app’s integrity](establishing-your-app-s-integrity.md). For information about the complementary procedures you implement on your server, see [Validating apps that connect to your server](validating-apps-that-connect-to-your-server.md).

> **Note**

> To use the App Attest service, your app must have an app ID that you register on the [Apple Developer](https://developer.apple.com/account/) website.

## Topics

### Accessing the service

- [shared](dcappattestservice/shared.md): The shared App Attest service that you use to validate your app.
- [isSupported](dcappattestservice/issupported.md): A Boolean value that indicates whether a particular device provides the App Attest service.

### Preparing a key

- [generateKey(completionHandler:)](dcappattestservice/generatekey%28completionhandler_%29.md): Creates a new cryptographic key for use with the App Attest service.
- [attestKey(\_:clientDataHash:completionHandler:)](dcappattestservice/attestkey%28__clientdatahash_completionhandler_%29.md): Asks Apple to attest to the validity of a generated cryptographic key.

### Validating the app instance

- [generateAssertion(\_:clientDataHash:completionHandler:)](dcappattestservice/generateassertion%28__clientdatahash_completionhandler_%29.md): Creates a block of data that demonstrates the legitimacy of an instance of your app running on a device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### App Attest

- [Establishing your app’s integrity](establishing-your-app-s-integrity.md): Ensure that requests your server receives come from legitimate instances of your app.
- [Validating apps that connect to your server](validating-apps-that-connect-to-your-server.md): Verify that connections to your server come from legitimate instances of your app.
- [Assessing fraud risk](assessing-fraud-risk.md): Request and analyze risk data using server-to-server calls.
- [Preparing to use the app attest service](preparing-to-use-the-app-attest-service.md): Test your implementation in a development environment and onboard users gradually.
- [Attestation Object Validation Guide](attestation-object-validation-guide.md): Use this guide to validate your implementation of verifying the attestation object verification process.
- [App Attest Environment](../bundleresources/entitlements/com.apple.developer.devicecheck.appattest-environment.md): The environment for an app that uses the App Attest service to validate itself.

# DCAppAttestService (Objective-C)

**Framework:** DeviceCheck  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 9.0+

A service that you use to validate the instance of your app running on a device.

## Declaration

```objectivec
@interface DCAppAttestService : NSObject
```

## Mentioned In

- [Establishing your app’s integrity](establishing-your-app-s-integrity.md)
- [Validating apps that connect to your server](validating-apps-that-connect-to-your-server.md)

<a id="overview"></a>

## Overview

Use the [sharedService](dcappattestservice/shared.md) instance of the [DCAppAttestService](dcappattestservice.md) class to assert the legitimacy of a particular instance of your app to your server. After ensuring service availability by reading the [supported](dcappattestservice/issupported.md) property, you use the service to:

- Create a cryptographic key in the Secure Enclave by calling the [generateKeyWithCompletionHandler:](dcappattestservice/generatekey%28completionhandler_%29.md) method.
- Ask Apple to certify the key by calling the [attestKey:clientDataHash:completionHandler:](dcappattestservice/attestkey%28__clientdatahash_completionhandler_%29.md) method. - Prepare an assertion of your app’s integrity to accompany any or all server requests using the [generateAssertion:clientDataHash:completionHandler:](dcappattestservice/generateassertion%28__clientdatahash_completionhandler_%29.md) method.

For more information about how to support App Attest in your app, see [Establishing your app’s integrity](establishing-your-app-s-integrity.md). For information about the complementary procedures you implement on your server, see [Validating apps that connect to your server](validating-apps-that-connect-to-your-server.md).

> **Note**

> To use the App Attest service, your app must have an app ID that you register on the [Apple Developer](https://developer.apple.com/account/) website.

## Topics

### Accessing the service

- [sharedService](dcappattestservice/shared.md): The shared App Attest service that you use to validate your app.
- [supported](dcappattestservice/issupported.md): A Boolean value that indicates whether a particular device provides the App Attest service.

### Preparing a key

- [generateKeyWithCompletionHandler:](dcappattestservice/generatekey%28completionhandler_%29.md): Creates a new cryptographic key for use with the App Attest service.
- [attestKey:clientDataHash:completionHandler:](dcappattestservice/attestkey%28__clientdatahash_completionhandler_%29.md): Asks Apple to attest to the validity of a generated cryptographic key.

### Validating the app instance

- [generateAssertion:clientDataHash:completionHandler:](dcappattestservice/generateassertion%28__clientdatahash_completionhandler_%29.md): Creates a block of data that demonstrates the legitimacy of an instance of your app running on a device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### App Attest

- [Establishing your app’s integrity](establishing-your-app-s-integrity.md): Ensure that requests your server receives come from legitimate instances of your app.
- [Validating apps that connect to your server](validating-apps-that-connect-to-your-server.md): Verify that connections to your server come from legitimate instances of your app.
- [Assessing fraud risk](assessing-fraud-risk.md): Request and analyze risk data using server-to-server calls.
- [Preparing to use the app attest service](preparing-to-use-the-app-attest-service.md): Test your implementation in a development environment and onboard users gradually.
- [Attestation Object Validation Guide](attestation-object-validation-guide.md): Use this guide to validate your implementation of verifying the attestation object verification process.
- [App Attest Environment](../bundleresources/entitlements/com.apple.developer.devicecheck.appattest-environment.md): The environment for an app that uses the App Attest service to validate itself.
