> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/randomphiloxstatetensor(withcounterlow:counterhigh:key:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/randomphiloxstatetensor(withcounterlow:counterhigh:key:name:))

# randomPhiloxStateTensor(withCounterLow:counterHigh:key:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a tensor representing state using the Philox algorithm with given counter and key values.

## Declaration

```swift
func randomPhiloxStateTensor(withCounterLow counterLow: Int, counterHigh: Int, key: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `counterLow`: The value to initilaize lower 64 bits of counter to. Philox utilizes a 128 bit counter
- `counterHigh`: The value to initilaize upper 64 bits of counter to. Philox utilizes a 128 bit counter
- `key`: The value to initialize the key to in Philox algorithm.
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

An MPSGraphTensor representing a random state, to be passed as an input to a random op.

<a id="discussion"></a>

## Discussion

See randomPhiloxStateTensorWithSeed.

# randomPhiloxStateTensorWithCounterLow:counterHigh:key:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a tensor representing state using the Philox algorithm with given counter and key values.

## Declaration

```objectivec
- (MPSGraphTensor *) randomPhiloxStateTensorWithCounterLow:(NSUInteger) counterLow counterHigh:(NSUInteger) counterHigh key:(NSUInteger) key name:(NSString *) name;
```

## Parameters

- `counterLow`: The value to initilaize lower 64 bits of counter to. Philox utilizes a 128 bit counter
- `counterHigh`: The value to initilaize upper 64 bits of counter to. Philox utilizes a 128 bit counter
- `key`: The value to initialize the key to in Philox algorithm.
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

An MPSGraphTensor representing a random state, to be passed as an input to a random op.

<a id="discussion"></a>

## Discussion

See randomPhiloxStateTensorWithSeed.
