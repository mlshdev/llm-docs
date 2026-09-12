> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioreporter_ivars/setelementvalues](https://developer.apple.com/documentation/driverkit/ioreporter_ivars/setelementvalues)

# setElementValues

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual IOReturn setElementValues(int element_index, IOReportElementValues *values, uint64_t record_time);
```

## Parameters

- `element_index`: - index of the \_element in internal array
- `values`: - IORepoterElementValues to replace those at \_elements\[idx\]
- `record_time`: - optional mach_absolute_time to be used for metadata

<a id="return-value"></a>

## Return Value

IOReturn code

<a id="discussion"></a>

## Discussion

Atomically update a specific member of \_elements\[\].

element_index can be obtained from getFirstElementIndex().  If record_time is not provided, IOReporter::setElementValues() will fetch the current mach_absolute_time.  If the current time is already known, it is more efficient to pass it along.

Locking: Caller must ensure that the reporter (data) lock is held.
