> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/configuration/maximumtextmessagesize](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/configuration/maximumtextmessagesize)

# maximumTextMessageSize

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The maximum size of a text chat message that a person can enter in a 1-to-1 chat or group chat session.

## Declaration

```swift
var maximumTextMessageSize: Measurement<UnitInformationStorage>? { get }
```

<a id="discussion"></a>

## Discussion

This value is represented as a Foundation [Measurement](https://developer.apple.com/documentation/foundation/measurement) that uses the [UnitInformationStorage](https://developer.apple.com/documentation/foundation/unitinformationstorage) unit type. If the messaging service is disabled, the value is `nil`.
