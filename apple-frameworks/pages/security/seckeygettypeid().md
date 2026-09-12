> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeygettypeid()](https://developer.apple.com/documentation/security/seckeygettypeid())

# SecKeyGetTypeID() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 4.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the unique identifier of the opaque type to which a key object belongs.

## Declaration

```swift
func SecKeyGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecKey](seckey.md) object.

<a id="Discussion"></a>

## Discussion

This function returns a value that uniquely identifies the opaque type of a [SecKey](seckey.md) object. You can compare this value to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) function on a specific object. These values might change from release to release or platform to platform.

# SecKeyGetTypeID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 4.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the unique identifier of the opaque type to which a key object belongs.

## Declaration

```objectivec
CFTypeID SecKeyGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecKeyRef](seckey.md) object.

<a id="Discussion"></a>

## Discussion

This function returns a value that uniquely identifies the opaque type of a [SecKeyRef](seckey.md) object. You can compare this value to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID](../corefoundation/cfgettypeid%28__%29.md) function on a specific object. These values might change from release to release or platform to platform.
