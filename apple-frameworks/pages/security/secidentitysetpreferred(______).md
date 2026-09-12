> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secidentitysetpreferred(_:_:_:)](https://developer.apple.com/documentation/security/secidentitysetpreferred(_:_:_:))

# SecIdentitySetPreferred(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Sets the identity that should be preferred for the specified name and key use.

## Declaration

```swift
func SecIdentitySetPreferred(_ identity: SecIdentity?, _ name: CFString, _ keyUsage: CFArray?) -> OSStatus
```

## Parameters

- `identity`: The identity to set as preferred for the specified name and key usage.
- `name`: A string containing an email address (RFC 822) or other name for which a preferred certificate is requested.
- `keyUsage`: An array containing a list of usage attributes ([kSecAttrCanEncrypt](ksecattrcanencrypt.md), for example), or `NULL` if you want this identity to be preferred for any usage. See Attribute Item Keys for a complete list of possible usage attributes.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecIdentitySetPreferred (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Sets the identity that should be preferred for the specified name and key use.

## Declaration

```objectivec
OSStatus SecIdentitySetPreferred(SecIdentityRef identity, CFStringRef name, CFArrayRef keyUsage);
```

## Parameters

- `identity`: The identity to set as preferred for the specified name and key usage.
- `name`: A string containing an email address (RFC 822) or other name for which a preferred certificate is requested.
- `keyUsage`: An array containing a list of usage attributes ([kSecAttrCanEncrypt](ksecattrcanencrypt.md), for example), or `NULL` if you want this identity to be preferred for any usage. See Attribute Item Keys for a complete list of possible usage attributes.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
