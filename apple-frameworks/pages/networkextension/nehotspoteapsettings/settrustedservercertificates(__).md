> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspoteapsettings/settrustedservercertificates(_:)](https://developer.apple.com/documentation/networkextension/nehotspoteapsettings/settrustedservercertificates(_:))

# setTrustedServerCertificates(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets trusted EAP server certificates for an enterprise Wi-Fi or Hotspot 2.0 network.

## Declaration

```swift
func setTrustedServerCertificates(_ certificates: [Any]) -> Bool
```

## Parameters

- `certificates`: An array of [SecCertificate](../../security/seccertificate.md) objects. The EAP peer uses these certificates to evaluate the trust of the server certificate chain.

<a id="return-value"></a>

## Return Value

Returns [false](https://developer.apple.com/documentation/swift/false) if any element in the array is not an object of type [SecCertificate](../../security/seccertificate.md) or if the OS fails to find a persistent reference for each element from the application’s keychain; else return [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

Your app must store the certificates in keychain access group `$(TeamIdentifierPrefix)com.apple.networkextensionsharing`. The OS uses [SecItemCopyMatching(\_:\_:)](../../security/secitemcopymatching%28____%29.md) to obtain a persistent reference to each certificate from the application’s keychain and uses it during EAP authentication.

The number of elements in the certificate array may not be more than 10.

## See Also

### Setting Keychain-based EAP Properties

- [setIdentity(\_:)](setidentity%28__%29.md): Sets the client identity for EAP authentication.

# setTrustedServerCertificates: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets trusted EAP server certificates for an enterprise Wi-Fi or Hotspot 2.0 network.

## Declaration

```objectivec
- (BOOL) setTrustedServerCertificates:(NSArray *) certificates;
```

## Parameters

- `certificates`: An array of [SecCertificateRef](../../security/seccertificate.md) objects. The EAP peer uses these certificates to evaluate the trust of the server certificate chain.

<a id="return-value"></a>

## Return Value

Returns [false](https://developer.apple.com/documentation/swift/false) if any element in the array is not an object of type [SecCertificateRef](../../security/seccertificate.md) or if the OS fails to find a persistent reference for each element from the application’s keychain; else return [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

Your app must store the certificates in keychain access group `$(TeamIdentifierPrefix)com.apple.networkextensionsharing`. The OS uses [SecItemCopyMatching](../../security/secitemcopymatching%28____%29.md) to obtain a persistent reference to each certificate from the application’s keychain and uses it during EAP authentication.

The number of elements in the certificate array may not be more than 10.

## See Also

### Setting Keychain-based EAP Properties

- [setIdentity:](setidentity%28__%29.md): Sets the client identity for EAP authentication.
