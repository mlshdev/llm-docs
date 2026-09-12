> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuieditvoiceshortcutviewcontrollerdelegate](https://developer.apple.com/documentation/intentsui/inuieditvoiceshortcutviewcontrollerdelegate)

# INUIEditVoiceShortcutViewControllerDelegate (Swift)

**Framework:** IntentsUI  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

The protocol an object implements to receive notifications from the view controller that edits or removes a shortcut in Siri.

## Declaration

```swift
protocol INUIEditVoiceShortcutViewControllerDelegate : NSObjectProtocol
```

## Topics

### Handling Shortcut Changes

- [editVoiceShortcutViewController(\_:didUpdate:error:)](inuieditvoiceshortcutviewcontrollerdelegate/editvoiceshortcutviewcontroller%28__didupdate_error_%29.md): Tells the delegate the user updated the shortcut.
- [editVoiceShortcutViewController(\_:didDeleteVoiceShortcutWithIdentifier:)](inuieditvoiceshortcutviewcontrollerdelegate/editvoiceshortcutviewcontroller%28__diddeletevoiceshortcutwithidentifier_%29.md): Tells the delegate the user deleted the shortcut.

### Handling View Controller Events

- [editVoiceShortcutViewControllerDidCancel(\_:)](inuieditvoiceshortcutviewcontrollerdelegate/editvoiceshortcutviewcontrollerdidcancel%28__%29.md): Tells the delegate the user canceled the edit-or-remove-shortcut process.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling View Controller Events

- [delegate](inuieditvoiceshortcutviewcontroller/delegate.md): The object that retrieves notifications from the view controller.

# INUIEditVoiceShortcutViewControllerDelegate (Objective-C)

**Framework:** IntentsUI  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

The protocol an object implements to receive notifications from the view controller that edits or removes a shortcut in Siri.

## Declaration

```objectivec
@protocol INUIEditVoiceShortcutViewControllerDelegate <NSObject>
```

## Topics

### Handling Shortcut Changes

- [editVoiceShortcutViewController:didUpdateVoiceShortcut:error:](inuieditvoiceshortcutviewcontrollerdelegate/editvoiceshortcutviewcontroller%28__didupdate_error_%29.md): Tells the delegate the user updated the shortcut.
- [editVoiceShortcutViewController:didDeleteVoiceShortcutWithIdentifier:](inuieditvoiceshortcutviewcontrollerdelegate/editvoiceshortcutviewcontroller%28__diddeletevoiceshortcutwithidentifier_%29.md): Tells the delegate the user deleted the shortcut.

### Handling View Controller Events

- [editVoiceShortcutViewControllerDidCancel:](inuieditvoiceshortcutviewcontrollerdelegate/editvoiceshortcutviewcontrollerdidcancel%28__%29.md): Tells the delegate the user canceled the edit-or-remove-shortcut process.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Handling View Controller Events

- [delegate](inuieditvoiceshortcutviewcontroller/delegate.md): The object that retrieves notifications from the view controller.
