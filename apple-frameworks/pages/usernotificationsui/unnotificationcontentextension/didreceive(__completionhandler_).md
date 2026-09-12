> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotificationsui/unnotificationcontentextension/didreceive(_:completionhandler:)](https://developer.apple.com/documentation/usernotificationsui/unnotificationcontentextension/didreceive(_:completionhandler:))

# didReceive(\_:completionHandler:) (Swift)

**Framework:** User Notifications UI  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 11.0+ · visionOS 1.0+

Handles a notification action selected by the user.

## Declaration

```swift
optional func didReceive(_ response: UNNotificationResponse, completionHandler completion: @escaping @Sendable (UNNotificationContentExtensionResponseOption) -> Void)
```

```swift
optional func didReceive(_ response: UNNotificationResponse) async -> UNNotificationContentExtensionResponseOption
```

## Parameters

- `response`: The response object that identifies the user-selected action. Use this object to get information about the notification and the user’s response.
- `completion`: The block to execute when you are finished performing the action. You must call this block at some point during your implementation. The block has no return value and takes the following parameter:

  - **`dismiss`**: The response you want to take for the notification. For a list of possible options, see [UNNotificationContentExtensionResponseOption](../unnotificationcontentextensionresponseoption.md).

<a id="discussion"></a>

## Discussion

Implement this method when you want your view controller to handle actions selected by the user. Use your implementation to perform the associated task and then execute the `completion` block. If you implement this method, you must handle all actions defined in all categories managed by your Notification Content app extension. If you don’t implement this method, the system notifies your app when the user selects an action.

## See Also

### Handling Custom Actions

- [UNNotificationContentExtensionResponseOption](../unnotificationcontentextensionresponseoption.md): Constants indicating the preferred response to a notification.

# didReceiveNotificationResponse:completionHandler: (Objective-C)

**Framework:** User Notifications UI  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Handles a notification action selected by the user.

## Declaration

```objectivec
- (void) didReceiveNotificationResponse:(UNNotificationResponse *) response completionHandler:(void (^)(UNNotificationContentExtensionResponseOption option)) completion;
```

## Parameters

- `response`: The response object that identifies the user-selected action. Use this object to get information about the notification and the user’s response.
- `completion`: The block to execute when you are finished performing the action. You must call this block at some point during your implementation. The block has no return value and takes the following parameter:

  - **`dismiss`**: The response you want to take for the notification. For a list of possible options, see [UNNotificationContentExtensionResponseOption](../unnotificationcontentextensionresponseoption.md).

<a id="discussion"></a>

## Discussion

Implement this method when you want your view controller to handle actions selected by the user. Use your implementation to perform the associated task and then execute the `completion` block. If you implement this method, you must handle all actions defined in all categories managed by your Notification Content app extension. If you don’t implement this method, the system notifies your app when the user selects an action.

## See Also

### Handling Custom Actions

- [UNNotificationContentExtensionResponseOption](../unnotificationcontentextensionresponseoption.md): Constants indicating the preferred response to a notification.
