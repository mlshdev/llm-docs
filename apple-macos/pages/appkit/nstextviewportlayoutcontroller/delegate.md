> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewportlayoutcontroller/delegate](https://developer.apple.com/documentation/appkit/nstextviewportlayoutcontroller/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The delegate for the text layout manager object.

## Declaration

```swift
weak var delegate: (any NSTextViewportLayoutControllerDelegate)? { get set }
```

## See Also

### Responding to changes in viewport layout

- [NSTextViewportLayoutControllerDelegate](../nstextviewportlayoutcontrollerdelegate.md): Optional methods that delegates implement to respond to viewport layout changes.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The delegate for the text layout manager object.

## Declaration

```objectivec
@property (weak, nullable) id<NSTextViewportLayoutControllerDelegate> delegate;
```

## See Also

### Responding to changes in viewport layout

- [NSTextViewportLayoutControllerDelegate](../nstextviewportlayoutcontrollerdelegate.md): Optional methods that delegates implement to respond to viewport layout changes.
