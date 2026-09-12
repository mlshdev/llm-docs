> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/preferredtransform](https://developer.apple.com/documentation/avfoundation/avassettrack/preferredtransform)

# preferredTransform (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The track’s transform preference to apply to its visual content during presentation or processing.

> Load the value of [preferredTransform](../avpartialasyncproperty/preferredtransform-90jdn.md) asynchronously instead.

## Declaration

```swift
var preferredTransform: CGAffineTransform { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is typically, but not always, [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md).

# preferredTransform (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The track’s transform preference to apply to its visual content during presentation or processing.

## Declaration

```objectivec
@property (nonatomic, readonly) CGAffineTransform preferredTransform;
```

<a id="Discussion"></a>

## Discussion

The value of this property is typically, but not always, [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md).

## See Also

### Accessing visual characteristics

- [naturalSize](naturalsize.md): Deprecated. The natural dimensions of the media data that the track references.
