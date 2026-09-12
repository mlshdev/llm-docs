> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/randomtensor(withshape:descriptor:seed:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/randomtensor(withshape:descriptor:seed:name:))

# randomTensor(withShape:descriptor:seed:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a Random op of type matching distribution in descriptor and returns random values.

## Declaration

```swift
func randomTensor(withShape shape: [NSNumber], descriptor: MPSGraphRandomOpDescriptor, seed: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `shape`: The shape of the tensor generated
- `descriptor`: The descriptor of the distribution. See MPSGraphRandomOpDescriptor.
- `seed`: The seed to use to initialize state. All calls with equal seed yield an identical stream of random values.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

An MPSGraphTensor of shape containing random values in the defined range.

<a id="discussion"></a>

## Discussion

Returns a tensor of provided shape of random values in the distribution specified. Uses the provided seed value to initalize state. No state is preserved, and all calls with equal seed yield an identical stream of random values.

# randomTensorWithShape:descriptor:seed:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a Random op of type matching distribution in descriptor and returns random values.

## Declaration

```objectivec
- (MPSGraphTensor *) randomTensorWithShape:(MPSShape *) shape descriptor:(MPSGraphRandomOpDescriptor *) descriptor seed:(NSUInteger) seed name:(NSString *) name;
```

## Parameters

- `shape`: The shape of the tensor generated
- `descriptor`: The descriptor of the distribution. See MPSGraphRandomOpDescriptor.
- `seed`: The seed to use to initialize state. All calls with equal seed yield an identical stream of random values.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

An MPSGraphTensor of shape containing random values in the defined range.

<a id="discussion"></a>

## Discussion

Returns a tensor of provided shape of random values in the distribution specified. Uses the provided seed value to initalize state. No state is preserved, and all calls with equal seed yield an identical stream of random values.
