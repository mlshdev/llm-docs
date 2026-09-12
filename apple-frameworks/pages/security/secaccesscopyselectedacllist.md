> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscopyselectedacllist](https://developer.apple.com/documentation/security/secaccesscopyselectedacllist)

# SecAccessCopySelectedACLList

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Retrieves selected access control lists from a given access object.

> Use [SecAccessCopyMatchingACLList](secaccesscopymatchingacllist%28____%29.md) instead.

## Declaration

```objectivec
OSStatus SecAccessCopySelectedACLList(SecAccessRef accessRef, CSSM_ACL_AUTHORIZATION_TAG action, CFArrayRef*aclList);
```

## Parameters

- `accessRef`: The access object from which to retrieve the information.
- `action`: An access control list authorization tag; the function returns only those access control list entries that apply to the operation indicated by this tag.
- `aclList`: On return, a pointer to the selected access control lists. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function is deprecated. Use [SecAccessCopyMatchingACLList](secaccesscopymatchingacllist%28____%29.md) instead.

An access object can have any number of access control list (ACL) entries for specific operations or sets of operations. To retrieve all the ACL entries for an access object, use the [SecAccessCopyACLList](secaccesscopyacllist%28____%29.md) function.

<a id="Special-Considerations"></a>

### Special Considerations

This function is deprecated in macOS 10.7 and later; use [SecAccessCopyMatchingACLList](secaccesscopymatchingacllist%28____%29.md) instead.
