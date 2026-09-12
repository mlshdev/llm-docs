> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorbufferattachments/setbuffer(_:offset:for:)](https://developer.apple.com/documentation/metal/mtltensorbufferattachments/setbuffer(_:offset:for:))

# setBuffer(\_:offset:for:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the buffer and byte offset to use as backing storage for the given plane.

## Declaration

```swift
func setBuffer(_ buffer: any MTLBuffer, offset: Int, for plane: MTLTensorPlaneType)
```

## Parameters

- `buffer`: The buffer to back the plane.
- `offset`: The byte offset into the buffer.
- `plane`: The plane type to associate the buffer with.

<a id="discussion"></a>

## Discussion

The offset needs to be aligned to 128 bytes if the plane uses [MTLTensorDataType.int2](../mtltensordatatype/int2.md), [MTLTensorDataType.uint2](../mtltensordatatype/uint2.md), [MTLTensorDataType.int4](../mtltensordatatype/int4.md), [MTLTensorDataType.uint4](../mtltensordatatype/uint4.md), [MTLTensorDataType.metalFloat4e2m1](../mtltensordatatype/metalfloat4e2m1.md), [MTLTensorDataType.metalFloat8e4m3](../mtltensordatatype/metalfloat8e4m3.md), [MTLTensorDataType.metalFloat8e5m2](../mtltensordatatype/metalfloat8e5m2.md), or [MTLTensorDataType.metalFloat8ue8m0](../mtltensordatatype/metalfloat8ue8m0.md), otherwise it needs to be aligned to the size of the plane’s data type in bytes.

# setBuffer:offset:forPlane: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the buffer and byte offset to use as backing storage for the given plane.

## Declaration

```objectivec
- (void) setBuffer:(id<MTLBuffer>) buffer offset:(NSUInteger) offset forPlane:(MTLTensorPlaneType) plane;
```

## Parameters

- `buffer`: The buffer to back the plane.
- `offset`: The byte offset into the buffer.
- `plane`: The plane type to associate the buffer with.

<a id="discussion"></a>

## Discussion

The offset needs to be aligned to 128 bytes if the plane uses [MTLTensorDataTypeInt2](../mtltensordatatype/int2.md), [MTLTensorDataTypeUInt2](../mtltensordatatype/uint2.md), [MTLTensorDataTypeInt4](../mtltensordatatype/int4.md), [MTLTensorDataTypeUInt4](../mtltensordatatype/uint4.md), [MTLTensorDataTypeMetalFloat4E2M1](../mtltensordatatype/metalfloat4e2m1.md), [MTLTensorDataTypeMetalFloat8E4M3](../mtltensordatatype/metalfloat8e4m3.md), [MTLTensorDataTypeMetalFloat8E5M2](../mtltensordatatype/metalfloat8e5m2.md), or [MTLTensorDataTypeMetalFloat8UE8M0](../mtltensordatatype/metalfloat8ue8m0.md), otherwise it needs to be aligned to the size of the plane’s data type in bytes.
