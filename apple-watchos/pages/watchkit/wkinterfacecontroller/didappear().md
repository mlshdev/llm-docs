> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/didappear()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/didappear())

# didAppear() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Tells the interface controller that its view is now onscreen.

## Declaration

```swift
func didAppear()
```

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)
- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

WatchKit calls this method shortly after the interface controller’s contents appear onscreen. Use this method to configure animations or other interface-related tasks.

The system calls this method on your WatchKit extension’s main thread. The `super` implementation of this method does nothing.

## See Also

### Responding to activation and appearance events

- [willActivate()](willactivate%28%29.md): Tells the interface controller that the system is about to activate its view.
- [didDeactivate()](diddeactivate%28%29.md): Tells the interface controller that its view is no longer active.
- [willDisappear()](willdisappear%28%29.md): Tells the interface controller that its view is now offscreen.

# didAppear (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Tells the interface controller that its view is now onscreen.

## Declaration

```objectivec
- (void) didAppear;
```

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)
- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

WatchKit calls this method shortly after the interface controller’s contents appear onscreen. Use this method to configure animations or other interface-related tasks.

The system calls this method on your WatchKit extension’s main thread. The `super` implementation of this method does nothing.

## See Also

### Responding to activation and appearance events

- [willActivate](willactivate%28%29.md): Tells the interface controller that the system is about to activate its view.
- [didDeactivate](diddeactivate%28%29.md): Tells the interface controller that its view is no longer active.
- [willDisappear](willdisappear%28%29.md): Tells the interface controller that its view is now offscreen.
