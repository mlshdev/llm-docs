> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442535-aeputarray](https://developer.apple.com/documentation/coreservices/1442535-aeputarray)

# AEPutArray(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Inserts the data for an Apple event array into a descriptor list, replacing any previous descriptors in the list.

## Declaration

```swift
func AEPutArray(_ theAEDescList: UnsafeMutablePointer<AEDescList>!, _ arrayType: AEArrayType, _ arrayPtr: UnsafePointer<AEArrayData>!, _ itemType: DescType, _ itemSize: Size, _ itemCount: Int) -> OSErr
```

## Parameters

- `theAEDescList`: A pointer to the descriptor list to put the Apple event array into. If there are any descriptors already in the descriptor list, they are replaced. If the array type is `kAEKeyDescArray`, `theAEDescList` must point to an Apple event record; otherwise, it can point to either a descriptor list or an Apple event record.

  If you pass a pointer to a factored descriptor list, created by calling the [AECreateList(\_:\_:\_:\_:)](1448643-aecreatelist.md) function, each array item in the array pointed to by the `arrayPtr` parameter must include the data that is common to all the descriptors in the list. The Apple Event Manager automatically isolates the common data you specified in the call to `AECreateList`. A factored descriptor list is described in the Discussion section.

  See [AEDescList](aedesclist.md).
- `arrayType`: The Apple event array type to create. Pass a value specified by one of the constants described in [Data Array Constants](apple_events/1542848-data_array_constants.md). See [AEArrayType](aearraytype.md).
- `arrayPtr`: A pointer to a buffer, local variable, or other storage location, created and disposed of by your application, that contains the array to put into the descriptor list. See [AEArrayData](aearraydata.md).
- `itemType`: For arrays of type `kAEDataArray`, `kAEPackedArray`, or `kAEHandleArray`, the descriptor type of the array items to create. Use one of the constants described in [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md), such as `typeLongInteger`. You don’t need to specify an item type for arrays of type `kAEDescArray` or `kAEKeyDescArray` because the data is already stored in descriptors which contain a descriptor type. See [DescType](desctype.md).
- `itemSize`: For arrays of type `kAEDataArray` or `kAEPackedArray`, the size (in bytes) of the array items to create. You don’t need to specify an item size for arrays of type `kAEDescArray`, `kAEKeyDescArray`, or `kAEHandleArray` because their descriptors (though not the data they point to) have a known size.
- `itemCount`: The number of elements in the array.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

A factored descriptor list is one in which the Apple Event Manager automatically isolates the data that is common to all the elements of the list so that the common data only appears in the list once. To create a factored descriptor list, you call the [AECreateList(\_:\_:\_:\_:)](1448643-aecreatelist.md) function and specify the data that is common to all elements in the descriptor array. 

<a id="1770166"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Adding Items to Descriptor Lists

- [AEPutDesc(\_:\_:\_:)](1450093-aeputdesc.md): Adds a descriptor to any descriptor list, possibly replacing an existing descriptor in the list.
- [AEPutPtr(\_:\_:\_:\_:\_:)](1445287-aeputptr.md): Inserts data specified in a buffer into a descriptor list as a descriptor, possibly replacing an existing descriptor in the list.

# AEPutArray (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Inserts the data for an Apple event array into a descriptor list, replacing any previous descriptors in the list.

## Declaration

```objectivec
OSErr AEPutArray(AEDescList *theAEDescList, AEArrayType arrayType, const AEArrayData *arrayPtr, DescType itemType, Size itemSize, long itemCount);
```

## Parameters

- `theAEDescList`: A pointer to the descriptor list to put the Apple event array into. If there are any descriptors already in the descriptor list, they are replaced. If the array type is `kAEKeyDescArray`, `theAEDescList` must point to an Apple event record; otherwise, it can point to either a descriptor list or an Apple event record.

  If you pass a pointer to a factored descriptor list, created by calling the [AECreateList](1448643-aecreatelist.md) function, each array item in the array pointed to by the `arrayPtr` parameter must include the data that is common to all the descriptors in the list. The Apple Event Manager automatically isolates the common data you specified in the call to `AECreateList`. A factored descriptor list is described in the Discussion section.

  See [AEDescList](aedesclist.md).
- `arrayType`: The Apple event array type to create. Pass a value specified by one of the constants described in [Data Array Constants](1542848-data_array_constants.md). See [AEArrayType](aearraytype.md).
- `arrayPtr`: A pointer to a buffer, local variable, or other storage location, created and disposed of by your application, that contains the array to put into the descriptor list. See [AEArrayData](1443170-aearraydata.md).
- `itemType`: For arrays of type `kAEDataArray`, `kAEPackedArray`, or `kAEHandleArray`, the descriptor type of the array items to create. Use one of the constants described in [Descriptor Type Constants](1542788-descriptor_type_constants.md), such as `typeLongInteger`. You don’t need to specify an item type for arrays of type `kAEDescArray` or `kAEKeyDescArray` because the data is already stored in descriptors which contain a descriptor type. See [DescType](desctype.md).
- `itemSize`: For arrays of type `kAEDataArray` or `kAEPackedArray`, the size (in bytes) of the array items to create. You don’t need to specify an item size for arrays of type `kAEDescArray`, `kAEKeyDescArray`, or `kAEHandleArray` because their descriptors (though not the data they point to) have a known size.
- `itemCount`: The number of elements in the array.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

A factored descriptor list is one in which the Apple Event Manager automatically isolates the data that is common to all the elements of the list so that the common data only appears in the list once. To create a factored descriptor list, you call the [AECreateList](1448643-aecreatelist.md) function and specify the data that is common to all elements in the descriptor array. 

<a id="1770166"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Adding Items to Descriptor Lists

- [AEPutDesc](1450093-aeputdesc.md): Adds a descriptor to any descriptor list, possibly replacing an existing descriptor in the list.
- [AEPutPtr](1445287-aeputptr.md): Inserts data specified in a buffer into a descriptor list as a descriptor, possibly replacing an existing descriptor in the list.
