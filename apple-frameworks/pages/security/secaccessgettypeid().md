> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccessgettypeid()](https://developer.apple.com/documentation/security/secaccessgettypeid())

# SecAccessGetTypeID() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Returns the unique identifier of the opaque type to which an access instance belongs.

> SecKeychain is deprecated

## Declaration

```swift
func SecAccessGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecAccess](secaccess.md) instance.

<a id="Discussion"></a>

## Discussion

This method returns a value that uniquely identifies the opaque type of a [SecAccess](secaccess.md) instance. You can compare this value to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) method on a specific object. These values might change from release to release or platform to platform.

# SecAccessGetTypeID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Returns the unique identifier of the opaque type to which an access instance belongs.

> SecKeychain is deprecated

## Declaration

```objectivec
CFTypeID SecAccessGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecAccessRef](secaccess.md) instance.

<a id="Discussion"></a>

## Discussion

This method returns a value that uniquely identifies the opaque type of a [SecAccessRef](secaccess.md) instance. You can compare this value to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID](../corefoundation/cfgettypeid%28__%29.md) method on a specific object. These values might change from release to release or platform to platform.
