> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1446695-aereplacedescdata](https://developer.apple.com/documentation/coreservices/1446695-aereplacedescdata)

# AEReplaceDescData(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Copies the specified data into the specified descriptor, replacing any previous data.

## Declaration

```swift
func AEReplaceDescData(_ typeCode: DescType, _ dataPtr: UnsafeRawPointer!, _ dataSize: Size, _ theAEDesc: UnsafeMutablePointer<AEDesc>!) -> OSErr
```

## Parameters

- `typeCode`: Specifies the descriptor type of the data pointed to by `dataPtr`. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `dataPtr`: A pointer to the data to store in the specified descriptor.
- `dataSize`: The size, in bytes, of the data pointed to by the `dataSize` parameter.
- `theAEDesc`: A pointer to a descriptor. On return, contains the copied data. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Operating On Descriptor Data

- [AEGetDescData(\_:\_:\_:)](1444427-aegetdescdata.md): Gets the data from the specified descriptor.
- [AEGetDescDataSize(\_:)](1450119-aegetdescdatasize.md): Gets the size, in bytes, of the data in the specified descriptor.
- [AEGetDescDataRange(\_:\_:\_:\_:)](1446560-aegetdescdatarange.md): Retrieves a specified series of bytes from the specified descriptor.

# AEReplaceDescData (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Copies the specified data into the specified descriptor, replacing any previous data.

## Declaration

```objectivec
OSErr AEReplaceDescData(DescType typeCode, const void *dataPtr, Size dataSize, AEDesc *theAEDesc);
```

## Parameters

- `typeCode`: Specifies the descriptor type of the data pointed to by `dataPtr`. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `dataPtr`: A pointer to the data to store in the specified descriptor.
- `dataSize`: The size, in bytes, of the data pointed to by the `dataSize` parameter.
- `theAEDesc`: A pointer to a descriptor. On return, contains the copied data. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Operating On Descriptor Data

- [AEGetDescData](1444427-aegetdescdata.md): Gets the data from the specified descriptor.
- [AEGetDescDataSize](1450119-aegetdescdatasize.md): Gets the size, in bytes, of the data in the specified descriptor.
- [AEGetDescDataRange](1446560-aegetdescdatarange.md): Retrieves a specified series of bytes from the specified descriptor.
