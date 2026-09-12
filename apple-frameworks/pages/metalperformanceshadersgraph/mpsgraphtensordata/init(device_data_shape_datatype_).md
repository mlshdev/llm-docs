> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(device:data:shape:datatype:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(device:data:shape:datatype:))

# init(device:data:shape:dataType:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes the tensor data with an `NSData` on a device.

## Declaration

```swift
init(device: MPSGraphDevice, data: Data, shape: [NSNumber], dataType: MPSDataType)
```

## Parameters

- `device`: MPSDevice on which the MPSGraphTensorData exists
- `data`: NSData from which to copy the contents
- `shape`: Shape of the output tensor
- `dataType`: dataType of the placeholder tensor

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

# initWithDevice:data:shape:dataType: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes the tensor data with an `NSData` on a device.

## Declaration

```objectivec
- (instancetype) initWithDevice:(MPSGraphDevice *) device data:(NSData *) data shape:(MPSShape *) shape dataType:(MPSDataType) dataType;
```

## Parameters

- `device`: MPSDevice on which the MPSGraphTensorData exists
- `data`: NSData from which to copy the contents
- `shape`: Shape of the output tensor
- `dataType`: dataType of the placeholder tensor

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.
