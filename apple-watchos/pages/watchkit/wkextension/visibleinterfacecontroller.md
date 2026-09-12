> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/visibleinterfacecontroller](https://developer.apple.com/documentation/watchkit/wkextension/visibleinterfacecontroller)

# visibleInterfaceController (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+ (deprecated in 9.2)

Returns the last visible interface controller.

## Declaration

```swift
var visibleInterfaceController: WKInterfaceController? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine which interface controller is currently displayed by the app. For example, in the extension delegate’s [handle(\_:)](../wkextensiondelegate/handle%28__%29-92ulv.md)  method for a snapshot request,  use this property to determine the user interface’s current contents, and make any changes before the snapshot is taken.

Or, when the app is launched due to a Handoff activity, use the [handleUserActivity(\_:)](../wkextensiondelegate/handleuseractivity%28__%29.md) method’s `userInfo` dictionary to determine what to display. Then use the [visibleInterfaceController](visibleinterfacecontroller.md) property to determine whether to push or pop to a different interface controller.

This property contains the following values based on the app’s current state:

- **Just launched**: The app’s [rootInterfaceController](rootinterfacecontroller.md).
- **Running in the foreground**: The currently presented interface controller.
- **Running in the background**: The last interface controller presented by the app.

## See Also

### Getting the interface controllers

- [rootInterfaceController](rootinterfacecontroller.md): Deprecated. The app’s root interface controller.

# visibleInterfaceController (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+ (deprecated in 9.2)

Returns the last visible interface controller.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) WKInterfaceController * visibleInterfaceController;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine which interface controller is currently displayed by the app. For example, in the extension delegate’s [handleBackgroundTasks:](../wkextensiondelegate/handle%28__%29-92ulv.md)  method for a snapshot request,  use this property to determine the user interface’s current contents, and make any changes before the snapshot is taken.

Or, when the app is launched due to a Handoff activity, use the [handleUserActivity:](../wkextensiondelegate/handleuseractivity%28__%29.md) method’s `userInfo` dictionary to determine what to display. Then use the [visibleInterfaceController](visibleinterfacecontroller.md) property to determine whether to push or pop to a different interface controller.

This property contains the following values based on the app’s current state:

- **Just launched**: The app’s [rootInterfaceController](rootinterfacecontroller.md).
- **Running in the foreground**: The currently presented interface controller.
- **Running in the background**: The last interface controller presented by the app.

## See Also

### Getting the interface controllers

- [rootInterfaceController](rootinterfacecontroller.md): Deprecated. The app’s root interface controller.
