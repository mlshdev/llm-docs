> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontainerstatus/active](https://developer.apple.com/documentation/fskit/fscontainerstatus/active)

# active (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

A status that represents an active container with no error.

## Declaration

```swift
class var active: FSContainerStatus { get }
```

<a id="discussion"></a>

## Discussion

This value is a [FSContainerStatus](../fscontainerstatus.md) with a [state](state.md) that is [active](active.md), and has a [status](status.md) that is `nil`.

## See Also

### Using common status values

- [ready](ready.md): A status that represents a ready container with no error.

# active (Objective-C)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

A status that represents an active container with no error.

## Declaration

```objectivec
@property (class, readonly) FSContainerStatus * active;
```

<a id="discussion"></a>

## Discussion

This value is a [FSContainerStatus](../fscontainerstatus.md) with a [state](state.md) that is [active](active.md), and has a [status](status.md) that is `nil`.

## See Also

### Using common status values

- [ready](ready.md): A status that represents a ready container with no error.
