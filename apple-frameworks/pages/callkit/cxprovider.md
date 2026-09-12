> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxprovider](https://developer.apple.com/documentation/callkit/cxprovider)

# CXProvider (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

An object that represents a telephony provider.

## Declaration

```swift
class CXProvider
```

## Mentioned In

- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md)

<a id="overview"></a>

## Overview

A [CXProvider](cxprovider.md) object is responsible for reporting out-of-band notifications that occur to the system. A VoIP app should create only one instance of [CXProvider](cxprovider.md) and store it for use globally. A [CXProvider](cxprovider.md) object is initialized with a [CXProviderConfiguration](cxproviderconfiguration.md) object to specify the behavior and capabilities of calls. Each provider can specify an object conforming to the [CXProviderDelegate](cxproviderdelegate.md) protocol to respond to events, such as the call starting, the call being put on hold, or the provider’s audio session being activated.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

[CXProvider](cxprovider.md) is not intended for subclassing.

## Topics

### Creating New Providers

- [init(configuration:)](cxprovider/init%28configuration_%29.md): Initializes a new provider with the specified configuration.

### Setting the Delegate

- [setDelegate(\_:queue:)](cxprovider/setdelegate%28__queue_%29.md): Sets a provider delegate, specifying an optional queue on which to execute delegate methods.

### Accessing Provider Attributes

- [configuration](cxprovider/configuration.md): The configuration of the provider.

### Accessing Pending Transaction and Call Actions

- [pendingTransactions](cxprovider/pendingtransactions.md): Incomplete transactions.
- [pendingCallActions(of:withCall:)](cxprovider/pendingcallactions%28of_withcall_%29.md): Returns all call actions in any pending transactions of the specified class for the specified call identifier that are incomplete.

### Reporting Calls

