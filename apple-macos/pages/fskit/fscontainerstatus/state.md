> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fscontainerstatus/state

# state (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A value that represents the container state, such as ready, active, or blocked.

## Declaration

```swift
var state: FSContainerState { get }
```

## See Also

### Inspecting status properties

- [FSContainerState](../fscontainerstate.md): An enumeration of container state values.
- [status](status.md): An optional error that provides further information about the state.

# state (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A value that represents the container state, such as ready, active, or blocked.

## Declaration

```objectivec
@property (readonly) FSContainerState state;
```

## See Also

### Inspecting status properties

- [FSContainerState](../fscontainerstate.md): An enumeration of container state values.
- [status](status.md): An optional error that provides further information about the state.
