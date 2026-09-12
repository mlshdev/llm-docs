> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardtoken](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardtoken)

# TKSmartCardToken (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A representation of a smart card based cryptographic token.

## Declaration

```swift
class TKSmartCardToken
```

## Mentioned In

- [Authenticating Users with a Cryptographic Token](authenticating-users-with-a-cryptographic-token.md)

## Topics

### Creating Smart Card Tokens

- [init(smartCard:aid:instanceID:tokenDriver:)](tksmartcardtoken/init%28smartcard_aid_instanceid_tokendriver_%29-38ak2.md): Initializes a smart card token with the specified smart card, application identifier, and token driver.

### Accessing the Application Identifier

- [aid](tksmartcardtoken/aid.md): The ISO 7816-4 application identifiers of the Smart Card.

### Accessing Smart Cards

- [TKSmartCard](tksmartcard.md): A representation of a smart card.

### Working with Tag-Length-Value Records

- [TKTLVRecord](tktlvrecord.md): The base class encapsulating a Tag-Length-Value record.
- [TKBERTLVRecord](tkbertlvrecord.md): An object that parses BER-encoded data and produces DER-encoded data for TLV records.
- [TKCompactTLVRecord](tkcompacttlvrecord.md): An object that implements encoding using Compact-TLV encoding according to ISO 7816-4.
- [TKSimpleTLVRecord](tksimpletlvrecord.md): An object that implements encoding using Simple-TLV encoding according to ISO 7816-4.

### Initializers

- [init(smartCard:AID:instanceID:tokenDriver:)](tksmartcardtoken/init%28smartcard_aid_instanceid_tokendriver_%29-90hza.md)

## Relationships

### Inherits From

- [TKToken](tktoken.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Smart Card App Extensions

- [Authenticating Users with a Cryptographic Token](authenticating-users-with-a-cryptographic-token.md): Grant access to user accounts and the keychain by creating a smart card app extension.
- [Configuring Smart Card Authentication](configuring-smart-card-authentication.md): Set preferences for smart card authentication operations, including those on managed devices.
- [TKSmartCardTokenDriver](tksmartcardtokendriver.md): The driver that acts as an entry point for smart card app extensions.
- [TKSmartCardTokenSession](tksmartcardtokensession.md): A token session that is based on a smart card token.

# TKSmartCardToken (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A representation of a smart card based cryptographic token.

## Declaration

```objectivec
@interface TKSmartCardToken : TKToken
```

## Mentioned In

- [Authenticating Users with a Cryptographic Token](authenticating-users-with-a-cryptographic-token.md)

## Topics

### Creating Smart Card Tokens

- [initWithSmartCard:AID:instanceID:tokenDriver:](tksmartcardtoken/init%28smartcard_aid_instanceid_tokendriver_%29-38ak2.md): Initializes a smart card token with the specified smart card, application identifier, and token driver.

### Accessing the Application Identifier

- [AID](tksmartcardtoken/aid.md): The ISO 7816-4 application identifiers of the Smart Card.

### Accessing Smart Cards

- [TKSmartCard](tksmartcard.md): A representation of a smart card.

### Working with Tag-Length-Value Records

- [TKTLVRecord](tktlvrecord.md): The base class encapsulating a Tag-Length-Value record.
- [TKBERTLVRecord](tkbertlvrecord.md): An object that parses BER-encoded data and produces DER-encoded data for TLV records.
- [TKCompactTLVRecord](tkcompacttlvrecord.md): An object that implements encoding using Compact-TLV encoding according to ISO 7816-4.
- [TKSimpleTLVRecord](tksimpletlvrecord.md): An object that implements encoding using Simple-TLV encoding according to ISO 7816-4.

## Relationships

### Inherits From

- [TKToken](tktoken.md)

## See Also

### Smart Card App Extensions

- [Authenticating Users with a Cryptographic Token](authenticating-users-with-a-cryptographic-token.md): Grant access to user accounts and the keychain by creating a smart card app extension.
- [Configuring Smart Card Authentication](configuring-smart-card-authentication.md): Set preferences for smart card authentication operations, including those on managed devices.
- [TKSmartCardTokenDriver](tksmartcardtokendriver.md): The driver that acts as an entry point for smart card app extensions.
- [TKSmartCardTokenSession](tksmartcardtokensession.md): A token session that is based on a smart card token.
