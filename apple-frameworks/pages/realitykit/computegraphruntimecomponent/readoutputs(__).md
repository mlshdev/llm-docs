> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/computegraphruntimecomponent/readoutputs(_:)

# readOutputs(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns all output buffers for the given output node.

## Declaration

```swift
func readOutputs(_ node: ComputeNodeGraph.NodeID) -> [any MTLBuffer]?
```

## Parameters

- `node`: The node identifier whose output buffers should be read.

<a id="return-value"></a>

## Return Value

An array of `MTLBuffer` objects, or `nil` if the node identifier is invalid or no output buffers are found.
