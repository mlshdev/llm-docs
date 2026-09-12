> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/simulationclock](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/simulationclock)

# simulationClock

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The clock that tracks the pace of this simulation.

## Declaration

```swift
var simulationClock: CMClockOrTimebase { get }
```

<a id="discussion"></a>

## Discussion

Syncing with this clock ensures synchronization with the simulation. For instance, an animation can be played using this clock to ensure that the motion of said animation is synchronized with the simulation.

This clock generally tries to match [targetClock](targetclock.md), but the two can deviate at times. This is because the simulation may not be able to perfectly follow the target clock due to [maximumStepsPerUpdate](maximumstepsperupdate-swift.property.md).

## See Also

### Synchronizing the clock

- [targetClock](targetclock.md): The clock that this simulation attempts to follow.
