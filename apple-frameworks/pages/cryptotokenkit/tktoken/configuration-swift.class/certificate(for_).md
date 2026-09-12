> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktoken/configuration-swift.class/certificate(for:)](https://developer.apple.com/documentation/cryptotokenkit/tktoken/configuration-swift.class/certificate(for:))

# certificate(for:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a certificate from the keychain with the object identifier you specify.

## Declaration

```swift
func certificate(for objectID: TKToken.ObjectID) throws -> TKTokenKeychainCertificate
```

## Parameters

- `objectID`: The identifier for the certificate within the keychain.

<a id="return-value"></a>

## Return Value

The certificate that the keychain stores.

<a id="Discussion"></a>

## Discussion

If the certificate the `objectID` specifies isn’t found, the system fills `error` with [TKError.Code.objectNotFound](../../tkerror/code/objectnotfound.md).

## See Also

### Retrieving Keys and Certificates

- [keychainItems](keychainitems.md): The keychain items associated with this token.
- [key(for:)](key%28for_%29.md): Returns a key from the keychain with the object identifier you specify.

# certificateForObjectID:error: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a certificate from the keychain with the object identifier you specify.

## Declaration

```objectivec
- (TKTokenKeychainCertificate *) certificateForObjectID:(TKTokenObjectID) objectID error:(NSError **) error;
```

## Parameters

- `objectID`: The identifier for the certificate within the keychain.
- `error`: If there is an error retrieving the certificate, upon return, the system populates this value with a [TKError](../../tkerror.md) object that describes the problem; otherwise, it is `nil`.

<a id="return-value"></a>

## Return Value

The certificate that the keychain stores. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

If the certificate the `objectID` specifies isn’t found, the system fills `error` with [TKErrorCodeObjectNotFound](../../tkerror/code/objectnotfound.md).

## See Also

### Retrieving Keys and Certificates

- [keychainItems](keychainitems.md): The keychain items associated with this token.
- [keyForObjectID:error:](key%28for_%29.md): Returns a key from the keychain with the object identifier you specify.
