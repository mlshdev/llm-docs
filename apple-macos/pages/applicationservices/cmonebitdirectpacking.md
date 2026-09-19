> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/cmonebitdirectpacking

# cmOneBitDirectPacking

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

One bit is used as the pixel format. This storage format is used by the resulting bitmap pointed to by the `resultBitMap` field of the function [CWMatchColors](colorsync_manager/1805108-cwmatchcolors.md); the bitmap must be only 1 bit deep.

## Declaration

```swift
var cmOneBitDirectPacking: Int { get }
```
