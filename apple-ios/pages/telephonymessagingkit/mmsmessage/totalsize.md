> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsmessage/totalsize](https://developer.apple.com/documentation/telephonymessagingkit/mmsmessage/totalsize)

# totalSize

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The total size of the message.

## Declaration

```swift
var totalSize: Measurement<UnitInformationStorage> { get }
```

<a id="discussion"></a>

## Discussion

If this value exceeds `MMSConfiguration/maximumMessageSize`, sending the message with [sendMessage(\_:)](../mmsservice/sendmessage%28__%29.md) fails with [MMSService.Error.maximumSizeExceeded](../mmsservice/error/maximumsizeexceeded.md).

## See Also

### Accessing message properties

- [cellularServiceID](cellularserviceid.md): The cellular service identifier associated with the message.
- [CellularServiceID](../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [messageID](messageid.md): A message identifier for the message.
- [MMSMessageID](../mmsmessageid.md): A structure that represents an MMS message identifier.
- [description](description.md): A textual representation of the message.
