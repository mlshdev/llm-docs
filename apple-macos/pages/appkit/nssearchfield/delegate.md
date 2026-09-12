> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfield/delegate](https://developer.apple.com/documentation/appkit/nssearchfield/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The delegate for the search field, or `nil` if the search field doesn’t have a delegate.

## Declaration

```swift
weak var delegate: (any NSSearchFieldDelegate)? { get set }
```

## See Also

### Managing Search

- [NSSearchFieldDelegate](../nssearchfielddelegate.md): A protocol that a search field delegate can use to determine when a search started or ended.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The delegate for the search field, or `nil` if the search field doesn’t have a delegate.

## Declaration

```objectivec
@property (weak, nullable) id<NSSearchFieldDelegate> delegate;
```

## See Also

### Managing Search

- [NSSearchFieldDelegate](../nssearchfielddelegate.md): A protocol that a search field delegate can use to determine when a search started or ended.
