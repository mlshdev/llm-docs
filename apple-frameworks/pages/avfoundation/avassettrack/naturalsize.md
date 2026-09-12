> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/naturalsize](https://developer.apple.com/documentation/avfoundation/avassettrack/naturalsize)

# naturalSize (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The natural dimensions of the media data that the track references.

> Load the value of [naturalSize](../avpartialasyncproperty/naturalsize.md) asynchronously instead.

## Declaration

```swift
var naturalSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

For visual tracks, like video or subtitle tracks, this property value is the natural size of the media. For nonvisual tracks, like audio or chapter tracks, the value is [zero](../../corefoundation/cgsize/zero.md).

# naturalSize (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The natural dimensions of the media data that the track references.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize naturalSize;
```

<a id="Discussion"></a>

## Discussion

For visual tracks, like video or subtitle tracks, this property value is the natural size of the media. For nonvisual tracks, like audio or chapter tracks, the value is [zero](../../corefoundation/cgsize/zero.md).

## See Also

### Accessing visual characteristics

- [preferredTransform](preferredtransform.md): Deprecated. The track’s transform preference to apply to its visual content during presentation or processing.
