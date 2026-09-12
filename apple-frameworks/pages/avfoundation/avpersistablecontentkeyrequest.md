> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpersistablecontentkeyrequest](https://developer.apple.com/documentation/avfoundation/avpersistablecontentkeyrequest)

# AVPersistableContentKeyRequest (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

An object that encapsulates information about a persistable content decryption key request issued from a content key session.

## Declaration

```swift
class AVPersistableContentKeyRequest
```

<a id="overview"></a>

## Overview

This class allows clients to create and use persistable content keys.

## Topics

### Requesting persistable content key data

- [persistableContentKey(fromKeyVendorResponse:options:)](avpersistablecontentkeyrequest/persistablecontentkey%28fromkeyvendorresponse_options_%29.md): Creates a persistable content key from the content key context data.

## Relationships

### Inherits From

- [AVContentKeyRequest](avcontentkeyrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### FairPlay streaming

- [AVContentKeySession](avcontentkeysession.md): An object that creates and tracks decryption keys for media data.
- [AVContentKeySessionDelegate](avcontentkeysessiondelegate.md): A protocol that handles content key requests.
- [AVContentKey](avcontentkey.md): An object that represents the content key decryptor.
- [AVContentKeySpecifier](avcontentkeyspecifier.md): An object that uniquely identifies a content key.
- [AVContentKeyRequest](avcontentkeyrequest.md): An object that encapsulates information about a content decryption key request issued from a content key session object.
- [AVContentKeyResponse](avcontentkeyresponse.md): An object that encapsulates information about a response to a content decryption key request.
- [AVExternalContentProtectionStatus](avexternalcontentprotectionstatus.md): Constants that specify whether sufficient protection exists to display the content.
- [AVSampleBufferAttachContentKey(\_:\_:\_:)](avsamplebufferattachcontentkey%28______%29.md): Deprecated. Attaches a content key to a sample buffer for the purpose of content decryption.

# AVPersistableContentKeyRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

An object that encapsulates information about a persistable content decryption key request issued from a content key session.

## Declaration

```objectivec
@interface AVPersistableContentKeyRequest : AVContentKeyRequest
```

<a id="overview"></a>

## Overview

This class allows clients to create and use persistable content keys.

## Topics

### Requesting persistable content key data

- [persistableContentKeyFromKeyVendorResponse:options:error:](avpersistablecontentkeyrequest/persistablecontentkey%28fromkeyvendorresponse_options_%29.md): Creates a persistable content key from the content key context data.

## Relationships

### Inherits From

- [AVContentKeyRequest](avcontentkeyrequest.md)

## See Also

### FairPlay streaming

- [AVContentKeySession](avcontentkeysession.md): An object that creates and tracks decryption keys for media data.
- [AVContentKeySessionDelegate](avcontentkeysessiondelegate.md): A protocol that handles content key requests.
- [AVContentKey](avcontentkey.md): An object that represents the content key decryptor.
- [AVContentKeySpecifier](avcontentkeyspecifier.md): An object that uniquely identifies a content key.
- [AVContentKeyRequest](avcontentkeyrequest.md): An object that encapsulates information about a content decryption key request issued from a content key session object.
- [AVContentKeyResponse](avcontentkeyresponse.md): An object that encapsulates information about a response to a content decryption key request.
- [AVExternalContentProtectionStatus](avexternalcontentprotectionstatus.md): Constants that specify whether sufficient protection exists to display the content.
- [AVSampleBufferAttachContentKey](avsamplebufferattachcontentkey%28______%29.md): Deprecated. Attaches a content key to a sample buffer for the purpose of content decryption.
