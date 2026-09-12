> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuieditvoiceshortcutviewcontroller/delegate](https://developer.apple.com/documentation/intentsui/inuieditvoiceshortcutviewcontroller/delegate)

# delegate (Swift)

**Framework:** IntentsUI  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

The object that retrieves notifications from the view controller.

## Declaration

```swift
weak var delegate: (any INUIEditVoiceShortcutViewControllerDelegate)? { get set }
```

## See Also

### Handling View Controller Events

- [INUIEditVoiceShortcutViewControllerDelegate](../inuieditvoiceshortcutviewcontrollerdelegate.md): The protocol an object implements to receive notifications from the view controller that edits or removes a shortcut in Siri.

# delegate (Objective-C)

**Framework:** IntentsUI  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

The object that retrieves notifications from the view controller.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<INUIEditVoiceShortcutViewControllerDelegate> delegate;
```

## See Also

### Handling View Controller Events

- [INUIEditVoiceShortcutViewControllerDelegate](../inuieditvoiceshortcutviewcontrollerdelegate.md): The protocol an object implements to receive notifications from the view controller that edits or removes a shortcut in Siri.
