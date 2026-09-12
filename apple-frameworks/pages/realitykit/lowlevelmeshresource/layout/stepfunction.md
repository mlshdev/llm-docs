> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/layout/stepfunction](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/layout/stepfunction)

# stepFunction

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Determines how the vertex shader steps through the data in this layout.

## Declaration

```swift
var stepFunction: MTLVertexStepFunction { get set }
```

<a id="discussion"></a>

## Discussion

Set to `.perInstance` to supply per-instance data (for example, per-instance color or transform) from a vertex buffer rather than a separate instancing buffer. Defaults to `.perVertex`.

Corresponds to `MTLVertexBufferLayoutDescriptor.stepFunction`.

## See Also

### Configuring vertex stepping

- [stepRate](steprate.md): The number of instances that share the same per-instance vertex data.
