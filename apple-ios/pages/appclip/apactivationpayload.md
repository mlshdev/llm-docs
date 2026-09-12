> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appclip/apactivationpayload](https://developer.apple.com/documentation/appclip/apactivationpayload)

# APActivationPayload (Swift)

**Framework:** App Clips  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Information that’s passed to an App Clip on launch.

## Declaration

```swift
class APActivationPayload
```

<a id="overview"></a>

## Overview

When users launch an App Clip, the platform passes an activation payload to the App Clip as part of an [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) object. When the App Clip receives the payload, confirm the user’s physical location at the time of the invocation.

For more information, see [Responding to invocations](responding-to-invocations.md).

## Topics

### Passing data to the App Clip

- [url](apactivationpayload/url.md): The URL of the link that launched the App Clip.

### Confirming a person’s physical location

- [confirmAcquired(in:completionHandler:)](apactivationpayload/confirmacquired%28in_completionhandler_%29.md): Checks whether an App Clip invocation happened at an expected physical location.

### Understanding errors

- [APActivationPayloadErrorDomain](apactivationpayloaderrordomain.md): A string that identifies the activation payload’s error domain.
- [APActivationPayloadError](apactivationpayloaderror.md): An error that an App Clip activation payload returns.
- [APActivationPayloadError.Code](apactivationpayloaderror/code.md): Error codes that an App Clip activation payload returns.

### Initializers

- [init(coder:)](apactivationpayload/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Launch

- [Responding to invocations](responding-to-invocations.md): Add code to respond to invocations and offer a focused launch experience.
- [Associating your App Clip with your website](associating-your-app-clip-with-your-website.md): Enable the system to verify your App Clip to support invocations from your website and devices running iOS 16.3 or earlier.
- [Supporting invocations from your website and the Messages app](supporting-invocations-from-your-website-and-the-messages-app.md): Display a Smart App Banner and the App Clip card on your website that people tap to launch your App Clip, and add support for invocations from the Messages app.
- [Confirming a person’s physical location](confirming-a-person-s-physical-location.md): Add code to quickly confirm a person’s physical location while respecting their privacy.
- [Launching another app’s App Clip from your app](launching-another-app-s-app-clip-from-your-app.md): Enable people to launch another app’s App Clip from your app with App Clip links and offer a rich preview of it with the Link Presentation framework.
- [NSAppClip](https://developer.apple.com/documentation/bundleresources/information-property-list/nsappclip): A collection of keys that an App Clip uses to get additional capabilities.

# APActivationPayload (Objective-C)

**Framework:** App Clips  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Information that’s passed to an App Clip on launch.

## Declaration

```objectivec
@interface APActivationPayload : NSObject
```

<a id="overview"></a>

## Overview

When users launch an App Clip, the platform passes an activation payload to the App Clip as part of an [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) object. When the App Clip receives the payload, confirm the user’s physical location at the time of the invocation.

For more information, see [Responding to invocations](responding-to-invocations.md).

## Topics

### Passing data to the App Clip

- [URL](apactivationpayload/url.md): The URL of the link that launched the App Clip.

### Confirming a person’s physical location

- [confirmAcquiredInRegion:completionHandler:](apactivationpayload/confirmacquired%28in_completionhandler_%29.md): Checks whether an App Clip invocation happened at an expected physical location.

### Understanding errors

- [APActivationPayloadErrorDomain](apactivationpayloaderrordomain.md): A string that identifies the activation payload’s error domain.
- [APActivationPayloadErrorCode](apactivationpayloaderror/code.md): Error codes that an App Clip activation payload returns.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Launch

- [Responding to invocations](responding-to-invocations.md): Add code to respond to invocations and offer a focused launch experience.
- [Associating your App Clip with your website](associating-your-app-clip-with-your-website.md): Enable the system to verify your App Clip to support invocations from your website and devices running iOS 16.3 or earlier.
- [Supporting invocations from your website and the Messages app](supporting-invocations-from-your-website-and-the-messages-app.md): Display a Smart App Banner and the App Clip card on your website that people tap to launch your App Clip, and add support for invocations from the Messages app.
- [Confirming a person’s physical location](confirming-a-person-s-physical-location.md): Add code to quickly confirm a person’s physical location while respecting their privacy.
- [Launching another app’s App Clip from your app](launching-another-app-s-app-clip-from-your-app.md): Enable people to launch another app’s App Clip from your app with App Clip links and offer a rich preview of it with the Link Presentation framework.
- [NSAppClip](https://developer.apple.com/documentation/bundleresources/information-property-list/nsappclip): A collection of keys that an App Clip uses to get additional capabilities.
