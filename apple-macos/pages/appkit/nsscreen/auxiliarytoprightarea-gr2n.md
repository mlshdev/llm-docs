> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/auxiliarytoprightarea-gr2n](https://developer.apple.com/documentation/appkit/nsscreen/auxiliarytoprightarea-gr2n)

# auxiliaryTopRightArea

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The unobscured portion of the top-right corner of the screen.

## Declaration

```swift
var auxiliaryTopRightArea: NSRect? { get }
```

<a id="Discussion"></a>

## Discussion

If the top inset of the screen’s [safeAreaInsets](safeareainsets.md) property contains a non-zero value, the rectangle in this property is the visible top-right portion of the screen.The rectangle is specified in global screen coordinates and lies outside the safe area. If the top portion of the screen isn’t obscured, the value of this property is `nil` in Swift; in Objective-C, the value is [NSZeroRect](https://developer.apple.com/documentation/foundation/nszerorect).

If your app offers a custom full-screen experience, use this property to determine what additional space is available for your custom content. The specified rectangle is safe to use to display your content.

## See Also

### Getting the Visible Portion of the Screen

- [visibleFrame](visibleframe.md): The current location and dimensions of the visible screen.
- [safeAreaInsets](safeareainsets.md): The distances from the screen’s edges at which content isn’t obscured.
- [auxiliaryTopLeftArea](auxiliarytopleftarea-uglc.md): The unobscured portion of the top-left corner of the screen.
