> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1449821-aestreamclose](https://developer.apple.com/documentation/coreservices/1449821-aestreamclose)

# AEStreamClose(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Closes and deallocates an `AEStreamRef`.

## Declaration

```swift
func AEStreamClose(_ ref: AEStreamRef!, _ desc: UnsafeMutablePointer<AEDesc>!) -> OSStatus
```

## Parameters

- `ref`: An [AEStreamRef](aestreamref.md)containing the stream data.
- `desc`: A pointer to a descriptor for receiving a the stream data, or `NULL` if you want to discard the data. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Use this function to dispose of an `AEStreamRef` you created using [AEStreamCreateEvent(\_:\_:\_:\_:\_:\_:\_:)](1446562-aestreamcreateevent.md), [AEStreamOpen()](1447732-aestreamopen.md), or [AEStreamOpenEvent(\_:)](1445366-aestreamopenevent.md). To retrieve the resulting descriptor from the stream prior to disposal, pass in a pointer to an `AEDesc` structure in the `desc` parameter. If this parameter exists, `AEStreamClose` fills in the descriptor with the stream data. If the stream contains invalid information, possibly due to improperly balanced calls to “AEStream” functions, the returned descriptor type is set to `typeNull`. 

Regardless of any errors returned by this function, it is always safe to call [AEDisposeDesc(\_:)](1444208-aedisposedesc.md) on the returned descriptor. 

Specifying `NULL` for the `desc` parameter causes `AEStreamClose` to discard the stream data and dispose of the `AEStreamRef`. When you call `AEStreamClose` in this way, you do not need to worry about balancing nested calls to “AEStream” functions. This technique is particularly useful during error-handling situations where you need to dispose of a stream but do not know its exact state.

## See Also

### Creating Apple Event Structures Using Streams

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
- [AEStreamWriteKeyDesc(\_:\_:\_:\_:\_:)](1442568-aestreamwritekeydesc.md): Writes a complete keyword/descriptor pair to an `AEStreamRef`.

# AEStreamClose (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Closes and deallocates an `AEStreamRef`.

## Declaration

```objectivec
OSStatus AEStreamClose(AEStreamRef ref, AEDesc *desc);
```

## Parameters

- `ref`: An [AEStreamRef](aestreamref.md)containing the stream data.
- `desc`: A pointer to a descriptor for receiving a the stream data, or `NULL` if you want to discard the data. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Use this function to dispose of an `AEStreamRef` you created using [AEStreamCreateEvent](1446562-aestreamcreateevent.md), [AEStreamOpen](1447732-aestreamopen.md), or [AEStreamOpenEvent](1445366-aestreamopenevent.md). To retrieve the resulting descriptor from the stream prior to disposal, pass in a pointer to an `AEDesc` structure in the `desc` parameter. If this parameter exists, `AEStreamClose` fills in the descriptor with the stream data. If the stream contains invalid information, possibly due to improperly balanced calls to “AEStream” functions, the returned descriptor type is set to `typeNull`. 

Regardless of any errors returned by this function, it is always safe to call [AEDisposeDesc](1444208-aedisposedesc.md) on the returned descriptor. 

Specifying `NULL` for the `desc` parameter causes `AEStreamClose` to discard the stream data and dispose of the `AEStreamRef`. When you call `AEStreamClose` in this way, you do not need to worry about balancing nested calls to “AEStream” functions. This technique is particularly useful during error-handling situations where you need to dispose of a stream but do not know its exact state.

## See Also

### Creating Apple Event Structures Using Streams

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
- [AEStreamWriteKeyDesc](1442568-aestreamwritekeydesc.md): Writes a complete keyword/descriptor pair to an `AEStreamRef`.
