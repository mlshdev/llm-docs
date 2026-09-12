> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaclupdateauthorizations(_:_:)](https://developer.apple.com/documentation/security/secaclupdateauthorizations(_:_:))

# SecACLUpdateAuthorizations(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.10)

Sets the authorization tags for a given ACL.

> SecKeychain is deprecated

## Declaration

```swift
func SecACLUpdateAuthorizations(_ acl: SecACL, _ authorizations: CFArray) -> OSStatus
```

## Parameters

- `acl`: An ACL object that identifies the access control list entry for which you wish to set authorization tags.
- `authorizations`: An array of authorization tags. See `CSSM_ACL_AUTHORIZATION_TAG` for details.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

An ACL entry includes a list of trusted apps, the name of the keychain item as it appears in user prompts, the prompt selector flag, and a list of one or more operations to which this ACL entry applies. Use this method to set a list of operations for an ACL entry, or set the [kSecACLAuthorizationAny](ksecaclauthorizationany.md) tag to allow all operations. Use the [SecACLSetContents(\_:\_:\_:\_:)](secaclsetcontents%28________%29.md) method to set the other information.

Because an ACL entry is always associated with an access instance, when you modify an entry, you are modifying the access instance as well.

# SecACLUpdateAuthorizations (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.10)

Sets the authorization tags for a given ACL.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecACLUpdateAuthorizations(SecACLRef acl, CFArrayRef authorizations);
```

## Parameters

- `acl`: An ACL object that identifies the access control list entry for which you wish to set authorization tags.
- `authorizations`: An array of authorization tags. See `CSSM_ACL_AUTHORIZATION_TAG` for details.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

An ACL entry includes a list of trusted apps, the name of the keychain item as it appears in user prompts, the prompt selector flag, and a list of one or more operations to which this ACL entry applies. Use this method to set a list of operations for an ACL entry, or set the [kSecACLAuthorizationAny](ksecaclauthorizationany.md) tag to allow all operations. Use the [SecACLSetContents](secaclsetcontents%28________%29.md) method to set the other information.

Because an ACL entry is always associated with an access instance, when you modify an entry, you are modifying the access instance as well.
