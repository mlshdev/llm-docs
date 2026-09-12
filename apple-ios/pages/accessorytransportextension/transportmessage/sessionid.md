> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/transportmessage/sessionid](https://developer.apple.com/documentation/accessorytransportextension/transportmessage/sessionid)

# sessionID

**Framework:** Accessory Transport Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A unique identifier for the message’s capability session.

## Declaration

```swift
let sessionID: UUID
```

## Mentioned In

- [Forwarding notifications to your accessory using the internet transport type](../forwarding-notifications-to-your-accessory-using-the-internet-transport-type.md)

<a id="discussion"></a>

## Discussion

This identifier correlates messages with their capability (such as notifications or Live Activities). The system generates the session ID at feature enrollment time, and the value is fixed while the accessory remains paired through AccessorySetupKit.

## See Also

### Accessing message content

- [data](data.md): A data object that contains the message content.
