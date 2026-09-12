> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560256-anonymous/cmgamutresult1space](https://developer.apple.com/documentation/applicationservices/1560256-anonymous/cmgamutresult1space)

# cmGamutResult1Space

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
cmGamutResult1Space = cmOneBitDirectPacking + cmGamutResultSpace
```

<a id="discussion"></a>

## Discussion

A gamut result color space for the resulting bitmap pointed to by the `resultBitMap` field of the function [CWMatchColors](../colorsync_manager/1805108-cwmatchcolors.md), with 1-bit direct packing. A pixel in the returned bitmap with value 1 (displayed as black) indicates an out-of-gamut color, while a pixel value of 0 (white) indicates a color that is in gamut.
