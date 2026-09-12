> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlayer/displayedreadonlypixelbuffer()](https://developer.apple.com/documentation/avfoundation/avplayerlayer/displayedreadonlypixelbuffer())

# displayedReadOnlyPixelBuffer()

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the pixel buffer which is currently being displayed.

## Declaration

```swift
func displayedReadOnlyPixelBuffer() -> CVReadOnlyPixelBuffer?
```

<a id="return-value"></a>

## Return Value

A CVReadOnlyPixelBuffer object.

<a id="discussion"></a>

## Discussion

CVReadOnlyPixelBuffer can be nil if the current player’s rate is non-zero, displayed pixel buffer is protected, no image is currently being displayed, or if the image is unavailable.

## See Also

### Processing pixel buffers

- [pixelBufferAttributes](pixelbufferattributes.md): The attributes of the visual output that displays in the player layer during playback.
- [displayedPixelBuffer()](displayedpixelbuffer%28%29.md): Deprecated. Returns the pixel buffer that the player layer currently displays.
