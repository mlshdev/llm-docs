> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/preferredtransform](https://developer.apple.com/documentation/avfoundation/avasset/preferredtransform)

# preferredTransform (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The asset’s transform preference to apply to its visual content during presentation or processing.

> Load the value of [preferredTransform](../avpartialasyncproperty/preferredtransform-80d13.md) asynchronously instead.

## Declaration

```swift
var preferredTransform: CGAffineTransform { get }
```

<a id="Discussion"></a>

## Discussion

The value is typically, but not always, the identity transform.

# preferredTransform (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The asset’s transform preference to apply to its visual content during presentation or processing.

## Declaration

```objectivec
@property (nonatomic, readonly) CGAffineTransform preferredTransform;
```

<a id="Discussion"></a>

## Discussion

The value is typically, but not always, the identity transform.

## See Also

### Accessing asset preferences

- [preferredRate](preferredrate.md): Deprecated. The asset’s rate preference for playing its media.
- [preferredVolume](preferredvolume.md): Deprecated. The asset’s volume preference for playing its audible media.
- [preferredMediaSelection](preferredmediaselection.md): Deprecated. The default media selections for this asset’s media selection groups.
- [preferredDisplayCriteria](preferreddisplaycriteria.md): Deprecated. The asset’s display mode preference for optimal playback of its content.
- [AVDisplayCriteria](../avdisplaycriteria.md): An object the system uses to guide the selection of a display mode in tvOS.
