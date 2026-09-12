> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbufferfrequency](https://developer.apple.com/documentation/scenekit/scnbufferfrequency)

# SCNBufferFrequency (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for how often SceneKit should execute the binding handler you provide with the [handleBinding(ofBufferNamed:frequency:handler:)](scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.

## Declaration

```swift
enum SCNBufferFrequency
```

## Topics

### Constants

- [SCNBufferFrequency.perFrame](scnbufferfrequency/perframe.md): Execute the binding handler once for each frame to be rendered using the shader.
- [SCNBufferFrequency.perNode](scnbufferfrequency/pernode.md): Execute the binding handler once for each frame, for each node to be rendered using the shader.
- [SCNBufferFrequency.perShadable](scnbufferfrequency/pershadable.md): Execute the binding handler once for each frame, for each node, for each material or geometry to be rendered using the shader.

### Initializers

- [init(rawValue:)](scnbufferfrequency/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Providing Input for Metal Shaders

- [handleBinding(ofBufferNamed:frequency:handler:)](scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md): Registers a block for SceneKit to call at render time for binding a Metal buffer to the shader program.
- [SCNBufferBindingBlock](scnbufferbindingblock.md): A block SceneKit calls at render time for working with buffers in a Metal shader, used by the [handleBinding(ofBufferNamed:frequency:handler:)](scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.

# SCNBufferFrequency (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for how often SceneKit should execute the binding handler you provide with the [handleBindingOfBufferNamed:frequency:usingBlock:](scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.

## Declaration

```objectivec
enum SCNBufferFrequency : NSInteger;
```

## Topics

### Constants

- [SCNBufferFrequencyPerFrame](scnbufferfrequency/perframe.md): Execute the binding handler once for each frame to be rendered using the shader.
- [SCNBufferFrequencyPerNode](scnbufferfrequency/pernode.md): Execute the binding handler once for each frame, for each node to be rendered using the shader.
- [SCNBufferFrequencyPerShadable](scnbufferfrequency/pershadable.md): Execute the binding handler once for each frame, for each node, for each material or geometry to be rendered using the shader.

## See Also

### Providing Input for Metal Shaders

- [handleBindingOfBufferNamed:frequency:usingBlock:](scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md): Registers a block for SceneKit to call at render time for binding a Metal buffer to the shader program.
- [SCNBufferBindingBlock](scnbufferbindingblock.md): A block SceneKit calls at render time for working with buffers in a Metal shader, used by the [handleBindingOfBufferNamed:frequency:usingBlock:](scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.
