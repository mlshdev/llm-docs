> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmonebitdirectpacking](https://developer.apple.com/documentation/applicationservices/cmonebitdirectpacking)

# cmOneBitDirectPacking

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

One bit is used as the pixel format. This storage format is used by the resulting bitmap pointed to by the `resultBitMap` field of the function [CWMatchColors](colorsync_manager/1805108-cwmatchcolors.md); the bitmap must be only 1 bit deep.

## Declaration

```swift
var cmOneBitDirectPacking: Int { get }
```
