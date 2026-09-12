> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsi_capacity_data](https://developer.apple.com/documentation/iokit/scsi_capacity_data)

# SCSI_Capacity_Data

**Interface language:** Objective-C

**Framework:** DriverKit, IOKit  
**Kind:** Structure  
**Availability:** DriverKit 22.0+ · Mac Catalyst 13.0+ · macOS 10.3+

## Declaration

```objectivec
typedef struct SCSI_Capacity_Data {
    ...
} SCSI_Capacity_Data;
```

<a id="overview"></a>

## Overview

Capacity return structure for READ CAPACITY 10 command.

## Topics

### Instance Properties

- [BLOCK_LENGTH_IN_BYTES](scsi_capacity_data/1426590-block_length_in_bytes.md)
- [RETURNED_LOGICAL_BLOCK_ADDRESS](scsi_capacity_data/1426592-returned_logical_block_address.md)
