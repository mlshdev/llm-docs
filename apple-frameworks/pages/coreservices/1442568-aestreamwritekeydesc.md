> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442568-aestreamwritekeydesc](https://developer.apple.com/documentation/coreservices/1442568-aestreamwritekeydesc)

# AEStreamWriteKeyDesc(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Writes a complete keyword/descriptor pair to an `AEStreamRef`.

## Declaration

```swift
func AEStreamWriteKeyDesc(_ ref: AEStreamRef!, _ key: AEKeyword, _ newType: DescType, _ data: UnsafeRawPointer!, _ length: Size) -> OSStatus
```

## Parameters

- `ref`: An [AEStreamRef](aestreamref.md) containing the stream data.
- `key`: The `AEKeyword` associated with the new descriptor being added to the stream. See [AEKeyword](aekeyword.md).
- `newType`: A type code for the new `AEDesc` being added to the stream. See [DescType](desctype.md).
- `data`: A pointer to the block of memory containing the descriptor data. This routine copies the memory block immediately, so you do not need to retain it for the benefit of this routine.
- `length`: The number of bytes pointed to by the `data` parameter.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Use this routine to add a descriptor to the currently open `AERecord` inside a stream. You cannot use this routine to write parameters to any other types of descriptors, even if they are nested inside of an `AERecord`. This routine can only be called in between calls to [AEStreamOpenRecord(\_:\_:)](1447141-aestreamopenrecord.md) and [AEStreamCloseRecord(\_:)](1449522-aestreamcloserecord.md). 

This method is analogous to the Apple Event Manager routine [AEPutParamPtr(\_:\_:\_:\_:\_:)](1449263-aeputparamptr.md), except it is for use with streams.

## See Also

### Creating Apple Event Structures Using Streams

- [AEStreamClose(\_:\_:)](1449821-aestreamclose.md): Closes and deallocates an `AEStreamRef`.
- [AEStreamCloseDesc(\_:)](1449272-aestreamclosedesc.md): Marks the end of a descriptor in an `AEStreamRef`.
- [AEStreamCloseList(\_:)](1448185-aestreamcloselist.md): Marks the end of a list of descriptors in an `AEStreamRef`.
- [AEStreamCloseRecord(\_:)](1449522-aestreamcloserecord.md): Marks the end of a record in an `AEStreamRef`.
- [AEStreamCreateEvent(\_:\_:\_:\_:\_:\_:\_:)](1446562-aestreamcreateevent.md): Creates a new Apple event and opens a stream for writing data to it.
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

# AEStreamWriteKeyDesc (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Writes a complete keyword/descriptor pair to an `AEStreamRef`.

## Declaration

```objectivec
OSStatus AEStreamWriteKeyDesc(AEStreamRef ref, AEKeyword key, DescType newType, const void *data, Size length);
```

## Parameters

- `ref`: An [AEStreamRef](aestreamref.md) containing the stream data.
- `key`: The `AEKeyword` associated with the new descriptor being added to the stream. See [AEKeyword](aekeyword.md).
- `newType`: A type code for the new `AEDesc` being added to the stream. See [DescType](desctype.md).
- `data`: A pointer to the block of memory containing the descriptor data. This routine copies the memory block immediately, so you do not need to retain it for the benefit of this routine.
- `length`: The number of bytes pointed to by the `data` parameter.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Use this routine to add a descriptor to the currently open `AERecord` inside a stream. You cannot use this routine to write parameters to any other types of descriptors, even if they are nested inside of an `AERecord`. This routine can only be called in between calls to [AEStreamOpenRecord](1447141-aestreamopenrecord.md) and [AEStreamCloseRecord](1449522-aestreamcloserecord.md). 

This method is analogous to the Apple Event Manager routine [AEPutParamPtr](1449263-aeputparamptr.md), except it is for use with streams.

## See Also

### Creating Apple Event Structures Using Streams

- [AEStreamClose](1449821-aestreamclose.md): Closes and deallocates an `AEStreamRef`.
- [AEStreamCloseDesc](1449272-aestreamclosedesc.md): Marks the end of a descriptor in an `AEStreamRef`.
- [AEStreamCloseList](1448185-aestreamcloselist.md): Marks the end of a list of descriptors in an `AEStreamRef`.
- [AEStreamCloseRecord](1449522-aestreamcloserecord.md): Marks the end of a record in an `AEStreamRef`.
- [AEStreamCreateEvent](1446562-aestreamcreateevent.md): Creates a new Apple event and opens a stream for writing data to it.
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
