> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805065-cmgetnamedcolorindex](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805065-cmgetnamedcolorindex)

# CMGetNamedColorIndex

**Interface language:** Objective-C

**Framework:** Application Services

Obtains a named color index for a specific color name from a named color space profile.

## Declaration

```objectivec
CMError CMGetNamedColorIndex (
   CMProfileRef prof,
   StringPtr name,
   UInt32 *index
);
```

## Parameters

- `prof`: A profile reference of type [CMProfileRef](../cmprofileref.md) to a named color space profile to obtain a named color index from.
- `name`: A pointer to a Pascal string. You supply a color name string value for the color to obtain the color index for.
- `index`: A pointer to an index value. On return, an index value for a named color.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

Based on the passed color name, the `CMGetNamedColorIndex` function does a lookup into the named color tag and, if the name is found in the tag, returns the index. Otherwise, `CMGetNamedColorIndex` returns an error code.

## See Also

### Accessing Name-Class Profiles

- [CMGetNamedColorInfo](1805047-cmgetnamedcolorinfo.md): Obtains information about a named color space from its profile reference.
- [CMGetNamedColorValue](1805053-cmgetnamedcolorvalue.md): Obtains device and PCS color values for a specific color name from a named color space profile.
- [CMGetIndNamedColorValue](1805059-cmgetindnamedcolorvalue.md): Obtains device and PCS color values for a specific named color index from a named color space profile.
- [CMGetNamedColorName](1805072-cmgetnamedcolorname.md): Obtains a named color name for a specific named color index from a named color space profile.
