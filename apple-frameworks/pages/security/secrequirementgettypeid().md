> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secrequirementgettypeid()](https://developer.apple.com/documentation/security/secrequirementgettypeid())

# SecRequirementGetTypeID() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the unique identifier of the opaque type to which a code requirement object belongs.

## Declaration

```swift
func SecRequirementGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecRequirement](secrequirement.md) object.

<a id="Discussion"></a>

## Discussion

You can compare the value returned by this function to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) function on a specific object. These values might change from release to release or platform to platform.

## See Also

### Related Documentation

- [SecRequirementCreateWithString(\_:\_:\_:)](secrequirementcreatewithstring%28______%29.md): Creates a code requirement object by compiling a valid text representation of a code requirement.
- [SecRequirementCreateWithStringAndErrors(\_:\_:\_:\_:)](secrequirementcreatewithstringanderrors%28________%29.md): Creates a code requirement object by compiling a valid text representation of a code requirement and returns detailed error information in the case of failure.

# SecRequirementGetTypeID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the unique identifier of the opaque type to which a code requirement object belongs.

## Declaration

```objectivec
CFTypeID SecRequirementGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecRequirementRef](secrequirement.md) object.

<a id="Discussion"></a>

## Discussion

You can compare the value returned by this function to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID](../corefoundation/cfgettypeid%28__%29.md) function on a specific object. These values might change from release to release or platform to platform.

## See Also

### Related Documentation

- [SecRequirementCreateWithString](secrequirementcreatewithstring%28______%29.md): Creates a code requirement object by compiling a valid text representation of a code requirement.
- [SecRequirementCreateWithStringAndErrors](secrequirementcreatewithstringanderrors%28________%29.md): Creates a code requirement object by compiling a valid text representation of a code requirement and returns detailed error information in the case of failure.
