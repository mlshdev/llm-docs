> Snapshot-pinned source payload for Apple watchOS snapshot-4bff84466040; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkusernotificationinterfacecontroller/didreceive(_:)

# didReceive(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+

Delivers a notification object to your interface controller for processing.

## Declaration

```swift
func didReceive(_ notification: UNNotification)
```

## See Also

### Processing the Notification

- [didReceive(\_:withCompletion:)](didreceive%28__withcompletion_%29.md): Deprecated. Delivers a notification object to your interface controller for processing.

# didReceiveNotification: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+

Delivers a notification object to your interface controller for processing.

## Declaration

```objectivec
- (void) didReceiveNotification:(UNNotification *) notification;
```

## See Also

### Processing the Notification

- [didReceiveNotification:withCompletion:](didreceive%28__withcompletion_%29.md): Deprecated. Delivers a notification object to your interface controller for processing.
