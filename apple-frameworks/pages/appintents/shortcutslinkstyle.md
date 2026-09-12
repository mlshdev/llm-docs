> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/shortcutslinkstyle](https://developer.apple.com/documentation/appintents/shortcutslinkstyle)

# ShortcutsLinkStyle

**Framework:** AppIntents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

The styles to apply to buttons you use to open your app’s page in the Shortcuts app.

## Declaration

```swift
struct ShortcutsLinkStyle
```

<a id="overview"></a>

## Overview

Specify a [ShortcutsLinkStyle](shortcutslinkstyle.md) value when you add a [ShortcutsUIButton](shortcutsuibutton.md) or [ShortcutsLink](shortcutslink.md) type to your interface. For the [ShortcutsLink](shortcutslink.md) type, specify the style using the `AppIntents/ShortcutsLink/shortcutsLinkStyle(_:)` modifier.

## Topics

### Getting the styles

- [automatic](shortcutslinkstyle/automatic.md): The default button style, based on the current color scheme.
- [automaticOutline](shortcutslinkstyle/automaticoutline.md): The default button style with an outline, based on the current color scheme.
- [dark](shortcutslinkstyle/dark.md): A button style that applies a dark background with light text.
- [darkOutline](shortcutslinkstyle/darkoutline.md): A button style that applies a dark background with light text along with a light outline.
- [light](shortcutslinkstyle/light.md): A button style that applies a light background with dark text.
- [lightOutline](shortcutslinkstyle/lightoutline.md): A button style that applies a light background with dark text along with a dark outline.

## See Also

### Buttons

- [ShortcutsUIButton](shortcutsuibutton.md): A button that opens the current app’s page in the Shortcuts app.
- [ShortcutsLink](shortcutslink.md): A button that brings users to the current app’s App Shortcuts page in the Shortcuts app.
