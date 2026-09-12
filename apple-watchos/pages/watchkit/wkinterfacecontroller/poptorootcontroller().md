> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/poptorootcontroller()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/poptorootcontroller())

# popToRootController() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Pops all interface controllers except the app’s initial interface controller.

## Declaration

```swift
func popToRootController()
```

<a id="Discussion"></a>

## Discussion

Use this method to return your interface to its initial configuration. You might do this so that you can reset your navigation hierarchy to its initial state before pushing one or more different interface controllers onto the navigation stack.

Always call this method from your WatchKit extension’s main thread.

## See Also

### Implementing a navigation interface

- [pushController(withName:context:)](pushcontroller%28withname_context_%29.md): Pushes a new interface controller onto the screen.
- [pop()](pop%28%29.md): Pops the current interface controller from the screen.

# popToRootController (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Pops all interface controllers except the app’s initial interface controller.

## Declaration

```objectivec
- (void) popToRootController;
```

<a id="Discussion"></a>

## Discussion

Use this method to return your interface to its initial configuration. You might do this so that you can reset your navigation hierarchy to its initial state before pushing one or more different interface controllers onto the navigation stack.

Always call this method from your WatchKit extension’s main thread.

## See Also

### Implementing a navigation interface

- [pushControllerWithName:context:](pushcontroller%28withname_context_%29.md): Pushes a new interface controller onto the screen.
- [popController](pop%28%29.md): Pops the current interface controller from the screen.
