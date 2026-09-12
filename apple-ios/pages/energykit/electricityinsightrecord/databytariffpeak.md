> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityinsightrecord/databytariffpeak](https://developer.apple.com/documentation/energykit/electricityinsightrecord/databytariffpeak)

# dataByTariffPeak

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

The electrical energy consumed or generated, or the runtime duration split out by tariff peaks, if available.

## Declaration

```swift
var dataByTariffPeak: ElectricityInsightRecord<Measure>.TariffPeak?
```

## Mentioned In

- [Providing charging history for electric vehicles](../providing-informative-charging-history-for-electric-vehicles.md)

<a id="discussion"></a>

## Discussion

The tariff peaks are the times of day when electricity prices are highest.

## See Also

### Getting the tariff peak data

- [ElectricityInsightRecord.TariffPeak](tariffpeak.md): A struct describing energy tariff peaks or duration data, if available.
