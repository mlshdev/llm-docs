> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel/newstate](https://developer.apple.com/documentation/coreml/mlmodel/newstate)

# newState

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a new state object.

## Declaration

```objectivec
- (MLState *) newState;
```

<a id="discussion"></a>

## Discussion

Core ML framework will allocate the state buffers declared in the model.

The allocated state buffers are initialized to zeros. To initialize with different values, use `.withMultiArray(for:)` to get the mutable `MLMultiArray`-view to the state buffer.

It returns an empty state when the model is stateless. One can use the empty state with stateful prediction functions such as `prediction(from:using:)` and those predictions will be stateless. This simplifies the call site which may or may not use a stateful model.

```swift
// Create state that contains two state buffers: s1 and s2.
// Then, initialize s1 to 1.0 and s2 to 2.0.
let state = model.newState()
state.withMultiArray(for: "s1") { stateMultiArray in
    stateMultiArray[0] = 1.0
}
state.withMultiArray(for: "s2") { stateMultiArray in
    stateMultiArray[0] = 2.0
}
```
