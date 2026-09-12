> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuieditvoiceshortcutviewcontrollerdelegate/editvoiceshortcutviewcontroller(_:didupdate:error:)](https://developer.apple.com/documentation/intentsui/inuieditvoiceshortcutviewcontrollerdelegate/editvoiceshortcutviewcontroller(_:didupdate:error:))

# editVoiceShortcutViewController(\_:didUpdate:error:) (Swift)

**Framework:** IntentsUI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

Tells the delegate the user updated the shortcut.

## Declaration

```swift
func editVoiceShortcutViewController(_ controller: INUIEditVoiceShortcutViewController, didUpdate voiceShortcut: INVoiceShortcut?, error: (any Error)?)
```

## Parameters

- `controller`: The view controller calling this method.
- `voiceShortcut`: The updated shortcut; otherwise, `nil` when an error occurred updating the shortcut.
- `error`: A error object when an error occurred updating the shortcut; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

The system calls this method after the user re-records the invocation phrase for the shortcut. If your app displays the phrase, the app should update its screen to show the new phrase by retrieving the phrase text from the [invocationPhrase](../../intents/invoiceshortcut/invocationphrase.md) property on voiceShortcut.

## See Also

### Handling Shortcut Changes

- [editVoiceShortcutViewController(\_:didDeleteVoiceShortcutWithIdentifier:)](editvoiceshortcutviewcontroller%28__diddeletevoiceshortcutwithidentifier_%29.md): Tells the delegate the user deleted the shortcut.

# editVoiceShortcutViewController:didUpdateVoiceShortcut:error: (Objective-C)

**Framework:** IntentsUI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

Tells the delegate the user updated the shortcut.

## Declaration

```objectivec
- (void) editVoiceShortcutViewController:(INUIEditVoiceShortcutViewController *) controller didUpdateVoiceShortcut:(INVoiceShortcut *) voiceShortcut error:(NSError *) error;
```

## Parameters

- `controller`: The view controller calling this method.
- `voiceShortcut`: The updated shortcut; otherwise, `nil` when an error occurred updating the shortcut.
- `error`: A error object when an error occurred updating the shortcut; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

The system calls this method after the user re-records the invocation phrase for the shortcut. If your app displays the phrase, the app should update its screen to show the new phrase by retrieving the phrase text from the [invocationPhrase](../../intents/invoiceshortcut/invocationphrase.md) property on voiceShortcut.

## See Also

### Handling Shortcut Changes

- [editVoiceShortcutViewController:didDeleteVoiceShortcutWithIdentifier:](editvoiceshortcutviewcontroller%28__diddeletevoiceshortcutwithidentifier_%29.md): Tells the delegate the user deleted the shortcut.
