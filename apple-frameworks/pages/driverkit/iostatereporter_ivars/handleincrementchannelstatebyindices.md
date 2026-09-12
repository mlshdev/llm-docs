> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iostatereporter_ivars/handleincrementchannelstatebyindices](https://developer.apple.com/documentation/driverkit/iostatereporter_ivars/handleincrementchannelstatebyindices)

# handleIncrementChannelStateByIndices

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual IOReturn handleIncrementChannelStateByIndices(int channel_index, int state_index, uint64_t time_in_state, uint64_t intransitions, uint64_t last_intransition);
```

## Parameters

- `channel_index`: - index of the channel which state is to be updated
- `state_index`: - index of the state id for the channel
- `time_in_state`: - time used as new total time in state
- `intransitions`: - total number of transitions into state
- `last_intransition`: - mach_absolute_time of most recent entry (opt)

<a id="return-value"></a>

## Return Value

Appropriate IOReturn code

<a id="discussion"></a>

## Discussion

Updates state data for a channel with passed arguments

Locked version of IOReporter::incrementChannelState(). This method may be overriden by sub-classes.

Locking: Caller must ensure that the reporter (data) lock is held.
