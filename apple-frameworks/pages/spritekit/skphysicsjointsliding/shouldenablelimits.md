> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointsliding/shouldenablelimits](https://developer.apple.com/documentation/spritekit/skphysicsjointsliding/shouldenablelimits)

# shouldEnableLimits (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the sliding joint is restricted so that the objects may only slide a finite distance from the initial anchor point.

## Declaration

```swift
var shouldEnableLimits: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If [true](https://developer.apple.com/documentation/swift/true), then the [lowerDistanceLimit](lowerdistancelimit.md) and [upperDistanceLimit](upperdistancelimit.md) properties are used to limit the distance of the sliding joint.

## See Also

### Configuring a Sliding Joint

- [lowerDistanceLimit](lowerdistancelimit.md): The smallest distance allowed for the sliding joint.
- [upperDistanceLimit](upperdistancelimit.md): The largest distance allowed for the sliding joint.

# shouldEnableLimits (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the sliding joint is restricted so that the objects may only slide a finite distance from the initial anchor point.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldEnableLimits;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If [true](https://developer.apple.com/documentation/swift/true), then the [lowerDistanceLimit](lowerdistancelimit.md) and [upperDistanceLimit](upperdistancelimit.md) properties are used to limit the distance of the sliding joint.

## See Also

### Configuring a Sliding Joint

- [lowerDistanceLimit](lowerdistancelimit.md): The smallest distance allowed for the sliding joint.
- [upperDistanceLimit](upperdistancelimit.md): The largest distance allowed for the sliding joint.
