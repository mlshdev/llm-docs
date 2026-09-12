> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/transportmessage/init(sessionid:data:)](https://developer.apple.com/documentation/accessorytransportextension/transportmessage/init(sessionid:data:))

# init(sessionID:data:)

**Framework:** Accessory Transport Extension  
**Kind:** Initializer  
**Availability:** iOS 26.5+

Initializes a transport message for a specific capability session.

## Declaration

```swift
init(sessionID: UUID, data: Data)
```

## Parameters

- `sessionID`: A unique identifier for the session capability (such as notifications or Live Activities). The system generates this identifier at feature enrollment time, and the value is fixed while the accessory remains paired through AccessorySetupKit.
- `data`: The message data to send.

<a id="discussion"></a>

## Discussion

Create transport messages when your accessory sends data back to the data provider through [sendMessageToDataProvider(\_:)](../accessorytransportsession/sendmessagetodataprovider%28__%29.md).
