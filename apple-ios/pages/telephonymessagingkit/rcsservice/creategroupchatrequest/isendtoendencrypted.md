> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/creategroupchatrequest/isendtoendencrypted

# isEndToEndEncrypted

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A Boolean value indicating whether this request should be end-to-end encrypted. If the service does not support end-to-end encryption, the operation will throw [RCSService.Error.endToEndEncryptionNotSupported](../error/endtoendencryptionnotsupported.md).

## Declaration

```swift
var isEndToEndEncrypted: Bool
```
