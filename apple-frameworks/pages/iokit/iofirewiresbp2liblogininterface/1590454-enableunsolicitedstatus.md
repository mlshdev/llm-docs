> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590454-enableunsolicitedstatus

# enableUnsolicitedStatus

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Enables unsolicited status.

## Declaration

```objectivec
IOReturn (*enableUnsolicitedStatus)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the status enable write started successfully.

<a id="discussion"></a>

## Discussion

After unsolicited is sent the device will not send any additional unsolicited status until a specific register is written. This serves as a sort of flow-control for unsolicited status. After unsolicited status is recieved and processed drivers will want to reenable the delivery of unsolicted status by a call to this method.
