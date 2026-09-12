> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplication/visibleinterfacecontroller](https://developer.apple.com/documentation/watchkit/wkapplication/visibleinterfacecontroller)

# visibleInterfaceController (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

Returns the last visible interface controller.

## Declaration

```swift
var visibleInterfaceController: WKInterfaceController? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine which interface controller the app is currently displaying. For example, in the app delegate’s [handle(\_:)](../wkapplicationdelegate/handle%28__%29-4vdjo.md) method for a snapshot request, use this property to determine the user interface’s current contents, and make any changes before the system takes the snapshot.

Or, when a Handoff activity launches the app, use the [handleActiveWorkoutRecovery()](../wkapplicationdelegate/handleactiveworkoutrecovery%28%29.md) method’s `userInfo` dictionary to determine what to display. Then use the [visibleInterfaceController](visibleinterfacecontroller.md) property to determine whether to push or pop to a different interface controller.

This property contains the following values based on the app’s current state:

- **Just launched**: The app’s [rootInterfaceController](rootinterfacecontroller.md).
- **Running in the foreground**: The currently presented interface controller.
- **Running in the background**: The last interface controller presented by the app.

## See Also

### Getting the interface controller

- [rootInterfaceController](rootinterfacecontroller.md): The app’s root interface controller.

# visibleInterfaceController (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

Returns the last visible interface controller.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) WKInterfaceController * visibleInterfaceController;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine which interface controller the app is currently displaying. For example, in the app delegate’s [handleBackgroundTasks:](../wkapplicationdelegate/handle%28__%29-4vdjo.md) method for a snapshot request, use this property to determine the user interface’s current contents, and make any changes before the system takes the snapshot.

Or, when a Handoff activity launches the app, use the [handleActiveWorkoutRecovery](../wkapplicationdelegate/handleactiveworkoutrecovery%28%29.md) method’s `userInfo` dictionary to determine what to display. Then use the [visibleInterfaceController](visibleinterfacecontroller.md) property to determine whether to push or pop to a different interface controller.

This property contains the following values based on the app’s current state:

- **Just launched**: The app’s [rootInterfaceController](rootinterfacecontroller.md).
- **Running in the foreground**: The currently presented interface controller.
- **Running in the background**: The last interface controller presented by the app.

## See Also

### Getting the interface controller

- [rootInterfaceController](rootinterfacecontroller.md): The app’s root interface controller.
