> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/setoutputenabled(_:enabled:)](https://developer.apple.com/documentation/computegraph/computegraphsimulation/setoutputenabled(_:enabled:))

# setOutputEnabled(\_:enabled:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Enables or disables execution of the provided output stage, without disabling the system it represents.

## Declaration

```swift
final func setOutputEnabled(_ outputID: Int, enabled: Bool)
```

## Parameters

- `outputID`: The node identifier of the output to enable or disable.
- `enabled`: `true` to simulate the output; `false` to omit it.

<a id="discussion"></a>

## Discussion

Disabling an output is useful when you want to switch between multiple outputs for the simulation, for example two outputs with different topologies for the same elements.
