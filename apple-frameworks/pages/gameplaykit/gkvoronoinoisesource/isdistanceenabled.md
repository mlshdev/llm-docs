> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkvoronoinoisesource/isdistanceenabled](https://developer.apple.com/documentation/gameplaykit/gkvoronoinoisesource/isdistanceenabled)

# isDistanceEnabled (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that specifies whether generated noise values incorporate the distance from each point to the nearest seed point.

## Declaration

```swift
var isDistanceEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A Voronoi noise source generates a field of noise values by randomly picking seed points at random positions in a space, then dividing the space into cells so that all the points in a cell are closer to that cell’s seed point than to any other seed point.

After dividing space into cells, the noise source randomly assigns a unique value to each. If this property’s value is [false](https://developer.apple.com/documentation/swift/false) (the default), all points within a cell have the same value, creating a crystalline appearance. If this property’s value is [true](https://developer.apple.com/documentation/swift/true), the noise source adds to each point’s value the distance from that point to the nearest seed point. With a low value for the [displacement](displacement.md) property, adding distance to noise can create textures like cracked mud; with a high displacement value, adding distance creates textures like bubbling liquid.

## See Also

### Managing Noise Generation Parameters

- [frequency](frequency.md): A value that determines the number and size of cells in generated noise.
- [displacement](displacement.md): The range of random values to assign to each cell in generated noise.
- [seed](seed.md): The value that determines the specific configuration of noise produced by the noise source.

# distanceEnabled (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that specifies whether generated noise values incorporate the distance from each point to the nearest seed point.

## Declaration

```objectivec
@property (nonatomic, getter=isDistanceEnabled) BOOL distanceEnabled;
```

<a id="Discussion"></a>

## Discussion

A Voronoi noise source generates a field of noise values by randomly picking seed points at random positions in a space, then dividing the space into cells so that all the points in a cell are closer to that cell’s seed point than to any other seed point.

After dividing space into cells, the noise source randomly assigns a unique value to each. If this property’s value is [false](https://developer.apple.com/documentation/swift/false) (the default), all points within a cell have the same value, creating a crystalline appearance. If this property’s value is [true](https://developer.apple.com/documentation/swift/true), the noise source adds to each point’s value the distance from that point to the nearest seed point. With a low value for the [displacement](displacement.md) property, adding distance to noise can create textures like cracked mud; with a high displacement value, adding distance creates textures like bubbling liquid.

## See Also

### Managing Noise Generation Parameters

- [frequency](frequency.md): A value that determines the number and size of cells in generated noise.
- [displacement](displacement.md): The range of random values to assign to each cell in generated noise.
- [seed](seed.md): The value that determines the specific configuration of noise produced by the noise source.
