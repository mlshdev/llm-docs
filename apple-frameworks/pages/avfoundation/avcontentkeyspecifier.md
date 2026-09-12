> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyspecifier](https://developer.apple.com/documentation/avfoundation/avcontentkeyspecifier)

# AVContentKeySpecifier (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

An object that uniquely identifies a content key.

## Declaration

```swift
class AVContentKeySpecifier
```

## Topics

### Creating a specifier

- [init(forKeySystem:identifier:options:)](avcontentkeyspecifier/init%28forkeysystem_identifier_options_%29.md): Creates a content key specifier.

### Inspecting a specifier

- [identifier](avcontentkeyspecifier/identifier.md): The container and protocol-specific key identifier.
- [keySystem](avcontentkeyspecifier/keysystem.md): The key system that generates content keys.
- [options](avcontentkeyspecifier/options.md): A dictionary of options with which you initialized the specifier.

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
- [AVContentKeyRequest](avcontentkeyrequest.md): An object that encapsulates information about a content decryption key request issued from a content key session object.
- [AVPersistableContentKeyRequest](avpersistablecontentkeyrequest.md): An object that encapsulates information about a persistable content decryption key request issued from a content key session.
- [AVContentKeyResponse](avcontentkeyresponse.md): An object that encapsulates information about a response to a content decryption key request.
- [AVExternalContentProtectionStatus](avexternalcontentprotectionstatus.md): Constants that specify whether sufficient protection exists to display the content.
- [AVSampleBufferAttachContentKey(\_:\_:\_:)](avsamplebufferattachcontentkey%28______%29.md): Deprecated. Attaches a content key to a sample buffer for the purpose of content decryption.

# AVContentKeySpecifier (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

An object that uniquely identifies a content key.

## Declaration

```objectivec
@interface AVContentKeySpecifier : NSObject
```

## Topics

### Creating a specifier

- [initForKeySystem:identifier:options:](avcontentkeyspecifier/init%28forkeysystem_identifier_options_%29.md): Creates a content key specifier.
- [contentKeySpecifierForKeySystem:identifier:options:](avcontentkeyspecifier/contentkeyspecifierforkeysystem_identifier_options_.md): A convenience initializer to create a content key specifier.

### Inspecting a specifier

- [identifier](avcontentkeyspecifier/identifier.md): The container and protocol-specific key identifier.
- [keySystem](avcontentkeyspecifier/keysystem.md): The key system that generates content keys.
- [options](avcontentkeyspecifier/options.md): A dictionary of options with which you initialized the specifier.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### FairPlay streaming

- [AVContentKeySession](avcontentkeysession.md): An object that creates and tracks decryption keys for media data.
- [AVContentKeySessionDelegate](avcontentkeysessiondelegate.md): A protocol that handles content key requests.
- [AVContentKey](avcontentkey.md): An object that represents the content key decryptor.
- [AVContentKeyRequest](avcontentkeyrequest.md): An object that encapsulates information about a content decryption key request issued from a content key session object.
- [AVPersistableContentKeyRequest](avpersistablecontentkeyrequest.md): An object that encapsulates information about a persistable content decryption key request issued from a content key session.
- [AVContentKeyResponse](avcontentkeyresponse.md): An object that encapsulates information about a response to a content decryption key request.
- [AVExternalContentProtectionStatus](avexternalcontentprotectionstatus.md): Constants that specify whether sufficient protection exists to display the content.
- [AVSampleBufferAttachContentKey](avsamplebufferattachcontentkey%28______%29.md): Deprecated. Attaches a content key to a sample buffer for the purpose of content decryption.
