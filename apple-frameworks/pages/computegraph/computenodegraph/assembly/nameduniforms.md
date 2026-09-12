> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/assembly/nameduniforms](https://developer.apple.com/documentation/computegraph/computenodegraph/assembly/nameduniforms)

# namedUniforms

**Framework:** Compute Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Uniforms that are named and exposed as parameters of this graph, keyed by name.

## Declaration

```swift
var namedUniforms: [String : ComputeNodeGraph.Assembly.UniformBinding] { get }
```

<a id="discussion"></a>

## Discussion

Unlike [sharedUniforms](shareduniforms.md), named uniforms are local to this graph and not shared with other graphs.
