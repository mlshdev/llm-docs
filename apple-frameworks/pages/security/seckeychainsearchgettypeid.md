> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainsearchgettypeid](https://developer.apple.com/documentation/security/seckeychainsearchgettypeid)

# SecKeychainSearchGetTypeID

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the unique identifier of the opaque type to which a keychain search object belongs.

## Declaration

```objectivec
CFTypeID SecKeychainSearchGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecKeychainSearchRef](seckeychainsearch.md) object.

<a id="Discussion"></a>

## Discussion

This function returns a value that uniquely identifies the opaque type of a [SecKeychainSearchRef](seckeychainsearch.md) object. You can compare this value to the [CFTypeID](../corefoundation/cftypeid.md) identifier obtained by calling the [CFGetTypeID](../corefoundation/cfgettypeid%28__%29.md) function on a specific object. These values might change from release to release or platform to platform.
