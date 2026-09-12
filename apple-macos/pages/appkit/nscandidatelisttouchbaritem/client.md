> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscandidatelisttouchbaritem/client](https://developer.apple.com/documentation/appkit/nscandidatelisttouchbaritem/client)

# client (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The client object for the candidate list item.

## Declaration

```swift
weak var client: (any NSView & NSTextInputClient)? { get set }
```

<a id="Discussion"></a>

## Discussion

This object must be a subclass of [NSView](../nsview.md) and adopt the [NSTextInputClient](../nstextinputclient.md) protocol.

The candidate list item uses this property to show completion candidates as users enter text. You can disable this behavior with the [allowsTextInputContextCandidates](allowstextinputcontextcandidates.md) property.

## See Also

### Providing a client and a delegate

- [delegate](delegate.md): The delegate of the candidate list item.
- [NSCandidateListTouchBarItemDelegate](../nscandidatelisttouchbaritemdelegate.md): A set of methods that a candidate list item delegate uses to enable selection state and list visibility.

# client (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The client object for the candidate list item.

## Declaration

```objectivec
@property (weak, nullable) NSView<NSTextInputClient> * client;
```

<a id="Discussion"></a>

## Discussion

This object must be a subclass of [NSView](../nsview.md) and adopt the [NSTextInputClient](../nstextinputclient.md) protocol.

The candidate list item uses this property to show completion candidates as users enter text. You can disable this behavior with the [allowsTextInputContextCandidates](allowstextinputcontextcandidates.md) property.

## See Also

### Providing a client and a delegate

- [delegate](delegate.md): The delegate of the candidate list item.
- [NSCandidateListTouchBarItemDelegate](../nscandidatelisttouchbaritemdelegate.md): A set of methods that a candidate list item delegate uses to enable selection state and list visibility.
