> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444427-aegetdescdata](https://developer.apple.com/documentation/coreservices/1444427-aegetdescdata)

# AEGetDescData(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets the data from the specified descriptor.

## Declaration

```swift
func AEGetDescData(_ theAEDesc: UnsafePointer<AEDesc>!, _ dataPtr: UnsafeMutableRawPointer!, _ maximumSize: Size) -> OSErr
```

## Parameters

- `theAEDesc`: A pointer to the descriptor to get the data from. See [AEDesc](aedesc.md).
- `dataPtr`: A pointer to a buffer, local variable, or other storage location created and disposed of by your application. The size in bytes should be the same as the value you pass in the `maximumSize` parameter. On return, contains the data from the descriptor.
- `maximumSize`: The length, in bytes, of the expected descriptor data. The `AEGetDescData` function will not return more data than you specify in this parameter. You typically determine the maximum size by calling [AEGetDescDataSize(\_:)](1450119-aegetdescdatasize.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Your application can call [AEGetDescDataSize(\_:)](1450119-aegetdescdatasize.md) to get the size, in bytes, of the data in a descriptor, allocate a buffer or variable of that size, then call `AEGetDescData` to get the data.

This function works only with value descriptors created by [AECreateDesc(\_:\_:\_:\_:)](1448535-aecreatedesc.md). You cannot get the data of an [AERecord](aerecord.md) or [AEDescList](aedesclist.md), for example.

<a id="1770212"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Operating On Descriptor Data

- [AEGetDescDataSize(\_:)](1450119-aegetdescdatasize.md): Gets the size, in bytes, of the data in the specified descriptor.
- [AEGetDescDataRange(\_:\_:\_:\_:)](1446560-aegetdescdatarange.md): Retrieves a specified series of bytes from the specified descriptor.
- [AEReplaceDescData(\_:\_:\_:\_:)](1446695-aereplacedescdata.md): Copies the specified data into the specified descriptor, replacing any previous data.

# AEGetDescData (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets the data from the specified descriptor.

## Declaration

```objectivec
OSErr AEGetDescData(const AEDesc *theAEDesc, void *dataPtr, Size maximumSize);
```

## Parameters

- `theAEDesc`: A pointer to the descriptor to get the data from. See [AEDesc](aedesc.md).
- `dataPtr`: A pointer to a buffer, local variable, or other storage location created and disposed of by your application. The size in bytes should be the same as the value you pass in the `maximumSize` parameter. On return, contains the data from the descriptor.
- `maximumSize`: The length, in bytes, of the expected descriptor data. The `AEGetDescData` function will not return more data than you specify in this parameter. You typically determine the maximum size by calling [AEGetDescDataSize](1450119-aegetdescdatasize.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Your application can call [AEGetDescDataSize](1450119-aegetdescdatasize.md) to get the size, in bytes, of the data in a descriptor, allocate a buffer or variable of that size, then call `AEGetDescData` to get the data.

This function works only with value descriptors created by [AECreateDesc](1448535-aecreatedesc.md). You cannot get the data of an [AERecord](aerecord.md) or [AEDescList](aedesclist.md), for example.

<a id="1770212"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Operating On Descriptor Data

- [AEGetDescDataSize](1450119-aegetdescdatasize.md): Gets the size, in bytes, of the data in the specified descriptor.
- [AEGetDescDataRange](1446560-aegetdescdatarange.md): Retrieves a specified series of bytes from the specified descriptor.
- [AEReplaceDescData](1446695-aereplacedescdata.md): Copies the specified data into the specified descriptor, replacing any previous data.
