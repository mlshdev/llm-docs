> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(_:)-2go2](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphtensordata/init(_:)-2go2)

# init(\_:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes a tensor data with an MPS matrix.

## Declaration

```swift
init(_ matrix: MPSMatrix)
```

## Parameters

- `matrix`: MPSMatrix to be used within the MPSGraphTensorData

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

<a id="discussion"></a>

## Discussion

The device of the MPSMatrix will be used to get the MPSDevice for this MPSGraphTensorData.

# initWithMPSMatrix: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes a tensor data with an MPS matrix.

## Declaration

```objectivec
- (instancetype) initWithMPSMatrix:(MPSMatrix *) matrix;
```

## Parameters

- `matrix`: MPSMatrix to be used within the MPSGraphTensorData

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData, or nil if allocation failure.

<a id="discussion"></a>

## Discussion

The device of the MPSMatrix will be used to get the MPSDevice for this MPSGraphTensorData.
