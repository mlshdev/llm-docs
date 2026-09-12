> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscopymatchingacllist(_:_:)](https://developer.apple.com/documentation/security/secaccesscopymatchingacllist(_:_:))

# SecAccessCopyMatchingACLList(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.10)

Retrieves selected ACL entries from a given access instance.

> SecKeychain is deprecated

## Declaration

```swift
func SecAccessCopyMatchingACLList(_ accessRef: SecAccess, _ authorizationTag: CFTypeRef) -> CFArray?
```

## Parameters

- `accessRef`: The access instance from which to retrieve the information.
- `authorizationTag`: An access control list authorization tag. See [ACL Authorization Keys](acl-authorization-keys.md) for a list of possible values. The method returns only those ACL entries that apply to the operation indicated by this tag.

<a id="return-value"></a>

## Return Value

An array containing the selected access control list entries. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) method to release the array when you are finished using it.

<a id="Discussion"></a>

## Discussion

An access instance can have any number of ACL entries for specific operations or sets of operations. This method returns the ACL entries that apply to the given operation. To retrieve all the ACL entries for an access instance, use the [SecAccessCopyACLList(\_:\_:)](secaccesscopyacllist%28____%29.md) method instead.

# SecAccessCopyMatchingACLList (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.10)

Retrieves selected ACL entries from a given access instance.

> SecKeychain is deprecated

## Declaration

```objectivec
CFArrayRefSecAccessCopyMatchingACLList(SecAccessRef accessRef, CFTypeRef authorizationTag);
```

## Parameters

- `accessRef`: The access instance from which to retrieve the information.
- `authorizationTag`: An access control list authorization tag. See [ACL Authorization Keys](acl-authorization-keys.md) for a list of possible values. The method returns only those ACL entries that apply to the operation indicated by this tag.

<a id="return-value"></a>

## Return Value

An array containing the selected access control list entries. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) method to release the array when you are finished using it.

<a id="Discussion"></a>

## Discussion

An access instance can have any number of ACL entries for specific operations or sets of operations. This method returns the ACL entries that apply to the given operation. To retrieve all the ACL entries for an access instance, use the [SecAccessCopyACLList](secaccesscopyacllist%28____%29.md) method instead.
