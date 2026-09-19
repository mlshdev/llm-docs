> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avasynchronousciimagefilteringrequest/rendersize

# renderSize (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The width and height, in pixels, of the frame being processed.

> Use AVCIImageFilteringParameters instead

## Declaration

```swift
var renderSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

You can use this property if you need to work with Core Image filters that apply transforms to the image.

## See Also

### Getting contextual information for filtering

- [compositionTime](compositiontime.md): Deprecated. The time in the video composition corresponding to the frame being processed.

# renderSize (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The width and height, in pixels, of the frame being processed.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize renderSize;
```

<a id="Discussion"></a>

## Discussion

You can use this property if you need to work with Core Image filters that apply transforms to the image.

## See Also

### Getting contextual information for filtering

- [compositionTime](compositiontime.md): Deprecated. The time in the video composition corresponding to the frame being processed.
