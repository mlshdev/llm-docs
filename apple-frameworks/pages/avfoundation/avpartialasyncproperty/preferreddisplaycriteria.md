> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/preferreddisplaycriteria](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/preferreddisplaycriteria)

# preferredDisplayCriteria

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** tvOS 15.0+ · visionOS 1.0+

The asset’s display mode preference for optimal playback of its content.

## Declaration

```swift
static var preferredDisplayCriteria: AVAsyncProperty<Root, AVDisplayCriteria> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading asset preferences

- [preferredRate](preferredrate.md): Conforms when `Root` inherits `AVAsset`. The asset’s rate preference for playing its media.
- [preferredVolume](preferredvolume-20mb3.md): Conforms when `Root` inherits `AVAsset`. The asset’s volume preference for playing its audible media.
- [preferredTransform](preferredtransform-80d13.md): Conforms when `Root` inherits `AVAsset`. The asset’s transform preference to apply to its visual content during presentation or processing.
- [AVDisplayCriteria](../avdisplaycriteria.md): An object the system uses to guide the selection of a display mode in tvOS.
