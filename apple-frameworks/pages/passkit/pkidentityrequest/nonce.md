> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityrequest/nonce](https://developer.apple.com/documentation/passkit/pkidentityrequest/nonce)

# nonce (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An arbitrary number that the signed response playload includes.

## Declaration

```swift
var nonce: Data? { get set }
```

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)
- [Verifying Wallet identity requests](../verifying-wallet-identity-requests.md)

<a id="Discussion"></a>

## Discussion

A [PKIdentityAuthorizationController](../pkidentityauthorizationcontroller.md) treats this value as opaque, and has a maximum allowed size of 64 bytes. Your app’s server needs to use the same `nonce` value when decrypting and verifying the response.

Set this property before you invoke [requestDocument(\_:completion:)](../pkidentityauthorizationcontroller/requestdocument%28__completion_%29.md).

## See Also

### Configuring an identity request

- [descriptor](descriptor.md): The description of the document the app requests.
- [merchantIdentifier](merchantidentifier.md): A value that represents the merchant that makes the request.

# nonce (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An arbitrary number that the signed response playload includes.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * nonce;
```

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)
- [Verifying Wallet identity requests](../verifying-wallet-identity-requests.md)

<a id="Discussion"></a>

## Discussion

A [PKIdentityAuthorizationController](../pkidentityauthorizationcontroller.md) treats this value as opaque, and has a maximum allowed size of 64 bytes. Your app’s server needs to use the same `nonce` value when decrypting and verifying the response.

Set this property before you invoke [requestDocument:completion:](../pkidentityauthorizationcontroller/requestdocument%28__completion_%29.md).

## See Also

### Configuring an identity request

- [descriptor](descriptor.md): The description of the document the app requests.
- [merchantIdentifier](merchantidentifier.md): A value that represents the merchant that makes the request.
