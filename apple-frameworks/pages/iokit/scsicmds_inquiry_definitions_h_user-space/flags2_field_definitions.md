> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsicmds_inquiry_definitions_h_user-space/flags2_field_definitions](https://developer.apple.com/documentation/iokit/scsicmds_inquiry_definitions_h_user-space/flags2_field_definitions)

# flags2 field definitions

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
enum {
   // Byte offset
   kINQUIRY_Byte7_Offset = 7,
   // Bit definitions
   kINQUIRY_Byte7_VS_Bit = 0,
   kINQUIRY_Byte7_CMDQUE_Bit = 1,
   kINQUIRY_Byte7_TRANDIS_Bit = 2, // SPI Specific
   kINQUIRY_Byte7_LINKED_Bit = 3,
   kINQUIRY_Byte7_SYNC_Bit = 4, // SPI Specific
   kINQUIRY_Byte7_WBUS16_Bit = 5, // SPI Specific
   // Bit 6 is Obsolete
   kINQUIRY_Byte7_RELADR_Bit = 7,
   // Masks
   kINQUIRY_Byte7_VS_Mask = (
   1 << kINQUIRY_Byte7_VS_Bit),
   kINQUIRY_Byte7_CMDQUE_Mask = (
   1 << kINQUIRY_Byte7_CMDQUE_Bit),
   kINQUIRY_Byte7_TRANDIS_Mask = (
   1 << kINQUIRY_Byte7_TRANDIS_Bit),// SPI Specific
   kINQUIRY_Byte7_LINKED_Mask = (
   1 << kINQUIRY_Byte7_LINKED_Bit),
   kINQUIRY_Byte7_SYNC_Mask = (
   1 << kINQUIRY_Byte7_SYNC_Bit), // SPI Specific
   kINQUIRY_Byte7_WBUS16_Mask = (
   1 << kINQUIRY_Byte7_WBUS16_Bit), // SPI Specific
   // Bit 6 is Obsolete
   kINQUIRY_Byte7_RELADR_Mask = (
   1 << kINQUIRY_Byte7_RELADR_Bit)
};
```

<a id="overview"></a>

## Overview

Definitions for bits/masks in the INQUIRY flags2 field.

## Topics

### Constants

- [kINQUIRY_Byte7_VS_Bit](https://developer.apple.com/documentation/kernel/1643309-anonymous/kinquiry_byte7_vs_bit)
- [kINQUIRY_Byte7_CMDQUE_Bit](https://developer.apple.com/documentation/kernel/1643309-anonymous/kinquiry_byte7_cmdque_bit)
- [kINQUIRY_Byte7_TRANDIS_Bit](https://developer.apple.com/documentation/kernel/1643309-anonymous/kinquiry_byte7_trandis_bit)
- [kINQUIRY_Byte7_LINKED_Bit](https://developer.apple.com/documentation/kernel/1643309-anonymous/kinquiry_byte7_linked_bit)
- [kINQUIRY_Byte7_SYNC_Bit](https://developer.apple.com/documentation/kernel/1643309-anonymous/kinquiry_byte7_sync_bit)
- [kINQUIRY_Byte7_WBUS16_Bit](https://developer.apple.com/documentation/kernel/1643309-anonymous/kinquiry_byte7_wbus16_bit)
- [kINQUIRY_Byte7_RELADR_Bit](https://developer.apple.com/documentation/kernel/1643309-anonymous/kinquiry_byte7_reladr_bit)
- [kINQUIRY_Byte7_VS_Mask](https://developer.apple.com/documentation/kernel/1643309-anonymous/kinquiry_byte7_vs_mask)
- [kINQUIRY_Byte7_CMDQUE_Mask](https://developer.apple.com/documentation/kernel/1643309-anonymous/kinquiry_byte7_cmdque_mask)
- [kINQUIRY_Byte7_TRANDIS_Mask](https://developer.apple.com/documentation/kernel/1643309-anonymous/kinquiry_byte7_trandis_mask)
- [kINQUIRY_Byte7_LINKED_Mask](https://developer.apple.com/documentation/kernel/1643309-anonymous/kinquiry_byte7_linked_mask)
- [kINQUIRY_Byte7_SYNC_Mask](https://developer.apple.com/documentation/kernel/1643309-anonymous/kinquiry_byte7_sync_mask)
- [kINQUIRY_Byte7_WBUS16_Mask](https://developer.apple.com/documentation/kernel/1643309-anonymous/kinquiry_byte7_wbus16_mask)
- [kINQUIRY_Byte7_RELADR_Mask](https://developer.apple.com/documentation/kernel/1643309-anonymous/kinquiry_byte7_reladr_mask)
