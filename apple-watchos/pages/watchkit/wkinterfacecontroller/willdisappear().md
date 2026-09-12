> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/willdisappear()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/willdisappear())

# willDisappear() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Tells the interface controller that its view is now offscreen.

## Declaration

```swift
func willDisappear()
```

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

WatchKit calls this method shortly before removing your interface controller’s content from the screen. Use this method to stop animations or perform other interface-related tasks prior to deactivation.

The system calls this method on your WatchKit extension’s main thread. The `super` implementation of this method does nothing.

## See Also

### Responding to activation and appearance events

- [willActivate()](willactivate%28%29.md): Tells the interface controller that the system is about to activate its view.
- [didDeactivate()](diddeactivate%28%29.md): Tells the interface controller that its view is no longer active.
- [didAppear()](didappear%28%29.md): Tells the interface controller that its view is now onscreen.

# willDisappear (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Tells the interface controller that its view is now offscreen.

## Declaration

```objectivec
- (void) willDisappear;
```

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

WatchKit calls this method shortly before removing your interface controller’s content from the screen. Use this method to stop animations or perform other interface-related tasks prior to deactivation.

The system calls this method on your WatchKit extension’s main thread. The `super` implementation of this method does nothing.

## See Also

### Responding to activation and appearance events

- [willActivate](willactivate%28%29.md): Tells the interface controller that the system is about to activate its view.
- [didDeactivate](diddeactivate%28%29.md): Tells the interface controller that its view is no longer active.
- [didAppear](didappear%28%29.md): Tells the interface controller that its view is now onscreen.
