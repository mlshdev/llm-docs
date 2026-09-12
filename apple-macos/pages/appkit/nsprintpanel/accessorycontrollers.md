> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/accessorycontrollers](https://developer.apple.com/documentation/appkit/nsprintpanel/accessorycontrollers)

# accessoryControllers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The array of controller objects that manage the Print panel’s accessory views.

## Declaration

```swift
var accessoryControllers: [NSViewController] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSViewController](../nsviewcontroller.md) objects, each of which represents an accessory view added using the [addAccessoryController(\_:)](addaccessorycontroller%28__%29.md) method.

## See Also

### Managing Accessory Views

- [addAccessoryController(\_:)](addaccessorycontroller%28__%29.md): Adds a custom controller to the Print panel to manage an accessory view.
- [removeAccessoryController(\_:)](removeaccessorycontroller%28__%29.md): Removes the specified controller and accessory view from the Print panel.
- [NSPrintPanelAccessorizing](../nsprintpanelaccessorizing.md): A set of methods that a Print panel object can use to get information from a printing accessory controller.

# accessoryControllers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The array of controller objects that manage the Print panel’s accessory views.

## Declaration

```objectivec
@property (copy, readonly) NSArray<__kindof NSViewController *> * accessoryControllers;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSViewController](../nsviewcontroller.md) objects, each of which represents an accessory view added using the [addAccessoryController:](addaccessorycontroller%28__%29.md) method.

## See Also

### Managing Accessory Views

- [addAccessoryController:](addaccessorycontroller%28__%29.md): Adds a custom controller to the Print panel to manage an accessory view.
- [removeAccessoryController:](removeaccessorycontroller%28__%29.md): Removes the specified controller and accessory view from the Print panel.
- [NSPrintPanelAccessorizing](../nsprintpanelaccessorizing.md): A set of methods that a Print panel object can use to get information from a printing accessory controller.
