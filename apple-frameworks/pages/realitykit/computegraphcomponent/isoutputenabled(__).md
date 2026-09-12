> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/isoutputenabled(_:)](https://developer.apple.com/documentation/realitykit/computegraphcomponent/isoutputenabled(_:))

# isOutputEnabled(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Reads the enabled state of an output identified by ID

## Declaration

```swift
func isOutputEnabled(_ outputID: ComputeNodeGraph.NodeID) -> Bool
```

<a id="return-value"></a>

## Return Value

The enabled state, or false if the output is unknown
