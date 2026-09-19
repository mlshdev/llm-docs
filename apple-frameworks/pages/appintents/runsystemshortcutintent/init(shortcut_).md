> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/runsystemshortcutintent/init(shortcut:)

# init(shortcut:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates an intent that performs a person’s configured action.

## Declaration

```swift
init(shortcut: SystemShortcut)
```

## Parameters

- `shortcut`: The metadata that represents a person’s configured action.

## See Also

### Creating the intent

- [SystemShortcut](../systemshortcut.md): An opaque reference to a user-configured action for use in a widget button.
