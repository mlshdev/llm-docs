> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustedapplicationgettypeid()](https://developer.apple.com/documentation/security/sectrustedapplicationgettypeid())

# SecTrustedApplicationGetTypeID() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Returns the unique identifier of the opaque type to which a trusted app instance belongs.

> SecKeychain is deprecated

## Declaration

```swift
func SecTrustedApplicationGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecTrustedApplication](sectrustedapplication.md) object.

<a id="Discussion"></a>

## Discussion

This function returns a value that uniquely identifies the opaque type of a [SecTrustedApplication](sectrustedapplication.md) instance. You can compare this value to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) method on a specific instance. These values might change from release to release or platform to platform.

# SecTrustedApplicationGetTypeID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Returns the unique identifier of the opaque type to which a trusted app instance belongs.

> SecKeychain is deprecated

## Declaration

```objectivec
CFTypeID SecTrustedApplicationGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecTrustedApplicationRef](sectrustedapplication.md) object.

<a id="Discussion"></a>

## Discussion

This function returns a value that uniquely identifies the opaque type of a [SecTrustedApplicationRef](sectrustedapplication.md) instance. You can compare this value to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID](../corefoundation/cfgettypeid%28__%29.md) method on a specific instance. These values might change from release to release or platform to platform.
