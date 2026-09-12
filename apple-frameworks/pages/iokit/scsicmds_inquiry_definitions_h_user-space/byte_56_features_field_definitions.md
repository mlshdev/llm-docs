> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsicmds_inquiry_definitions_h_user-space/byte_56_features_field_definitions](https://developer.apple.com/documentation/iokit/scsicmds_inquiry_definitions_h_user-space/byte_56_features_field_definitions)

# Byte 56 features field definitions

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
enum {
   // Byte offset
   kINQUIRY_Byte56_Offset = 56,
   // Bit definitions
   kINQUIRY_Byte56_IUS_Bit = 0,
   kINQUIRY_Byte56_QAS_Bit = 1,
   // Bits 2 and 3 are the CLOCKING bits
   // All other bits are reserved
   kINQUIRY_Byte56_IUS_Mask = (
   1 << kINQUIRY_Byte56_IUS_Bit),
   kINQUIRY_Byte56_QAS_Mask = (
   1 << kINQUIRY_Byte56_QAS_Bit),
   kINQUIRY_Byte56_CLOCKING_Mask = 0x0C,
   // Definitions for the CLOCKING bits
   kINQUIRY_Byte56_CLOCKING_ONLY_ST = 0x00,
   kINQUIRY_Byte56_CLOCKING_ONLY_DT = 0x04,
   // kINQUIRY_Byte56_CLOCKING_RESERVED        = 0x08,
   kINQUIRY_Byte56_CLOCKING_ST_AND_DT = 0x0C
};
```

<a id="overview"></a>

## Overview

Definitions for bits/masks in the INQUIRY Byte 56 field. Inquiry Byte 56 features (for devices that report an ANSI VERSION of kINQUIRY_ANSI_VERSION_SCSI_SPC_Compliant or later). These are SPI-3 Specific.

## Topics

### Constants

- [kINQUIRY_Byte56_IUS_Bit](https://developer.apple.com/documentation/kernel/1643292-anonymous/kinquiry_byte56_ius_bit)
- [kINQUIRY_Byte56_QAS_Bit](https://developer.apple.com/documentation/kernel/1643292-anonymous/kinquiry_byte56_qas_bit)
- [kINQUIRY_Byte56_IUS_Mask](https://developer.apple.com/documentation/kernel/1643292-anonymous/kinquiry_byte56_ius_mask)
- [kINQUIRY_Byte56_QAS_Mask](https://developer.apple.com/documentation/kernel/1643292-anonymous/kinquiry_byte56_qas_mask)
- [kINQUIRY_Byte56_CLOCKING_Mask](https://developer.apple.com/documentation/kernel/1643292-anonymous/kinquiry_byte56_clocking_mask)
- [kINQUIRY_Byte56_CLOCKING_ONLY_ST](https://developer.apple.com/documentation/kernel/1643292-anonymous/kinquiry_byte56_clocking_only_st)
- [kINQUIRY_Byte56_CLOCKING_ONLY_DT](https://developer.apple.com/documentation/kernel/1643292-anonymous/kinquiry_byte56_clocking_only_dt)
- [kINQUIRY_Byte56_CLOCKING_ST_AND_DT](https://developer.apple.com/documentation/kernel/1643292-anonymous/kinquiry_byte56_clocking_st_and_dt)
