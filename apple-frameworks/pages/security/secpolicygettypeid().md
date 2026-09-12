> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpolicygettypeid()](https://developer.apple.com/documentation/security/secpolicygettypeid())

# SecPolicyGetTypeID() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the unique identifier of the opaque type to which a policy object belongs.

## Declaration

```swift
func SecPolicyGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecPolicy](secpolicy.md) object.

<a id="Discussion"></a>

## Discussion

This function returns a value that uniquely identifies the opaque type of a [SecPolicy](secpolicy.md) object. You can compare this value to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) function on a specific object. These values might change from release to release or platform to platform.

# SecPolicyGetTypeID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the unique identifier of the opaque type to which a policy object belongs.

## Declaration

```objectivec
CFTypeID SecPolicyGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecPolicyRef](secpolicy.md) object.

<a id="Discussion"></a>

## Discussion

This function returns a value that uniquely identifies the opaque type of a [SecPolicyRef](secpolicy.md) object. You can compare this value to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID](../corefoundation/cfgettypeid%28__%29.md) function on a specific object. These values might change from release to release or platform to platform.
