> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/removeaccessorycontroller(_:)](https://developer.apple.com/documentation/appkit/nsprintpanel/removeaccessorycontroller(_:))

# removeAccessoryController(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Removes the specified controller and accessory view from the Print panel.

## Declaration

```swift
func removeAccessoryController(_ accessoryController: any NSViewController & NSPrintPanelAccessorizing)
```

## Parameters

- `accessoryController`: The view controller to remove.

<a id="Discussion"></a>

## Discussion

You use this method to remove any view controllers responsible for displaying accessory views you do not want to include in the Print panel.

## See Also

### Managing Accessory Views

- [addAccessoryController(\_:)](addaccessorycontroller%28__%29.md): Adds a custom controller to the Print panel to manage an accessory view.
- [NSPrintPanelAccessorizing](../nsprintpanelaccessorizing.md): A set of methods that a Print panel object can use to get information from a printing accessory controller.
- [accessoryControllers](accessorycontrollers.md): The array of controller objects that manage the Print panel’s accessory views.

# removeAccessoryController: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Removes the specified controller and accessory view from the Print panel.

## Declaration

```objectivec
- (void) removeAccessoryController:(NSViewController<NSPrintPanelAccessorizing> *) accessoryController;
```

## Parameters

- `accessoryController`: The view controller to remove.

<a id="Discussion"></a>

## Discussion

You use this method to remove any view controllers responsible for displaying accessory views you do not want to include in the Print panel.

## See Also

### Managing Accessory Views

- [addAccessoryController:](addaccessorycontroller%28__%29.md): Adds a custom controller to the Print panel to manage an accessory view.
- [NSPrintPanelAccessorizing](../nsprintpanelaccessorizing.md): A set of methods that a Print panel object can use to get information from a printing accessory controller.
- [accessoryControllers](accessorycontrollers.md): The array of controller objects that manage the Print panel’s accessory views.
