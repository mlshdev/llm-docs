> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560701-abstract_color_space_constants/cmgamutresultspace](https://developer.apple.com/documentation/applicationservices/1560701-abstract_color_space_constants/cmgamutresultspace)

# cmGamutResultSpace

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
cmGamutResultSpace = 0x000C
```

<a id="discussion"></a>

## Discussion

A color space for the resulting bitmap pointed to by the `resultBitMap` field of the function [CWMatchColors](../colorsync_manager/1805108-cwmatchcolors.md). A bitmap never uses this constant alone. Instead, it uses the constant `cmGamutResult1Space`, which combines `cmGamutResultSpace` and `cmOneBitDirectPacking` to define a bitmap that is 1 bit deep.
