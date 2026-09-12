> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1560699-flag_mask_definitions_for_versio](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1560699-flag_mask_definitions_for_versio)

# Flag Mask Definitions for Version 2.x Profiles

**Framework:** Application Services

Define masks your application can use to set or test various bits in the `flags` field of the `CM2Header` structure.

<a id="overview"></a>

## Overview

The `flags` field of the structure [CM2Header](../cm2header.md) is an unsigned long value whose bits specify information about a profile. The ICC reserves the use of bits 0 to 15 and has assigned values to bits 0 and 1. Bits 16 to 31 are reserved for use by color management system (CMS) vendors. ColorSync has assigned values to bits 16 through 19.

## Topics

### Constants

- [cmICCReservedFlagsMask](../cmiccreservedflagsmask.md)
- [cmEmbeddedMask](../cmembeddedmask.md): This mask provides access to bit 0 of the `flags` field, which specifies whether the profile is embedded. It has the value 1 if the profile is embedded, 0 if it is not.
- [cmEmbeddedUseMask](../cmembeddedusemask.md)
- [cmCMSReservedFlagsMask](../cmcmsreservedflagsmask.md)
- [cmQualityMask](../cmqualitymask.md)
- [cmInterpolationMask](../cminterpolationmask.md)
- [cmGamutCheckingMask](../cmgamutcheckingmask.md)
- [cmBlackPointCompensationMask](../cmblackpointcompensationmask.md)
