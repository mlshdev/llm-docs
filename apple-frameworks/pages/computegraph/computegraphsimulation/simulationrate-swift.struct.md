> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/simulationrate-swift.struct](https://developer.apple.com/documentation/computegraph/computegraphsimulation/simulationrate-swift.struct)

# ComputeGraphSimulation.SimulationRate

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Specifies the rate and mode for simulation.

## Declaration

```swift
struct SimulationRate
```

## Topics

### Initializers

- [init()](simulationrate-swift.struct/init%28%29.md): Initializes a SimulationRate structure using default values.

### Instance Properties

- [frequency](simulationrate-swift.struct/frequency.md): The number of simulation steps per second, used when [mode](simulationrate-swift.struct/mode-swift.property.md) is [ComputeGraphSimulation.SimulationRate.Mode.fixedFrequency](simulationrate-swift.struct/mode-swift.enum/fixedfrequency.md).
- [mode](simulationrate-swift.struct/mode-swift.property.md): The simulation mode that determines how time steps are calculated.
- [timeDelta](simulationrate-swift.struct/timedelta.md): The fixed time interval in seconds between simulation steps, used when [mode](simulationrate-swift.struct/mode-swift.property.md) is [ComputeGraphSimulation.SimulationRate.Mode.fixedTime](simulationrate-swift.struct/mode-swift.enum/fixedtime.md).

### Type Properties

- [default](simulationrate-swift.struct/default.md)

### Enumerations

- [ComputeGraphSimulation.SimulationRate.Mode](simulationrate-swift.struct/mode-swift.enum.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
