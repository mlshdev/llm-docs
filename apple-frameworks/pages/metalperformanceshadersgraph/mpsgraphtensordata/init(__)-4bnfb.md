> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(_:)-4bnfb](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(_:)-4bnfb)

# init(\_:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes an MPSGraphTensorData with an MPS ndarray.

## Declaration

```swift
init(_ ndarray: MPSNDArray)
```

## Parameters

- `ndarray`: MPSNDArray to be used within the MPSGraphTensorData.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

<a id="discussion"></a>

## Discussion

The device of the MPSNDArray will be used to get the MPSDevice for this MPSGraphTensorData.

# initWithMPSNDArray: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes an MPSGraphTensorData with an MPS ndarray.

## Declaration

```objectivec
- (instancetype) initWithMPSNDArray:(MPSNDArray *) ndarray;
```

## Parameters

- `ndarray`: MPSNDArray to be used within the MPSGraphTensorData.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

<a id="discussion"></a>

## Discussion

The device of the MPSNDArray will be used to get the MPSDevice for this MPSGraphTensorData.
