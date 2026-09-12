> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityinsightrecord/tariffpeak](https://developer.apple.com/documentation/energykit/electricityinsightrecord/tariffpeak)

# ElectricityInsightRecord.TariffPeak

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A struct describing energy tariff peaks or duration data, if available.

## Declaration

```swift
struct TariffPeak
```

## Topics

### Initializing the peak energy data

- [init(superOffPeak:offPeak:partialPeak:onPeak:criticalPeak:unknown:)](tariffpeak/init%28superoffpeak_offpeak_partialpeak_onpeak_criticalpeak_unknown_%29.md): Creates an instance of the energy peak data.

### Getting the peak energy data

- [criticalPeak](tariffpeak/criticalpeak.md): The duration of energy or runtime data during critical peak hours.
- [offPeak](tariffpeak/offpeak.md): The duration of energy or runtime data during off-peak hours.
- [onPeak](tariffpeak/onpeak.md): The duration of energy or runtime data during peak hours.
- [partialPeak](tariffpeak/partialpeak.md): The duration of energy or runtime data during partial peak hours.
- [superOffPeak](tariffpeak/superoffpeak.md): The duration of energy or runtime data during super off-peak hours.
- [unknown](tariffpeak/unknown.md): The unknown duration of energy or runtime data.

## See Also

### Getting the tariff peak data

- [dataByTariffPeak](databytariffpeak.md): The electrical energy consumed or generated, or the runtime duration split out by tariff peaks, if available.
