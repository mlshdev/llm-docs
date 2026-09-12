> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessorconfiguration/sourcepixelbufferattributes](https://developer.apple.com/documentation/videotoolbox/vtframeprocessorconfiguration/sourcepixelbufferattributes)

# sourcePixelBufferAttributes (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

A dictionary of pixel buffer attributes that define what the source and reference frames passed to the processor must conform to.

## Declaration

```swift
var sourcePixelBufferAttributes: [String : any Sendable] { get }
```

## See Also

### Inspecting pixel buffer attributes

- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes that define which output frames passed to the processor must conform to.

# sourcePixelBufferAttributes (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

A dictionary of pixel buffer attributes that define what the source and reference frames passed to the processor must conform to.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,id> * sourcePixelBufferAttributes;
```

## See Also

### Inspecting pixel buffer attributes

- [destinationPixelBufferAttributes](destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes that define which output frames passed to the processor must conform to.
- [frameSupportedPixelFormats](framesupportedpixelformats.md): A list of supported pixel formats for the current configuration.
