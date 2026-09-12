> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/pushtoken](https://developer.apple.com/documentation/walletpasses/pushtoken)

# PushToken

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Object  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · watchOS 3.0+

An object that contains the push notification token for a registered pass on a device.

## Declaration

```
object PushToken
```

## Properties

- `pushToken` — `string`: A push token the server uses to send update notifications for a registered pass to a device.

## See Also

### Pass updates

- [Adding a Web Service to Update Passes](adding-a-web-service-to-update-passes.md): Implement a web server to register, update, and unregister a pass on a device.
- [Register a Pass for Update Notifications](register-a-pass-for-update-notifications.md): Set up change notifications for a pass on a device.
- [Get the List of Updatable Passes](get-the-list-of-updatable-passes.md): Send the serial numbers for updated passes to a device.
- [Send an Updated Pass](send-an-updated-pass.md): Create and sign an updated pass, and send it to the device.
- [Unregister a Pass for Update Notifications](unregister-a-pass-for-update-notifications.md): Stop sending update notifications for a pass on a device.
- [Log a Message](log-a-message.md): Record a message on your server.
- [SerialNumbers](serialnumbers.md): An object that contains serial numbers for the updatable passes on a device.
- [LogEntries](logentries.md): An object that contains an array of messages.
