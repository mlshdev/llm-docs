> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscreatewithownerandacl(_:_:_:_:_:)](https://developer.apple.com/documentation/security/secaccesscreatewithownerandacl(_:_:_:_:_:))

# SecAccessCreateWithOwnerAndACL(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.10)

Creates a new access instance using the owner and ACL entries you provide.

> SecKeychain is deprecated

## Declaration

```swift
func SecAccessCreateWithOwnerAndACL(_ userId: uid_t, _ groupId: gid_t, _ ownerType: SecAccessOwnerType, _ acls: CFArray?, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> SecAccess?
```

## Parameters

- `userId`: The user ID that owns this ACL.
- `groupId`: The group ID that owns this ACL.
- `ownerType`: Flags that control whether the specified user ID or group ID owns the resulting ACL. See [SecAccessOwnerType](secaccessownertype.md) for details.
- `acls`: An array of ACL entries to associate with the access instance.
- `error`: The address of an error instance. On error, the return value is `nil`, and the variable referenced by this parameter is overwritten with a [CFError](../corefoundation/cferror.md) instance that provides more information.

<a id="return-value"></a>

## Return Value

The new access instance. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release it when you are finished using it.

<a id="Discussion"></a>

## Discussion

Use this method to create a customized access instance from [SecACL](secacl.md) instances that you’ve created with the [SecACLCreateWithSimpleContents(\_:\_:\_:\_:\_:)](secaclcreatewithsimplecontents%28__________%29.md) method. If you want a default access instance, use the [SecAccessCreate(\_:\_:\_:)](secaccesscreate%28______%29.md) method instead.

# SecAccessCreateWithOwnerAndACL (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 10.10)

Creates a new access instance using the owner and ACL entries you provide.

> SecKeychain is deprecated

## Declaration

```objectivec
SecAccessRefSecAccessCreateWithOwnerAndACL(uid_t userId, gid_t groupId, SecAccessOwnerType ownerType, CFArrayRef acls, CFErrorRef*error);
```

## Parameters

- `userId`: The user ID that owns this ACL.
- `groupId`: The group ID that owns this ACL.
- `ownerType`: Flags that control whether the specified user ID or group ID owns the resulting ACL. See [SecAccessOwnerType](secaccessownertype.md) for details.
- `acls`: An array of ACL entries to associate with the access instance.
- `error`: The address of an error instance. On error, the return value is `nil`, and the variable referenced by this parameter is overwritten with a [CFErrorRef](../corefoundation/cferror.md) instance that provides more information.

<a id="return-value"></a>

## Return Value

The new access instance. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release it when you are finished using it.

<a id="Discussion"></a>

## Discussion

Use this method to create a customized access instance from [SecACLRef](secacl.md) instances that you’ve created with the [SecACLCreateWithSimpleContents](secaclcreatewithsimplecontents%28__________%29.md) method. If you want a default access instance, use the [SecAccessCreate](secaccesscreate%28______%29.md) method instead.
