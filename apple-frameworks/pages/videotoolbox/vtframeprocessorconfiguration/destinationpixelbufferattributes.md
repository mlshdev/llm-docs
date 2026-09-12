> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessorconfiguration/destinationpixelbufferattributes](https://developer.apple.com/documentation/videotoolbox/vtframeprocessorconfiguration/destinationpixelbufferattributes)

# destinationPixelBufferAttributes (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

A dictionary of pixel buffer attributes that define which output frames passed to the processor must conform to.

## Declaration

```swift
var destinationPixelBufferAttributes: [String : any Sendable] { get }
```

## See Also

### Inspecting pixel buffer attributes

- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes that define what the source and reference frames passed to the processor must conform to.

# destinationPixelBufferAttributes (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

A dictionary of pixel buffer attributes that define which output frames passed to the processor must conform to.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,id> * destinationPixelBufferAttributes;
```

## See Also

### Inspecting pixel buffer attributes

- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes that define what the source and reference frames passed to the processor must conform to.
- [frameSupportedPixelFormats](framesupportedpixelformats.md): A list of supported pixel formats for the current configuration.
