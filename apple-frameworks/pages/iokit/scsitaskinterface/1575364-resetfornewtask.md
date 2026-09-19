> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/scsitaskinterface/1575364-resetfornewtask

# ResetForNewTask

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to reset the SCSITask to defaults.

## Declaration

```objectivec
IOReturn (*ResetForNewTask)(void *task);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if reset was successful, otherwise kIOReturnError.

<a id="discussion"></a>

## Discussion

This method can be used to reset the SCSITask to defaults.
