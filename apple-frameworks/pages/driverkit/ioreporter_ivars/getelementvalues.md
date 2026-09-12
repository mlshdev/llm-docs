> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioreporter_ivars/getelementvalues](https://developer.apple.com/documentation/driverkit/ioreporter_ivars/getelementvalues)

# getElementValues

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual const IOReportElementValues * getElementValues(int element_index);
```

## Parameters

- `element_index`: - index of the \_element in internal array

<a id="return-value"></a>

## Return Value

A pointer to the element values requested or NULL on failure

<a id="discussion"></a>

## Discussion

Internal method to directly access the values of an element

Locking: Caller must ensure that the reporter (data) lock is held. The returned pointer is only valid until unlockReporter() is called.
