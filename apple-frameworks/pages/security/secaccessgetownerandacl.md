> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccessgetownerandacl](https://developer.apple.com/documentation/security/secaccessgetownerandacl)

# SecAccessGetOwnerAndACL

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Retrieves the owner and the access control list of a given access object.

> Use [SecAccessCopyOwnerAndACL](secaccesscopyownerandacl%28__________%29.md) instead.

## Declaration

```objectivec
OSStatus SecAccessGetOwnerAndACL(SecAccessRef accessRef, CSSM_ACL_OWNER_PROTOTYPE_PTR*owner, uint32 *aclCount, CSSM_ACL_ENTRY_INFO_PTR*acls);
```

## Parameters

- `accessRef`: An access object from which to retrieve the owner and access control list.
- `owner`: On return, a pointer to a CSSM access control list owner.
- `aclCount`: On return, a pointer to an unsigned 32-bit integer representing the number of items in the access control list.
- `acls`: On return, a pointer to the CSSM access control list.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function is deprecated. Use [SecAccessCopyOwnerAndACL](secaccesscopyownerandacl%28__________%29.md) instead.

This function returns CSSM structures for use with CSSM API functions.

<a id="Special-Considerations"></a>

### Special Considerations

This function is deprecated in macOS 10.7 and later. Use [SecAccessCopyOwnerAndACL](secaccesscopyownerandacl%28__________%29.md) instead.
