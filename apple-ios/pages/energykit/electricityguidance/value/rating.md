> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityguidance/value/rating](https://developer.apple.com/documentation/energykit/electricityguidance/value/rating)

# rating

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

The relative impact of using electricity during this period of time.

## Declaration

```swift
let rating: Double
```

<a id="discussion"></a>

## Discussion

Values are normalized between zero and one. A lower value indicates cleaner energy usage.

## See Also

### Creating a date interval

- [init(interval:rating:)](init%28interval_rating_%29.md): Creates an interval with the specified date and rating.
- [interval](interval.md): The interval to which the electrical guidance applies.
