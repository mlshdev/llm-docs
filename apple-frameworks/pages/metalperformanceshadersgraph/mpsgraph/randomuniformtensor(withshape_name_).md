> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/randomuniformtensor(withshape:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/randomuniformtensor(withshape:name:))

# randomUniformTensor(withShape:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a RandomUniform operation and returns random uniform values

## Declaration

```swift
func randomUniformTensor(withShape shape: [NSNumber], name: String?) -> MPSGraphTensor
```

## Parameters

- `shape`: The shape of the tensor generated
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

An MPSGraphTensor of shape containing random values in the defined range.

<a id="discussion"></a>

## Discussion

Returns a tensor of provided shape of random uniform values in the range \[0.0, 1.0). Uses a random seed value to initalize state. No state is preserved, and subsequent calls are not guaranteed to result in a unique stream of random values.

# randomUniformTensorWithShape:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a RandomUniform operation and returns random uniform values

## Declaration

```objectivec
- (MPSGraphTensor *) randomUniformTensorWithShape:(MPSShape *) shape name:(NSString *) name;
```

## Parameters

- `shape`: The shape of the tensor generated
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

An MPSGraphTensor of shape containing random values in the defined range.

<a id="discussion"></a>

## Discussion

Returns a tensor of provided shape of random uniform values in the range \[0.0, 1.0). Uses a random seed value to initalize state. No state is preserved, and subsequent calls are not guaranteed to result in a unique stream of random values.
