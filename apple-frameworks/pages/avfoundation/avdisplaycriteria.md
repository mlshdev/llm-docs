> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdisplaycriteria](https://developer.apple.com/documentation/avfoundation/avdisplaycriteria)

# AVDisplayCriteria (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** tvOS 11.2+ · visionOS 1.0+

An object the system uses to guide the selection of a display mode in tvOS.

## Declaration

```swift
class AVDisplayCriteria
```

<a id="overview"></a>

## Overview

In tvOS, this object provides the display criteria that an [AVDisplayManager](../avkit/avdisplaymanager.md) uses to set an appropriate display mode, such as switching to HDR, when presenting a video asset. If your app uses [AVPlayerViewController](../avkit/avplayerviewcontroller.md) for its player user interface, the system automatically applies the display critera when it presents the asset. If you use a custom player interface, load the value of an asset’s [preferredDisplayCriteria](avpartialasyncproperty/preferreddisplaycriteria.md) property and set it on the window’s [avDisplayManager](../uikit/uiwindow/avdisplaymanager.md) object.

> **Important**

>  Most apps don’t create instances of this class, and instead retrieve the preferred display criteria from a media asset. If your app doesn’t use [AVAsset](avasset.md), such as a streaming app that renders sample buffers using [AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md), you can manually create an instance using the [init(refreshRate:formatDescription:)](avdisplaycriteria/init%28refreshrate_formatdescription_%29.md) initializer.

## Topics

### Create a display criteria

- [init(refreshRate:formatDescription:)](avdisplaycriteria/init%28refreshrate_formatdescription_%29.md): Creates a display criteria object with the specified refresh rate and format description.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loading asset preferences

- [preferredRate](avpartialasyncproperty/preferredrate.md): Conforms when `Root` inherits `AVAsset`. The asset’s rate preference for playing its media.
- [preferredVolume](avpartialasyncproperty/preferredvolume-20mb3.md): Conforms when `Root` inherits `AVAsset`. The asset’s volume preference for playing its audible media.
- [preferredTransform](avpartialasyncproperty/preferredtransform-80d13.md): Conforms when `Root` inherits `AVAsset`. The asset’s transform preference to apply to its visual content during presentation or processing.
- [preferredDisplayCriteria](avpartialasyncproperty/preferreddisplaycriteria.md): Conforms when `Root` inherits `AVAsset`. The asset’s display mode preference for optimal playback of its content.

# AVDisplayCriteria (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** tvOS 11.2+ · visionOS 1.0+

An object the system uses to guide the selection of a display mode in tvOS.

## Declaration

```objectivec
@interface AVDisplayCriteria : NSObject
```

<a id="overview"></a>

## Overview

In tvOS, this object provides the display criteria that an [AVDisplayManager](../avkit/avdisplaymanager.md) uses to set an appropriate display mode, such as switching to HDR, when presenting a video asset. If your app uses [AVPlayerViewController](../avkit/avplayerviewcontroller.md) for its player user interface, the system automatically applies the display critera when it presents the asset. If you use a custom player interface, load the value of an asset’s [preferredDisplayCriteria](avpartialasyncproperty/preferreddisplaycriteria.md) property and set it on the window’s [avDisplayManager](../uikit/uiwindow/avdisplaymanager.md) object.

> **Important**

>  Most apps don’t create instances of this class, and instead retrieve the preferred display criteria from a media asset. If your app doesn’t use [AVAsset](avasset.md), such as a streaming app that renders sample buffers using [AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md), you can manually create an instance using the [initWithRefreshRate:formatDescription:](avdisplaycriteria/init%28refreshrate_formatdescription_%29.md) initializer.

## Topics

### Create a display criteria

- [initWithRefreshRate:formatDescription:](avdisplaycriteria/init%28refreshrate_formatdescription_%29.md): Creates a display criteria object with the specified refresh rate and format description.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
