> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/transportmessage/sessionid

# sessionID

**Framework:** Accessory Transport Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A unique identifier for the feature to which the message belongs.

## Declaration

```swift
let sessionID: UUID
```

## Mentioned In

- [Forwarding notifications to your accessory using the internet transport type](../forwarding-notifications-to-your-accessory-using-the-internet-transport-type.md)

<a id="discussion"></a>

## Discussion

This identifier specifies the feature to which an incoming message belongs. It’s the feature ID your accessory uses when it derives encryption secrets. For internet transport, your accessory also includes the identifier in responses to help the system deliver them to the correct data provider extension. It isn’t the same value as [featureID](../accessoryfeature/featureid.md), which names a feature type. The value is fixed while the accessory remains paired through AccessorySetupKit.

## See Also

### Accessing message content

- [data](data.md): A data object that contains the message content.
