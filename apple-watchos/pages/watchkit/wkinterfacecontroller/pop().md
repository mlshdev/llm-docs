> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/pop()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/pop())

# pop() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Pops the current interface controller from the screen.

## Declaration

```swift
func pop()
```

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

After pushing an interface controller onto the screen, use this method to remove it and display the previous interface controller again. The system animates the transition back to the previous interface controller asynchronously.

Always call this method from your WatchKit extension’s main thread.

## See Also

### Implementing a navigation interface

- [pushController(withName:context:)](pushcontroller%28withname_context_%29.md): Pushes a new interface controller onto the screen.
- [popToRootController()](poptorootcontroller%28%29.md): Pops all interface controllers except the app’s initial interface controller.

# popController (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Pops the current interface controller from the screen.

## Declaration

```objectivec
- (void) popController;
```

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

After pushing an interface controller onto the screen, use this method to remove it and display the previous interface controller again. The system animates the transition back to the previous interface controller asynchronously.

Always call this method from your WatchKit extension’s main thread.

## See Also

### Implementing a navigation interface

- [pushControllerWithName:context:](pushcontroller%28withname_context_%29.md): Pushes a new interface controller onto the screen.
- [popToRootController](poptorootcontroller%28%29.md): Pops all interface controllers except the app’s initial interface controller.
