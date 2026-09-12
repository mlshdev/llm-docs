> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaingettypeid()](https://developer.apple.com/documentation/security/seckeychaingettypeid())

# SecKeychainGetTypeID() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Returns the unique identifier of the opaque type to which a keychain object belongs.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecKeychain](seckeychain.md) object.

<a id="Discussion"></a>

## Discussion

This function returns a value that uniquely identifies the opaque type of a [SecKeychain](seckeychain.md) object. You can compare this value to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) function on a specific object. These values might change from release to release or platform to platform.

# SecKeychainGetTypeID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Returns the unique identifier of the opaque type to which a keychain object belongs.

> SecKeychain is deprecated

## Declaration

```objectivec
CFTypeID SecKeychainGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecKeychainRef](seckeychain.md) object.

<a id="Discussion"></a>

## Discussion

This function returns a value that uniquely identifies the opaque type of a [SecKeychainRef](seckeychain.md) object. You can compare this value to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID](../corefoundation/cfgettypeid%28__%29.md) function on a specific object. These values might change from release to release or platform to platform.
