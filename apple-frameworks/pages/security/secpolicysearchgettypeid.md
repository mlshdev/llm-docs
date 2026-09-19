> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secpolicysearchgettypeid

# SecPolicySearchGetTypeID

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the unique identifier of the opaque type to which a `SecPolicySearch` object belongs.

## Declaration

```objectivec
CFTypeID SecPolicySearchGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecPolicySearchRef](secpolicysearch.md) object.

<a id="Discussion"></a>

## Discussion

This function returns a value that uniquely identifies the opaque type of a [SecPolicySearchRef](secpolicysearch.md) object. You can compare this value to the `CFTypeID` identifier obtained by calling the `CFGetTypeID` function on a specific object. These values might change from release to release or platform to platform.
