> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447305-aesizeofflatteneddesc](https://developer.apple.com/documentation/coreservices/1447305-aesizeofflatteneddesc)

# AESizeOfFlattenedDesc(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns the amount of buffer space needed to store the descriptor after flattening it.

## Declaration

```swift
func AESizeOfFlattenedDesc(_ theAEDesc: UnsafePointer<AEDesc>!) -> Size
```

## Parameters

- `theAEDesc`: A pointer to the descriptor to be flattened. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

The size, in bytes, required to store the flattened descriptor.

<a id="discussion"></a>

## Discussion

You call this function before calling [AEFlattenDesc(\_:\_:\_:\_:)](1441808-aeflattendesc.md) to determine the required size of the buffer for the flatten operation.

<a id="1770221"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Serializing Apple Event Data

- [AEFlattenDesc(\_:\_:\_:\_:)](1441808-aeflattendesc.md): Flattens the specified descriptor and stores the data in the supplied buffer.
- [AEUnflattenDesc(\_:\_:)](1448997-aeunflattendesc.md): Deprecated. Unflattens the data in the passed buffer and creates a descriptor from it.

# AESizeOfFlattenedDesc (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns the amount of buffer space needed to store the descriptor after flattening it.

## Declaration

```objectivec
Size AESizeOfFlattenedDesc(const AEDesc *theAEDesc);
```

## Parameters

- `theAEDesc`: A pointer to the descriptor to be flattened. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

The size, in bytes, required to store the flattened descriptor.

<a id="discussion"></a>

## Discussion

You call this function before calling [AEFlattenDesc](1441808-aeflattendesc.md) to determine the required size of the buffer for the flatten operation.

<a id="1770221"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Serializing Apple Event Data

- [AEFlattenDesc](1441808-aeflattendesc.md): Flattens the specified descriptor and stores the data in the supplied buffer.
- [AEUnflattenDesc](1448997-aeunflattendesc.md): Deprecated. Unflattens the data in the passed buffer and creates a descriptor from it.
