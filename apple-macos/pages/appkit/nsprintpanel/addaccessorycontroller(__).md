> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/addaccessorycontroller(_:)](https://developer.apple.com/documentation/appkit/nsprintpanel/addaccessorycontroller(_:))

# addAccessoryController(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Adds a custom controller to the Print panel to manage an accessory view.

## Declaration

```swift
func addAccessoryController(_ accessoryController: any NSViewController & NSPrintPanelAccessorizing)
```

## Parameters

- `accessoryController`: The view controller that manages your custom accessory views.

<a id="Discussion"></a>

## Discussion

You can invoke this method multiple times to add multiple accessory views to the receiver’s Print panel.

The title for the accessory view is obtained from the `title` method of the view controller object.

## See Also

### Managing Accessory Views

- [removeAccessoryController(\_:)](removeaccessorycontroller%28__%29.md): Removes the specified controller and accessory view from the Print panel.
- [NSPrintPanelAccessorizing](../nsprintpanelaccessorizing.md): A set of methods that a Print panel object can use to get information from a printing accessory controller.
- [accessoryControllers](accessorycontrollers.md): The array of controller objects that manage the Print panel’s accessory views.

# addAccessoryController: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Adds a custom controller to the Print panel to manage an accessory view.

## Declaration

```objectivec
- (void) addAccessoryController:(NSViewController<NSPrintPanelAccessorizing> *) accessoryController;
```

## Parameters

- `accessoryController`: The view controller that manages your custom accessory views.

<a id="Discussion"></a>

## Discussion

You can invoke this method multiple times to add multiple accessory views to the receiver’s Print panel.

The title for the accessory view is obtained from the `title` method of the view controller object.

## See Also

### Managing Accessory Views

- [removeAccessoryController:](removeaccessorycontroller%28__%29.md): Removes the specified controller and accessory view from the Print panel.
- [NSPrintPanelAccessorizing](../nsprintpanelaccessorizing.md): A set of methods that a Print panel object can use to get information from a printing accessory controller.
- [accessoryControllers](accessorycontrollers.md): The array of controller objects that manage the Print panel’s accessory views.
