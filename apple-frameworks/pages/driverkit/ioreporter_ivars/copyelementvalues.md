> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioreporter_ivars/copyelementvalues](https://developer.apple.com/documentation/driverkit/ioreporter_ivars/copyelementvalues)

# copyElementValues

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual IOReturn copyElementValues(int element_index, IOReportElementValues *elementValues);
```

## Parameters

- `element_index`: - Index of the element to return values from
- `elementValues`: - For returning the content of element values

<a id="return-value"></a>

## Return Value

Returns the content of an element

<a id="discussion"></a>

## Discussion

Copies the values of an internal element to \*elementValues

For efficiently and thread-safely reading \_elements. May need to find the index of the element first.

Locking: Caller must ensure that the reporter (data) lock is held.
