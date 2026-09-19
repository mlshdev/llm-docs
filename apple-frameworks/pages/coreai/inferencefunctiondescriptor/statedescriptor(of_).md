> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/inferencefunctiondescriptor/statedescriptor(of:)

# stateDescriptor(of:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the descriptor for the specified state.

## Declaration

```swift
func stateDescriptor(of stateName: String) -> InferenceValue.Descriptor?
```

## Parameters

- `stateName`: The name of the state.

<a id="return-value"></a>

## Return Value

The descriptor for the state, or `nil` if the function doesn’t have a state with the specified name.

## See Also

### Describing state

- [stateNames](statenames.md): The names of the function’s states.
