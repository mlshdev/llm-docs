> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.usernotifications.filtering](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.usernotifications.filtering)

# com.apple.developer.usernotifications.filtering (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.3+ · iPadOS 13.3+ · macOS 11.0+

Enable receiving notifications without displaying the notification to the user.

## Details

`com.apple.developer.usernotifications.filtering`

<a id="Discussion"></a>

## Discussion

This entitlement allows a notification service extension to receive remote notifications without displaying the notification to the user. To apply for this entitlement, see [Request Notification Service Entitlement](https://developer.apple.com/contact/request/notification-service).

After you receive permission to use the entitlement, add [com.apple.developer.usernotifications.filtering](com.apple.developer.usernotifications.filtering.md) to the entitlements file in the Notification Service Extension target. This allows you to silence push notifications after your extension receives them.

<a id="Silence-Push-Notifications"></a>

### Silence Push Notifications

To suppress a notification’s alert, create an empty [UNNotificationContent](../../usernotifications/unnotificationcontent.md) object in your extension’s [didReceive(\_:withContentHandler:)](../../usernotifications/unnotificationserviceextension/didreceive%28__withcontenthandler_%29.md) method, and pass it to the content handler. Don’t specify a title, subtitle, body, attachments, or sound for the content.

```swift
override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {
    
    // Determine whether you should suppress the notification.
    let suppress = myShouldSuppressNotification(request: request)
    
    if suppress {
        // Don't deliver the notification to the user.
        contentHandler(UNNotificationContent())
        
    } else {
        // Deliver the notification.
        guard let updatedContent = request.content.mutableCopy() as? UNMutableNotificationContent else {
            // This error should never occur.
            fatalError("Unable to create a mutable copy of the content")
        }
        
        // Update the notification's content, such as decrypting the body, here. 
        contentHandler(updatedContent)
    }
}
```

> **Note**

>  To silence a remote notification, you must set the `apns-push-type` header field to `alert` when you send the notification to the APNS server. Otherwise, the system always displays the notification banner to the user.

## See Also

### Notifications

- [APS Environment Entitlement](aps-environment.md): The environment for push notifications.
- [APS Environment (macOS) Entitlement](com.apple.developer.aps-environment.md): The environment for push notifications in macOS apps.
- [Critical Alerts](com.apple.developer.usernotifications.critical-alerts.md): An entitlement that permits an app to receive critical alert notifications.

# com.apple.developer.usernotifications.filtering (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.3+ · iPadOS 13.3+ · macOS 11.0+

Enable receiving notifications without displaying the notification to the user.

## Details

`com.apple.developer.usernotifications.filtering`

<a id="Discussion"></a>

## Discussion

This entitlement allows a notification service extension to receive remote notifications without displaying the notification to the user. To apply for this entitlement, see [Request Notification Service Entitlement](https://developer.apple.com/contact/request/notification-service).

After you receive permission to use the entitlement, add [com.apple.developer.usernotifications.filtering](com.apple.developer.usernotifications.filtering.md) to the entitlements file in the Notification Service Extension target. This allows you to silence push notifications after your extension receives them.

<a id="Silence-Push-Notifications"></a>

### Silence Push Notifications

To suppress a notification’s alert, create an empty [UNNotificationContent](../../usernotifications/unnotificationcontent.md) object in your extension’s [didReceiveNotificationRequest:withContentHandler:](../../usernotifications/unnotificationserviceextension/didreceive%28__withcontenthandler_%29.md) method, and pass it to the content handler. Don’t specify a title, subtitle, body, attachments, or sound for the content.

```swift
override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {
    
    // Determine whether you should suppress the notification.
    let suppress = myShouldSuppressNotification(request: request)
    
    if suppress {
        // Don't deliver the notification to the user.
        contentHandler(UNNotificationContent())
        
    } else {
        // Deliver the notification.
        guard let updatedContent = request.content.mutableCopy() as? UNMutableNotificationContent else {
            // This error should never occur.
            fatalError("Unable to create a mutable copy of the content")
        }
        
        // Update the notification's content, such as decrypting the body, here. 
        contentHandler(updatedContent)
    }
}
```

> **Note**

>  To silence a remote notification, you must set the `apns-push-type` header field to `alert` when you send the notification to the APNS server. Otherwise, the system always displays the notification banner to the user.

## See Also

### Notifications

- [APS Environment Entitlement](aps-environment.md): The environment for push notifications.
- [APS Environment (macOS) Entitlement](com.apple.developer.aps-environment.md): The environment for push notifications in macOS apps.
- [Critical Alerts](com.apple.developer.usernotifications.critical-alerts.md): An entitlement that permits an app to receive critical alert notifications.
