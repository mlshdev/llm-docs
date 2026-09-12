> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805072-cmgetnamedcolorname](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805072-cmgetnamedcolorname)

# CMGetNamedColorName

**Interface language:** Objective-C

**Framework:** Application Services

Obtains a named color name for a specific named color index from a named color space profile.

## Declaration

```objectivec
CMError CMGetNamedColorName (
   CMProfileRef prof,
   UInt32 index,
   StringPtr name
);
```

## Parameters

- `prof`: A profile reference of type [CMProfileRef](../cmprofileref.md) to a named color space profile to obtain a named color name from.
- `index`: An index value for a named color to obtain the color name for.
- `name`: A pointer to a Pascal string. On return, a color name string.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

Based on the passed color name index, the `CMGetNamedColorName` function does a lookup into the named color tag and returns the name. If the index is greater than the number of named colors, `CMGetNamedColorName` returns an error code.

## See Also

### Accessing Name-Class Profiles

- [CMGetNamedColorInfo](1805047-cmgetnamedcolorinfo.md): Obtains information about a named color space from its profile reference.
- [CMGetNamedColorValue](1805053-cmgetnamedcolorvalue.md): Obtains device and PCS color values for a specific color name from a named color space profile.
- [CMGetIndNamedColorValue](1805059-cmgetindnamedcolorvalue.md): Obtains device and PCS color values for a specific named color index from a named color space profile.
- [CMGetNamedColorIndex](1805065-cmgetnamedcolorindex.md): Obtains a named color index for a specific color name from a named color space profile.
