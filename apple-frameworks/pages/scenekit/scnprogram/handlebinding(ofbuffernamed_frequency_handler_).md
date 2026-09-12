> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogram/handlebinding(ofbuffernamed:frequency:handler:)](https://developer.apple.com/documentation/scenekit/scnprogram/handlebinding(ofbuffernamed:frequency:handler:))

# handleBinding(ofBufferNamed:frequency:handler:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Registers a block for SceneKit to call at render time for binding a Metal buffer to the shader program.

## Declaration

```swift
func handleBinding(ofBufferNamed name: String, frequency: SCNBufferFrequency, handler block: @escaping SCNBufferBindingBlock)
```

## Parameters

- `name`: The name identifying the buffer in Metal shader source code.
- `frequency`: An option specifying whether SceneKit calls the block only once per rendered frame or more frequently (for example, once for each object to be rendered).
- `block`: A block to be run when SceneKit prepares for rendering with the Metal shader.

<a id="Discussion"></a>

## Discussion

Use this method to associate a block with a Metal shader program to handle setup of a buffer used in that shader. SceneKit calls your block before rendering any objects whose [program](../scnshadable/program.md) property is set to this [SCNProgram](../scnprogram.md) object. In the block, use the [writeBytes(\_:count:)](../scnbufferstream/writebytes%28__count_%29.md) method to provide data for the buffer.

## See Also

### Providing Input for Metal Shaders

- [SCNBufferFrequency](../scnbufferfrequency.md): Options for how often SceneKit should execute the binding handler you provide with the [handleBinding(ofBufferNamed:frequency:handler:)](handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.
- [SCNBufferBindingBlock](../scnbufferbindingblock.md): A block SceneKit calls at render time for working with buffers in a Metal shader, used by the [handleBinding(ofBufferNamed:frequency:handler:)](handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.

# handleBindingOfBufferNamed:frequency:usingBlock: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Registers a block for SceneKit to call at render time for binding a Metal buffer to the shader program.

## Declaration

```objectivec
- (void) handleBindingOfBufferNamed:(NSString *) name frequency:(SCNBufferFrequency) frequency usingBlock:(SCNBufferBindingBlock) block;
```

## Parameters

- `name`: The name identifying the buffer in Metal shader source code.
- `frequency`: An option specifying whether SceneKit calls the block only once per rendered frame or more frequently (for example, once for each object to be rendered).
- `block`: A block to be run when SceneKit prepares for rendering with the Metal shader.

<a id="Discussion"></a>

## Discussion

Use this method to associate a block with a Metal shader program to handle setup of a buffer used in that shader. SceneKit calls your block before rendering any objects whose [program](../scnshadable/program.md) property is set to this [SCNProgram](../scnprogram.md) object. In the block, use the [writeBytes:length:](../scnbufferstream/writebytes%28__count_%29.md) method to provide data for the buffer.

## See Also

### Providing Input for Metal Shaders

- [SCNBufferFrequency](../scnbufferfrequency.md): Options for how often SceneKit should execute the binding handler you provide with the [handleBindingOfBufferNamed:frequency:usingBlock:](handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.
- [SCNBufferBindingBlock](../scnbufferbindingblock.md): A block SceneKit calls at render time for working with buffers in a Metal shader, used by the [handleBindingOfBufferNamed:frequency:usingBlock:](handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.
