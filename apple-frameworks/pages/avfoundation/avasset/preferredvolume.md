> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/preferredvolume](https://developer.apple.com/documentation/avfoundation/avasset/preferredvolume)

# preferredVolume (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The asset’s volume preference for playing its audible media.

> Load the value of [preferredVolume](../avpartialasyncproperty/preferredvolume-20mb3.md) asynchronously instead.

## Declaration

```swift
var preferredVolume: Float { get }
```

<a id="Discussion"></a>

## Discussion

This value is typically, but not always, 1.0.

# preferredVolume (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The asset’s volume preference for playing its audible media.

## Declaration

```objectivec
@property (nonatomic, readonly) float preferredVolume;
```

<a id="Discussion"></a>

## Discussion

This value is typically, but not always, 1.0.

## See Also

### Accessing asset preferences

- [preferredRate](preferredrate.md): Deprecated. The asset’s rate preference for playing its media.
- [preferredTransform](preferredtransform.md): Deprecated. The asset’s transform preference to apply to its visual content during presentation or processing.
- [preferredMediaSelection](preferredmediaselection.md): Deprecated. The default media selections for this asset’s media selection groups.
- [preferredDisplayCriteria](preferreddisplaycriteria.md): Deprecated. The asset’s display mode preference for optimal playback of its content.
- [AVDisplayCriteria](../avdisplaycriteria.md): An object the system uses to guide the selection of a display mode in tvOS.
