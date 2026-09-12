> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunctiondescriptor/statenames](https://developer.apple.com/documentation/coreai/inferencefunctiondescriptor/statenames)

# stateNames

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The names of the function’s states.

## Declaration

```swift
var stateNames: [String] { get }
```

<a id="discussion"></a>

## Discussion

States are function arguments that the function both reads and writes during inference. You must provide a mutable view for every state when calling [run(inputs:states:outputViews:)](../inferencefunction/run%28inputs_states_outputviews_%29-14emi.md).

## See Also

### Describing state

- [stateDescriptor(of:)](statedescriptor%28of_%29.md): Returns the descriptor for the specified state.
