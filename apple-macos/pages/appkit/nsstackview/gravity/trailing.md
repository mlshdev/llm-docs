> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/gravity/trailing](https://developer.apple.com/documentation/appkit/nsstackview/gravity/trailing)

# trailing (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

The leftmost or rightmost gravity area in a horizontally oriented stack view, based on the user interface language or the explicitly set user interface layout direction.

## Declaration

```swift
static var trailing: NSStackView.Gravity { get }
```

<a id="Discussion"></a>

## Discussion

For a left to right layout direction, the trailing gravity area is on the right. Use only when the value of the [orientation](../orientation.md) property is [NSUserInterfaceLayoutOrientation.horizontal](../../nsuserinterfacelayoutorientation/horizontal.md).

## See Also

### Constants

- [NSStackView.Gravity.top](top.md): The topmost gravity area in a vertically oriented stack view.
- [leading](leading.md): The leftmost or rightmost gravity area in a horizontally oriented stack view, based on the user interface language or the explicitly set user interface layout direction.
- [NSStackView.Gravity.center](center.md): The center gravity area, regardless of stack view layout direction or user interface language.
- [NSStackView.Gravity.bottom](bottom.md): The bottommost gravity area in a vertically oriented stack view.

# NSStackViewGravityTrailing (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.9+

The leftmost or rightmost gravity area in a horizontally oriented stack view, based on the user interface language or the explicitly set user interface layout direction.

## Declaration

```objectivec
NSStackViewGravityTrailing
```

<a id="Discussion"></a>

## Discussion

For a left to right layout direction, the trailing gravity area is on the right. Use only when the value of the [orientation](../orientation.md) property is [NSUserInterfaceLayoutOrientationHorizontal](../../nsuserinterfacelayoutorientation/horizontal.md).

## See Also

### Constants

- [NSStackViewGravityTop](top.md): The topmost gravity area in a vertically oriented stack view.
- [NSStackViewGravityLeading](leading.md): The leftmost or rightmost gravity area in a horizontally oriented stack view, based on the user interface language or the explicitly set user interface layout direction.
- [NSStackViewGravityCenter](center.md): The center gravity area, regardless of stack view layout direction or user interface language.
- [NSStackViewGravityBottom](bottom.md): The bottommost gravity area in a vertically oriented stack view.
