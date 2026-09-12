> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoisemap/value(at:)](https://developer.apple.com/documentation/gameplaykit/gknoisemap/value(at:))

# value(at:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns the value at the specified position in the noise map’s discrete sample grid.

## Declaration

```swift
func value(at position: vector_int2) -> Float
```

## Parameters

- `position`: The position to query in the noise map’s grid of sampled noise values. Must be within the rectangle from `[0, 0]` to the noise map’s [sampleCount](samplecount.md) value.

<a id="return-value"></a>

## Return Value

The value at the specified position.

<a id="Discussion"></a>

## Discussion

When you create a noise map from a [GKNoise](../gknoise.md) object, GameplayKit performs the noise generation and processing computations necessary to fill a discrete grid with noise samples. (You specify the size of the grid and its number of samples in the [init(\_:size:origin:sampleCount:seamless:)](init%28__size_origin_samplecount_seamless_%29.md) initializer.) Use this method to get sample values from that grid.

You can also use the [interpolatedValue(at:)](interpolatedvalue%28at_%29.md) method to query positions that are not on the discrete integer grid of samples.

## See Also

### Accessing Noise Values

- [interpolatedValue(at:)](interpolatedvalue%28at_%29.md): Returns the value at the specified position in the noise map, interpolating results for positions not on the discrete sample grid.
- [setValue(\_:at:)](setvalue%28__at_%29.md): Sets the value at the specified position in the noise map.

# valueAtPosition: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns the value at the specified position in the noise map’s discrete sample grid.

## Declaration

```objectivec
- (float) valueAtPosition:(vector_int2) position;
```

## Parameters

- `position`: The position to query in the noise map’s grid of sampled noise values. Must be within the rectangle from `[0, 0]` to the noise map’s [sampleCount](samplecount.md) value.

<a id="return-value"></a>

## Return Value

The value at the specified position.

<a id="Discussion"></a>

## Discussion

When you create a noise map from a [GKNoise](../gknoise.md) object, GameplayKit performs the noise generation and processing computations necessary to fill a discrete grid with noise samples. (You specify the size of the grid and its number of samples in the [initWithNoise:size:origin:sampleCount:seamless:](init%28__size_origin_samplecount_seamless_%29.md) initializer.) Use this method to get sample values from that grid.

You can also use the [interpolatedValueAtPosition:](interpolatedvalue%28at_%29.md) method to query positions that are not on the discrete integer grid of samples.

## See Also

### Accessing Noise Values

- [interpolatedValueAtPosition:](interpolatedvalue%28at_%29.md): Returns the value at the specified position in the noise map, interpolating results for positions not on the discrete sample grid.
- [setValue:atPosition:](setvalue%28__at_%29.md): Sets the value at the specified position in the noise map.
