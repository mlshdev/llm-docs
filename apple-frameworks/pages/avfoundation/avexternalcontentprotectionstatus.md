> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalcontentprotectionstatus](https://developer.apple.com/documentation/avfoundation/avexternalcontentprotectionstatus)

# AVExternalContentProtectionStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

Constants that specify whether sufficient protection exists to display the content.

## Declaration

```swift
enum AVExternalContentProtectionStatus
```

## Topics

### Status values

- [AVExternalContentProtectionStatus.pending](avexternalcontentprotectionstatus/pending.md): A status that indicates content protections are pending.
- [AVExternalContentProtectionStatus.sufficient](avexternalcontentprotectionstatus/sufficient.md): A status that indicates sufficient protections exists for display.
- [AVExternalContentProtectionStatus.insufficient](avexternalcontentprotectionstatus/insufficient.md): A status that indicates insufficient protections exists for display.

### Initializers

- [init(rawValue:)](avexternalcontentprotectionstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### FairPlay streaming

- [AVContentKeySession](avcontentkeysession.md): An object that creates and tracks decryption keys for media data.
- [AVContentKeySessionDelegate](avcontentkeysessiondelegate.md): A protocol that handles content key requests.
- [AVContentKey](avcontentkey.md): An object that represents the content key decryptor.
- [AVContentKeySpecifier](avcontentkeyspecifier.md): An object that uniquely identifies a content key.
- [AVContentKeyRequest](avcontentkeyrequest.md): An object that encapsulates information about a content decryption key request issued from a content key session object.
- [AVPersistableContentKeyRequest](avpersistablecontentkeyrequest.md): An object that encapsulates information about a persistable content decryption key request issued from a content key session.
- [AVContentKeyResponse](avcontentkeyresponse.md): An object that encapsulates information about a response to a content decryption key request.
- [AVSampleBufferAttachContentKey(\_:\_:\_:)](avsamplebufferattachcontentkey%28______%29.md): Deprecated. Attaches a content key to a sample buffer for the purpose of content decryption.

# AVExternalContentProtectionStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

Constants that specify whether sufficient protection exists to display the content.

## Declaration

```objectivec
enum AVExternalContentProtectionStatus : NSInteger;
```

## Topics

### Status values

- [AVExternalContentProtectionStatusPending](avexternalcontentprotectionstatus/pending.md): A status that indicates content protections are pending.
- [AVExternalContentProtectionStatusSufficient](avexternalcontentprotectionstatus/sufficient.md): A status that indicates sufficient protections exists for display.
- [AVExternalContentProtectionStatusInsufficient](avexternalcontentprotectionstatus/insufficient.md): A status that indicates insufficient protections exists for display.

## See Also

### FairPlay streaming

- [AVContentKeySession](avcontentkeysession.md): An object that creates and tracks decryption keys for media data.
- [AVContentKeySessionDelegate](avcontentkeysessiondelegate.md): A protocol that handles content key requests.
- [AVContentKey](avcontentkey.md): An object that represents the content key decryptor.
- [AVContentKeySpecifier](avcontentkeyspecifier.md): An object that uniquely identifies a content key.
- [AVContentKeyRequest](avcontentkeyrequest.md): An object that encapsulates information about a content decryption key request issued from a content key session object.
- [AVPersistableContentKeyRequest](avpersistablecontentkeyrequest.md): An object that encapsulates information about a persistable content decryption key request issued from a content key session.
- [AVContentKeyResponse](avcontentkeyresponse.md): An object that encapsulates information about a response to a content decryption key request.
- [AVSampleBufferAttachContentKey](avsamplebufferattachcontentkey%28______%29.md): Deprecated. Attaches a content key to a sample buffer for the purpose of content decryption.
