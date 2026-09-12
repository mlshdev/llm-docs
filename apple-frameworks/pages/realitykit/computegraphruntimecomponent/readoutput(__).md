> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphruntimecomponent/readoutput(_:)](https://developer.apple.com/documentation/realitykit/computegraphruntimecomponent/readoutput(_:))

# readOutput(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the output buffer for the port at the given address.

## Declaration

```swift
func readOutput(_ port: ComputeNodeGraph.Port.Address) -> (any MTLBuffer)?
```

## Parameters

- `port`: The port address of the output to read.

<a id="return-value"></a>

## Return Value

The `MTLBuffer` for that port, or `nil` if not found.
