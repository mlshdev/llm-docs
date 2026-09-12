> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805614-pmsetprofile](https://developer.apple.com/documentation/applicationservices/core_printing/1805614-pmsetprofile)

# PMSetProfile

**Interface language:** Objective-C

**Framework:** Application Services

Embeds a color profile during printing.

> There is no replacement; draw using Quartz 2D instead.

## Declaration

```objectivec
OSStatus PMSetProfile (
   PMPrintSettings printSettings,
   PMTag tag,
   const CMProfileLocation *profile
);
```

## Parameters

- `printSettings`: The print settings object in which to embed the color profile.
- `tag`: A tag that describes the usage of the profile. Currently, the only tag value you can pass is the constant `kPMSourceProfile`. See [Tag Constants](tag_constants.md) for more information on this constant.
- `profile`: A pointer to a structure of type `CMProfileLocation` that specifies the location of a ColorSync profile. The profile must be version 2 or later. If you pass a profile that is an earlier version, the function returns the result code `kPMNotImplemented`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

You can use the function `PMSetProfile` to tag QuickDraw drawing with a custom ColorSync profile. The function `PMSetProfile` is useful only if the graphics context is QuickDraw and the current port is the printing port. 

You should call this function each time you want to change the profile used to draw page elements. The printing system resets the profile to the default at the beginning of each page. If you call the function `PMSetProfile` a second time, the old profile is ignored. 

<a id="1819490"></a>

### Special Considerations

This function is deprecated because QuickDraw is deprecated. When drawing with Quartz, the current stroke and fill color space and the color space associated with an image are used to characterize color. Quartz provides ways to use ColorSync profiles to create color spaces, so you can characterize color using ColorSync simply by drawing with Quartz.

## See Also

### Matching Color With ColorSync

- [PMSessionEnableColorSync](1805617-pmsessionenablecolorsync.md): Deprecated. Enables use of a custom ColorSync profile previously set by the function [PMSetProfile](1805614-pmsetprofile.md).
- [PMSessionDisableColorSync](1805619-pmsessiondisablecolorsync.md): Deprecated. Disables use of a custom ColorSync profile previously enabled by the function [PMSessionEnableColorSync](1805617-pmsessionenablecolorsync.md).
