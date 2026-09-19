> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590504-ringdoorbell

# ringDoorbell

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Rings the doorbell on the LUN.

## Declaration

```objectivec
IOReturn (*ringDoorbell)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the ring started successfully.

<a id="discussion"></a>

## Discussion

Non-immediate appends to the ORB chain may require the fetch agent state machine to be notified of the new ORB's presence. This is accomplished by writing to the so called doorbell register. This method begins one of those writes.
