> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricityguidance/value/init(interval:rating:)

# init(interval:rating:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Creates an interval with the specified date and rating.

## Declaration

```swift
init(interval: DateInterval, rating: Double)
```

## Parameters

- `interval`: The interval to which the electrical guidance applies.
- `rating`: The relative impact of using electricity during this period of time.

## See Also

### Creating a date interval

- [interval](interval.md): The interval to which the electrical guidance applies.
- [rating](rating.md): The relative impact of using electricity during this period of time.
