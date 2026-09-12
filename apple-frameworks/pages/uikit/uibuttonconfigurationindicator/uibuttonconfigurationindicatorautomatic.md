> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibuttonconfigurationindicator/uibuttonconfigurationindicatorautomatic](https://developer.apple.com/documentation/uikit/uibuttonconfigurationindicator/uibuttonconfigurationindicatorautomatic)

# UIButtonConfigurationIndicatorAutomatic

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A constant that automatically determines an indicator style according to the button’s properties.

## Declaration

```objectivec
UIButtonConfigurationIndicatorAutomatic
```

<a id="Discussion"></a>

## Discussion

With this behavior, the system automatically shows an indicator if the button shows a menu and has single-selection behavior (when its [contextMenuInteractionEnabled](../uicontrol/iscontextmenuinteractionenabled.md), [showsMenuAsPrimaryAction](../uicontrol/showsmenuasprimaryaction.md), and [changesSelectionAsPrimaryAction](../uibutton/changesselectionasprimaryaction.md) properties are [true](https://developer.apple.com/documentation/swift/true)).

## See Also

### Indicator styles

- [UIButtonConfigurationIndicatorNone](uibuttonconfigurationindicatornone.md): A constant that doesn’t show an indicator.
- [UIButtonConfigurationIndicatorPopup](uibuttonconfigurationindicatorpopup.md): A constant that shows a popup-style indicator.
