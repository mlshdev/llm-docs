> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/targetclock](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/targetclock)

# targetClock

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The clock that this simulation attempts to follow.

## Declaration

```swift
var targetClock: CMClockOrTimebase { get set }
```

<a id="discussion"></a>

## Discussion

The tempo of this clock can be adjusted to slow down or completely pause the simulation. The simulation may not be able to perfectly follow the target clock due to [maximumStepsPerUpdate](maximumstepsperupdate-swift.property.md).

Defaults to the RealityKit engine clock.

## See Also

### Synchronizing the clock

- [simulationClock](simulationclock.md): The clock that tracks the pace of this simulation.
