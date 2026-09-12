> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityinsightrecord](https://developer.apple.com/documentation/energykit/electricityinsightrecord)

# ElectricityInsightRecord

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A structure that provides environmental impact and cost insights for electricity usage over a specific time period.

## Declaration

```swift
struct ElectricityInsightRecord<Measure> where Measure : ElectricityInsightMeasure
```

<a id="overview"></a>

## Overview

This structure provides electricity usage data categorized by environmental impact ([ElectricityInsightRecord.GridCleanliness](electricityinsightrecord/gridcleanliness.md)) and cost factors ([ElectricityInsightRecord.TariffPeak](electricityinsightrecord/tariffpeak.md)) for analysis and optimization.

The electricity usage data ([dataByGridCleanliness](electricityinsightrecord/databygridcleanliness.md)) refers to either energy consumption or generation measurements, or amounts of time that an electrical device is operational and consuming energy. The type of electricity usage data depends on the generic type parameter ([ElectricityInsightMeasure](electricityinsightmeasure.md)) for a given instance, which can be either:

- [ElectricityInsightRecord](electricityinsightrecord.md)\<[Measurement](https://developer.apple.com/documentation/foundation/measurement)\<[UnitEnergy](https://developer.apple.com/documentation/foundation/unitenergy)\>\>
- [ElectricityInsightRecord](electricityinsightrecord.md)\<[Duration](https://developer.apple.com/documentation/swift/duration)\>

## Topics

### Getting the grid data

- [ElectricityInsightRecord.GridCleanliness](electricityinsightrecord/gridcleanliness.md): A structure that describes the environmental impact of grid electricity during specific time periods.
- [dataByGridCleanliness](electricityinsightrecord/databygridcleanliness.md): Energy consumption or production, or device operational runtime categorized by the cleanliness of the grid electricity.

### Getting the tariff peak data

- [ElectricityInsightRecord.TariffPeak](electricityinsightrecord/tariffpeak.md): A struct describing energy tariff peaks or duration data, if available.
- [dataByTariffPeak](electricityinsightrecord/databytariffpeak.md): The electrical energy consumed or generated, or the runtime duration split out by tariff peaks, if available.

### Getting the insight record data

- [totalRuntime](electricityinsightrecord/totalruntime.md): The total time that electricity-consuming devices actively ran.
- [range](electricityinsightrecord/range.md): The time period that the insight record spans.
- [totalEnergy](electricityinsightrecord/totalenergy.md): The total electrical energy consumed or generated.

## See Also

### Electricity insights

- [ElectricityInsightService](electricityinsightservice.md): A service for retrieving insights about electricity consumption.
- [ElectricityInsightQuery](electricityinsightquery.md): A structure describing a query that you use to obtain environmental impact information in the form of electricity insight records.
- [ElectricityInsightMeasure](electricityinsightmeasure.md): A protocol for types that can measure electricity usage data.
