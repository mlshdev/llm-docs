> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioreporter_ivars/legendwith](https://developer.apple.com/documentation/driverkit/ioreporter_ivars/legendwith)

# legendWith

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static OSSharedPtr<IOReportLegendEntry> legendWith(OSArray *channelIDs, OSArray *channelNames, IOReportChannelType channelType, IOReportUnit unit);
```

## Parameters

- `channelIDs`: - OSArray of OSNumber(uint64_t) channels IDs.
- `channelNames`: - parrallel OSArray of OSSymbol(rich names)
- `channelType`: - the type of all channels in this legend
- `unit`: - The unit for the quantity recorded by this reporter object

<a id="return-value"></a>

## Return Value

An IOReportLegendEntry object or NULL on failure

<a id="discussion"></a>

## Discussion

Internal method to help create legend entries

This static method is the main legend creation function. It is called by IOReporter sub-classes and is responsible for building an IOReportLegendEntry corresponding to this reporter object. This legend entry may be extended by the sub-class of IOReporter if required.

Locking: SAFE to call concurrently (no static globals), MAY BLOCK
