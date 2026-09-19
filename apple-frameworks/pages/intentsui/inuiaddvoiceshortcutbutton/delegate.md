> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intentsui/inuiaddvoiceshortcutbutton/delegate

# delegate (Swift)

**Framework:** IntentsUI  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

The object that receives presentation requests from the button.

## Declaration

```swift
weak var delegate: (any INUIAddVoiceShortcutButtonDelegate)? { get set }
```

## See Also

### Presenting Shortcut Editors

- [shortcut](shortcut.md): The shortcut Siri invokes when the user speaks the invocation phrase.
- [INUIAddVoiceShortcutButtonDelegate](../inuiaddvoiceshortcutbuttondelegate.md): The protocol an object implements to receive notifications from the Siri Shortcut button.

# delegate (Objective-C)

**Framework:** IntentsUI  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

The object that receives presentation requests from the button.

## Declaration

```objectivec
@property (nonatomic, weak) id<INUIAddVoiceShortcutButtonDelegate> delegate;
```

## See Also

### Presenting Shortcut Editors

- [shortcut](shortcut.md): The shortcut Siri invokes when the user speaks the invocation phrase.
- [INUIAddVoiceShortcutButtonDelegate](../inuiaddvoiceshortcutbuttondelegate.md): The protocol an object implements to receive notifications from the Siri Shortcut button.
