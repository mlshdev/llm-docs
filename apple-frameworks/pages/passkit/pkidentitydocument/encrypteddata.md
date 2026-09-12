> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentitydocument/encrypteddata](https://developer.apple.com/documentation/passkit/pkidentitydocument/encrypteddata)

# encryptedData (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An encrypted data object that contains the document information and metadata to associate with a request.

## Declaration

```swift
var encryptedData: Data { get }
```

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)

<a id="Discussion"></a>

## Discussion

The system encrypts this property to the public key with the developer portal for the calling app. You need to send this data to the server holding the corresponding private key for decryption.

# encryptedData (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An encrypted data object that contains the document information and metadata to associate with a request.

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * encryptedData;
```

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)

<a id="Discussion"></a>

## Discussion

The system encrypts this property to the public key with the developer portal for the calling app. You need to send this data to the server holding the corresponding private key for decryption.
