> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/scsitaggedtaskidentifier](https://developer.apple.com/documentation/driverkit/scsitaggedtaskidentifier)

# SCSITaggedTaskIdentifier

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

64-bit number to represent a unique task identifier.

## Declaration

```objectivec
typedef UInt64 SCSITaggedTaskIdentifier;
```

<a id="Discussion"></a>

## Discussion

The Tagged Task Identifier is used when a Task has a Task Attribute other than SIMPLE. The SCSI Application Layer client that controls the Logical Unit for which a Task is intended is required to guarantee that the Task Tag Identifier is unique. Zero cannot be used a a Tag value as this is used to when a Tagged Task Identifier value is needed for a Task with a SIMPLE attribute.

## See Also

### Data Types

- [IOCallOnceBlock](iocallonceblock.md)
- [IOCallOnceFlag](iocallonceflag.md)
- [IOCommand](iocommand.md)
- [IOCommandPool](iocommandpool.md)
- [IOCommandPoolPtr](iocommandpoolptr.md)
- [IOCommandPtr](iocommandptr.md)
- [IODMACommand](iodmacommand.md): An object that converts memory references to I/O bus addresses.
- [IODMACommandSpecification](iodmacommandspecification.md)
- [IODispatchAction](iodispatchaction.md)
- [IOHistogramReporter_IVars](iohistogramreporter_ivars.md)
- [IOReportLegendEntry](ioreportlegendentry.md)
- [IOReporter_IVars](ioreporter_ivars.md)
- [IOSimpleReporter_IVars](iosimplereporter_ivars.md)
- [IOStateReporter_IVars](iostatereporter_ivars.md)
- [IOStateReporter_valueSelector](iostatereporter_valueselector.md)
