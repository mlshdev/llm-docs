> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(_:shape:datatype:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(_:shape:datatype:))

# init(\_:shape:dataType:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes an tensor data with a metal buffer.

## Declaration

```swift
init(_ buffer: any MTLBuffer, shape: [NSNumber], dataType: MPSDataType)
```

## Parameters

- `buffer`: MTLBuffer to be used within the MPSGraphTensorData
- `shape`: Shape of the output tensor
- `dataType`: dataType of the placeholder tensor

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

<a id="discussion"></a>

## Discussion

The device of the MTLBuffer will be used to get the MPSDevice for this MPSGraphTensorData.

# initWithMTLBuffer:shape:dataType: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes an tensor data with a metal buffer.

## Declaration

```objectivec
- (instancetype) initWithMTLBuffer:(id<MTLBuffer>) buffer shape:(MPSShape *) shape dataType:(MPSDataType) dataType;
```

## Parameters

- `buffer`: MTLBuffer to be used within the MPSGraphTensorData
- `shape`: Shape of the output tensor
- `dataType`: dataType of the placeholder tensor

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

<a id="discussion"></a>

## Discussion

The device of the MTLBuffer will be used to get the MPSDevice for this MPSGraphTensorData.
