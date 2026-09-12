> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyresponse](https://developer.apple.com/documentation/avfoundation/avcontentkeyresponse)

# AVContentKeyResponse (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

An object that encapsulates information about a response to a content decryption key request.

## Declaration

```swift
class AVContentKeyResponse
```

## Topics

### Creating new content key responses

- [init(clearKeyData:initializationVector:)](avcontentkeyresponse/init%28clearkeydata_initializationvector_%29.md): Creates a new key response object for key data and initialization vector sent in the clear.
- [init(fairPlayStreamingKeyResponseData:)](avcontentkeyresponse/init%28fairplaystreamingkeyresponsedata_%29.md): Creates a content key response with an encrypted key response data blob when FairPlay Streaming is the key delivery method.
- [init(authorizationTokenData:)](avcontentkeyresponse/init%28authorizationtokendata_%29.md): Creates a content key response with an authorization token.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [AVPersistableContentKeyRequest](avpersistablecontentkeyrequest.md): An object that encapsulates information about a persistable content decryption key request issued from a content key session.
- [AVExternalContentProtectionStatus](avexternalcontentprotectionstatus.md): Constants that specify whether sufficient protection exists to display the content.
- [AVSampleBufferAttachContentKey(\_:\_:\_:)](avsamplebufferattachcontentkey%28______%29.md): Deprecated. Attaches a content key to a sample buffer for the purpose of content decryption.

# AVContentKeyResponse (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

An object that encapsulates information about a response to a content decryption key request.

## Declaration

```objectivec
@interface AVContentKeyResponse : NSObject
```

## Topics

### Creating new content key responses

- [contentKeyResponseWithClearKeyData:initializationVector:](avcontentkeyresponse/init%28clearkeydata_initializationvector_%29.md): Creates a new key response object for key data and initialization vector sent in the clear.
- [contentKeyResponseWithFairPlayStreamingKeyResponseData:](avcontentkeyresponse/init%28fairplaystreamingkeyresponsedata_%29.md): Creates a content key response with an encrypted key response data blob when FairPlay Streaming is the key delivery method.
- [contentKeyResponseWithAuthorizationTokenData:](avcontentkeyresponse/init%28authorizationtokendata_%29.md): Creates a content key response with an authorization token.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### FairPlay streaming

- [AVContentKeySession](avcontentkeysession.md): An object that creates and tracks decryption keys for media data.
- [AVContentKeySessionDelegate](avcontentkeysessiondelegate.md): A protocol that handles content key requests.
- [AVContentKey](avcontentkey.md): An object that represents the content key decryptor.
- [AVContentKeySpecifier](avcontentkeyspecifier.md): An object that uniquely identifies a content key.
- [AVContentKeyRequest](avcontentkeyrequest.md): An object that encapsulates information about a content decryption key request issued from a content key session object.
- [AVPersistableContentKeyRequest](avpersistablecontentkeyrequest.md): An object that encapsulates information about a persistable content decryption key request issued from a content key session.
- [AVExternalContentProtectionStatus](avexternalcontentprotectionstatus.md): Constants that specify whether sufficient protection exists to display the content.
- [AVSampleBufferAttachContentKey](avsamplebufferattachcontentkey%28______%29.md): Deprecated. Attaches a content key to a sample buffer for the purpose of content decryption.
