> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidinterface/iohidinterface_interruptreportaction](https://developer.apple.com/documentation/kernel/iohidinterface/iohidinterface_interruptreportaction)

# IOHIDInterface::InterruptReportAction

**Interface language:** Objective-C

**Framework:** Kernel

Callback to handle an asynchronous report received from the HID device.

## Declaration

```objectivec
typedef void ( *InterruptReportAction)(
   OSObject *target,
   AbsoluteTime timestamp,
   IOMemoryDescriptor *report,
   IOHIDReportType type,
   UInt32 reportID,
   void *refcon);
```

## Parameters

- `target`: Pointer to your data object.
- `timestamp`: Time when the report was delivered.
- `report`: A memory descriptor that describes the report.
- `reportType`: The type of report.
- `reportID`: The ID of the report.
- `refcon`: void \* pointer to more data.

<a id="overview"></a>

## Overview

This callback is set when calling IOHIDInterface::open.

## See Also

### Callbacks

- [CompletionAction](completionaction.md)
- [InterruptReportAction](interruptreportaction.md): Callback to handle an asynchronous report received from the HID device.
- [IOHIDInterface::CompletionAction](iohidinterface_completionaction.md)
