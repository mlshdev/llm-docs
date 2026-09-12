> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointsliding/lowerdistancelimit](https://developer.apple.com/documentation/spritekit/skphysicsjointsliding/lowerdistancelimit)

# lowerDistanceLimit (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The smallest distance allowed for the sliding joint.

## Declaration

```swift
var lowerDistanceLimit: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`.

## See Also

### Configuring a Sliding Joint

- [shouldEnableLimits](shouldenablelimits.md): A Boolean value that indicates whether the sliding joint is restricted so that the objects may only slide a finite distance from the initial anchor point.
- [upperDistanceLimit](upperdistancelimit.md): The largest distance allowed for the sliding joint.

# lowerDistanceLimit (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The smallest distance allowed for the sliding joint.

## Declaration

```objectivec
@property (nonatomic) CGFloat lowerDistanceLimit;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`.

## See Also

### Configuring a Sliding Joint

- [shouldEnableLimits](shouldenablelimits.md): A Boolean value that indicates whether the sliding joint is restricted so that the objects may only slide a finite distance from the initial anchor point.
- [upperDistanceLimit](upperdistancelimit.md): The largest distance allowed for the sliding joint.
