> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontainerstatus/status](https://developer.apple.com/documentation/fskit/fscontainerstatus/status)

# status (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

An optional error that provides further information about the state.

## Declaration

```swift
var status: (any Error)? { get }
```

## See Also

### Inspecting status properties

- [state](state.md): A value that represents the container state, such as ready, active, or blocked.
- [FSContainerState](../fscontainerstate.md): An enumeration of container state values.

# status (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

An optional error that provides further information about the state.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSError * status;
```

## See Also

### Inspecting status properties

- [state](state.md): A value that represents the container state, such as ready, active, or blocked.
- [FSContainerState](../fscontainerstate.md): An enumeration of container state values.
