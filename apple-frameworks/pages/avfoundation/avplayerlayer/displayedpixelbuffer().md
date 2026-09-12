> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlayer/displayedpixelbuffer()](https://developer.apple.com/documentation/avfoundation/avplayerlayer/displayedpixelbuffer())

# displayedPixelBuffer() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · tvOS 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns the pixel buffer that the player layer currently displays.

## Declaration

```swift
func displayedPixelBuffer() -> CVPixelBuffer?
```

<a id="return-value"></a>

## Return Value

The currently displayed pixel buffer, or `nil` if one isn’t available.

<a id="Discussion"></a>

## Discussion

This method only returns an image when playback is in a paused state, and otherwise returns `nil`. It also returns `nil` when displaying protected content or if the layer isn’t currently displaying an image.

## See Also

### Processing pixel buffers

- [pixelBufferAttributes](pixelbufferattributes.md): The attributes of the visual output that displays in the player layer during playback.
- [displayedReadOnlyPixelBuffer()](displayedreadonlypixelbuffer%28%29.md): Returns the pixel buffer which is currently being displayed.

# copyDisplayedPixelBuffer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the pixel buffer that the player layer currently displays.

## Declaration

```objectivec
- (CVPixelBufferRef) copyDisplayedPixelBuffer;
```

<a id="return-value"></a>

## Return Value

The currently displayed pixel buffer, or `nil` if one isn’t available.

<a id="Discussion"></a>

## Discussion

This method only returns an image when playback is in a paused state, and otherwise returns `nil`. It also returns `nil` when displaying protected content or if the layer isn’t currently displaying an image.

## See Also

### Processing pixel buffers

- [pixelBufferAttributes](pixelbufferattributes.md): The attributes of the visual output that displays in the player layer during playback.
