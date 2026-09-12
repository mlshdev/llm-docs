> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscopyacllist(_:_:)](https://developer.apple.com/documentation/security/secaccesscopyacllist(_:_:))

# SecAccessCopyACLList(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves all the ACL entries of a given access instance.

> SecKeychain is deprecated

## Declaration

```swift
func SecAccessCopyACLList(_ accessRef: SecAccess, _ aclList: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

## Parameters

- `accessRef`: The access instance from which to retrieve the information.
- `aclList`: A pointer the method uses to return an array of [SecACL](secacl.md) instances. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release the array when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

An access instance can have any number of ACL entries for specific operations or sets of operations. Use this method to get an array of all the ACL entries of a particular access instance. To retrieve entries corresponding to specific operations, use the [SecAccessCopyMatchingACLList(\_:\_:)](secaccesscopymatchingacllist%28____%29.md) method instead.

# SecAccessCopyACLList (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves all the ACL entries of a given access instance.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecAccessCopyACLList(SecAccessRef accessRef, CFArrayRef*aclList);
```

## Parameters

- `accessRef`: The access instance from which to retrieve the information.
- `aclList`: A pointer the method uses to return an array of [SecACLRef](secacl.md) instances. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release the array when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

An access instance can have any number of ACL entries for specific operations or sets of operations. Use this method to get an array of all the ACL entries of a particular access instance. To retrieve entries corresponding to specific operations, use the [SecAccessCopyMatchingACLList](secaccesscopymatchingacllist%28____%29.md) method instead.
