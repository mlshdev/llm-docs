> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intentsui/inuiaddvoiceshortcutbutton/shortcut

# shortcut (Swift)

**Framework:** IntentsUI  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

The shortcut Siri invokes when the user speaks the invocation phrase.

## Declaration

```swift
var shortcut: INShortcut? { get set }
```

## See Also

### Presenting Shortcut Editors

- [delegate](delegate.md): The object that receives presentation requests from the button.
- [INUIAddVoiceShortcutButtonDelegate](../inuiaddvoiceshortcutbuttondelegate.md): The protocol an object implements to receive notifications from the Siri Shortcut button.

# shortcut (Objective-C)

**Framework:** IntentsUI  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

The shortcut Siri invokes when the user speaks the invocation phrase.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) INShortcut * shortcut;
```

## See Also

### Presenting Shortcut Editors

- [delegate](delegate.md): The object that receives presentation requests from the button.
- [INUIAddVoiceShortcutButtonDelegate](../inuiaddvoiceshortcutbuttondelegate.md): The protocol an object implements to receive notifications from the Siri Shortcut button.
