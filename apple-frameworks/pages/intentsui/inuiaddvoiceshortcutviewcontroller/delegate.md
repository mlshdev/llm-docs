> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuiaddvoiceshortcutviewcontroller/delegate](https://developer.apple.com/documentation/intentsui/inuiaddvoiceshortcutviewcontroller/delegate)

# delegate (Swift)

**Framework:** IntentsUI  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

The object that retrieves notifications from the view controller.

## Declaration

```swift
weak var delegate: (any INUIAddVoiceShortcutViewControllerDelegate)? { get set }
```

## See Also

### Handling View Controller Events

- [INUIAddVoiceShortcutViewControllerDelegate](../inuiaddvoiceshortcutviewcontrollerdelegate.md): The protocol an object implements to receive notifications from the view controller adding a shortcut to Siri.

# delegate (Objective-C)

**Framework:** IntentsUI  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

The object that retrieves notifications from the view controller.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<INUIAddVoiceShortcutViewControllerDelegate> delegate;
```

## See Also

### Handling View Controller Events

- [INUIAddVoiceShortcutViewControllerDelegate](../inuiaddvoiceshortcutviewcontrollerdelegate.md): The protocol an object implements to receive notifications from the view controller adding a shortcut to Siri.
