> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/text/isendtoendencrypted](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/text/isendtoendencrypted)

# isEndToEndEncrypted

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A Boolean value indicating whether this message is end-to-end encrypted.

## Declaration

```swift
var isEndToEndEncrypted: Bool
```

<a id="discussion"></a>

## Discussion

For outgoing messages, this indicates whether to end-to-end encrypt the message before sending out. If the service does not support end-to-end encryption, the operation will throw [RCSService.Error.endToEndEncryptionNotSupported](../../rcsservice/error/endtoendencryptionnotsupported.md).

For incoming messages, this indicates whether the message was end-to-end encrypted.
