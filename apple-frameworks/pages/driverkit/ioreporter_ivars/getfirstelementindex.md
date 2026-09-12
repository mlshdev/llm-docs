> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioreporter_ivars/getfirstelementindex](https://developer.apple.com/documentation/driverkit/ioreporter_ivars/getfirstelementindex)

# getFirstElementIndex

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual IOReturn getFirstElementIndex(uint64_t channel_id, int *element_index);
```

## Parameters

- `channel_id`: - ID of the channel
- `element_index`: - pointer to the returned element_index

<a id="return-value"></a>

## Return Value

Appropriate IOReturn code

<a id="discussion"></a>

## Discussion

Returns the first element index for a channel

For efficiently and thread-safely reading \_elements

Locking: Caller must ensure that the reporter (data) lock is held.
