> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/preferreddisplaycriteria](https://developer.apple.com/documentation/avfoundation/avasset/preferreddisplaycriteria)

# preferredDisplayCriteria (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** tvOS 11.2+ (deprecated in 16.0)

The asset’s display mode preference for optimal playback of its content.

> Load the value of [preferredDisplayCriteria](../avpartialasyncproperty/preferreddisplaycriteria.md) asynchronously instead.

## Declaration

```swift
var preferredDisplayCriteria: AVDisplayCriteria { get }
```

# preferredDisplayCriteria (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** tvOS 11.2+ · visionOS 1.0+

The asset’s display mode preference for optimal playback of its content.

## Declaration

```objectivec
@property (nonatomic, readonly) AVDisplayCriteria * preferredDisplayCriteria;
```

## See Also

### Accessing asset preferences

- [preferredRate](preferredrate.md): Deprecated. The asset’s rate preference for playing its media.
- [preferredVolume](preferredvolume.md): Deprecated. The asset’s volume preference for playing its audible media.
- [preferredTransform](preferredtransform.md): Deprecated. The asset’s transform preference to apply to its visual content during presentation or processing.
- [preferredMediaSelection](preferredmediaselection.md): Deprecated. The default media selections for this asset’s media selection groups.
- [AVDisplayCriteria](../avdisplaycriteria.md): An object the system uses to guide the selection of a display mode in tvOS.
