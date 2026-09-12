> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/eaaccessorydiddisconnect](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/eaaccessorydiddisconnect)

# EAAccessoryDidDisconnect

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A notification that is posted when an accessory is disconnected and no longer available for your application to use.

## Declaration

```swift
static let EAAccessoryDidDisconnect: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the shared accessory manager. The `userInfo` dictionary contains an [EAAccessoryKey](../../../externalaccessory/eaaccessorykey.md), whose value is the [EAAccessory](../../../externalaccessory/eaaccessory.md) object representing the accessory that was disconnected. Before delivery of this notification can occur, you must call the [registerForLocalNotifications()](../../../externalaccessory/eaaccessorymanager/registerforlocalnotifications%28%29.md) method to let the system know you are interested in receiving this notification.

If your accessory manager has a delegate, the delegate can use the [accessoryDidDisconnect(\_:)](../../../externalaccessory/eaaccessorydelegate/accessorydiddisconnect%28__%29.md) method to receive this notification instead.

## See Also

### External Accessory

- [EAAccessoryDidConnect](eaaccessorydidconnect.md): A notification that the system sends when an accessory becomes connected and available for your application to use.
