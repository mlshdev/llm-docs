> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/addgroupchatparticipantsrequest/isendtoendencrypted](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/addgroupchatparticipantsrequest/isendtoendencrypted)

# isEndToEndEncrypted

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A Boolean value indicating whether this request should be end-to-end encrypted. If the service does not support end-to-end encryption, the operation will throw [RCSService.Error.endToEndEncryptionNotSupported](../error/endtoendencryptionnotsupported.md).

## Declaration

```swift
var isEndToEndEncrypted: Bool
```
