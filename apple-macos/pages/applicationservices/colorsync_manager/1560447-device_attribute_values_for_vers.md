> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1560447-device_attribute_values_for_vers](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1560447-device_attribute_values_for_vers)

# Device Attribute Values for Version 2.x Profiles

**Framework:** Application Services

Define masks your application can use to set or test bits in the `deviceAttributes `field of the `CM2Header` structure.

<a id="overview"></a>

## Overview

The ColorSync Manager defines the structure [CM2Header](../cm2header.md) to represent the profile header for the version 2.x profile format defined by the ICC.The `deviceAttributes` field of the `CM2Header` structure is an array of two unsigned long values whose bits specify information about a profile. The ICC reserves the use of `deviceAttributes[1]` and has assigned values to bits 0 and 1. All the bits of `deviceAttributes[0]` are reserved for use by color management system (CMS) vendors.

## Topics

### Constants

- [cmReflectiveTransparentMask](../cmreflectivetransparentmask.md)
- [cmGlossyMatteMask](../cmglossymattemask.md)
