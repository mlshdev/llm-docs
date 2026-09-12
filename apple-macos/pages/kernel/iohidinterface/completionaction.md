> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidinterface/completionaction](https://developer.apple.com/documentation/kernel/iohidinterface/completionaction)

# CompletionAction

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
typedef void ( *CompletionAction)(
   OSObject *target,
   void *refcon,
   IOReturn status,
   UInt32 bufferSizeRemaining);
```

## Parameters

- `target`:
- `refcon`:
- `status`: Completion status.
- `bufferSizeRemaining`: Bytes left to be transferred.

<a id="overview"></a>

## Overview

Function called when HID I/O completes.

## See Also

### Callbacks

- [InterruptReportAction](interruptreportaction.md): Callback to handle an asynchronous report received from the HID device.
- [IOHIDInterface::CompletionAction](iohidinterface_completionaction.md)
- [IOHIDInterface::InterruptReportAction](iohidinterface_interruptreportaction.md): Callback to handle an asynchronous report received from the HID device.
