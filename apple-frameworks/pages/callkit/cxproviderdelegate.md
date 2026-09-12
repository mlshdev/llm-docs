> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxproviderdelegate](https://developer.apple.com/documentation/callkit/cxproviderdelegate)

# CXProviderDelegate (Swift)

**Framework:** CallKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A collection of methods that a telephony provider object calls.

## Declaration

```swift
protocol CXProviderDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [CXProviderDelegate](cxproviderdelegate.md) protocol defines a set of methods that are called by an object that represents a telephony provider it begins or resets, requests a transaction, performs an action, or an audio session changes its activation state.

## Topics

### Handling Provider Events

- [providerDidBegin(\_:)](cxproviderdelegate/providerdidbegin%28__%29.md): Called when the provider begins.
- [providerDidReset(\_:)](cxproviderdelegate/providerdidreset%28__%29.md): Called when the provider is reset.

### Determining the Execution of Transactions

- [provider(\_:execute:)](cxproviderdelegate/provider%28__execute_%29.md): Called when a transaction is executed by a call controller.

### Handling Call Actions

- [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-2lem5.md): Called when the provider performs the specified start call action.
- [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-h4in.md): Called when the provider performs the specified answer call action.
- [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-9a0m.md): Called when the provider performs the specified end call action.
- [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-947b1.md): Called when the provider performs the specified set held call action.
- [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-4u3yu.md): Called when the provider performs the specified set muted call action.
- [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-9masw.md): Called when the provider performs the specified set group call action.
- [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-4htxt.md): Called when the provider performs the specified play DTMF (dual tone multifrequency) call action.
- [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-43atg.md): Called when the provider performs the specified set translation action.
- [provider(\_:timedOutPerforming:)](cxproviderdelegate/provider%28__timedoutperforming_%29.md): Called when the provider performs the specified action times out.

### Handling Changes to Audio Session Activation State

- [provider(\_:didActivate:)](cxproviderdelegate/provider%28__didactivate_%29.md): Called when the provider’s audio session is activated.
- [provider(\_:didDeactivate:)](cxproviderdelegate/provider%28__diddeactivate_%29.md): Called when the provider’s audio session is deactivated.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [CXProvider](cxprovider.md): An object that represents a telephony provider.
- [CXProviderConfiguration](cxproviderconfiguration.md): An encapsulation of the configuration of a provider object.
- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md): Initiate outgoing calls with VoIP and configure your app to receive incoming calls.
- [VoIP calling with CallKit](voip-calling-with-callkit.md): Use the CallKit framework to integrate native VoIP calling.
- [Preparing your app to be the default calling app](preparing-your-app-to-be-the-default-calling-app.md): Configure your CallKit or LiveCommunicationKit app so people can set it as the default calling app on their device.
- [CallKit updates](https://developer.apple.com/documentation/updates/callkit): Learn about important changes to CallKit.

# CXProviderDelegate (Objective-C)

**Framework:** CallKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A collection of methods that a telephony provider object calls.

## Declaration

```objectivec
@protocol CXProviderDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The [CXProviderDelegate](cxproviderdelegate.md) protocol defines a set of methods that are called by an object that represents a telephony provider it begins or resets, requests a transaction, performs an action, or an audio session changes its activation state.

## Topics

### Handling Provider Events

- [providerDidBegin:](cxproviderdelegate/providerdidbegin%28__%29.md): Called when the provider begins.
- [providerDidReset:](cxproviderdelegate/providerdidreset%28__%29.md): Called when the provider is reset.

### Determining the Execution of Transactions

- [provider:executeTransaction:](cxproviderdelegate/provider%28__execute_%29.md): Called when a transaction is executed by a call controller.

### Handling Call Actions

- [provider:performStartCallAction:](cxproviderdelegate/provider%28__perform_%29-2lem5.md): Called when the provider performs the specified start call action.
- [provider:performAnswerCallAction:](cxproviderdelegate/provider%28__perform_%29-h4in.md): Called when the provider performs the specified answer call action.
- [provider:performEndCallAction:](cxproviderdelegate/provider%28__perform_%29-9a0m.md): Called when the provider performs the specified end call action.
- [provider:performSetHeldCallAction:](cxproviderdelegate/provider%28__perform_%29-947b1.md): Called when the provider performs the specified set held call action.
- [provider:performSetMutedCallAction:](cxproviderdelegate/provider%28__perform_%29-4u3yu.md): Called when the provider performs the specified set muted call action.
- [provider:performSetGroupCallAction:](cxproviderdelegate/provider%28__perform_%29-9masw.md): Called when the provider performs the specified set group call action.
- [provider:performPlayDTMFCallAction:](cxproviderdelegate/provider%28__perform_%29-4htxt.md): Called when the provider performs the specified play DTMF (dual tone multifrequency) call action.
- [provider:performSetTranslatingCallAction:](cxproviderdelegate/provider%28__perform_%29-43atg.md): Called when the provider performs the specified set translation action.
- [provider:timedOutPerformingAction:](cxproviderdelegate/provider%28__timedoutperforming_%29.md): Called when the provider performs the specified action times out.

### Handling Changes to Audio Session Activation State

- [provider:didActivateAudioSession:](cxproviderdelegate/provider%28__didactivate_%29.md): Called when the provider’s audio session is activated.
- [provider:didDeactivateAudioSession:](cxproviderdelegate/provider%28__diddeactivate_%29.md): Called when the provider’s audio session is deactivated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [CXProvider](cxprovider.md): An object that represents a telephony provider.
- [CXProviderConfiguration](cxproviderconfiguration.md): An encapsulation of the configuration of a provider object.
- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md): Initiate outgoing calls with VoIP and configure your app to receive incoming calls.
- [Preparing your app to be the default calling app](preparing-your-app-to-be-the-default-calling-app.md): Configure your CallKit or LiveCommunicationKit app so people can set it as the default calling app on their device.
