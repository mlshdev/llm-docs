> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/scsicmds_inquiry_definitions_h_user-space/inquiry_page_83h_code_set

# INQUIRY Page 83h Code Set

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
enum {
   kINQUIRY_Page83_CodeSetReserved = 0x0,
   kINQUIRY_Page83_CodeSetBinaryData = 0x1,
   kINQUIRY_Page83_CodeSetASCIIData = 0x2,
   kINQUIRY_Page83_CodeSetUTF8Data = 0x3,
   // 0x4 - 0xF reserved
   kINQUIRY_Page83_CodeSetMask = 0xF
};
```

<a id="overview"></a>

## Overview

Definitions for the Code Set field.

## Topics

### Constants

- [kINQUIRY_Page83_CodeSetBinaryData](https://developer.apple.com/documentation/kernel/1643303-anonymous/kinquiry_page83_codesetbinarydata)
- [kINQUIRY_Page83_CodeSetASCIIData](https://developer.apple.com/documentation/kernel/1643303-anonymous/kinquiry_page83_codesetasciidata)
- [kINQUIRY_Page83_CodeSetUTF8Data](https://developer.apple.com/documentation/kernel/1643303-anonymous/kinquiry_page83_codesetutf8data)
