> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlayer/pixelbufferattributes](https://developer.apple.com/documentation/avfoundation/avplayerlayer/pixelbufferattributes)

# pixelBufferAttributes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The attributes of the visual output that displays in the player layer during playback.

## Declaration

```swift
var pixelBufferAttributes: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to customize the format of the pixel buffers that the player layer vends.

## See Also

### Processing pixel buffers

- [displayedPixelBuffer()](displayedpixelbuffer%28%29.md): Deprecated. Returns the pixel buffer that the player layer currently displays.
- [displayedReadOnlyPixelBuffer()](displayedreadonlypixelbuffer%28%29.md): Returns the pixel buffer which is currently being displayed.

# pixelBufferAttributes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The attributes of the visual output that displays in the player layer during playback.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<NSString *,id> * pixelBufferAttributes;
```

<a id="Discussion"></a>

## Discussion

Use this property to customize the format of the pixel buffers that the player layer vends.

## See Also

### Processing pixel buffers

- [copyDisplayedPixelBuffer](displayedpixelbuffer%28%29.md): Deprecated. Returns the pixel buffer that the player layer currently displays.
