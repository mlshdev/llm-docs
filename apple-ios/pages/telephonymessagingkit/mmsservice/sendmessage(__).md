> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/sendmessage(_:)

# sendMessage(\_:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Sends an MMS message to the given destination.

## Declaration

```swift
final func sendMessage(_ message: MMSMessage) async throws
```

## Parameters

- `message`: The MMS message to send.

<a id="discussion"></a>

## Discussion

If the [totalSize](../mmsmessage/totalsize.md) exceeds [maximumMessageSize](configuration/maximummessagesize.md), this call fails with [MMSService.Error.maximumSizeExceeded](error/maximumsizeexceeded.md).

> **Throws**

> - [MMSService.Error](error.md) if sending the message fails.

## See Also

### Sending messages

- [MMSMessage](../mmsmessage.md): A structure that contains the data of an MMS message.
