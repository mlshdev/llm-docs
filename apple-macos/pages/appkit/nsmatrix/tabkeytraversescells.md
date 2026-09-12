> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/tabkeytraversescells](https://developer.apple.com/documentation/appkit/nsmatrix/tabkeytraversescells)

# tabKeyTraversesCells (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether pressing the Tab key advances the key cell to the next selectable cell.

## Declaration

```swift
var tabKeyTraversesCells: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), pressing the Tab key should advance the key cell to the next selectable cell in the receiver. When the value of this property is [false](https://developer.apple.com/documentation/swift/false) or if there aren’t any selectable cells after the current one, the next view in the window becomes key when the user presses the Tab key.

Pressing Shift-Tab causes the key cell to advance in the opposite direction (if the value of this property is [false](https://developer.apple.com/documentation/swift/false), or if there aren’t any selectable cells before the current one, the previous view in the window becomes key).

## See Also

### Related Documentation

- [selectKeyView(following:)](../nswindow/selectkeyview%28following_%29.md): Gives key view status to the view that follows the given view.
- [keyCell](keycell.md): The cell that will be clicked when the user presses the Space bar.
- [selectNextKeyView(\_:)](../nswindow/selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.

# tabKeyTraversesCells (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether pressing the Tab key advances the key cell to the next selectable cell.

## Declaration

```objectivec
@property BOOL tabKeyTraversesCells;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), pressing the Tab key should advance the key cell to the next selectable cell in the receiver. When the value of this property is [false](https://developer.apple.com/documentation/swift/false) or if there aren’t any selectable cells after the current one, the next view in the window becomes key when the user presses the Tab key.

Pressing Shift-Tab causes the key cell to advance in the opposite direction (if the value of this property is [false](https://developer.apple.com/documentation/swift/false), or if there aren’t any selectable cells before the current one, the previous view in the window becomes key).

## See Also

### Related Documentation

- [selectKeyViewFollowingView:](../nswindow/selectkeyview%28following_%29.md): Gives key view status to the view that follows the given view.
- [keyCell](keycell.md): The cell that will be clicked when the user presses the Space bar.
- [selectNextKeyView:](../nswindow/selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
