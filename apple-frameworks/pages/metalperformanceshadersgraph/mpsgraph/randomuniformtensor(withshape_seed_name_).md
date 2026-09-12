> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/randomuniformtensor(withshape:seed:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/randomuniformtensor(withshape:seed:name:))

# randomUniformTensor(withShape:seed:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a RandomUniform operation and returns random uniform values

## Declaration

```swift
func randomUniformTensor(withShape shape: [NSNumber], seed: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `shape`: The shape of the tensor generated
- `seed`: The seed to use to initialize state. All calls with equal seed yield an identical stream of random values.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

An MPSGraphTensor of shape containing random values in the defined range.

<a id="discussion"></a>

## Discussion

Returns a tensor of provided shape of random uniform values in the range \[0.0, 1.0). Uses the provided seed value to initalize state. No state is preserved, and all calls with equal seed yield an identical stream of random values.

# randomUniformTensorWithShape:seed:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a RandomUniform operation and returns random uniform values

## Declaration

```objectivec
- (MPSGraphTensor *) randomUniformTensorWithShape:(MPSShape *) shape seed:(NSUInteger) seed name:(NSString *) name;
```

## Parameters

- `shape`: The shape of the tensor generated
- `seed`: The seed to use to initialize state. All calls with equal seed yield an identical stream of random values.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

An MPSGraphTensor of shape containing random values in the defined range.

<a id="discussion"></a>

## Discussion

Returns a tensor of provided shape of random uniform values in the range \[0.0, 1.0). Uses the provided seed value to initalize state. No state is preserved, and all calls with equal seed yield an identical stream of random values.