- [reportNewIncomingCall(with:update:completion:)](cxprovider/reportnewincomingcall%28with_update_completion_%29.md): Reports a new incoming call with the specified unique identifier to the provider.
- [reportNewIncomingVoIPPushPayload(\_:completion:)](cxprovider/reportnewincomingvoippushpayload%28__completion_%29.md): Reports a new incoming call after your notification service extension decrypts a VoIP call request.
- [com.apple.developer.usernotifications.filtering](../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md): Enable receiving notifications without displaying the notification to the user.
- [reportOutgoingCall(with:startedConnectingAt:)](cxprovider/reportoutgoingcall%28with_startedconnectingat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier started connecting at a particular time.
- [reportOutgoingCall(with:connectedAt:)](cxprovider/reportoutgoingcall%28with_connectedat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier finished connecting at a particular time.
- [reportCall(with:updated:)](cxprovider/reportcall%28with_updated_%29.md): Reports to the provider that an active call updated its information.
- [reportCall(with:endedAt:reason:)](cxprovider/reportcall%28with_endedat_reason_%29.md): Reports to the provider that a call with the specified identifier ended at a given date for a particular reason.

### Invalidating a Provider

- [invalidate()](cxprovider/invalidate%28%29.md): Invalidates the provider and completes all active calls with an error.

### Handling Errors

- [CXCallEndedReason](cxcallendedreason.md): The reason that a call ended.
- [CXError](cxerror.md): Error codes for the CallKit errors.
- [CXError.Code](cxerror/code.md): Error codes for the CallKit errors.
- [CXErrorCodeIncomingCallError](cxerrorcodeincomingcallerror-swift.struct.md): Codes for errors that occur during incoming calls.
- [CXErrorCodeIncomingCallError.Code](cxerrorcodeincomingcallerror-swift.struct/code.md): Codes for errors that occur during incoming calls.
- [CXErrorCodeNotificationServiceExtensionError](cxerrorcodenotificationserviceextensionerror-swift.struct.md): Errors that can occur when reporting new, incoming VoIP calls.
- [CXErrorDomain](cxerrordomain.md): The domain for CallKit errors.
- [CXErrorDomainIncomingCall](cxerrordomainincomingcall.md): The domain for errors that occur during incoming calls.

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

### Essentials

- [CXProviderDelegate](cxproviderdelegate.md): A collection of methods that a telephony provider object calls.
- [CXProviderConfiguration](cxproviderconfiguration.md): An encapsulation of the configuration of a provider object.
- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md): Initiate outgoing calls with VoIP and configure your app to receive incoming calls.
- [VoIP calling with CallKit](voip-calling-with-callkit.md): Use the CallKit framework to integrate native VoIP calling.
- [Preparing your app to be the default calling app](preparing-your-app-to-be-the-default-calling-app.md): Configure your CallKit or LiveCommunicationKit app so people can set it as the default calling app on their device.
- [CallKit updates](https://developer.apple.com/documentation/updates/callkit): Learn about important changes to CallKit.

# CXProvider (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

An object that represents a telephony provider.

## Declaration

```objectivec
@interface CXProvider : NSObject
```

## Mentioned In

- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md)

<a id="overview"></a>

## Overview

A [CXProvider](cxprovider.md) object is responsible for reporting out-of-band notifications that occur to the system. A VoIP app should create only one instance of [CXProvider](cxprovider.md) and store it for use globally. A [CXProvider](cxprovider.md) object is initialized with a [CXProviderConfiguration](cxproviderconfiguration.md) object to specify the behavior and capabilities of calls. Each provider can specify an object conforming to the [CXProviderDelegate](cxproviderdelegate.md) protocol to respond to events, such as the call starting, the call being put on hold, or the provider’s audio session being activated.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

[CXProvider](cxprovider.md) is not intended for subclassing.

## Topics

### Creating New Providers

- [initWithConfiguration:](cxprovider/init%28configuration_%29.md): Initializes a new provider with the specified configuration.

### Setting the Delegate

- [setDelegate:queue:](cxprovider/setdelegate%28__queue_%29.md): Sets a provider delegate, specifying an optional queue on which to execute delegate methods.

### Accessing Provider Attributes

- [configuration](cxprovider/configuration.md): The configuration of the provider.

### Accessing Pending Transaction and Call Actions

- [pendingTransactions](cxprovider/pendingtransactions.md): Incomplete transactions.
- [pendingCallActionsOfClass:withCallUUID:](cxprovider/pendingcallactions%28of_withcall_%29.md): Returns all call actions in any pending transactions of the specified class for the specified call identifier that are incomplete.

### Reporting Calls

- [reportNewIncomingCallWithUUID:update:completion:](cxprovider/reportnewincomingcall%28with_update_completion_%29.md): Reports a new incoming call with the specified unique identifier to the provider.
- [reportNewIncomingVoIPPushPayload:completion:](cxprovider/reportnewincomingvoippushpayload%28__completion_%29.md): Reports a new incoming call after your notification service extension decrypts a VoIP call request.
- [com.apple.developer.usernotifications.filtering](../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md): Enable receiving notifications without displaying the notification to the user.
- [reportOutgoingCallWithUUID:startedConnectingAtDate:](cxprovider/reportoutgoingcall%28with_startedconnectingat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier started connecting at a particular time.
- [reportOutgoingCallWithUUID:connectedAtDate:](cxprovider/reportoutgoingcall%28with_connectedat_%29.md): Reports to the provider that an outgoing call with the specified unique identifier finished connecting at a particular time.
- [reportCallWithUUID:updated:](cxprovider/reportcall%28with_updated_%29.md): Reports to the provider that an active call updated its information.
- [reportCallWithUUID:endedAtDate:reason:](cxprovider/reportcall%28with_endedat_reason_%29.md): Reports to the provider that a call with the specified identifier ended at a given date for a particular reason.

### Invalidating a Provider

- [invalidate](cxprovider/invalidate%28%29.md): Invalidates the provider and completes all active calls with an error.

### Handling Errors

- [CXCallEndedReason](cxcallendedreason.md): The reason that a call ended.
- [CXErrorCode](cxerror/code.md): Error codes for the CallKit errors.
- [CXErrorCodeIncomingCallError](cxerrorcodeincomingcallerror-swift.struct/code.md): Codes for errors that occur during incoming calls.
- [CXErrorDomain](cxerrordomain.md): The domain for CallKit errors.
- [CXErrorDomainIncomingCall](cxerrordomainincomingcall.md): The domain for errors that occur during incoming calls.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [CXProviderDelegate](cxproviderdelegate.md): A collection of methods that a telephony provider object calls.
- [CXProviderConfiguration](cxproviderconfiguration.md): An encapsulation of the configuration of a provider object.
- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md): Initiate outgoing calls with VoIP and configure your app to receive incoming calls.
- [Preparing your app to be the default calling app](preparing-your-app-to-be-the-default-calling-app.md): Configure your CallKit or LiveCommunicationKit app so people can set it as the default calling app on their device.
