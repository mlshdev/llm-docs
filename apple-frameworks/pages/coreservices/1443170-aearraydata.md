> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1443170-aearraydata](https://developer.apple.com/documentation/coreservices/1443170-aearraydata)

# AEArrayData

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Union  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Stores array information to be put into a descriptor listwith the `AEPutArray` functionor extracted from a descriptor list with the `AEGetArray` function.

## Declaration

```objectivec
typedef union AEArrayData {
    ...
} AEArrayData;
```

<a id="discussion"></a>

## Discussion

When your application calls the [AEPutArray](1442535-aeputarray.md) function to put informationinto a descriptor list or the [AEGetArray](1445720-aegetarray.md) functionto get information from a descriptor list, it uses an to store theinformation. The type of array depends on the data for the array,as specified by one of the constants described in [Data Array Constants](1542848-data_array_constants.md).

Array items in Apple event arrays of type `kAEDataArray`, `kAEPackedArray`,or `kAEHandleArray` mustbe factored—that is, contained in a factored descriptor list.Before adding array items to a factored descriptor list, you shouldprovide both a pointer to the data that is common to all array itemsand the size of that common data when you first call [AECreateList](1448643-aecreatelist.md) to createa factored descriptor list. When you call `AEPutArray` toadd the array data to such a descriptor list, the Apple Event Managerautomatically isolates the common data you specified in the callto `AECreateList`.

When you call `AEGetArray` or `AEPutArray`,you specify a pointer of data type `AEArrayDataPointer` thatpoints to a buffer containing the data for the array.

## Topics

### Instance Properties

- [kAEDataArray](1443170-aearraydata/1443096-kaedataarray.md)
- [kAEDescArray](1443170-aearraydata/1442921-kaedescarray.md)
- [kAEHandleArray](1443170-aearraydata/1444461-kaehandlearray.md)
- [kAEKeyDescArray](1443170-aearraydata/1444282-kaekeydescarray.md)
- [kAEPackedArray](1443170-aearraydata/1449947-kaepackedarray.md)
