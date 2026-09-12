> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextviewportlayoutcontroller/delegate](https://developer.apple.com/documentation/uikit/nstextviewportlayoutcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The delegate for the text layout manager object.

## Declaration

```swift
weak var delegate: (any NSTextViewportLayoutControllerDelegate)? { get set }
```

## See Also

### Responding to changes in viewport layout

- [NSTextViewportLayoutControllerDelegate](../nstextviewportlayoutcontrollerdelegate.md): Optional methods that delegates implement to respond to viewport layout changes.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The delegate for the text layout manager object.

## Declaration

```objectivec
@property (weak, nullable) id<NSTextViewportLayoutControllerDelegate> delegate;
```

## See Also

### Responding to changes in viewport layout

- [NSTextViewportLayoutControllerDelegate](../nstextviewportlayoutcontrollerdelegate.md): Optional methods that delegates implement to respond to viewport layout changes.
