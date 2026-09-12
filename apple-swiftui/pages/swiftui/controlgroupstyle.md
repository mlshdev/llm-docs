> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlgroupstyle](https://developer.apple.com/documentation/swiftui/controlgroupstyle)

# ControlGroupStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Defines the implementation of all control groups within a view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency protocol ControlGroupStyle
```

<a id="overview"></a>

## Overview

To configure the current `ControlGroupStyle` for a view hierarchy, use the [controlGroupStyle(\_:)](view/controlgroupstyle%28__%29.md) modifier.

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

```swift
struct MyCustomType: Transition {
    // `@preconcurrency @MainActor` isolation by default
}
```

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

```swift
extension MyCustomType: Transition {
    // `nonisolated` by default
}
```

## Topics

### Getting built-in control group styles

- [automatic](controlgroupstyle/automatic.md): Conforms when `Self` is `AutomaticControlGroupStyle`. The default control group style.
- [compactMenu](controlgroupstyle/compactmenu.md): Conforms when `Self` is `CompactMenuControlGroupStyle`. A control group style that presents its content as a compact menu when the user presses the control, or as a submenu when nested within a larger menu.
- [menu](controlgroupstyle/menu.md): Conforms when `Self` is `MenuControlGroupStyle`. A control group style that presents its content as a menu when the user presses the control, or as a submenu when nested within a larger menu.
- [navigation](controlgroupstyle/navigation.md): Conforms when `Self` is `NavigationControlGroupStyle`. The navigation control group style.
- [palette](controlgroupstyle/palette.md): Conforms when `Self` is `PaletteControlGroupStyle`. A control group style that presents its content as a palette.

### Creating custom control group styles

- [makeBody(configuration:)](controlgroupstyle/makebody%28configuration_%29.md): Creates a view representing the body of a control group.
- [ControlGroupStyle.Configuration](controlgroupstyle/configuration.md): The properties of a `ControlGroup` instance being created.
- [Body](controlgroupstyle/body.md): A view representing the body of a control group.

### Supporting types

- [AutomaticControlGroupStyle](automaticcontrolgroupstyle.md): The default control group style.
- [CompactMenuControlGroupStyle](compactmenucontrolgroupstyle.md): A control group style that presents its content as a compact menu when the user presses the control, or as a submenu when nested within a larger menu.
- [MenuControlGroupStyle](menucontrolgroupstyle.md): A control group style that presents its content as a menu when the user presses the control, or as a submenu when nested within a larger menu.
- [NavigationControlGroupStyle](navigationcontrolgroupstyle.md): The navigation control group style.
- [PaletteControlGroupStyle](palettecontrolgroupstyle.md): A control group style that presents its content as a palette.

## Relationships

### Conforming Types

- [AutomaticControlGroupStyle](automaticcontrolgroupstyle.md)
- [CompactMenuControlGroupStyle](compactmenucontrolgroupstyle.md)
- [MenuControlGroupStyle](menucontrolgroupstyle.md)
- [NavigationControlGroupStyle](navigationcontrolgroupstyle.md)
- [PaletteControlGroupStyle](palettecontrolgroupstyle.md)

## See Also

### Styling groups

- [controlGroupStyle(\_:)](view/controlgroupstyle%28__%29.md): Sets the style for control groups within this view.
- [ControlGroupStyleConfiguration](controlgroupstyleconfiguration.md): The properties of a control group.
- [formStyle(\_:)](view/formstyle%28__%29.md): Sets the style for forms in a view hierarchy.
- [FormStyle](formstyle.md): The appearance and behavior of a form.
- [FormStyleConfiguration](formstyleconfiguration.md): The properties of a form instance.
- [groupBoxStyle(\_:)](view/groupboxstyle%28__%29.md): Sets the style for group boxes within this view.
- [GroupBoxStyle](groupboxstyle.md): A type that specifies the appearance and interaction of all group boxes within a view hierarchy.
- [GroupBoxStyleConfiguration](groupboxstyleconfiguration.md): The properties of a group box instance.
- [indexViewStyle(\_:)](view/indexviewstyle%28__%29.md): Sets the style for the index view within the current environment.
- [IndexViewStyle](indexviewstyle.md): Defines the implementation of all `IndexView` instances within a view hierarchy.
- [labeledContentStyle(\_:)](view/labeledcontentstyle%28__%29.md): Sets a style for labeled content.
- [LabeledContentStyle](labeledcontentstyle.md): The appearance and behavior of a labeled content instance..
- [LabeledContentStyleConfiguration](labeledcontentstyleconfiguration.md): The properties of a labeled content instance.
