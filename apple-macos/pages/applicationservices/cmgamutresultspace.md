> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/cmgamutresultspace

# cmGamutResultSpace

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var cmGamutResultSpace: Int { get }
```

<a id="discussion"></a>

## Discussion

A color space for the resulting bitmap pointed to by the `resultBitMap` field of the function [CWMatchColors](colorsync_manager/1805108-cwmatchcolors.md). A bitmap never uses this constant alone. Instead, it uses the constant `cmGamutResult1Space`, which combines `cmGamutResultSpace` and `cmOneBitDirectPacking` to define a bitmap that is 1 bit deep.
