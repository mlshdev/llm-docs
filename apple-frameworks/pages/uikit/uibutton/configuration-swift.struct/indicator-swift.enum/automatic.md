> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configuration-swift.struct/indicator-swift.enum/automatic](https://developer.apple.com/documentation/uikit/uibutton/configuration-swift.struct/indicator-swift.enum/automatic)

# UIButton.Configuration.Indicator.automatic

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS

A constant that automatically determines an indicator style according to the button’s properties.

## Declaration

```swift
case automatic
```

<a id="Discussion"></a>

## Discussion

With this behavior, the system automatically shows an indicator if the button shows a menu and has single-selection behavior (when its [isContextMenuInteractionEnabled](../../../uicontrol/iscontextmenuinteractionenabled.md), [showsMenuAsPrimaryAction](../../../uicontrol/showsmenuasprimaryaction.md), and [changesSelectionAsPrimaryAction](../../changesselectionasprimaryaction.md) properties are [true](https://developer.apple.com/documentation/swift/true)).

## See Also

### Indicator styles

- [UIButton.Configuration.Indicator.none](none.md): A constant that doesn’t show an indicator.
- [UIButton.Configuration.Indicator.popup](popup.md): A constant that shows a popup-style indicator.
