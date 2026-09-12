> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaclsetauthorizations](https://developer.apple.com/documentation/security/secaclsetauthorizations)

# SecACLSetAuthorizations

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Sets the CSSM authorization tags for a given access control list entry.

> Use [SecACLUpdateAuthorizations](secaclupdateauthorizations%28____%29.md) instead.

## Declaration

```objectivec
OSStatus SecACLSetAuthorizations(SecACLRef acl, CSSM_ACL_AUTHORIZATION_TAG *tags, uint32 tagCount);
```

## Parameters

- `acl`: An ACL object that identifies the access control list entry for which you wish to set authorization tags.
- `tags`: An array of CSSM authorization tags.
- `tagCount`: The number of tags in the CSSM authorization tag array.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function is deprecated. Use [SecACLUpdateAuthorizations](secaclupdateauthorizations%28____%29.md) instead.

An ACL object includes a list of trusted applications (see [SecTrustedApplicationCreateFromPath](sectrustedapplicationcreatefrompath%28____%29.md)), the name of the keychain item as it appears in user prompts, the prompt selector flag, and a list of one or more operations to which this ACL object applies. Use this function to set a list of operations for an ACL object, or set the `CSSM_ACL_AUTHORIZATION_ANY` tag to allow all operations. Use the [SecACLSetSimpleContents](secaclsetsimplecontents.md) function to set the other information.

Because an ACL object is always associated with an access object, when you modify an ACL entry, you are modifying the access object as well. There is no need for a separate function to write a modified ACL object back into the access object.

<a id="Special-Considerations"></a>

### Special Considerations

This function is deprecated in macOS 10.7 and later; use [SecACLUpdateAuthorizations](secaclupdateauthorizations%28____%29.md) instead.
