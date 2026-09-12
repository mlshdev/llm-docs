> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448997-aeunflattendesc](https://developer.apple.com/documentation/coreservices/1448997-aeunflattendesc)

# AEUnflattenDesc(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Unflattens the data in the passed buffer and creates a descriptor from it.

## Declaration

```swift
func AEUnflattenDesc(_ buffer: UnsafeRawPointer!, _ result: UnsafeMutablePointer<AEDesc>!) -> OSStatus
```

## Parameters

- `buffer`: A pointer to memory, allocated by the application, that contains flattened data produced by a previous call to [AEFlattenDesc(\_:\_:\_:\_:)](1441808-aeflattendesc.md).
- `result`: A null descriptor. On successful completion, points to a descriptor created from the flattened data. The caller is responsible for disposing of the descriptor.

<a id="return_value"></a>

## Return Value

A result code. Returns `paramErr` if the flattened data in `buffer` is found to be invalid. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145) for other possible values.

<a id="discussion"></a>

## Discussion

This function assumes the passed buffer contains valid flattened data, produced by a previous call to [AEFlattenDesc(\_:\_:\_:\_:)](1441808-aeflattendesc.md). See that function for a description of when you might want to flatten and unflatten descriptors, and of possible limitations.

Flattening and unflattening works across OS versions, including between Mac OS 9 and macOS.

Flattening is endian-neutral. That is, you can save flattened data on a machine that is either big-endian or little-endian, then retrieve and unflatten the data on either type of machine, without any special steps by your application.

<a id="1770225"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Serializing Apple Event Data

- [AESizeOfFlattenedDesc(\_:)](1447305-aesizeofflatteneddesc.md): Returns the amount of buffer space needed to store the descriptor after flattening it.
- [AEFlattenDesc(\_:\_:\_:\_:)](1441808-aeflattendesc.md): Flattens the specified descriptor and stores the data in the supplied buffer.

# AEUnflattenDesc (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Unflattens the data in the passed buffer and creates a descriptor from it.

## Declaration

```objectivec
OSStatus AEUnflattenDesc(const void *buffer, AEDesc *result);
```

## Parameters

- `buffer`: A pointer to memory, allocated by the application, that contains flattened data produced by a previous call to [AEFlattenDesc](1441808-aeflattendesc.md).
- `result`: A null descriptor. On successful completion, points to a descriptor created from the flattened data. The caller is responsible for disposing of the descriptor.

<a id="return_value"></a>

## Return Value

A result code. Returns `paramErr` if the flattened data in `buffer` is found to be invalid. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145) for other possible values.

<a id="discussion"></a>

## Discussion

This function assumes the passed buffer contains valid flattened data, produced by a previous call to [AEFlattenDesc](1441808-aeflattendesc.md). See that function for a description of when you might want to flatten and unflatten descriptors, and of possible limitations.

Flattening and unflattening works across OS versions, including between Mac OS 9 and macOS.

Flattening is endian-neutral. That is, you can save flattened data on a machine that is either big-endian or little-endian, then retrieve and unflatten the data on either type of machine, without any special steps by your application.

<a id="1770225"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Serializing Apple Event Data

- [AESizeOfFlattenedDesc](1447305-aesizeofflatteneddesc.md): Returns the amount of buffer space needed to store the descriptor after flattening it.
- [AEFlattenDesc](1441808-aeflattendesc.md): Flattens the specified descriptor and stores the data in the supplied buffer.
