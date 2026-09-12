> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassrequest/encryptedpassdata](https://developer.apple.com/documentation/passkit/pkaddpaymentpassrequest/encryptedpassdata)

# encryptedPassData (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

An encrypted JSON file containing the sensitive information needed to add a card to Apple Pay.

## Declaration

```swift
var encryptedPassData: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

The JSON file must contain the following keys:

| Key | Type | Description |
| --- | --- | --- |
| primaryAccountNumber | String | The full primary account number (PAN). Digits only. |
| expiration | String | The expiration date as a string. For example, `"11/18"`. |
| name | String | The name of the card holder. |
| nonce | String | The hex string for the nonce value, provided in the delegate callback. |
| nonceSignature | String | The hex string for the nonce signature, provided in the delegate callback. |

## See Also

### Accessing request data

- [activationData](activationdata.md): The request’s activation data.
- [ephemeralPublicKey](ephemeralpublickey.md): The ephemeral public key used by elliptic curve cryptography (ECC).
- [wrappedKey](wrappedkey.md)

# encryptedPassData (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

An encrypted JSON file containing the sensitive information needed to add a card to Apple Pay.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * encryptedPassData;
```

<a id="Discussion"></a>

## Discussion

The JSON file must contain the following keys:

| Key | Type | Description |
| --- | --- | --- |
| primaryAccountNumber | String | The full primary account number (PAN). Digits only. |
| expiration | String | The expiration date as a string. For example, `"11/18"`. |
| name | String | The name of the card holder. |
| nonce | String | The hex string for the nonce value, provided in the delegate callback. |
| nonceSignature | String | The hex string for the nonce signature, provided in the delegate callback. |

## See Also

### Accessing request data

- [activationData](activationdata.md): The request’s activation data.
- [ephemeralPublicKey](ephemeralpublickey.md): The ephemeral public key used by elliptic curve cryptography (ECC).
- [wrappedKey](wrappedkey.md)
