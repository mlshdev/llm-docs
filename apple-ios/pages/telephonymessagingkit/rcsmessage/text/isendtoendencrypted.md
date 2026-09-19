> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/text/isendtoendencrypted

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
