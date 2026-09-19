> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmesh/layout/stepfunction

# stepFunction

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Determines how the vertex shader steps through the data in this layout.

## Declaration

```swift
var stepFunction: MTLVertexStepFunction
```

<a id="discussion"></a>

## Discussion

Set to `.perInstance` to supply per-instance data (for example, per-instance color) from a vertex buffer. Defaults to `.perVertex`.

## See Also

### Configuring vertex stepping

- [stepRate](steprate.md): The number of instances that share the same per-instance vertex data.
