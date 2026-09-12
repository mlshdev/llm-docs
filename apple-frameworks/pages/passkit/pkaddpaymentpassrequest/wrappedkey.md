> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassrequest/wrappedkey](https://developer.apple.com/documentation/passkit/pkaddpaymentpassrequest/wrappedkey)

# wrappedKey (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

## Declaration

```swift
var wrappedKey: Data? { get set }
```

## See Also

### Accessing request data

- [activationData](activationdata.md): The request’s activation data.
- [encryptedPassData](encryptedpassdata.md): An encrypted JSON file containing the sensitive information needed to add a card to Apple Pay.
- [ephemeralPublicKey](ephemeralpublickey.md): The ephemeral public key used by elliptic curve cryptography (ECC).

# wrappedKey (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * wrappedKey;
```

## See Also

### Accessing request data

- [activationData](activationdata.md): The request’s activation data.
- [encryptedPassData](encryptedpassdata.md): An encrypted JSON file containing the sensitive information needed to add a card to Apple Pay.
- [ephemeralPublicKey](ephemeralpublickey.md): The ephemeral public key used by elliptic curve cryptography (ECC).
