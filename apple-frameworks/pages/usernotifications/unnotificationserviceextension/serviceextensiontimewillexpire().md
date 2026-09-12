> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationserviceextension/serviceextensiontimewillexpire()](https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension/serviceextensiontimewillexpire())

# serviceExtensionTimeWillExpire() (Swift)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 6.0+

Tells you that the system is terminating your extension.

## Declaration

```swift
func serviceExtensionTimeWillExpire()
```

## Mentioned In

- [Modifying content in newly delivered notifications](../modifying-content-in-newly-delivered-notifications.md)

<a id="Discussion"></a>

## Discussion

If your [didReceive(\_:withContentHandler:)](didreceive%28__withcontenthandler_%29.md) method takes too long to execute its completion block, the system calls this method on a separate thread to give you one last chance to execute the block. Use this method to execute the block as quickly as possible. Doing so might mean providing some fallback content. For example, if your extension is still downloading an image file with the intent of attaching it to the notification’s content, update the notification’s alert text to indicate that an image download is in progress. If you fail to execute the completion block from the [didReceive(\_:withContentHandler:)](didreceive%28__withcontenthandler_%29.md) method in time, the system displays the notification’s original content.

## See Also

### Processing Notifications

- [didReceive(\_:withContentHandler:)](didreceive%28__withcontenthandler_%29.md): Asks you to make any needed changes to the notification and notify the system when you’re done.

# serviceExtensionTimeWillExpire (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 6.0+

Tells you that the system is terminating your extension.

## Declaration

```objectivec
- (void) serviceExtensionTimeWillExpire;
```

## Mentioned In

- [Modifying content in newly delivered notifications](../modifying-content-in-newly-delivered-notifications.md)

<a id="Discussion"></a>

## Discussion

If your [didReceiveNotificationRequest:withContentHandler:](didreceive%28__withcontenthandler_%29.md) method takes too long to execute its completion block, the system calls this method on a separate thread to give you one last chance to execute the block. Use this method to execute the block as quickly as possible. Doing so might mean providing some fallback content. For example, if your extension is still downloading an image file with the intent of attaching it to the notification’s content, update the notification’s alert text to indicate that an image download is in progress. If you fail to execute the completion block from the [didReceiveNotificationRequest:withContentHandler:](didreceive%28__withcontenthandler_%29.md) method in time, the system displays the notification’s original content.

## See Also

### Processing Notifications

- [didReceiveNotificationRequest:withContentHandler:](didreceive%28__withcontenthandler_%29.md): Asks you to make any needed changes to the notification and notify the system when you’re done.
