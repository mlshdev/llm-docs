> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electrichvacloadevent/electricalmeasurement/init(stage:)](https://developer.apple.com/documentation/energykit/electrichvacloadevent/electricalmeasurement/init(stage:))

# init(stage:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Initializes an electrical measurement for the electrical load event.

## Declaration

```swift
init(stage: Int)
```

## Parameters

- `stage`: `0` indicates that the electrical device is idle. `100` indicates that it’s consuming or generating the most power possible.

## See Also

### Initializing an electrical measurement

- [stage](stage.md): An indirect measurement of power consumption by an HVAC electric heating or cooling stage.
