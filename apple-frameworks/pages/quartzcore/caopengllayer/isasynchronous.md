> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caopengllayer/isasynchronous](https://developer.apple.com/documentation/quartzcore/caopengllayer/isasynchronous)

# isAsynchronous (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Determines when the contents of the layer are updated.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var isAsynchronous: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false), the contents of the layer are updated only in response to receiving a [setNeedsDisplay()](../calayer/setneedsdisplay%28%29.md) message. When [true](https://developer.apple.com/documentation/swift/true), the receiver’s [canDraw(inCGLContext:pixelFormat:forLayerTime:displayTime:)](candraw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md) is called periodically to determine if the OpenGL content should be updated.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Drawing Layer Content

- [canDraw(inCGLContext:pixelFormat:forLayerTime:displayTime:)](candraw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Returns whether the receiver should draw OpenGL content for the specified time.
- [draw(inCGLContext:pixelFormat:forLayerTime:displayTime:)](draw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Draws the OpenGL content for the specified time.

# asynchronous (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.14)

Determines when the contents of the layer are updated.

> OpenGL is deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (getter=isAsynchronous) BOOL asynchronous;
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false), the contents of the layer are updated only in response to receiving a [setNeedsDisplay](../calayer/setneedsdisplay%28%29.md) message. When [true](https://developer.apple.com/documentation/swift/true), the receiver’s [canDrawInCGLContext:pixelFormat:forLayerTime:displayTime:](candraw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md) is called periodically to determine if the OpenGL content should be updated.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Drawing Layer Content

- [canDrawInCGLContext:pixelFormat:forLayerTime:displayTime:](candraw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Returns whether the receiver should draw OpenGL content for the specified time.
- [drawInCGLContext:pixelFormat:forLayerTime:displayTime:](draw%28incglcontext_pixelformat_forlayertime_displaytime_%29.md): Deprecated. Draws the OpenGL content for the specified time.
