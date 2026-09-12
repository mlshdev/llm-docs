> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1445287-aeputptr](https://developer.apple.com/documentation/coreservices/1445287-aeputptr)

# AEPutPtr(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Inserts data specified in a buffer into a descriptor list as a descriptor, possibly replacing an existing descriptor in the list.

## Declaration

```swift
func AEPutPtr(_ theAEDescList: UnsafeMutablePointer<AEDescList>!, _ index: Int, _ typeCode: DescType, _ dataPtr: UnsafeRawPointer!, _ dataSize: Size) -> OSErr
```

## Parameters

- `theAEDescList`: A pointer to the descriptor list to add a descriptor to. See [AEDescList](aedesclist.md).
- `index`: A one-based positive integer indicating the position to insert the descriptor at. If there is already a descriptor in the specified position, it is replaced.

  You can pass a value of zero or count + 1 to add the descriptor at the end of the list. `AEPutPtr` returns an error (`AEIllegalIndex`) if you pass a negative number or a value that is out of range.
- `typeCode`: The descriptor type for the descriptor to be put into the list. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `dataPtr`: A pointer to the data for the descriptor to add.
- `dataSize`: The length, in bytes, of the data for the descriptor to add.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Adding Items to Descriptor Lists

- [AEPutArray(\_:\_:\_:\_:\_:\_:)](1442535-aeputarray.md): Inserts the data for an Apple event array into a descriptor list, replacing any previous descriptors in the list.
- [AEPutDesc(\_:\_:\_:)](1450093-aeputdesc.md): Adds a descriptor to any descriptor list, possibly replacing an existing descriptor in the list.

# AEPutPtr (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Inserts data specified in a buffer into a descriptor list as a descriptor, possibly replacing an existing descriptor in the list.

## Declaration

```objectivec
OSErr AEPutPtr(AEDescList *theAEDescList, long index, DescType typeCode, const void *dataPtr, Size dataSize);
```

## Parameters

- `theAEDescList`: A pointer to the descriptor list to add a descriptor to. See [AEDescList](aedesclist.md).
- `index`: A one-based positive integer indicating the position to insert the descriptor at. If there is already a descriptor in the specified position, it is replaced.

  You can pass a value of zero or count + 1 to add the descriptor at the end of the list. `AEPutPtr` returns an error (`AEIllegalIndex`) if you pass a negative number or a value that is out of range.
- `typeCode`: The descriptor type for the descriptor to be put into the list. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `dataPtr`: A pointer to the data for the descriptor to add.
- `dataSize`: The length, in bytes, of the data for the descriptor to add.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Adding Items to Descriptor Lists

- [AEPutArray](1442535-aeputarray.md): Inserts the data for an Apple event array into a descriptor list, replacing any previous descriptors in the list.
- [AEPutDesc](1450093-aeputdesc.md): Adds a descriptor to any descriptor list, possibly replacing an existing descriptor in the list.
