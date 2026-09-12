> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/preferredmediaselection](https://developer.apple.com/documentation/avfoundation/avasset/preferredmediaselection)

# preferredMediaSelection (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 16.0) · iPadOS 9.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 2.0+ (deprecated in 9.0)

The default media selections for this asset’s media selection groups.

> Load the value of [preferredMediaSelection](../avpartialasyncproperty/preferredmediaselection.md) asynchronously instead.

## Declaration

```swift
var preferredMediaSelection: AVMediaSelection { get }
```

<a id="Discussion"></a>

## Discussion

Provides an instance of [AVMediaSelection](../avmediaselection.md) with the default selections for each of the assets media selection groups.

# preferredMediaSelection (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default media selections for this asset’s media selection groups.

## Declaration

```objectivec
@property (nonatomic, readonly) AVMediaSelection * preferredMediaSelection;
```

<a id="Discussion"></a>

## Discussion

Provides an instance of [AVMediaSelection](../avmediaselection.md) with the default selections for each of the assets media selection groups.

## See Also

### Accessing asset preferences

- [preferredRate](preferredrate.md): Deprecated. The asset’s rate preference for playing its media.
- [preferredVolume](preferredvolume.md): Deprecated. The asset’s volume preference for playing its audible media.
- [preferredTransform](preferredtransform.md): Deprecated. The asset’s transform preference to apply to its visual content during presentation or processing.
- [preferredDisplayCriteria](preferreddisplaycriteria.md): Deprecated. The asset’s display mode preference for optimal playback of its content.
- [AVDisplayCriteria](../avdisplaycriteria.md): An object the system uses to guide the selection of a display mode in tvOS.
