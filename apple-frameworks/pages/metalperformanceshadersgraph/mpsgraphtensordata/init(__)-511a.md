> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(_:)-511a](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(_:)-511a)

# init(\_:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes a tensor data with an MPS image batch.

## Declaration

```swift
init(_ imageBatch: [MPSImage])
```

## Parameters

- `imageBatch`: The device on which the kernel will run, unorm8 and unorm16 images will create a float32 tensorData

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

<a id="discussion"></a>

## Discussion

The dataLayout used will be NHWC, call a transpose or permute to change to a layout of your choice.

# initWithMPSImageBatch: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes a tensor data with an MPS image batch.

## Declaration

```objectivec
- (instancetype) initWithMPSImageBatch:(MPSImageBatch *) imageBatch;
```

## Parameters

- `imageBatch`: The device on which the kernel will run, unorm8 and unorm16 images will create a float32 tensorData

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

<a id="discussion"></a>

## Discussion

The dataLayout used will be NHWC, call a transpose or permute to change to a layout of your choice.
