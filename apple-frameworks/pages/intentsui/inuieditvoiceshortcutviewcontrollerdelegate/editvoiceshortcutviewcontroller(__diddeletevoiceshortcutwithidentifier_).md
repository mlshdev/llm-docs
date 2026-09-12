> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuieditvoiceshortcutviewcontrollerdelegate/editvoiceshortcutviewcontroller(_:diddeletevoiceshortcutwithidentifier:)](https://developer.apple.com/documentation/intentsui/inuieditvoiceshortcutviewcontrollerdelegate/editvoiceshortcutviewcontroller(_:diddeletevoiceshortcutwithidentifier:))

# editVoiceShortcutViewController(\_:didDeleteVoiceShortcutWithIdentifier:) (Swift)

**Framework:** IntentsUI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

Tells the delegate the user deleted the shortcut.

## Declaration

```swift
func editVoiceShortcutViewController(_ controller: INUIEditVoiceShortcutViewController, didDeleteVoiceShortcutWithIdentifier deletedVoiceShortcutIdentifier: UUID)
```

## Parameters

- `controller`: The view controller calling this method.
- `deletedVoiceShortcutIdentifier`: The identifier of the shortcut that the user deleted.

<a id="Discussion"></a>

## Discussion

After the user deletes a shortcut, the shortcut is no longer available to Siri. Your app should reflect this change by displaying an [INUIAddVoiceShortcutButton](../inuiaddvoiceshortcutbutton.md) in the view for the action. The button lets the user know the action doesn’t have a shortcut, and provides the option to add one.

## See Also

### Handling Shortcut Changes

- [editVoiceShortcutViewController(\_:didUpdate:error:)](editvoiceshortcutviewcontroller%28__didupdate_error_%29.md): Tells the delegate the user updated the shortcut.

# editVoiceShortcutViewController:didDeleteVoiceShortcutWithIdentifier: (Objective-C)

**Framework:** IntentsUI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

Tells the delegate the user deleted the shortcut.

## Declaration

```objectivec
- (void) editVoiceShortcutViewController:(INUIEditVoiceShortcutViewController *) controller didDeleteVoiceShortcutWithIdentifier:(NSUUID *) deletedVoiceShortcutIdentifier;
```

## Parameters

- `controller`: The view controller calling this method.
- `deletedVoiceShortcutIdentifier`: The identifier of the shortcut that the user deleted.

<a id="Discussion"></a>

## Discussion

After the user deletes a shortcut, the shortcut is no longer available to Siri. Your app should reflect this change by displaying an [INUIAddVoiceShortcutButton](../inuiaddvoiceshortcutbutton.md) in the view for the action. The button lets the user know the action doesn’t have a shortcut, and provides the option to add one.

## See Also

### Handling Shortcut Changes

- [editVoiceShortcutViewController:didUpdateVoiceShortcut:error:](editvoiceshortcutviewcontroller%28__didupdate_error_%29.md): Tells the delegate the user updated the shortcut.
