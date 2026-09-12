> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationsforwarding/accessorynotificationshandler/messagehandler(_:)](https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/accessorynotificationshandler/messagehandler(_:))

# messageHandler(\_:)

**Framework:** Accessory Notifications  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Handles decrypted messages received from the paired accessory.

## Declaration

```swift
func messageHandler(_ message: TransportMessage)
```

## Parameters

- `message`: The decrypted message payload from the accessory.

## Mentioned In

- [Responding to forwarded notifications](../../responding-to-forwarded-notifications.md)

<a id="discussion"></a>

## Discussion

The system calls this method when your accessory sends data to the data provider extension. For Bluetooth transport, the accessory sends data through your transport extension using [sendMessageToDataProvider(\_:)](../../../accessorytransportextension/accessorytransportsession/sendmessagetodataprovider%28__%29.md). For internet transport, the accessory routes data to the device through APNs using [pushToken](../../../accessorytransportextension/accessorytransportsession/pushtoken.md). In either case, the system delivers decrypted messages to this method regardless of the transport type.

<a id="Process-notification-responses"></a>

## Process notification responses

Parse the message to determine the response type (notification dismissal, action selection, or text input). Create a [NotificationResponse](../../notificationresponse.md) instance and send it to the system using [sendResponse(\_:)](../accessorynotificationssession/sendresponse%28__%29.md):

```swift
func messageHandler(_ message: AccessoryMessage) {
    for payload in message.payloads {
        let parsedResponse = parseResponse(payload.data)
        
        let response = NotificationResponse(
            sourceIdentifier: parsedResponse.sourceID,
            notificationIdentifier: parsedResponse.notificationID,
            actionIdentifier: parsedResponse.actionID,
            userText: parsedResponse.userText
        )
        
        Task {
            try await session?.sendResponse(response)
        }
    }
}
```
