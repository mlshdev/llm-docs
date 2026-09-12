> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioatasmartinterface/1477708-smartenabledisableoperations](https://developer.apple.com/documentation/iokit/ioatasmartinterface/1477708-smartenabledisableoperations)

# SMARTEnableDisableOperations

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

toggle SMART Operations.

## Declaration

```objectivec
IOReturn (*SMARTEnableDisableOperations)(void *interface, Boolean enable);
```

## Parameters

- `enable`: Passing true will ENABLE SMART operations, false will DISABLE SMART operations.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, kIOReturnExclusiveAccess if it is already opened by another client.

<a id="discussion"></a>

## Discussion

See section 8.54.1 and 8.54.3 of ATA/ATAPI-6.
