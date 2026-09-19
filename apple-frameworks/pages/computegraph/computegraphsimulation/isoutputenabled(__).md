> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/computegraphsimulation/isoutputenabled(_:)

# isOutputEnabled(\_:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Returns whether the specified output is currently enabled for simulation.

## Declaration

```swift
final func isOutputEnabled(_ outputID: Int) -> Bool
```

## Parameters

- `outputID`: The node identifier of the output to query.

<a id="return-value"></a>

## Return Value

`true` if the output is simulated; `false` if it is disabled.
