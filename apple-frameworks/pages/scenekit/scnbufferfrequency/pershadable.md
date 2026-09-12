> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbufferfrequency/pershadable](https://developer.apple.com/documentation/scenekit/scnbufferfrequency/pershadable)

# SCNBufferFrequency.perShadable (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Execute the binding handler once for each frame, for each node, for each material or geometry to be rendered using the shader.

## Declaration

```swift
case perShadable
```

<a id="Discussion"></a>

## Discussion

Use this option when the contents of the buffer should be specific to each geometry or material whose program property is set to this shader. For example, a material-specific buffer might contain information to be used in animating a texture.

## See Also

### Constants

- [SCNBufferFrequency.perFrame](perframe.md): Execute the binding handler once for each frame to be rendered using the shader.
- [SCNBufferFrequency.perNode](pernode.md): Execute the binding handler once for each frame, for each node to be rendered using the shader.

# SCNBufferFrequencyPerShadable (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Execute the binding handler once for each frame, for each node, for each material or geometry to be rendered using the shader.

## Declaration

```objectivec
SCNBufferFrequencyPerShadable
```

<a id="Discussion"></a>

## Discussion

Use this option when the contents of the buffer should be specific to each geometry or material whose program property is set to this shader. For example, a material-specific buffer might contain information to be used in animating a texture.

## See Also

### Constants

- [SCNBufferFrequencyPerFrame](perframe.md): Execute the binding handler once for each frame to be rendered using the shader.
- [SCNBufferFrequencyPerNode](pernode.md): Execute the binding handler once for each frame, for each node to be rendered using the shader.
