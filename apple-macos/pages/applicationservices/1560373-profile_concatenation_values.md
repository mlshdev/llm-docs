> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560373-profile_concatenation_values](https://developer.apple.com/documentation/applicationservices/1560373-profile_concatenation_values)

# Profile Concatenation Values

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Specify values to use when concatenating profiles.

## Declaration

```objectivec
enum : int {
    ...
};
```

## Topics

### Constants

- [kNoTransform](1560373-profile_concatenation_values/knotransform.md): Not used.
- [kUseAtoB](1560373-profile_concatenation_values/kuseatob.md): Use 'A2B\*' tag from this profile or equivalent
- [kUseBtoA](1560373-profile_concatenation_values/kusebtoa.md): Use 'B2A\*' tag from this profile or equivalent
- [kUseBtoB](1560373-profile_concatenation_values/kusebtob.md): Use 'pre\*' tag from this profile or equivalent
- [kDeviceToPCS](1560373-profile_concatenation_values/kdevicetopcs.md): Device Dependent to Device Independent
- [kPCSToDevice](1560373-profile_concatenation_values/kpcstodevice.md): Device Independent to Device Dependent
- [kPCSToPCS](1560373-profile_concatenation_values/kpcstopcs.md): Independent, through device's gamut
- [kUseProfileIntent](1560373-profile_concatenation_values/kuseprofileintent.md): For renderingIntent in NCMConcatProfileSpec
