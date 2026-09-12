> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuiaddvoiceshortcutviewcontrollerdelegate/addvoiceshortcutviewcontroller(_:didfinishwith:error:)](https://developer.apple.com/documentation/intentsui/inuiaddvoiceshortcutviewcontrollerdelegate/addvoiceshortcutviewcontroller(_:didfinishwith:error:))

# addVoiceShortcutViewController(\_:didFinishWith:error:) (Swift)

**Framework:** IntentsUI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

Tells the delegate the view controller added the shortcut to Siri.

## Declaration

```swift
func addVoiceShortcutViewController(_ controller: INUIAddVoiceShortcutViewController, didFinishWith voiceShortcut: INVoiceShortcut?, error: (any Error)?)
```

## Parameters

- `controller`: The view controller calling this method.
- `voiceShortcut`: The shortcut added to Siri. This parameter is `nil` when the controller isn’t able to add the shortcut to Siri.
- `error`: A error object if an error occurred adding the shortcut; otherwise, `nil`.

## See Also

### Handling View Controller Events

- [addVoiceShortcutViewControllerDidCancel(\_:)](addvoiceshortcutviewcontrollerdidcancel%28__%29.md): Tells the delegate the user canceled the add-to-Siri process.

# addVoiceShortcutViewController:didFinishWithVoiceShortcut:error: (Objective-C)

**Framework:** IntentsUI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

Tells the delegate the view controller added the shortcut to Siri.

## Declaration

```objectivec
- (void) addVoiceShortcutViewController:(INUIAddVoiceShortcutViewController *) controller didFinishWithVoiceShortcut:(INVoiceShortcut *) voiceShortcut error:(NSError *) error;
```

## Parameters

- `controller`: The view controller calling this method.
- `voiceShortcut`: The shortcut added to Siri. This parameter is `nil` when the controller isn’t able to add the shortcut to Siri.
- `error`: A error object if an error occurred adding the shortcut; otherwise, `nil`.

## See Also

### Handling View Controller Events

- [addVoiceShortcutViewControllerDidCancel:](addvoiceshortcutviewcontrollerdidcancel%28__%29.md): Tells the delegate the user canceled the add-to-Siri process.
