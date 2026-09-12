> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arappclipcodeanchor](https://developer.apple.com/documentation/arkit/arappclipcodeanchor)

# ARAppClipCodeAnchor (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 14.3+ · iPadOS 14.3+

An anchor that tracks the position and orientation of an App Clip Code in the physical environment.

## Declaration

```swift
class ARAppClipCodeAnchor
```

<a id="overview"></a>

## Overview

Your App Clip gives users immediate access to critical or context-specific parts of your app’s AR experience, and makes it easy for them to download and launch your full app if they choose.

You can use physical App Clip Codes in the real world to enable users to discover your App Clip. An App Clip Code includes a unique URL and can incorporate an NFC tag. When users hold their iPhone near the code or scan it with the camera or Code Scanner in Control Center, the system offers to launch the code’s associated App Clip.

For more on App Clip Codes, see [App Clips](https://developer.apple.com/documentation/appclip). For an app that reacts to App Clip Codes in AR, see [Interacting with App Clip Codes in AR](https://developer.apple.com/documentation/appclip/interacting-with-app-clip-codes-in-ar).

<a id="Distinguish-Between-App-Clip-Codes"></a>

### Distinguish Between App Clip Codes

There may be multiple App Clip Codes visible in the camera feed that share the same [url](arappclipcodeanchor/url.md), so ARKit also relies on the App Clip Code’s location (see [transform](aranchor/transform.md)) to distinguish different App Clip Codes in the physical environment.

When the framework recognizes an App Clip Code, it initializes an [ARAppClipCodeAnchor](arappclipcodeanchor.md) and passes it to the session delegate via [session(\_:didAdd:)](arsessiondelegate/session%28__didadd_%29.md). If a recognized App Clip Code becomes obscured or is no longer visible in the camera feed, the framework sets the anchor’s [isTracked](artrackable/istracked.md) property to [false](https://developer.apple.com/documentation/swift/false) and passes it into the [session(\_:didUpdate:)](arsessiondelegate/session%28__didupdate_%29-3qtt8.md) callback. If the same App Clip Code becomes visible once again:

- ARKit sets [isTracked](artrackable/istracked.md) to [true](https://developer.apple.com/documentation/swift/true) if the App Clip Code maintained its relative position in the physical environment.
- ARKit intializes a new [ARAppClipCodeAnchor](arappclipcodeanchor.md) if the App Clip Code position in the physical environment changed significantly.

<a id="Remove-App-Clip-Codes"></a>

### Remove App Clip Codes

To prevent App Clip Codes from accumulating in the session, ARKit removes anchors by passing them in to the [session(\_:didRemove:)](arsessiondelegate/session%28__didremove_%29.md) callback. ARKit removes an [ARAppClipCodeAnchor](arappclipcodeanchor.md) if all of the following conditions are true:

- The framework instantiates a new [ARAppClipCodeAnchor](arappclipcodeanchor.md).
- The new anchor’s [url](arappclipcodeanchor/url.md) matches one or more existing anchors with substantially different positions in the physical environment.
- The existing anchors are untracked ([isTracked](artrackable/istracked.md) is [false](https://developer.apple.com/documentation/swift/false)).

## Topics

### Decoding the URL

- [url](arappclipcodeanchor/url.md): The URL encoded in an App Clip Code.
- [urlDecodingState](arappclipcodeanchor/urldecodingstate-swift.property.md): A state that indicates the process of decoding an App Clip Code URL.
- [ARAppClipCodeAnchor.URLDecodingState](arappclipcodeanchor/urldecodingstate-swift.enum.md): The states in the process of decoding an App Clip code URL.

### Measuring Physical Size

- [radius](arappclipcodeanchor/radius.md): The App Clip Code’s radius in meters.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

### Conforms To

- [ARAnchorCopying](aranchorcopying.md)
- [ARTrackable](artrackable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App Clip Codes

- [Interacting with App Clip Codes in AR](https://developer.apple.com/documentation/appclip/interacting-with-app-clip-codes-in-ar): Display content and provide services in an AR experience with App Clip Codes.

# ARAppClipCodeAnchor (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 14.3+ · iPadOS 14.3+

An anchor that tracks the position and orientation of an App Clip Code in the physical environment.

## Declaration

```objectivec
@interface ARAppClipCodeAnchor : ARAnchor
```

<a id="overview"></a>

## Overview

Your App Clip gives users immediate access to critical or context-specific parts of your app’s AR experience, and makes it easy for them to download and launch your full app if they choose.

You can use physical App Clip Codes in the real world to enable users to discover your App Clip. An App Clip Code includes a unique URL and can incorporate an NFC tag. When users hold their iPhone near the code or scan it with the camera or Code Scanner in Control Center, the system offers to launch the code’s associated App Clip.

For more on App Clip Codes, see [App Clips](https://developer.apple.com/documentation/appclip). For an app that reacts to App Clip Codes in AR, see [Interacting with App Clip Codes in AR](https://developer.apple.com/documentation/appclip/interacting-with-app-clip-codes-in-ar).

<a id="Distinguish-Between-App-Clip-Codes"></a>

### Distinguish Between App Clip Codes

There may be multiple App Clip Codes visible in the camera feed that share the same [url](arappclipcodeanchor/url.md), so ARKit also relies on the App Clip Code’s location (see [transform](aranchor/transform.md)) to distinguish different App Clip Codes in the physical environment.

When the framework recognizes an App Clip Code, it initializes an [ARAppClipCodeAnchor](arappclipcodeanchor.md) and passes it to the session delegate via [session:didAddAnchors:](arsessiondelegate/session%28__didadd_%29.md). If a recognized App Clip Code becomes obscured or is no longer visible in the camera feed, the framework sets the anchor’s [isTracked](artrackable/istracked.md) property to [false](https://developer.apple.com/documentation/swift/false) and passes it into the [session:didUpdateAnchors:](arsessiondelegate/session%28__didupdate_%29-3qtt8.md) callback. If the same App Clip Code becomes visible once again:

- ARKit sets [isTracked](artrackable/istracked.md) to [true](https://developer.apple.com/documentation/swift/true) if the App Clip Code maintained its relative position in the physical environment.
- ARKit intializes a new [ARAppClipCodeAnchor](arappclipcodeanchor.md) if the App Clip Code position in the physical environment changed significantly.

<a id="Remove-App-Clip-Codes"></a>

### Remove App Clip Codes

To prevent App Clip Codes from accumulating in the session, ARKit removes anchors by passing them in to the [session:didRemoveAnchors:](arsessiondelegate/session%28__didremove_%29.md) callback. ARKit removes an [ARAppClipCodeAnchor](arappclipcodeanchor.md) if all of the following conditions are true:

- The framework instantiates a new [ARAppClipCodeAnchor](arappclipcodeanchor.md).
- The new anchor’s [url](arappclipcodeanchor/url.md) matches one or more existing anchors with substantially different positions in the physical environment.
- The existing anchors are untracked ([isTracked](artrackable/istracked.md) is [false](https://developer.apple.com/documentation/swift/false)).

## Topics

### Decoding the URL

- [url](arappclipcodeanchor/url.md): The URL encoded in an App Clip Code.
- [urlDecodingState](arappclipcodeanchor/urldecodingstate-swift.property.md): A state that indicates the process of decoding an App Clip Code URL.
- [ARAppClipCodeURLDecodingState](arappclipcodeanchor/urldecodingstate-swift.enum.md): The states in the process of decoding an App Clip code URL.

### Measuring Physical Size

- [radius](arappclipcodeanchor/radius.md): The App Clip Code’s radius in meters.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

### Conforms To

- [ARTrackable](artrackable.md)

## See Also

### App Clip Codes

- [Interacting with App Clip Codes in AR](https://developer.apple.com/documentation/appclip/interacting-with-app-clip-codes-in-ar): Display content and provide services in an AR experience with App Clip Codes.
