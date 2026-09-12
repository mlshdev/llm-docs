> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlgroupstyle/automatic](https://developer.apple.com/documentation/swiftui/controlgroupstyle/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The default control group style.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var automatic: AutomaticControlGroupStyle { get }
```

<a id="discussion"></a>

## Discussion

The default control group style can vary by platform. By default, both platforms use a momentary segmented control style that’s appropriate for the environment in which it is rendered.

You can override a control group’s style. To apply the default style to a control group or to a view that contains a control group, use the [controlGroupStyle(\_:)](../view/controlgroupstyle%28__%29.md) modifier.

## See Also

### Getting built-in control group styles

- [compactMenu](compactmenu.md): Conforms when `Self` is `CompactMenuControlGroupStyle`. A control group style that presents its content as a compact menu when the user presses the control, or as a submenu when nested within a larger menu.
- [menu](menu.md): Conforms when `Self` is `MenuControlGroupStyle`. A control group style that presents its content as a menu when the user presses the control, or as a submenu when nested within a larger menu.
- [navigation](navigation.md): Conforms when `Self` is `NavigationControlGroupStyle`. The navigation control group style.
- [palette](palette.md): Conforms when `Self` is `PaletteControlGroupStyle`. A control group style that presents its content as a palette.
