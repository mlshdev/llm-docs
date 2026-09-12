> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputtaggedpixelbuffergroupadaptor/appendtaggedbuffers(_:withpresentationtime:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinputtaggedpixelbuffergroupadaptor/appendtaggedbuffers(_:withpresentationtime:))

# appendTaggedBuffers(\_:withPresentationTime:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ (deprecated in 26.0) · iPadOS 17.0+ (deprecated in 26.0) · Mac Catalyst 17.0+ (deprecated in 26.0) · macOS 14.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Appends a tagged buffer group to the adaptor.

> Use AVAssetWriterInput.TaggedPixelBufferGroupReceiver.append(\_:with:isolation:) instead

## Declaration

```swift
func appendTaggedBuffers(_ taggedBuffers: [CMTaggedBuffer], withPresentationTime: CMTime) -> Bool
```

## See Also

### Appending pixel buffers

- [appendTaggedPixelBufferGroup(\_:withPresentationTime:)](appendtaggedpixelbuffergroup%28__withpresentationtime_%29.md): Deprecated. Appends a tagged buffer group to the adaptor.
