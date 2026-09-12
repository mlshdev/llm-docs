> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secidentitycopysystemidentity(_:_:_:)](https://developer.apple.com/documentation/security/secidentitycopysystemidentity(_:_:_:))

# SecIdentityCopySystemIdentity(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the system identity associated with a specified domain.

## Declaration

```swift
func SecIdentityCopySystemIdentity(_ domain: CFString, _ idRef: UnsafeMutablePointer<SecIdentity?>, _ actualDomain: UnsafeMutablePointer<CFString?>?) -> OSStatus
```

## Parameters

- `domain`: The domain for which you want to find an identity, typically in reverse DNS notation, such as `com.apple.security`. You may also pass the values defined in [System Identity Domains](system-identity-domains.md).
- `idRef`: On return, the identity object of the system-wide identity associated with the specified domain. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.
- `actualDomain`: On return, the actual domain name of the returned identity object is returned here. This may be different from the requested domain. Pass `NULL` if you do not want this information.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

If no system identity exists for the specified domain, a domain specific alternate may be returned instead. This is typically (but not exclusively) the system default identity. ([kSecIdentityDomainDefault](ksecidentitydomaindefault.md)).

# SecIdentityCopySystemIdentity (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the system identity associated with a specified domain.

## Declaration

```objectivec
OSStatus SecIdentityCopySystemIdentity(CFStringRef domain, SecIdentityRef*idRef, CFStringRef*actualDomain);
```

## Parameters

- `domain`: The domain for which you want to find an identity, typically in reverse DNS notation, such as `com.apple.security`. You may also pass the values defined in [System Identity Domains](system-identity-domains.md).
- `idRef`: On return, the identity object of the system-wide identity associated with the specified domain. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.
- `actualDomain`: On return, the actual domain name of the returned identity object is returned here. This may be different from the requested domain. Pass `NULL` if you do not want this information.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

If no system identity exists for the specified domain, a domain specific alternate may be returned instead. This is typically (but not exclusively) the system default identity. ([kSecIdentityDomainDefault](ksecidentitydomaindefault.md)).
