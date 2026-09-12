> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(_:shape:datatype:rowbytes:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(_:shape:datatype:rowbytes:))

# init(\_:shape:dataType:rowBytes:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Initializes an tensor data with a metal buffer.

## Declaration

```swift
init(_ buffer: any MTLBuffer, shape: [NSNumber], dataType: MPSDataType, rowBytes: Int)
```

## Parameters

- `buffer`: MTLBuffer to be used within the MPSGraphTensorData
- `shape`: Shape of the output tensor
- `dataType`: dataType of the placeholder tensor
- `rowBytes`: rowBytes for the fastest moving dimension, must be larger than or equal to sizeOf(dataType)shape\[rank - 1\] and must be a multiple of sizeOf(dataType)

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

<a id="discussion"></a>

## Discussion

The device of the MTLBuffer will be used to get the MPSDevice for this MPSGraphTensorData.

# initWithMTLBuffer:shape:dataType:rowBytes: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Initializes an tensor data with a metal buffer.

## Declaration

```objectivec
- (instancetype) initWithMTLBuffer:(id<MTLBuffer>) buffer shape:(MPSShape *) shape dataType:(MPSDataType) dataType rowBytes:(NSUInteger) rowBytes;
```

## Parameters

- `buffer`: MTLBuffer to be used within the MPSGraphTensorData
- `shape`: Shape of the output tensor
- `dataType`: dataType of the placeholder tensor
- `rowBytes`: rowBytes for the fastest moving dimension, must be larger than or equal to sizeOf(dataType)shape\[rank - 1\] and must be a multiple of sizeOf(dataType)

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

<a id="discussion"></a>

## Discussion

The device of the MTLBuffer will be used to get the MPSDevice for this MPSGraphTensorData.
