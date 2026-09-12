> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbufferbindingblock](https://developer.apple.com/documentation/scenekit/scnbufferbindingblock)

# SCNBufferBindingBlock (Swift)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A block SceneKit calls at render time for working with buffers in a Metal shader, used by the [handleBinding(ofBufferNamed:frequency:handler:)](scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.

## Declaration

```swift
typealias SCNBufferBindingBlock = (any SCNBufferStream, SCNNode, any SCNShadable, SCNRenderer) -> Void
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **buffer**: An object that provides write access to the buffer. Use the [writeBytes(\_:count:)](scnbufferstream/writebytes%28__count_%29.md) method on this object to write data for use by the shader.
- **node**: The node to be rendered using the shader program.
- **shadable**: The material or geometry to be rendered using the shader program.
- **renderer**: The view (or other SceneKit renderer) responsible for rendering.

## See Also

### Providing Input for Metal Shaders

- [handleBinding(ofBufferNamed:frequency:handler:)](scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md): Registers a block for SceneKit to call at render time for binding a Metal buffer to the shader program.
- [SCNBufferFrequency](scnbufferfrequency.md): Options for how often SceneKit should execute the binding handler you provide with the [handleBinding(ofBufferNamed:frequency:handler:)](scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.

# SCNBufferBindingBlock (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A block SceneKit calls at render time for working with buffers in a Metal shader, used by the [handleBindingOfBufferNamed:frequency:usingBlock:](scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.

## Declaration

```objectivec
typedef void (^)(id<SCNBufferStream>, SCNNode *, id<SCNShadable>, SCNRenderer *) SCNBufferBindingBlock;
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **buffer**: An object that provides write access to the buffer. Use the [writeBytes:length:](scnbufferstream/writebytes%28__count_%29.md) method on this object to write data for use by the shader.
- **node**: The node to be rendered using the shader program.
- **shadable**: The material or geometry to be rendered using the shader program.
- **renderer**: The view (or other SceneKit renderer) responsible for rendering.

## See Also

### Providing Input for Metal Shaders

- [handleBindingOfBufferNamed:frequency:usingBlock:](scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md): Registers a block for SceneKit to call at render time for binding a Metal buffer to the shader program.
- [SCNBufferFrequency](scnbufferfrequency.md): Options for how often SceneKit should execute the binding handler you provide with the [handleBindingOfBufferNamed:frequency:usingBlock:](scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.
