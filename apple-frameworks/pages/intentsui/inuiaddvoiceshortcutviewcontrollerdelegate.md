> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intentsui/inuiaddvoiceshortcutviewcontrollerdelegate

# INUIAddVoiceShortcutViewControllerDelegate (Swift)

**Framework:** IntentsUI  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

The protocol an object implements to receive notifications from the view controller adding a shortcut to Siri.

## Declaration

```swift
protocol INUIAddVoiceShortcutViewControllerDelegate : NSObjectProtocol
```

## Topics

### Handling View Controller Events

- [addVoiceShortcutViewController(\_:didFinishWith:error:)](inuiaddvoiceshortcutviewcontrollerdelegate/addvoiceshortcutviewcontroller%28__didfinishwith_error_%29.md): Tells the delegate the view controller added the shortcut to Siri.
- [addVoiceShortcutViewControllerDidCancel(\_:)](inuiaddvoiceshortcutviewcontrollerdelegate/addvoiceshortcutviewcontrollerdidcancel%28__%29.md): Tells the delegate the user canceled the add-to-Siri process.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling View Controller Events

- [delegate](inuiaddvoiceshortcutviewcontroller/delegate.md): The object that retrieves notifications from the view controller.

# INUIAddVoiceShortcutViewControllerDelegate (Objective-C)

**Framework:** IntentsUI  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

The protocol an object implements to receive notifications from the view controller adding a shortcut to Siri.

## Declaration

```objectivec
@protocol INUIAddVoiceShortcutViewControllerDelegate <NSObject>
```

## Topics

### Handling View Controller Events

- [addVoiceShortcutViewController:didFinishWithVoiceShortcut:error:](inuiaddvoiceshortcutviewcontrollerdelegate/addvoiceshortcutviewcontroller%28__didfinishwith_error_%29.md): Tells the delegate the view controller added the shortcut to Siri.
- [addVoiceShortcutViewControllerDidCancel:](inuiaddvoiceshortcutviewcontrollerdelegate/addvoiceshortcutviewcontrollerdidcancel%28__%29.md): Tells the delegate the user canceled the add-to-Siri process.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Handling View Controller Events

- [delegate](inuiaddvoiceshortcutviewcontroller/delegate.md): The object that retrieves notifications from the view controller.
