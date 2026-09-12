> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxproviderconfiguration](https://developer.apple.com/documentation/callkit/cxproviderconfiguration)

# CXProviderConfiguration (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the configuration of a provider object.

## Declaration

```swift
class CXProviderConfiguration
```

<a id="overview"></a>

## Overview

A [CXProviderConfiguration](cxproviderconfiguration.md) object controls the native call UI for incoming and outgoing calls, including a localized name for the provider, the ringtone to play for incoming calls, and the icon to display during calls. A provider configuration can also set the maximum number of call groups and the number of calls in a single call group, determine whether to use emails and phone numbers as handles, and specify whether to support video.

## Topics

### Creating New Configurations

- [init()](cxproviderconfiguration/init%28%29.md): Creates the configuration of a provider object.
- [init(localizedName:)](cxproviderconfiguration/init%28localizedname_%29.md): Deprecated. Initializes a configuration with the specified localized name.

### Configuring Native Call UI

- [localizedName](cxproviderconfiguration/localizedname.md): Deprecated. The localized name of the provider.
- [ringtoneSound](cxproviderconfiguration/ringtonesound.md): The name of the sound resource in the app bundle to be used for the provider ringtone.
- [iconTemplateImageData](cxproviderconfiguration/icontemplateimagedata.md): The PNG data for the icon image to be displayed for the provider.

### Configuring Call Capabilities

- [maximumCallGroups](cxproviderconfiguration/maximumcallgroups.md): The maximum number of call groups.
- [maximumCallsPerCallGroup](cxproviderconfiguration/maximumcallspercallgroup.md): The maximum number of calls per call group.
- [supportedHandleTypes](cxproviderconfiguration/supportedhandletypes-kd6i.md): The supported handle types.
- [supportsVideo](cxproviderconfiguration/supportsvideo.md): A Boolean value that indicates whether the provider supports video in addition to audio.
- [includesCallsInRecents](cxproviderconfiguration/includescallsinrecents.md): A Boolean value that indicates whether the provider includes a call in the system’s Recents list after the call ends.

### Instance Properties

- [supportsAudioTranslation](cxproviderconfiguration/supportsaudiotranslation.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [CXProvider](cxprovider.md): An object that represents a telephony provider.
- [CXProviderDelegate](cxproviderdelegate.md): A collection of methods that a telephony provider object calls.
- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md): Initiate outgoing calls with VoIP and configure your app to receive incoming calls.
- [VoIP calling with CallKit](voip-calling-with-callkit.md): Use the CallKit framework to integrate native VoIP calling.
- [Preparing your app to be the default calling app](preparing-your-app-to-be-the-default-calling-app.md): Configure your CallKit or LiveCommunicationKit app so people can set it as the default calling app on their device.
- [CallKit updates](https://developer.apple.com/documentation/updates/callkit): Learn about important changes to CallKit.

# CXProviderConfiguration (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of the configuration of a provider object.

## Declaration

```objectivec
@interface CXProviderConfiguration : NSObject
```

<a id="overview"></a>

## Overview

A [CXProviderConfiguration](cxproviderconfiguration.md) object controls the native call UI for incoming and outgoing calls, including a localized name for the provider, the ringtone to play for incoming calls, and the icon to display during calls. A provider configuration can also set the maximum number of call groups and the number of calls in a single call group, determine whether to use emails and phone numbers as handles, and specify whether to support video.

## Topics

### Creating New Configurations

- [init](cxproviderconfiguration/init%28%29.md): Creates the configuration of a provider object.
- [initWithLocalizedName:](cxproviderconfiguration/init%28localizedname_%29.md): Deprecated. Initializes a configuration with the specified localized name.

### Configuring Native Call UI

- [localizedName](cxproviderconfiguration/localizedname.md): Deprecated. The localized name of the provider.
- [ringtoneSound](cxproviderconfiguration/ringtonesound.md): The name of the sound resource in the app bundle to be used for the provider ringtone.
- [iconTemplateImageData](cxproviderconfiguration/icontemplateimagedata.md): The PNG data for the icon image to be displayed for the provider.

### Configuring Call Capabilities

- [maximumCallGroups](cxproviderconfiguration/maximumcallgroups.md): The maximum number of call groups.
- [maximumCallsPerCallGroup](cxproviderconfiguration/maximumcallspercallgroup.md): The maximum number of calls per call group.
- [supportedHandleTypes](cxproviderconfiguration/supportedhandletypes-995uh.md): The supported handle types.
- [supportsVideo](cxproviderconfiguration/supportsvideo.md): A Boolean value that indicates whether the provider supports video in addition to audio.
- [includesCallsInRecents](cxproviderconfiguration/includescallsinrecents.md): A Boolean value that indicates whether the provider includes a call in the system’s Recents list after the call ends.

### Instance Properties

- [supportsAudioTranslation](cxproviderconfiguration/supportsaudiotranslation.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Essentials

- [CXProvider](cxprovider.md): An object that represents a telephony provider.
- [CXProviderDelegate](cxproviderdelegate.md): A collection of methods that a telephony provider object calls.
- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md): Initiate outgoing calls with VoIP and configure your app to receive incoming calls.
- [Preparing your app to be the default calling app](preparing-your-app-to-be-the-default-calling-app.md): Configure your CallKit or LiveCommunicationKit app so people can set it as the default calling app on their device.
