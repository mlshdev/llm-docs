> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturescreeninput/removesduplicateframes](https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/removesduplicateframes)

# removesDuplicateFrames (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 10.10)

A Boolean value that specifies whether the capture input skips duplicate frames.

> The capture system ignores this property in macOS 10.10 and later: the capture input never removes duplicate frames. You can re-create this functionality by using [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) and comparing successive frames.

## Declaration

```swift
var removesDuplicateFrames: Bool { get set }
```

# removesDuplicateFrames (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 10.10)

A Boolean value that specifies whether the capture input skips duplicate frames.

> The capture system ignores this property in macOS 10.10 and later: the capture input never removes duplicate frames. You can re-create this functionality by using [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) and comparing successive frames.

## Declaration

```objectivec
@property (nonatomic) BOOL removesDuplicateFrames;
```
