> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspoteapsettings/setidentity(_:)](https://developer.apple.com/documentation/networkextension/nehotspoteapsettings/setidentity(_:))

# setIdentity(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the client identity for EAP authentication.

## Declaration

```swift
func setIdentity(_ identity: SecIdentity) -> Bool
```

## Parameters

- `identity`: The EAP peer identity, a `SecIdentityRef` object that contains a `SecKeyRef` object and an associated `SecCertificateRef` object.

<a id="return-value"></a>

## Return Value

Returns `false` if the parameter is not an object of `SecIdentityRef` type or if the persistent reference is not found in the application’s keychain; otherwise returns `true`.

<a id="Discussion"></a>

## Discussion

Your app must store `SecIdentity` in the keychain access group $`(Team​Identifier​Prefix)com​.apple​.networkextensionsharing`. The OS uses [SecItemCopyMatching(\_:\_:)](../../security/secitemcopymatching%28____%29.md) to obtain a persistent reference to this identity from the application’s keychain and uses it during EAP authentication.

## See Also

### Setting Keychain-based EAP Properties

- [setTrustedServerCertificates(\_:)](settrustedservercertificates%28__%29.md): Sets trusted EAP server certificates for an enterprise Wi-Fi or Hotspot 2.0 network.

# setIdentity: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the client identity for EAP authentication.

## Declaration

```objectivec
- (BOOL) setIdentity:(SecIdentityRef) identity;
```

## Parameters

- `identity`: The EAP peer identity, a `SecIdentityRef` object that contains a `SecKeyRef` object and an associated `SecCertificateRef` object.

<a id="return-value"></a>

## Return Value

Returns `false` if the parameter is not an object of `SecIdentityRef` type or if the persistent reference is not found in the application’s keychain; otherwise returns `true`.

<a id="Discussion"></a>

## Discussion

Your app must store `SecIdentity` in the keychain access group $`(Team​Identifier​Prefix)com​.apple​.networkextensionsharing`. The OS uses [SecItemCopyMatching](../../security/secitemcopymatching%28____%29.md) to obtain a persistent reference to this identity from the application’s keychain and uses it during EAP authentication.

## See Also

### Setting Keychain-based EAP Properties

- [setTrustedServerCertificates:](settrustedservercertificates%28__%29.md): Sets trusted EAP server certificates for an enterprise Wi-Fi or Hotspot 2.0 network.
