> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioreporter_ivars/updatereportchannel](https://developer.apple.com/documentation/driverkit/ioreporter_ivars/updatereportchannel)

# updateReportChannel

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Internal method to extract channel data to a destination.

## Declaration

```objectivec
IOReturn updateReportChannel(int channel_index, uint32_t & elementCount, uint8_t * & buffer, size_t & capacity);
```

## Parameters

- `channel_index`: Offset into internal elements array
- `elementCount`: Incremented by the number of IOReportElements added
- `buffer`: Buffer.
- `capacity`: Capacity.

<a id="return-value"></a>

## Return Value

Appropriate [IOReturn](../ioreturn.md) code

<a id="discussion"></a>

## Discussion

Used to extract a single channel’s data to the updateReport() destination.

Locking: Caller must ensure that the reporter (data) lock is held.
