> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/diddeactivate()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/diddeactivate())

# didDeactivate() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Tells the interface controller that its view is no longer active.

## Declaration

```swift
func didDeactivate()
```

## Mentioned In

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

The system calls this method as part of the cleanup process for the interface controller. Use this method to invalidate timers or save any app-related state information that has not already been saved. Any tasks you perform using this method should finish quickly. An inactive interface controller may be reactivated later or it may be deallocated.

Do not use this method to modify your interface. WatchKit ignores attempts to set values of interface objects while your interface is inactive, including during the execution of this method. Modifications can be made only during initialization of your interface controller and between calls to [willActivate()](willactivate%28%29.md) and this method.

The system calls this method on your WatchKit extension’s main thread. The `super` implementation of this method does nothing.

In iOS Simulator, WatchKit calls this method for the current interface controller when you lock the simulator by selecting Hardware \> Lock. When you subsequently unlock the simulator, WatchKit calls that interface controller’s [willActivate()](willactivate%28%29.md) method again. You can use this capability to debug your activation and deactivation code.

## See Also

### Responding to activation and appearance events

- [willActivate()](willactivate%28%29.md): Tells the interface controller that the system is about to activate its view.
- [didAppear()](didappear%28%29.md): Tells the interface controller that its view is now onscreen.
- [willDisappear()](willdisappear%28%29.md): Tells the interface controller that its view is now offscreen.

# didDeactivate (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Tells the interface controller that its view is no longer active.

## Declaration

```objectivec
- (void) didDeactivate;
```

## Mentioned In

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

The system calls this method as part of the cleanup process for the interface controller. Use this method to invalidate timers or save any app-related state information that has not already been saved. Any tasks you perform using this method should finish quickly. An inactive interface controller may be reactivated later or it may be deallocated.

Do not use this method to modify your interface. WatchKit ignores attempts to set values of interface objects while your interface is inactive, including during the execution of this method. Modifications can be made only during initialization of your interface controller and between calls to [willActivate](willactivate%28%29.md) and this method.

The system calls this method on your WatchKit extension’s main thread. The `super` implementation of this method does nothing.

In iOS Simulator, WatchKit calls this method for the current interface controller when you lock the simulator by selecting Hardware \> Lock. When you subsequently unlock the simulator, WatchKit calls that interface controller’s [willActivate](willactivate%28%29.md) method again. You can use this capability to debug your activation and deactivation code.

## See Also

### Responding to activation and appearance events

- [willActivate](willactivate%28%29.md): Tells the interface controller that the system is about to activate its view.
- [didAppear](didappear%28%29.md): Tells the interface controller that its view is now onscreen.
- [willDisappear](willdisappear%28%29.md): Tells the interface controller that its view is now offscreen.
