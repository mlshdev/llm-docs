> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iostatereporter_ivars/handlesetstatebyindices](https://developer.apple.com/documentation/driverkit/iostatereporter_ivars/handlesetstatebyindices)

# handleSetStateByIndices

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual IOReturn handleSetStateByIndices(int channel_index, int new_state_index, uint64_t last_intransition, uint64_t prev_state_residency);
```

## Parameters

- `channel_index`: - 0.., available from getChannelIndex()
- `new_state_index`: - New state for the channel
- `last_intransition`: - to remove: time of most recent entry
- `prev_state_residency`: - to remove: time spent in previous state

<a id="return-value"></a>

## Return Value

Appropriate IOReturn code

<a id="discussion"></a>

## Discussion

Update a channel state without validating channel_id

Locked version of IOReporter::setStateByIndices().  This method may be overriden by sub-classes.

Locking: Caller must ensure that the reporter (data) lock is held.
