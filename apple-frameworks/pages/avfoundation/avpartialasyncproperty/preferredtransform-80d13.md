> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/preferredtransform-80d13](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/preferredtransform-80d13)

# preferredTransform

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The asset’s transform preference to apply to its visual content during presentation or processing.

## Declaration

```swift
static var preferredTransform: AVAsyncProperty<Root, CGAffineTransform> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

This value typically, but not always, equals [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md).

## See Also

### Loading asset preferences

- [preferredRate](preferredrate.md): Conforms when `Root` inherits `AVAsset`. The asset’s rate preference for playing its media.
- [preferredVolume](preferredvolume-20mb3.md): Conforms when `Root` inherits `AVAsset`. The asset’s volume preference for playing its audible media.
- [preferredDisplayCriteria](preferreddisplaycriteria.md): Conforms when `Root` inherits `AVAsset`. The asset’s display mode preference for optimal playback of its content.
- [AVDisplayCriteria](../avdisplaycriteria.md): An object the system uses to guide the selection of a display mode in tvOS.
