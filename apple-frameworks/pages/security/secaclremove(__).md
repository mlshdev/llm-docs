> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaclremove(_:)](https://developer.apple.com/documentation/security/secaclremove(_:))

# SecACLRemove(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.10)

Removes the specified ACL entry from the access instance that contains it.

> SecKeychain is deprecated

## Declaration

```swift
func SecACLRemove(_ aclRef: SecACL) -> OSStatus
```

## Parameters

- `aclRef`: An ACL entry to remove.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This method fails if you attempt to remove the owner entry because an access instance must have exactly one such ACL at all times. If you need to change ownership settings, modify the existing owner entry rather than replacing it. In particular, use the [SecAccessCopyMatchingACLList(\_:\_:)](secaccesscopymatchingacllist%28____%29.md) method with the [kSecACLAuthorizationChangeACL](ksecaclauthorizationchangeacl.md) authorization to find the existing entry, and the [SecACLSetContents(\_:\_:\_:\_:)](secaclsetcontents%28________%29.md) method to change it as needed.

# SecACLRemove (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.10)

Removes the specified ACL entry from the access instance that contains it.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecACLRemove(SecACLRef aclRef);
```

## Parameters

- `aclRef`: An ACL entry to remove.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This method fails if you attempt to remove the owner entry because an access instance must have exactly one such ACL at all times. If you need to change ownership settings, modify the existing owner entry rather than replacing it. In particular, use the [SecAccessCopyMatchingACLList](secaccesscopymatchingacllist%28____%29.md) method with the [kSecACLAuthorizationChangeACL](ksecaclauthorizationchangeacl.md) authorization to find the existing entry, and the [SecACLSetContents](secaclsetcontents%28________%29.md) method to change it as needed.
