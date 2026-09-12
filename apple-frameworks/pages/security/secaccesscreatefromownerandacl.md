> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscreatefromownerandacl](https://developer.apple.com/documentation/security/secaccesscreatefromownerandacl)

# SecAccessCreateFromOwnerAndACL

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Creates a new access object using the owner and access control list you provide.

> Use [SecAccessCreateWithOwnerAndACL](secaccesscreatewithownerandacl%28__________%29.md) instead.

## Declaration

```objectivec
OSStatus SecAccessCreateFromOwnerAndACL(const CSSM_ACL_OWNER_PROTOTYPE *owner, uint32 aclCount, const CSSM_ACL_ENTRY_INFO *acls, SecAccessRef*accessRef);
```

## Parameters

- `owner`: A pointer to a CSSM access control list owner.
- `aclCount`: An unsigned 32-bit integer representing the number of items in the access control list.
- `acls`: A pointer to the CSSM access control list.
- `accessRef`: On return, points to the new access object. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function is deprecated. Use [SecAccessCreateWithOwnerAndACL](secaccesscreatewithownerandacl%28__________%29.md) instead.

This function creates an access object from CSSM structures. You can use this function to create an access object for use with other Certificate, Key, and Trust API functions if you want to use CSSM to create the access control list. CSSM allows more complex access controls than you can construct with the Certificate, Key, and Trust API. For more information about the CSSM API, see *Common Security: CDSA and CSSM, version 2 (with corrigenda)* from The Open Group ([http://www.opengroup.org/security/cdsa.htm](http://www.opengroup.org/security/cdsa.htm)).

<a id="Special-Considerations"></a>

### Special Considerations

This function is deprecated in macOS 10.7 and later; use [SecAccessCreateWithOwnerAndACL](secaccesscreatewithownerandacl%28__________%29.md) instead.
