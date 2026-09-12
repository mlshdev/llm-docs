> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/willactivate()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/willactivate())

# willActivate() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Tells the interface controller that the system is about to activate its view.

## Declaration

```swift
func willActivate()
```

## Mentioned In

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)
- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when it is getting ready to display your interface controller. Use this method to perform last minute tasks required to ensure your content is up to date. Do not use this method to perform the initial setup of your interface. Your interface should be mostly initialized and ready to use by the time this method is called.

The calling of this method is not a guarantee that your interface controller is onscreen or about to appear onscreen. The system may call this method early to give you time to update your content.  Use the [didAppear()](didappear%28%29.md) method to determine when your interface appears onscreen.

The system calls this method on your WatchKit extension’s main thread. The `super` implementation of this method does nothing.

## See Also

### Responding to activation and appearance events

- [didDeactivate()](diddeactivate%28%29.md): Tells the interface controller that its view is no longer active.
- [didAppear()](didappear%28%29.md): Tells the interface controller that its view is now onscreen.
- [willDisappear()](willdisappear%28%29.md): Tells the interface controller that its view is now offscreen.

# willActivate (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Tells the interface controller that the system is about to activate its view.

## Declaration

```objectivec
- (void) willActivate;
```

## Mentioned In

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)
- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when it is getting ready to display your interface controller. Use this method to perform last minute tasks required to ensure your content is up to date. Do not use this method to perform the initial setup of your interface. Your interface should be mostly initialized and ready to use by the time this method is called.

The calling of this method is not a guarantee that your interface controller is onscreen or about to appear onscreen. The system may call this method early to give you time to update your content.  Use the [didAppear](didappear%28%29.md) method to determine when your interface appears onscreen.

The system calls this method on your WatchKit extension’s main thread. The `super` implementation of this method does nothing.

## See Also

### Responding to activation and appearance events

- [didDeactivate](diddeactivate%28%29.md): Tells the interface controller that its view is no longer active.
- [didAppear](didappear%28%29.md): Tells the interface controller that its view is now onscreen.
- [willDisappear](willdisappear%28%29.md): Tells the interface controller that its view is now offscreen.
