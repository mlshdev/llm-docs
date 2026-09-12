> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessorframe/buffer](https://developer.apple.com/documentation/videotoolbox/vtframeprocessorframe/buffer)

# buffer (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

The pixel buffer specified when the object was created.

## Declaration

```swift
var buffer: CVPixelBuffer { get }
```

## See Also

### Inspecting the frame

- [presentationTimeStamp](presentationtimestamp.md): The presentation timestamp specified when the object was created.

# buffer (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

The pixel buffer specified when the object was created.

## Declaration

```objectivec
@property (nonatomic, readonly) CVPixelBufferRef buffer;
```

## See Also

### Inspecting the frame

- [presentationTimeStamp](presentationtimestamp.md): The presentation timestamp specified when the object was created.
