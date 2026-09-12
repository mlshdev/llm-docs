> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iostatereporter_ivars/handlesetstateid](https://developer.apple.com/documentation/driverkit/iostatereporter_ivars/handlesetstateid)

# handleSetStateID

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual IOReturn handleSetStateID(uint64_t channel_id, int state_index, uint64_t state_id);
```

## Parameters

- `channel_id`: - ID of channel containing the state in question
- `state_index`: - index of state to give an ID: \[0..(nstates-1)\]
- `state_id`: - 64-bit state ID, for ASCII, use IOREPORT_MAKEID

<a id="return-value"></a>

## Return Value

Appropriate IOReturn code

<a id="discussion"></a>

## Discussion

Assign a non-default ID to a state

Locked version of IOReporter::setStateID(). This method may be overriden by sub-classes

Locking: Caller must ensure that the reporter (data) lock is held.
