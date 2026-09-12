> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electrichvacloadevent/electricalmeasurement/stage](https://developer.apple.com/documentation/energykit/electrichvacloadevent/electricalmeasurement/stage)

# stage

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

An indirect measurement of power consumption by an HVAC electric heating or cooling stage.

## Declaration

```swift
let stage: Int
```

<a id="discussion"></a>

## Discussion

An integer ranging from `0` to `100` that’s proportional to the amount of power consumed, where `0` and `100` correspond to the min and max power levels respectively.

- `0`: idle or off
- `100`: max.

Higher numbers mean more power.

For single stage systems, or devices which can’t provide `0-100`, `100` is acceptable as an indicator of active power consumption

For multi stage or variable speed systems, you should map stages based on their relative power consumption

## See Also

### Initializing an electrical measurement

- [init(stage:)](init%28stage_%29.md): Initializes an electrical measurement for the electrical load event.
