> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktoken/configuration-swift.class](https://developer.apple.com/documentation/cryptotokenkit/tktoken/configuration-swift.class)

# TKToken.Configuration (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A token’s configuration.

## Declaration

```swift
class Configuration
```

<a id="overview"></a>

## Overview

When you introduce a new [TKToken.Configuration](configuration-swift.class.md) into the system, it can inform the system about its identities, consisting of both private keys and certificates, which the [keychainItems](configuration-swift.class/keychainitems.md) property provides. Use the [configurationData](configuration-swift.class/configurationdata.md) property to set additional configuration data.

You configure always-available tokens on a per-user basis. Although the token driver and the app hosting the token extension are shared across the system, the configuration for a token is stored individually for each user.

## Topics

### Reporting Configuration Information

- [instanceID](configuration-swift.class/instanceid.md): The unique, persistent identifier of this token that the token implementation creates.
- [configurationData](configuration-swift.class/configurationdata.md): Additional configuration information for the token instance.

### Retrieving Keys and Certificates

- [keychainItems](configuration-swift.class/keychainitems.md): The keychain items associated with this token.
- [certificate(for:)](configuration-swift.class/certificate%28for_%29.md): Returns a certificate from the keychain with the object identifier you specify.
- [key(for:)](configuration-swift.class/key%28for_%29.md): Returns a key from the keychain with the object identifier you specify.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Configuring the Token

- [configuration](configuration-swift.property.md): The current configuration for a token.

# TKTokenConfiguration (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A token’s configuration.

## Declaration

```objectivec
@interface TKTokenConfiguration : NSObject
```

<a id="overview"></a>

## Overview

When you introduce a new [TKTokenConfiguration](configuration-swift.class.md) into the system, it can inform the system about its identities, consisting of both private keys and certificates, which the [keychainItems](configuration-swift.class/keychainitems.md) property provides. Use the [configurationData](configuration-swift.class/configurationdata.md) property to set additional configuration data.

You configure always-available tokens on a per-user basis. Although the token driver and the app hosting the token extension are shared across the system, the configuration for a token is stored individually for each user.

## Topics

### Reporting Configuration Information

- [instanceID](configuration-swift.class/instanceid.md): The unique, persistent identifier of this token that the token implementation creates.
- [configurationData](configuration-swift.class/configurationdata.md): Additional configuration information for the token instance.

### Retrieving Keys and Certificates

- [keychainItems](configuration-swift.class/keychainitems.md): The keychain items associated with this token.
- [certificateForObjectID:error:](configuration-swift.class/certificate%28for_%29.md): Returns a certificate from the keychain with the object identifier you specify.
- [keyForObjectID:error:](configuration-swift.class/key%28for_%29.md): Returns a key from the keychain with the object identifier you specify.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Configuring the Token

- [configuration](configuration-swift.property.md): The current configuration for a token.
