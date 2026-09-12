> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsicmds_inquiry_definitions_h_user-space/inquiry_page_83h_code_set](https://developer.apple.com/documentation/iokit/scsicmds_inquiry_definitions_h_user-space/inquiry_page_83h_code_set)

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
