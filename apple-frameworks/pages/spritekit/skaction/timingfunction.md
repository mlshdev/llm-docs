> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/timingfunction](https://developer.apple.com/documentation/spritekit/skaction/timingfunction)

# timingFunction (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A block used to customize the timing function.

## Declaration

```swift
var timingFunction: SKActionTimingFunction { get set }
```

## Mentioned In

- [Configuring Action Timing](../configuring-action-timing.md)
- [Getting Started with Actions](../getting-started-with-actions.md)

<a id="Discussion"></a>

## Discussion

If a timing function is provided, after the normal timing mode is applied, the result is sent to the timing function. The return [SKActionTimingFunction](../skactiontimingfunction.md) value of the timing function determines the actual time used to perform the animation.

The following code shows how you can create a custom timing function using [simd_smoothstep(\_:\_:\_:)](../../simd/simd_smoothstep%28______%29-5839l.md) interpolation:

```swift
import simd
let horizontalAction = SKAction.moveTo(x: end.x, duration: 2.0)
horizontalAction.timingFunction = {
    time in
    return simd_smoothstep(0, 1, time)
}
```

If the above code is combined with a vertical linear move action, the path taken by a node running this action describes the curve illustrated below:

![Smoothstep based motion path](https://developer.apple.com/images/com.apple.spritekit/media-2759776@2x.png)

## See Also

### Controlling Action Timing

- [Configuring Action Timing](../configuring-action-timing.md): Time an action in a scene, by adding or modifying timing properties, or cancel an action.
- [duration](duration.md): The duration required to complete an action.
- [timingMode](timingmode.md): A setting that controls the speed curve of an animation.
- [SKActionTimingMode](../skactiontimingmode.md): The modes that an action can use to adjust the apparent timing of the action.
- [SKActionTimingFunction](../skactiontimingfunction.md): The signature for the custom timing block.
- [speed](speed.md): A speed factor that modifies how fast an action runs.

# timingFunction (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A block used to customize the timing function.

## Declaration

```objectivec
@property (nonatomic) SKActionTimingFunction timingFunction;
```

## Mentioned In

- [Configuring Action Timing](../configuring-action-timing.md)
- [Getting Started with Actions](../getting-started-with-actions.md)

<a id="Discussion"></a>

## Discussion

If a timing function is provided, after the normal timing mode is applied, the result is sent to the timing function. The return [SKActionTimingFunction](../skactiontimingfunction.md) value of the timing function determines the actual time used to perform the animation.

The following code shows how you can create a custom timing function using [simd_smoothstep](../../simd/simd_smoothstep%28______%29-5839l.md) interpolation:

```swift
import simd
let horizontalAction = SKAction.moveTo(x: end.x, duration: 2.0)
horizontalAction.timingFunction = {
    time in
    return simd_smoothstep(0, 1, time)
}
```

If the above code is combined with a vertical linear move action, the path taken by a node running this action describes the curve illustrated below:

![Smoothstep based motion path](https://developer.apple.com/images/com.apple.spritekit/media-2759776@2x.png)

## See Also

### Controlling Action Timing

- [Configuring Action Timing](../configuring-action-timing.md): Time an action in a scene, by adding or modifying timing properties, or cancel an action.
- [duration](duration.md): The duration required to complete an action.
- [timingMode](timingmode.md): A setting that controls the speed curve of an animation.
- [SKActionTimingMode](../skactiontimingmode.md): The modes that an action can use to adjust the apparent timing of the action.
- [SKActionTimingFunction](../skactiontimingfunction.md): The signature for the custom timing block.
- [speed](speed.md): A speed factor that modifies how fast an action runs.
