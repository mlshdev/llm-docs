> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448535-aecreatedesc](https://developer.apple.com/documentation/coreservices/1448535-aecreatedesc)

# AECreateDesc(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates a new descriptor that incorporates the specified data.

## Declaration

```swift
func AECreateDesc(_ typeCode: DescType, _ dataPtr: UnsafeRawPointer!, _ dataSize: Size, _ result: UnsafeMutablePointer<AEDesc>!) -> OSErr
```

## Parameters

- `typeCode`: The descriptor type for the new descriptor. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `dataPtr`: A pointer to the data for the new descriptor. This data is copied into a newly-allocated block of memory for the descriptor that is created. To minimize copying overhead, consider using [AECreateDescFromExternalPtr(\_:\_:\_:\_:\_:\_:)](1446239-aecreatedescfromexternalptr.md).
- `dataSize`: The length, in bytes, of the data for the new descriptor.
- `result`: A pointer to a descriptor. On successful return, a descriptor that incorporates the data specified by the `dataPtr` parameter. On error, a null descriptor. If the function returns successfully, your application should call the [AEDisposeDesc(\_:)](1444208-aedisposedesc.md) function to dispose of the resulting descriptor after it has finished using it. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

While it is possible to create an Apple event descriptor or a descriptor list or a descriptor with the `AECreateDesc` function (assuming you have access to the raw data for an Apple event, list, or descriptor), you typically create these structured objects with their specific creation routines—`AECreateAppleEvent`, `AECreateList`, or `AECreateDesc`. 

<a id="1770172"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Creating and Duplicating Descriptors

- [AECreateDescFromExternalPtr(\_:\_:\_:\_:\_:\_:)](1446239-aecreatedescfromexternalptr.md): Creates a new descriptor that uses a memory buffer supplied by the caller.
- [AEDuplicateDesc(\_:\_:)](1442661-aeduplicatedesc.md): Creates a copy of a descriptor.

# AECreateDesc (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates a new descriptor that incorporates the specified data.

## Declaration

```objectivec
OSErr AECreateDesc(DescType typeCode, const void *dataPtr, Size dataSize, AEDesc *result);
```

## Parameters

- `typeCode`: The descriptor type for the new descriptor. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `dataPtr`: A pointer to the data for the new descriptor. This data is copied into a newly-allocated block of memory for the descriptor that is created. To minimize copying overhead, consider using [AECreateDescFromExternalPtr](1446239-aecreatedescfromexternalptr.md).
- `dataSize`: The length, in bytes, of the data for the new descriptor.
- `result`: A pointer to a descriptor. On successful return, a descriptor that incorporates the data specified by the `dataPtr` parameter. On error, a null descriptor. If the function returns successfully, your application should call the [AEDisposeDesc](1444208-aedisposedesc.md) function to dispose of the resulting descriptor after it has finished using it. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

While it is possible to create an Apple event descriptor or a descriptor list or a descriptor with the `AECreateDesc` function (assuming you have access to the raw data for an Apple event, list, or descriptor), you typically create these structured objects with their specific creation routines—`AECreateAppleEvent`, `AECreateList`, or `AECreateDesc`. 

<a id="1770172"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Creating and Duplicating Descriptors

- [AECreateDescFromExternalPtr](1446239-aecreatedescfromexternalptr.md): Creates a new descriptor that uses a memory buffer supplied by the caller.
- [AEDuplicateDesc](1442661-aeduplicatedesc.md): Creates a copy of a descriptor.
