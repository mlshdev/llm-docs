> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassrequest/ephemeralpublickey](https://developer.apple.com/documentation/passkit/pkaddpaymentpassrequest/ephemeralpublickey)

# ephemeralPublicKey (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

The ephemeral public key used by elliptic curve cryptography (ECC).

## Declaration

```swift
var ephemeralPublicKey: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

When using an ECC scheme, this property contains your ephemeral public key.

## See Also

### Accessing request data

- [activationData](activationdata.md): The request’s activation data.
- [encryptedPassData](encryptedpassdata.md): An encrypted JSON file containing the sensitive information needed to add a card to Apple Pay.
- [wrappedKey](wrappedkey.md)

# ephemeralPublicKey (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

The ephemeral public key used by elliptic curve cryptography (ECC).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * ephemeralPublicKey;
```

<a id="Discussion"></a>

## Discussion

When using an ECC scheme, this property contains your ephemeral public key.

## See Also

### Accessing request data

- [activationData](activationdata.md): The request’s activation data.
- [encryptedPassData](encryptedpassdata.md): An encrypted JSON file containing the sensitive information needed to add a card to Apple Pay.
- [wrappedKey](wrappedkey.md)
