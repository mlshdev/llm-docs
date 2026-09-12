> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(_:)-60j6x](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(_:)-60j6x)

# init(\_:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Initializes an MPSGraphTensorData with an MTLTensor.

## Declaration

```swift
init(_ tensor: any MTLTensor)
```

## Parameters

- `tensor`: MTLTensor to be used within the MPSGraphTensorData

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

<a id="discussion"></a>

## Discussion

The internal storage of the MTLTensor will be aliased. Requires tensor to support MTLTensorUsageMachineLearning.

# initWithMTLTensor: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Initializes an MPSGraphTensorData with an MTLTensor.

## Declaration

```objectivec
- (instancetype) initWithMTLTensor:(id<MTLTensor>) tensor;
```

## Parameters

- `tensor`: MTLTensor to be used within the MPSGraphTensorData

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

<a id="discussion"></a>

## Discussion

The internal storage of the MTLTensor will be aliased. Requires tensor to support MTLTensorUsageMachineLearning.
