> Snapshot-pinned source payload for Apple watchOS snapshot-4bff84466040; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkusernotificationinterfacecontroller/dismiss()

# dismiss() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 5.0)

Dismisses the notification interface controller.

> Use [performDismissAction()](performdismissaction%28%29.md) instead.

## Declaration

```swift
func dismiss()
```

## See Also

### Working with Actions

- [notificationActions](notificationactions.md): The actions associated with the current notification.
- [performNotificationDefaultAction()](performnotificationdefaultaction%28%29.md): Launches the watchOS app and performs the current notification’s default action.
- [performDismissAction()](performdismissaction%28%29.md): Dismisses the notification interface controller.

# dismissController (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 5.0)

Dismisses the notification interface controller.

> Use [performDismissAction](performdismissaction%28%29.md) instead.

## Declaration

```objectivec
- (void) dismissController;
```

## See Also

### Working with Actions

- [notificationActions](notificationactions.md): The actions associated with the current notification.
- [performNotificationDefaultAction](performnotificationdefaultaction%28%29.md): Launches the watchOS app and performs the current notification’s default action.
- [performDismissAction](performdismissaction%28%29.md): Dismisses the notification interface controller.
