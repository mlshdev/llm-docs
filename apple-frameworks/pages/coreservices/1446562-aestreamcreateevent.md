> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1446562-aestreamcreateevent](https://developer.apple.com/documentation/coreservices/1446562-aestreamcreateevent)

# AEStreamCreateEvent(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates a new Apple event and opens a stream for writing data to it.

## Declaration

```swift
func AEStreamCreateEvent(_ clazz: AEEventClass, _ id: AEEventID, _ targetType: DescType, _ targetData: UnsafeRawPointer!, _ targetLength: Size, _ returnID: Int16, _ transactionID: Int32) -> AEStreamRef!
```

## Parameters

- `clazz`: The event class of the Apple event. See [AEEventClass](aeeventclass.md).
- `id`: The event ID of the Apple event. See [AEEventID](aeeventid.md).
- `targetType`: The address type for the addressing information in the next two parameters. Usually contains one of the following values: `typeApplSignature`. `typeKernelProcessID`, or `typeProcessSerialNumber`. See [DescType](desctype.md).
- `targetData`: A pointer to the address information. The data in this pointer must match the data associated with the specified `targetType`.
- `targetLength`: The number of bytes pointed to by the `targetData` parameter.
- `returnID`: The return ID for the created Apple event. If you pass a value of `kAutoGenerateReturnID`, the Apple Event Manager assigns the created Apple event a return ID that is unique to the current session. If you pass any other value, the Apple Event Manager assigns that value for the ID. The return ID constant is described in [ID Constants for the AECreateAppleEvent Function](apple_events/1542799-id_constants_for_the_aecreateapp.md). See [AEReturnID](aereturnid.md).
- `transactionID`: The transaction ID for this Apple event. A transaction is a sequence of Apple events that are sent back and forth between the client and server applications, beginning with the client’s initial request for a service. All Apple events that are part of a transaction must have the same transaction ID. You can specify the `kAnyTransactionID` constant if the Apple event is not one of a series of interdependent Apple events. This transaction ID constant is described in [ID Constants for the AECreateAppleEvent Function](apple_events/1542799-id_constants_for_the_aecreateapp.md). See [AETransactionID](aetransactionid.md).

<a id="return_value"></a>

## Return Value

An [AEStreamRef](aestreamref.md) associated with the new event.

<a id="discussion"></a>

## Discussion

This routine effectively combines a call to [AECreateAppleEvent(\_:\_:\_:\_:\_:\_:)](1448525-aecreateappleevent.md) followed by a call to [AEStreamOpenEvent(\_:)](1445366-aestreamopenevent.md) to create a new Apple event in the stream. You can use the returned `AEStreamRef` to add parameters to the new Apple event.

## See Also

### Creating Apple Event Structures Using Streams

- [AEStreamClose(\_:\_:)](1449821-aestreamclose.md): Closes and deallocates an `AEStreamRef`.
- [AEStreamCloseDesc(\_:)](1449272-aestreamclosedesc.md): Marks the end of a descriptor in an `AEStreamRef`.
- [AEStreamCloseList(\_:)](1448185-aestreamcloselist.md): Marks the end of a list of descriptors in an `AEStreamRef`.
- [AEStreamCloseRecord(\_:)](1449522-aestreamcloserecord.md): Marks the end of a record in an `AEStreamRef`.
- [AEStreamOpen()](1447732-aestreamopen.md): Opens a new `AEStreamRef` for use in building a descriptor.
- [AEStreamOpenDesc(\_:\_:)](1446544-aestreamopendesc.md): Marks the beginning of a descriptor in an `AEStreamRef`.
- [AEStreamOpenEvent(\_:)](1445366-aestreamopenevent.md): Opens a stream for an existing Apple event.
- [AEStreamOpenKeyDesc(\_:\_:\_:)](1442897-aestreamopenkeydesc.md): Marks the beginning of a key descriptor in an `AEStreamRef`.
- [AEStreamOpenList(\_:)](1448594-aestreamopenlist.md): Marks the beginning of a descriptor list in an `AEStreamRef`.
- [AEStreamOpenRecord(\_:\_:)](1447141-aestreamopenrecord.md): Marks the beginning of an Apple event record in an `AEStreamRef`.
- [AEStreamOptionalParam(\_:\_:)](1444481-aestreamoptionalparam.md): Designates a parameter in an Apple event as optional.
- [AEStreamSetRecordType(\_:\_:)](1447704-aestreamsetrecordtype.md): Sets the type of the most recently created record in an `AEStreamRef`.
- [AEStreamWriteAEDesc(\_:\_:)](1448487-aestreamwriteaedesc.md): Copies an existing descriptor into an `AEStreamRef`.
- [AEStreamWriteData(\_:\_:\_:)](1442610-aestreamwritedata.md): Appends data to the current descriptor in an `AEStreamRef`.
- [AEStreamWriteDesc(\_:\_:\_:\_:)](1450387-aestreamwritedesc.md): Appends the data for a complete descriptor to an `AEStreamRef`.
- [AEStreamWriteKey(\_:\_:)](1448750-aestreamwritekey.md): Marks the beginning of a keyword/descriptor pair for a descriptor in an `AEStreamRef`.
- [AEStreamWriteKeyDesc(\_:\_:\_:\_:\_:)](1442568-aestreamwritekeydesc.md): Writes a complete keyword/descriptor pair to an `AEStreamRef`.

# AEStreamCreateEvent (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates a new Apple event and opens a stream for writing data to it.

## Declaration

```objectivec
AEStreamRef AEStreamCreateEvent(AEEventClass clazz, AEEventID id, DescType targetType, const void *targetData, Size targetLength, SInt16 returnID, SInt32 transactionID);
```

## Parameters

- `clazz`: The event class of the Apple event. See [AEEventClass](aeeventclass.md).
- `id`: The event ID of the Apple event. See [AEEventID](aeeventid.md).
- `targetType`: The address type for the addressing information in the next two parameters. Usually contains one of the following values: `typeApplSignature`. `typeKernelProcessID`, or `typeProcessSerialNumber`. See [DescType](desctype.md).
- `targetData`: A pointer to the address information. The data in this pointer must match the data associated with the specified `targetType`.
- `targetLength`: The number of bytes pointed to by the `targetData` parameter.
- `returnID`: The return ID for the created Apple event. If you pass a value of `kAutoGenerateReturnID`, the Apple Event Manager assigns the created Apple event a return ID that is unique to the current session. If you pass any other value, the Apple Event Manager assigns that value for the ID. The return ID constant is described in [ID Constants for the AECreateAppleEvent Function](1542799-id_constants_for_the_aecreateapp.md). See [AEReturnID](aereturnid.md).
- `transactionID`: The transaction ID for this Apple event. A transaction is a sequence of Apple events that are sent back and forth between the client and server applications, beginning with the client’s initial request for a service. All Apple events that are part of a transaction must have the same transaction ID. You can specify the `kAnyTransactionID` constant if the Apple event is not one of a series of interdependent Apple events. This transaction ID constant is described in [ID Constants for the AECreateAppleEvent Function](1542799-id_constants_for_the_aecreateapp.md). See [AETransactionID](aetransactionid.md).

<a id="return_value"></a>

## Return Value

An [AEStreamRef](aestreamref.md) associated with the new event.

<a id="discussion"></a>

## Discussion

This routine effectively combines a call to [AECreateAppleEvent](1448525-aecreateappleevent.md) followed by a call to [AEStreamOpenEvent](1445366-aestreamopenevent.md) to create a new Apple event in the stream. You can use the returned `AEStreamRef` to add parameters to the new Apple event.

## See Also

### Creating Apple Event Structures Using Streams

- [AEStreamClose](1449821-aestreamclose.md): Closes and deallocates an `AEStreamRef`.
- [AEStreamCloseDesc](1449272-aestreamclosedesc.md): Marks the end of a descriptor in an `AEStreamRef`.
- [AEStreamCloseList](1448185-aestreamcloselist.md): Marks the end of a list of descriptors in an `AEStreamRef`.
- [AEStreamCloseRecord](1449522-aestreamcloserecord.md): Marks the end of a record in an `AEStreamRef`.
- [AEStreamOpen](1447732-aestreamopen.md): Opens a new `AEStreamRef` for use in building a descriptor.
- [AEStreamOpenDesc](1446544-aestreamopendesc.md): Marks the beginning of a descriptor in an `AEStreamRef`.
- [AEStreamOpenEvent](1445366-aestreamopenevent.md): Opens a stream for an existing Apple event.
- [AEStreamOpenKeyDesc](1442897-aestreamopenkeydesc.md): Marks the beginning of a key descriptor in an `AEStreamRef`.
- [AEStreamOpenList](1448594-aestreamopenlist.md): Marks the beginning of a descriptor list in an `AEStreamRef`.
- [AEStreamOpenRecord](1447141-aestreamopenrecord.md): Marks the beginning of an Apple event record in an `AEStreamRef`.
- [AEStreamOptionalParam](1444481-aestreamoptionalparam.md): Designates a parameter in an Apple event as optional.
- [AEStreamSetRecordType](1447704-aestreamsetrecordtype.md): Sets the type of the most recently created record in an `AEStreamRef`.
- [AEStreamWriteAEDesc](1448487-aestreamwriteaedesc.md): Copies an existing descriptor into an `AEStreamRef`.
- [AEStreamWriteData](1442610-aestreamwritedata.md): Appends data to the current descriptor in an `AEStreamRef`.
- [AEStreamWriteDesc](1450387-aestreamwritedesc.md): Appends the data for a complete descriptor to an `AEStreamRef`.
- [AEStreamWriteKey](1448750-aestreamwritekey.md): Marks the beginning of a keyword/descriptor pair for a descriptor in an `AEStreamRef`.
- [AEStreamWriteKeyDesc](1442568-aestreamwritekeydesc.md): Writes a complete keyword/descriptor pair to an `AEStreamRef`.
