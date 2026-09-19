> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intentsui/inuiaddvoiceshortcutviewcontrollerdelegate/addvoiceshortcutviewcontrollerdidcancel(_:)

# addVoiceShortcutViewControllerDidCancel(\_:) (Swift)

**Framework:** IntentsUI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

Tells the delegate the user canceled the add-to-Siri process.

## Declaration

```swift
func addVoiceShortcutViewControllerDidCancel(_ controller: INUIAddVoiceShortcutViewController)
```

## Parameters

- `controller`: The view controller calling this method.

## See Also

### Handling View Controller Events

- [addVoiceShortcutViewController(\_:didFinishWith:error:)](addvoiceshortcutviewcontroller%28__didfinishwith_error_%29.md): Tells the delegate the view controller added the shortcut to Siri.

# addVoiceShortcutViewControllerDidCancel: (Objective-C)

**Framework:** IntentsUI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

Tells the delegate the user canceled the add-to-Siri process.

## Declaration

```objectivec
- (void) addVoiceShortcutViewControllerDidCancel:(INUIAddVoiceShortcutViewController *) controller;
```

## Parameters

- `controller`: The view controller calling this method.

## See Also

### Handling View Controller Events

- [addVoiceShortcutViewController:didFinishWithVoiceShortcut:error:](addvoiceshortcutviewcontroller%28__didfinishwith_error_%29.md): Tells the delegate the view controller added the shortcut to Siri.
