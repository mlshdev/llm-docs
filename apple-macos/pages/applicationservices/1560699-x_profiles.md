> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560699-x_profiles](https://developer.apple.com/documentation/applicationservices/1560699-x_profiles)

# Flag Mask Definitions for Version 2.x Profiles

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Define masks your application can use to set or test various bits in the `flags` field of the `CM2Header` structure.

## Declaration

```objectivec
enum : int {
    ...
};
```

## Topics

### Constants

- [cmICCReservedFlagsMask](1560699-x_profiles/cmiccreservedflagsmask.md)
- [cmEmbeddedMask](1560699-x_profiles/cmembeddedmask.md): This mask provides access to bit 0 of the `flags` field, which specifies whether the profile is embedded. It has the value 1 if the profile is embedded, 0 if it is not.
- [cmEmbeddedUseMask](1560699-x_profiles/cmembeddedusemask.md)
- [cmCMSReservedFlagsMask](1560699-x_profiles/cmcmsreservedflagsmask.md)
- [cmQualityMask](1560699-x_profiles/cmqualitymask.md)
- [cmInterpolationMask](1560699-x_profiles/cminterpolationmask.md)
- [cmGamutCheckingMask](1560699-x_profiles/cmgamutcheckingmask.md)
- [cmBlackPointCompensationMask](1560699-x_profiles/cmblackpointcompensationmask.md)
