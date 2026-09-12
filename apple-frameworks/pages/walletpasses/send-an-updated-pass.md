> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/send-an-updated-pass](https://developer.apple.com/documentation/walletpasses/send-an-updated-pass)

# Send an Updated Pass

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Web Service Endpoint  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · watchOS 3.0+

Create and sign an updated pass, and send it to the device.

## URL

```http
GET https://yourpasshost.example.com/v1/passes/{passTypeIdentifier}/{serialNumber}
```

## Path Parameters

- `passTypeIdentifier` — `string` (required): The pass type identifier of the pass to update. This value corresponds to the value of the `passTypeIdentifier` key of the pass.
- `serialNumber` — `string` (required): The serial number of the pass to update. This value corresponds to the `serialNumber` key of the pass.

## Header Parameters

- `Authorization` — `string`: The authentication for a pass. The value is the word `ApplePass`, followed by a space, followed by the `authenticationToken` key of the pass.
  **Allowed values:** `ApplePass {passAuthorizationToken}`

## Response Codes

- `200` OK: The request is successful and returns the updated pass.
- `401` Request Not Authorized: The request isn’t authorized.

## See Also

### Pass updates

- [Adding a Web Service to Update Passes](adding-a-web-service-to-update-passes.md): Implement a web server to register, update, and unregister a pass on a device.
- [Register a Pass for Update Notifications](register-a-pass-for-update-notifications.md): Set up change notifications for a pass on a device.
- [Get the List of Updatable Passes](get-the-list-of-updatable-passes.md): Send the serial numbers for updated passes to a device.
- [Unregister a Pass for Update Notifications](unregister-a-pass-for-update-notifications.md): Stop sending update notifications for a pass on a device.
- [Log a Message](log-a-message.md): Record a message on your server.
- [PushToken](pushtoken.md): An object that contains the push notification token for a registered pass on a device.
- [SerialNumbers](serialnumbers.md): An object that contains serial numbers for the updatable passes on a device.
- [LogEntries](logentries.md): An object that contains an array of messages.
