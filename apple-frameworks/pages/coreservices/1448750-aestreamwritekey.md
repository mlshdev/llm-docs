> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448750-aestreamwritekey](https://developer.apple.com/documentation/coreservices/1448750-aestreamwritekey)

# AEStreamWriteKey(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Marks the beginning of a keyword/descriptor pair for a descriptor in an `AEStreamRef`.

## Declaration

```swift
func AEStreamWriteKey(_ ref: AEStreamRef!, _ key: AEKeyword) -> OSStatus
```

## Parameters

- `ref`: An [AEStreamRef](aestreamref.md) containing the stream data.
- `key`: The `AEKeyword` associated with the new descriptor being added to the stream. See [AEKeyword](aekeyword.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

You must follow this call with a sequence of “AEStream” calls to specify exactly one descriptor that goes with the keyword. The descriptor you create can be of type `AEDesc`, `AEDescList`, or `AERecord`.

If you are creating nested descriptors, this routine begins a new keyword/descriptor pair for the descriptor most recently opened by a call to [AEStreamWriteKey(\_:\_:)](1448750-aestreamwritekey.md) or [AEStreamOpenEvent(\_:)](1445366-aestreamopenevent.md). You cannot use this routine to write parameters to any other types of descriptors, even if they are nested inside of an `AERecord`.

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
- [AEStreamWriteKeyDesc(\_:\_:\_:\_:\_:)](1442568-aestreamwritekeydesc.md): Writes a complete keyword/descriptor pair to an `AEStreamRef`.

# AEStreamWriteKey (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Marks the beginning of a keyword/descriptor pair for a descriptor in an `AEStreamRef`.

## Declaration

```objectivec
OSStatus AEStreamWriteKey(AEStreamRef ref, AEKeyword key);
```

## Parameters

- `ref`: An [AEStreamRef](aestreamref.md) containing the stream data.
- `key`: The `AEKeyword` associated with the new descriptor being added to the stream. See [AEKeyword](aekeyword.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

You must follow this call with a sequence of “AEStream” calls to specify exactly one descriptor that goes with the keyword. The descriptor you create can be of type `AEDesc`, `AEDescList`, or `AERecord`.

If you are creating nested descriptors, this routine begins a new keyword/descriptor pair for the descriptor most recently opened by a call to [AEStreamWriteKey](1448750-aestreamwritekey.md) or [AEStreamOpenEvent](1445366-aestreamopenevent.md). You cannot use this routine to write parameters to any other types of descriptors, even if they are nested inside of an `AERecord`.

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
- [AEStreamWriteKeyDesc](1442568-aestreamwritekeydesc.md): Writes a complete keyword/descriptor pair to an `AEStreamRef`.
