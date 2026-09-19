> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/shortcutslink

# ShortcutsLink

**Framework:** AppIntents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

A button that brings users to the current app’s App Shortcuts page in the Shortcuts app.

## Declaration

```swift
@MainActor @preconcurrency struct ShortcutsLink
```

<a id="overview"></a>

## Overview

You can create a button by calling the initializer with an additional closure, which gets called whenever the button is tapped before opening the Shortcuts app.

```swift
ShortcutsLink(action: handleTap)
    .shortcutsLinkStyle(.dark)
```

## Topics

### Initializers

- [init(action:)](shortcutslink/init%28action_%29.md): Creates a link that launches Shortcuts and then executes the specified closure.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Buttons

- [ShortcutsUIButton](shortcutsuibutton.md): A button that opens the current app’s page in the Shortcuts app.
- [ShortcutsLinkStyle](shortcutslinkstyle.md): The styles to apply to buttons you use to open your app’s page in the Shortcuts app.
