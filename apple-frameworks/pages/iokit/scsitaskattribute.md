> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskattribute](https://developer.apple.com/documentation/iokit/scsitaskattribute)

# SCSITaskAttribute

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Attributes for task delivery.

## Declaration

```objectivec
typedef enum SCSITaskAttribute : unsigned int {
    ...
} SCSITaskAttribute;
```

<a id="overview"></a>

## Overview

The Task Attribute defines how this task should be managed when determing order for queueing and submission to the appropriate device server. The Task Attribute is set by the SCSI Application Layer and cannot be modified by the SCSI Protocol Layer.

## Topics

### Constants

- [kSCSITask_SIMPLE](scsitaskattribute/kscsitask_simple.md)
- [kSCSITask_ORDERED](scsitaskattribute/kscsitask_ordered.md)
- [kSCSITask_HEAD_OF_QUEUE](scsitaskattribute/kscsitask_head_of_queue.md)
- [kSCSITask_ACA](scsitaskattribute/kscsitask_aca.md)
