> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkvoronoinoisesource/displacement](https://developer.apple.com/documentation/gameplaykit/gkvoronoinoisesource/displacement)

# displacement (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The range of random values to assign to each cell in generated noise.

## Declaration

```swift
var displacement: Double { get set }
```

<a id="Discussion"></a>

## Discussion

A Voronoi noise source generates a field of noise values by randomly picking seed points at random positions in a space, then dividing the space into cells so that all the points in a cell are closer to that cell’s seed point than to any other seed point.

After dividing space into cells, the noise source randomly assigns a unique value to each; the range of values is from negative to positive the value of this property. For example, if the [displacement](displacement.md) value is `1.0` (the default), cell values range from `-1.0` to `1.0`.

## See Also

### Managing Noise Generation Parameters

- [frequency](frequency.md): A value that determines the number and size of cells in generated noise.
- [isDistanceEnabled](isdistanceenabled.md): A Boolean value that specifies whether generated noise values incorporate the distance from each point to the nearest seed point.
- [seed](seed.md): The value that determines the specific configuration of noise produced by the noise source.

# displacement (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The range of random values to assign to each cell in generated noise.

## Declaration

```objectivec
@property (nonatomic) double displacement;
```

<a id="Discussion"></a>

## Discussion

A Voronoi noise source generates a field of noise values by randomly picking seed points at random positions in a space, then dividing the space into cells so that all the points in a cell are closer to that cell’s seed point than to any other seed point.

After dividing space into cells, the noise source randomly assigns a unique value to each; the range of values is from negative to positive the value of this property. For example, if the [displacement](displacement.md) value is `1.0` (the default), cell values range from `-1.0` to `1.0`.

## See Also

### Managing Noise Generation Parameters

- [frequency](frequency.md): A value that determines the number and size of cells in generated noise.
- [distanceEnabled](isdistanceenabled.md): A Boolean value that specifies whether generated noise values incorporate the distance from each point to the nearest seed point.
- [seed](seed.md): The value that determines the specific configuration of noise produced by the noise source.
