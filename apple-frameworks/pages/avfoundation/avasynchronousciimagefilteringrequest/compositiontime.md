> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousciimagefilteringrequest/compositiontime](https://developer.apple.com/documentation/avfoundation/avasynchronousciimagefilteringrequest/compositiontime)

# compositionTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The time in the video composition corresponding to the frame being processed.

> Use AVCIImageFilteringParameters instead

## Declaration

```swift
var compositionTime: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

You can use this property to vary the parameters of a filter over time.

## See Also

### Getting contextual information for filtering

- [renderSize](rendersize.md): Deprecated. The width and height, in pixels, of the frame being processed.

# compositionTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The time in the video composition corresponding to the frame being processed.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime compositionTime;
```

<a id="Discussion"></a>

## Discussion

You can use this property to vary the parameters of a filter over time.

## See Also

### Getting contextual information for filtering

- [renderSize](rendersize.md): Deprecated. The width and height, in pixels, of the frame being processed.
