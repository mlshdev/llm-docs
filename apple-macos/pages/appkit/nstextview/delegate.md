> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/delegate](https://developer.apple.com/documentation/appkit/nstextview/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The delegate for all text views sharing the receiver’s layout manager.

## Declaration

```swift
weak var delegate: (any NSTextViewDelegate)? { get set }
```

## See Also

### Managing the text view’s content

- [NSTextViewDelegate](../nstextviewdelegate.md): A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The delegate for all text views sharing the receiver’s layout manager.

## Declaration

```objectivec
@property (weak, nullable) id<NSTextViewDelegate> delegate;
```

## See Also

### Managing the text view’s content

- [NSTextViewDelegate](../nstextviewdelegate.md): A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.
