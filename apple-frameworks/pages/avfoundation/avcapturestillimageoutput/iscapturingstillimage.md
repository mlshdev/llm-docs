> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput/iscapturingstillimage](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/iscapturingstillimage)

# isCapturingStillImage (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15)

Indicates whether a still image is being captured.

## Declaration

```swift
var isCapturingStillImage: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when a still image is being captured, and [false](https://developer.apple.com/documentation/swift/false) when no still image capture is underway.

This property supports key-value observing.

## See Also

### Capturing an image

- [captureStillImageAsynchronously(from:completionHandler:)](capturestillimageasynchronously%28from_completionhandler_%29.md): Deprecated. Initiates a still image capture and returns immediately.

# capturingStillImage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15)

Indicates whether a still image is being captured.

## Declaration

```objectivec
@property (readonly, getter=isCapturingStillImage) BOOL capturingStillImage;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when a still image is being captured, and [false](https://developer.apple.com/documentation/swift/false) when no still image capture is underway.

This property supports key-value observing.

## See Also

### Capturing an image

- [captureStillImageAsynchronouslyFromConnection:completionHandler:](capturestillimageasynchronously%28from_completionhandler_%29.md): Deprecated. Initiates a still image capture and returns immediately.
