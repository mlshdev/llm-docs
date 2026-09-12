> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbufferfrequency/perframe](https://developer.apple.com/documentation/scenekit/scnbufferfrequency/perframe)

# SCNBufferFrequency.perFrame (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Execute the binding handler once for each frame to be rendered using the shader.

## Declaration

```swift
case perFrame
```

<a id="Discussion"></a>

## Discussion

Use this option when the contents of the buffer should be uniform across all uses of the shader when rendering a single frame, no matter how many different nodes, geometries, and materials use the shader program.

## See Also

### Constants

- [SCNBufferFrequency.perNode](pernode.md): Execute the binding handler once for each frame, for each node to be rendered using the shader.
- [SCNBufferFrequency.perShadable](pershadable.md): Execute the binding handler once for each frame, for each node, for each material or geometry to be rendered using the shader.

# SCNBufferFrequencyPerFrame (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Execute the binding handler once for each frame to be rendered using the shader.

## Declaration

```objectivec
SCNBufferFrequencyPerFrame
```

<a id="Discussion"></a>

## Discussion

Use this option when the contents of the buffer should be uniform across all uses of the shader when rendering a single frame, no matter how many different nodes, geometries, and materials use the shader program.

## See Also

### Constants

- [SCNBufferFrequencyPerNode](pernode.md): Execute the binding handler once for each frame, for each node to be rendered using the shader.
- [SCNBufferFrequencyPerShadable](pershadable.md): Execute the binding handler once for each frame, for each node, for each material or geometry to be rendered using the shader.
