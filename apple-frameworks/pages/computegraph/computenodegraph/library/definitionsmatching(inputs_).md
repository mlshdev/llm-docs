> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/library/definitionsmatching(inputs:)](https://developer.apple.com/documentation/computegraph/computenodegraph/library/definitionsmatching(inputs:))

# definitionsMatching(inputs:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Returns all definitions whose user-editable inputs, in order, match the given value types.

## Declaration

```swift
final func definitionsMatching(inputs inputTypes: [ComputeNodeGraph.ValueType]) -> [ComputeNodeGraph.NodeDefinition]
```

<a id="discussion"></a>

## Discussion

Non-user-editable inputs (framework-injected contexts, state bindings, etc.) are skipped when comparing the input sequence — callers pass only the user-visible types.
