> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioatasmartinterface/1477737-smartexecuteofflineimmediate](https://developer.apple.com/documentation/iokit/ioatasmartinterface/1477737-smartexecuteofflineimmediate)

# SMARTExecuteOffLineImmediate

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

immediately initiate collection of SMART data.

## Declaration

```objectivec
IOReturn (*SMARTExecuteOffLineImmediate)(void *interface, Boolean extendedTest);
```

## Parameters

- `extendedTest`: passing true will collect "off-line" extended test, false short test.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, kIOReturnExclusiveAccess if it is already opened by another client.

<a id="discussion"></a>

## Discussion

See section 8.54.4 of ATA/ATAPI-6.
