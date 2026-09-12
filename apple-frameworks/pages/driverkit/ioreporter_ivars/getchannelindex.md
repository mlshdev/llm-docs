> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioreporter_ivars/getchannelindex](https://developer.apple.com/documentation/driverkit/ioreporter_ivars/getchannelindex)

# getChannelIndex

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual IOReturn getChannelIndex(uint64_t channel_id, int *channel_index);
```

## Parameters

- `channel_id`: - ID of the channel
- `channel_index`: - pointer to the returned element_index

<a id="return-value"></a>

## Return Value

Appropriate IOReturn code

<a id="discussion"></a>

## Discussion

Returns the index of a channel from internal data structures

For efficiently and thread-safely reading channels

Locking: Caller must ensure that the reporter (data) lock is held.
