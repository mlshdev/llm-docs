> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuiaddvoiceshortcutbuttondelegate](https://developer.apple.com/documentation/intentsui/inuiaddvoiceshortcutbuttondelegate)

# INUIAddVoiceShortcutButtonDelegate (Swift)

**Framework:** IntentsUI  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

The protocol an object implements to receive notifications from the Siri Shortcut button.

## Declaration

```swift
protocol INUIAddVoiceShortcutButtonDelegate : NSObjectProtocol
```

## Topics

### Presenting Shortcut Editors

- [present(\_:for:)](inuiaddvoiceshortcutbuttondelegate/present%28__for_%29-5foo8.md): Tells the delegate to present the *Add Shortcut* view controller.
- [present(\_:for:)](inuiaddvoiceshortcutbuttondelegate/present%28__for_%29-9n4m9.md): Tells the delegate to present the *Edit Shortcut* view controller.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Presenting Shortcut Editors

- [shortcut](inuiaddvoiceshortcutbutton/shortcut.md): The shortcut Siri invokes when the user speaks the invocation phrase.
- [delegate](inuiaddvoiceshortcutbutton/delegate.md): The object that receives presentation requests from the button.

# INUIAddVoiceShortcutButtonDelegate (Objective-C)

**Framework:** IntentsUI  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

The protocol an object implements to receive notifications from the Siri Shortcut button.

## Declaration

```objectivec
@protocol INUIAddVoiceShortcutButtonDelegate <NSObject>
```

## Topics

### Presenting Shortcut Editors

- [presentAddVoiceShortcutViewController:forAddVoiceShortcutButton:](inuiaddvoiceshortcutbuttondelegate/present%28__for_%29-5foo8.md): Tells the delegate to present the *Add Shortcut* view controller.
- [presentEditVoiceShortcutViewController:forAddVoiceShortcutButton:](inuiaddvoiceshortcutbuttondelegate/present%28__for_%29-9n4m9.md): Tells the delegate to present the *Edit Shortcut* view controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Presenting Shortcut Editors

- [shortcut](inuiaddvoiceshortcutbutton/shortcut.md): The shortcut Siri invokes when the user speaks the invocation phrase.
- [delegate](inuiaddvoiceshortcutbutton/delegate.md): The object that receives presentation requests from the button.
