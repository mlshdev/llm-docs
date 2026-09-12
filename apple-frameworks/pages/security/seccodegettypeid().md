> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodegettypeid()](https://developer.apple.com/documentation/security/seccodegettypeid())

# SecCodeGetTypeID() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the unique identifier of the opaque type to which a code object belongs.

## Declaration

```swift
func SecCodeGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a code object.

<a id="Discussion"></a>

## Discussion

You can compare the value returned by this function to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) function on a specific object. These values might change from release to release or platform to platform.

# SecCodeGetTypeID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the unique identifier of the opaque type to which a code object belongs.

## Declaration

```objectivec
CFTypeID SecCodeGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a code object.

<a id="Discussion"></a>

## Discussion

You can compare the value returned by this function to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID](../corefoundation/cfgettypeid%28__%29.md) function on a specific object. These values might change from release to release or platform to platform.

## See Also

### Related Documentation

- [SecHostCreateGuest](sechostcreateguest.md): Deprecated. Creates a new guest and describes its initial properties.
