> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlgroupstyle/navigation](https://developer.apple.com/documentation/swiftui/controlgroupstyle/navigation)

# navigation

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The navigation control group style.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var navigation: NavigationControlGroupStyle { get }
```

<a id="discussion"></a>

## Discussion

Use this style to group controls related to navigation, such as back/forward buttons or timeline navigation controls.

The navigation control group style can vary by platform. On iOS, it renders as individual borderless buttons, while on macOS, it displays as a separated momentary segmented control.

To apply this style to a control group or to a view that contains a control group, use the [controlGroupStyle(\_:)](../view/controlgroupstyle%28__%29.md) modifier.

## See Also

### Getting built-in control group styles

- [automatic](automatic.md): Conforms when `Self` is `AutomaticControlGroupStyle`. The default control group style.
- [compactMenu](compactmenu.md): Conforms when `Self` is `CompactMenuControlGroupStyle`. A control group style that presents its content as a compact menu when the user presses the control, or as a submenu when nested within a larger menu.
- [menu](menu.md): Conforms when `Self` is `MenuControlGroupStyle`. A control group style that presents its content as a menu when the user presses the control, or as a submenu when nested within a larger menu.
- [palette](palette.md): Conforms when `Self` is `PaletteControlGroupStyle`. A control group style that presents its content as a palette.
