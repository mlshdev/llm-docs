> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputpixelbufferadaptor/append(_:withpresentationtime:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/append(_:withpresentationtime:))

# append(\_:withPresentationTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 27.0) · iPadOS 4.1+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Appends a pixel buffer to the adaptor.

> Use AVAssetWriter.inputPixelBufferReceiver(for:pixelBufferAttributes:) instead

## Declaration

```swift
func append(_ pixelBuffer: CVPixelBuffer, withPresentationTime presentationTime: CMTime) -> Bool
```

## Parameters

- `pixelBuffer`: The pixel buffer to append.
- `presentationTime`: The pixel buffer’s presentation time. The time you specify is relative to the time you called [startSession(atSourceTime:)](../avassetwriter/startsession%28atsourcetime_%29.md) with.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the adaptor appends the pixel buffer; otherwise, [false](https://developer.apple.com/documentation/swift/false).

# appendPixelBuffer:withPresentationTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Appends a pixel buffer to the adaptor.

## Declaration

```objectivec
- (BOOL) appendPixelBuffer:(CVPixelBufferRef) pixelBuffer withPresentationTime:(CMTime) presentationTime;
```

## Parameters

- `pixelBuffer`: The pixel buffer to append.
- `presentationTime`: The pixel buffer’s presentation time. The time you specify is relative to the time you called [startSessionAtSourceTime:](../avassetwriter/startsession%28atsourcetime_%29.md) with.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the adaptor appends the pixel buffer; otherwise, [false](https://developer.apple.com/documentation/swift/false).
