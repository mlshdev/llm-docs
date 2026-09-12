> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputtaggedpixelbuffergroupadaptor/appendtaggedpixelbuffergroup(_:withpresentationtime:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinputtaggedpixelbuffergroupadaptor/appendtaggedpixelbuffergroup(_:withpresentationtime:))

# appendTaggedPixelBufferGroup(\_:withPresentationTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Appends a tagged buffer group to the adaptor.

> Use AVAssetWriter.inputTaggedPixelBufferGroupReceiver(for:pixelBufferAttributes:) instead

## Declaration

```swift
func appendTaggedPixelBufferGroup(_ taggedPixelBufferGroup: __CMTaggedBufferGroup, withPresentationTime presentationTime: CMTime) -> Bool
```

## See Also

### Appending pixel buffers

- [appendTaggedBuffers(\_:withPresentationTime:)](appendtaggedbuffers%28__withpresentationtime_%29.md): Deprecated. Appends a tagged buffer group to the adaptor.

# appendTaggedPixelBufferGroup:withPresentationTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Appends a tagged buffer group to the adaptor.

## Declaration

```objectivec
- (BOOL) appendTaggedPixelBufferGroup:(CMTaggedBufferGroupRef) taggedPixelBufferGroup withPresentationTime:(CMTime) presentationTime;
```
