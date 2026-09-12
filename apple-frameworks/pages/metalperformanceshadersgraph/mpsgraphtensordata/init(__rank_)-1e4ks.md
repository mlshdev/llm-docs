> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(_:rank:)-1e4ks](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(_:rank:)-1e4ks)

# init(\_:rank:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes a tensor data with an MPS vector enforcing rank of the result.

## Declaration

```swift
init(_ vector: MPSVector, rank: Int)
```

## Parameters

- `vector`: MPSVector to be used within the MPSGraphTensorData
- `rank`: The rank of the resulting TensorData tensor. NOTE: must be within { 1, … ,16 }.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

<a id="discussion"></a>

## Discussion

The device of the MPSVector will be used to get the MPSDevice for this MPSGraphTensorData.

# initWithMPSVector:rank: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes a tensor data with an MPS vector enforcing rank of the result.

## Declaration

```objectivec
- (instancetype) initWithMPSVector:(MPSVector *) vector rank:(NSUInteger) rank;
```

## Parameters

- `vector`: MPSVector to be used within the MPSGraphTensorData
- `rank`: The rank of the resulting TensorData tensor. NOTE: must be within { 1, … ,16 }.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

<a id="discussion"></a>

## Discussion

The device of the MPSVector will be used to get the MPSDevice for this MPSGraphTensorData.
