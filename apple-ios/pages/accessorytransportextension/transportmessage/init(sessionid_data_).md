> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/transportmessage/init(sessionid:data:)

# init(sessionID:data:)

**Framework:** Accessory Transport Extension  
**Kind:** Initializer  
**Availability:** iOS 26.5+

Initializes a transport message for a specific feature.

## Declaration

```swift
init(sessionID: UUID, data: Data)
```

## Parameters

- `sessionID`: A unique identifier for the feature that the message belongs to, such as notifications or Live Activities. The value is fixed while the accessory remains paired through AccessorySetupKit.
- `data`: The message data to send.

<a id="discussion"></a>

## Discussion

Create transport messages when your accessory sends data back to the data provider through [sendMessageToDataProvider(\_:)](../accessorytransportsession/sendmessagetodataprovider%28__%29.md).
