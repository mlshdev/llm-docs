> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secstaticcodegettypeid()](https://developer.apple.com/documentation/security/secstaticcodegettypeid())

# SecStaticCodeGetTypeID() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the unique identifier of the opaque type to which a static code object belongs.

## Declaration

```swift
func SecStaticCodeGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecStaticCode](secstaticcode.md) object.

<a id="Discussion"></a>

## Discussion

You can compare the value returned by this function to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) function on a specific object. These values might change from release to release or platform to platform.

# SecStaticCodeGetTypeID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the unique identifier of the opaque type to which a static code object belongs.

## Declaration

```objectivec
CFTypeID SecStaticCodeGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecStaticCodeRef](secstaticcode.md) object.

<a id="Discussion"></a>

## Discussion

You can compare the value returned by this function to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID](../corefoundation/cfgettypeid%28__%29.md) function on a specific object. These values might change from release to release or platform to platform.
