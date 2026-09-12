> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/delegate](https://developer.apple.com/documentation/appkit/nsstackview/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The delegate object for the stack view.

## Declaration

```swift
weak var delegate: (any NSStackViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The system calls a delegate method when resizing has caused a view to be detached from or reattached to the stack view. For more information, see [NSStackViewDelegate](../nsstackviewdelegate.md).

## See Also

### Responding to Stack-Related Changes

- [NSStackViewDelegate](../nsstackviewdelegate.md): A set of methods you use to respond to a stack view detaching and reattaching views.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The delegate object for the stack view.

## Declaration

```objectivec
@property (weak, nullable) id<NSStackViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The system calls a delegate method when resizing has caused a view to be detached from or reattached to the stack view. For more information, see [NSStackViewDelegate](../nsstackviewdelegate.md).

## See Also

### Responding to Stack-Related Changes

- [NSStackViewDelegate](../nsstackviewdelegate.md): A set of methods you use to respond to a stack view detaching and reattaching views.
