> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlgroupstyle/palette](https://developer.apple.com/documentation/swiftui/controlgroupstyle/palette)

# palette

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A control group style that presents its content as a palette.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var palette: PaletteControlGroupStyle { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> When used outside of menus, this style is rendered as a segmented control.

Use this style to render a multi-select or a stateless palette. The following example creates a control group that contains both type of shelves:

```swift
Menu {
    // A multi select palette
    ControlGroup {
        ForEach(ColorTags.allCases) { colorTag in
            Toggle(isOn: $selectedColorTags[colorTag]) {
                Label(colorTag.name, systemImage: "circle")
            }
            .tint(colorTag.color)
        }
    }
    .controlGroupStyle(.palette)
    .paletteSelectionEffect(.symbolVariant(.fill))

    // A momentary / stateless palette
    ControlGroup {
        ForEach(Emotes.allCases) { emote in
            Button {
                sendEmote(emote)
            } label: {
                Label(emote.name, systemImage: emote.systemImage)
            }
        }
    }
    .controlGroupStyle(.palette)
}
```

To apply this style to a control group, or to a view that contains control groups, use the [controlGroupStyle(\_:)](../view/controlgroupstyle%28__%29.md) modifier.

## See Also

### Getting built-in control group styles

- [automatic](automatic.md): Conforms when `Self` is `AutomaticControlGroupStyle`. The default control group style.
- [compactMenu](compactmenu.md): Conforms when `Self` is `CompactMenuControlGroupStyle`. A control group style that presents its content as a compact menu when the user presses the control, or as a submenu when nested within a larger menu.
- [menu](menu.md): Conforms when `Self` is `MenuControlGroupStyle`. A control group style that presents its content as a menu when the user presses the control, or as a submenu when nested within a larger menu.
- [navigation](navigation.md): Conforms when `Self` is `NavigationControlGroupStyle`. The navigation control group style.
