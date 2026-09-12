> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/assembly/shareduniforms](https://developer.apple.com/documentation/computegraph/computenodegraph/assembly/shareduniforms)

# sharedUniforms

**Framework:** Compute Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Uniforms that are shared across multiple graphs, keyed by typeName.

## Declaration

```swift
var sharedUniforms: [String : ComputeNodeGraph.Assembly.UniformBinding] { get }
```

<a id="discussion"></a>

## Discussion

Shared uniforms are stored globally and copied into each simulation’s uniform buffer before GPU execution. Use them for scene-wide values that many simulations read, such as transform matrices, attractors, or colliders.
