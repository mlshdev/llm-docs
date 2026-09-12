> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuiaddvoiceshortcutbuttondelegate/present(_:for:)-5foo8](https://developer.apple.com/documentation/intentsui/inuiaddvoiceshortcutbuttondelegate/present(_:for:)-5foo8)

# present(\_:for:) (Swift)

**Framework:** IntentsUI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

Tells the delegate to present the *Add Shortcut* view controller.

## Declaration

```swift
func present(_ addVoiceShortcutViewController: INUIAddVoiceShortcutViewController, for addVoiceShortcutButton: INUIAddVoiceShortcutButton)
```

## Parameters

- `addVoiceShortcutViewController`: The view controller to present.
- `addVoiceShortcutButton`: The Siri Shortcut button calling this method.

## See Also

### Presenting Shortcut Editors

- [present(\_:for:)](present%28__for_%29-9n4m9.md): Tells the delegate to present the *Edit Shortcut* view controller.

# presentAddVoiceShortcutViewController:forAddVoiceShortcutButton: (Objective-C)

**Framework:** IntentsUI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

Tells the delegate to present the *Add Shortcut* view controller.

## Declaration

```objectivec
- (void) presentAddVoiceShortcutViewController:(INUIAddVoiceShortcutViewController *) addVoiceShortcutViewController forAddVoiceShortcutButton:(INUIAddVoiceShortcutButton *) addVoiceShortcutButton;
```

## Parameters

- `addVoiceShortcutViewController`: The view controller to present.
- `addVoiceShortcutButton`: The Siri Shortcut button calling this method.

## See Also

### Presenting Shortcut Editors

- [presentEditVoiceShortcutViewController:forAddVoiceShortcutButton:](present%28__for_%29-9n4m9.md): Tells the delegate to present the *Edit Shortcut* view controller.
