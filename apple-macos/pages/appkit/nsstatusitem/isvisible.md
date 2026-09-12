> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/isvisible](https://developer.apple.com/documentation/appkit/nsstatusitem/isvisible)

# isVisible (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value indicating if the menu bar currently displays the status item.

## Declaration

```swift
var isVisible: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property either shows or hides the status item within the menu bar. The item’s visiblity may also change if the user removes the item manually, and you can watch for changes in visibility using key-value observation. The status item’s visiblity persists and restores automatically based on the value of [autosaveName](autosavename-swift.property.md).

This property returns [true](https://developer.apple.com/documentation/swift/true) even if the status item is temporarily hidden due to insufficient space in the menu bar. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the status item’s appearance

- [length](length.md): The amount of space in the status bar that should be allocated to the status item.
- [squareLength](squarelength.md): A status item length that is equal to the status bar’s thickness.
- [variableLength](variablelength.md): A status item length that dynamically adjusts to the width of its contents.
- [view](view.md): The custom view the status item displays at its position in the status bar.

# visible (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value indicating if the menu bar currently displays the status item.

## Declaration

```objectivec
@property (assign, getter=isVisible) BOOL visible;
```

<a id="Discussion"></a>

## Discussion

Setting this property either shows or hides the status item within the menu bar. The item’s visiblity may also change if the user removes the item manually, and you can watch for changes in visibility using key-value observation. The status item’s visiblity persists and restores automatically based on the value of [autosaveName](autosavename-swift.property.md).

This property returns [true](https://developer.apple.com/documentation/swift/true) even if the status item is temporarily hidden due to insufficient space in the menu bar. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the status item’s appearance

- [length](length.md): The amount of space in the status bar that should be allocated to the status item.
- [NSSquareStatusItemLength](squarelength.md): A status item length that is equal to the status bar’s thickness.
- [NSVariableStatusItemLength](variablelength.md): A status item length that dynamically adjusts to the width of its contents.
- [view](view.md): The custom view the status item displays at its position in the status bar.
