> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlgroupstyle/menu](https://developer.apple.com/documentation/swiftui/controlgroupstyle/menu)

# menu

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 17.0+ · visionOS 1.0+

A control group style that presents its content as a menu when the user presses the control, or as a submenu when nested within a larger menu.

## Declaration

```swift
@export(implementation) nonisolated static var menu: MenuControlGroupStyle { get }
```

<a id="discussion"></a>

## Discussion

To apply this style to a control group, or to a view that contains control groups, use the [controlGroupStyle(\_:)](../view/controlgroupstyle%28__%29.md) modifier.

## See Also

### Getting built-in control group styles

- [automatic](automatic.md): Conforms when `Self` is `AutomaticControlGroupStyle`. The default control group style.
- [compactMenu](compactmenu.md): Conforms when `Self` is `CompactMenuControlGroupStyle`. A control group style that presents its content as a compact menu when the user presses the control, or as a submenu when nested within a larger menu.
- [navigation](navigation.md): Conforms when `Self` is `NavigationControlGroupStyle`. The navigation control group style.
- [palette](palette.md): Conforms when `Self` is `PaletteControlGroupStyle`. A control group style that presents its content as a palette.
