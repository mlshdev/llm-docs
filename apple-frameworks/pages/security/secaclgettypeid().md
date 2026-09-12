> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaclgettypeid()](https://developer.apple.com/documentation/security/secaclgettypeid())

# SecACLGetTypeID() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.10)

Returns the unique identifier of the opaque type to which an ACL entry belongs.

> SecKeychain is deprecated

## Declaration

```swift
func SecACLGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecACL](secacl.md) object.

<a id="Discussion"></a>

## Discussion

This function returns a value that uniquely identifies the opaque type of a [SecACL](secacl.md) instance. You can compare this value to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) method on a specific instance. These values might change from release to release or platform to platform.

# SecACLGetTypeID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.10)

Returns the unique identifier of the opaque type to which an ACL entry belongs.

> SecKeychain is deprecated

## Declaration

```objectivec
CFTypeID SecACLGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecACLRef](secacl.md) object.

<a id="Discussion"></a>

## Discussion

This function returns a value that uniquely identifies the opaque type of a [SecACLRef](secacl.md) instance. You can compare this value to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID](../corefoundation/cfgettypeid%28__%29.md) method on a specific instance. These values might change from release to release or platform to platform.
