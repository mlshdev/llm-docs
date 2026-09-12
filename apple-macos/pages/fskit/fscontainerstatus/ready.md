> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontainerstatus/ready](https://developer.apple.com/documentation/fskit/fscontainerstatus/ready)

# ready (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

A status that represents a ready container with no error.

## Declaration

```swift
class var ready: FSContainerStatus { get }
```

<a id="discussion"></a>

## Discussion

This value is a [FSContainerStatus](../fscontainerstatus.md) with a [state](state.md) that is [ready](ready.md), and a [status](status.md) that is `nil`.

## See Also

### Using common status values

- [active](active.md): A status that represents an active container with no error.

# ready (Objective-C)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

A status that represents a ready container with no error.

## Declaration

```objectivec
@property (class, readonly) FSContainerStatus * ready;
```

<a id="discussion"></a>

## Discussion

This value is a [FSContainerStatus](../fscontainerstatus.md) with a [state](state.md) that is [ready](ready.md), and a [status](status.md) that is `nil`.

## See Also

### Using common status values

- [active](active.md): A status that represents an active container with no error.
