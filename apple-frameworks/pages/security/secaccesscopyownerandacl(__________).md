> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscopyownerandacl(_:_:_:_:_:)](https://developer.apple.com/documentation/security/secaccesscopyownerandacl(_:_:_:_:_:))

# SecAccessCopyOwnerAndACL(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.10)

Retrieves the owner and the ACL entries of a given access instance.

> SecKeychain is deprecated

## Declaration

```swift
func SecAccessCopyOwnerAndACL(_ accessRef: SecAccess, _ userId: UnsafeMutablePointer<uid_t>?, _ groupId: UnsafeMutablePointer<gid_t>?, _ ownerType: UnsafeMutablePointer<SecAccessOwnerType>?, _ aclList: UnsafeMutablePointer<CFArray?>?) -> OSStatus
```

## Parameters

- `accessRef`: An access instance from which to retrieve the owner and ACL entries.
- `userId`: On return, the user ID that owns the access instance.
- `groupId`: On return, the group ID that owns the access instance.
- `ownerType`: On return, flags that indicate whether the specified user ID or group ID owns the resulting ACL entries. See [SecAccessOwnerType](secaccessownertype.md) for details.
- `aclList`: On return, an array of [SecACL](secacl.md) instances associated with the access instance.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecAccessCopyOwnerAndACL (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.10)

Retrieves the owner and the ACL entries of a given access instance.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecAccessCopyOwnerAndACL(SecAccessRef accessRef, uid_t *userId, gid_t *groupId, SecAccessOwnerType *ownerType, CFArrayRef*aclList);
```

## Parameters

- `accessRef`: An access instance from which to retrieve the owner and ACL entries.
- `userId`: On return, the user ID that owns the access instance.
- `groupId`: On return, the group ID that owns the access instance.
- `ownerType`: On return, flags that indicate whether the specified user ID or group ID owns the resulting ACL entries. See [SecAccessOwnerType](secaccessownertype.md) for details.
- `aclList`: On return, an array of [SecACLRef](secacl.md) instances associated with the access instance.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
