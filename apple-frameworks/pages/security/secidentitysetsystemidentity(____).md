> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secidentitysetsystemidentity(_:_:)](https://developer.apple.com/documentation/security/secidentitysetsystemidentity(_:_:))

# SecIdentitySetSystemIdentity(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Assigns the system identity to be associated with a specified domain.

## Declaration

```swift
func SecIdentitySetSystemIdentity(_ domain: CFString, _ idRef: SecIdentity?) -> OSStatus
```

## Parameters

- `domain`: The domain to which the specified identity will be assigned, typically in reverse DNS notation, such as `com.apple.security`.  You may also pass the values defined in [System Identity Domains](system-identity-domains.md).
- `idRef`: The identity to be assigned to the specified domain. Pass `NULL` to delete any currently-assigned identity for the specified domain; in this case, it is not an error if no identity exists for the specified domain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The caller must be running as root.

# SecIdentitySetSystemIdentity (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Assigns the system identity to be associated with a specified domain.

## Declaration

```objectivec
OSStatus SecIdentitySetSystemIdentity(CFStringRef domain, SecIdentityRef idRef);
```

## Parameters

- `domain`: The domain to which the specified identity will be assigned, typically in reverse DNS notation, such as `com.apple.security`.  You may also pass the values defined in [System Identity Domains](system-identity-domains.md).
- `idRef`: The identity to be assigned to the specified domain. Pass `NULL` to delete any currently-assigned identity for the specified domain; in this case, it is not an error if no identity exists for the specified domain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The caller must be running as root.
