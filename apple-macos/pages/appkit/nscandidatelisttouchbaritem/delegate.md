> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscandidatelisttouchbaritem/delegate](https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritem/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The delegate of the candidate list item.

## Declaration

```swift
weak var delegate: (any NSCandidateListTouchBarItemDelegate)? { get set }
```

## See Also

### Providing a client and a delegate

- [client](client.md): The client object for the candidate list item.
- [NSCandidateListTouchBarItemDelegate](../nscandidatelisttouchbaritemdelegate.md): A set of methods that a candidate list item delegate uses to enable selection state and list visibility.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The delegate of the candidate list item.

## Declaration

```objectivec
@property (weak, nullable) id<NSCandidateListTouchBarItemDelegate> delegate;
```

## See Also

### Providing a client and a delegate

- [client](client.md): The client object for the candidate list item.
- [NSCandidateListTouchBarItemDelegate](../nscandidatelisttouchbaritemdelegate.md): A set of methods that a candidate list item delegate uses to enable selection state and list visibility.
