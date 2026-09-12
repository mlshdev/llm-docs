> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityinsightrecord/gridcleanliness](https://developer.apple.com/documentation/energykit/electricityinsightrecord/gridcleanliness)

# ElectricityInsightRecord.GridCleanliness

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst

A structure that describes the environmental impact of grid electricity during specific time periods.

## Declaration

```swift
struct GridCleanliness
```

<a id="overview"></a>

## Overview

The [ElectricityInsightRecord](../electricityinsightrecord.md) structure’s [dataByGridCleanliness](databygridcleanliness.md) property returns electricity usage by the categories that this structure defines.

The type of electricity usage that this structure stores depends on the generic type parameter of a given [ElectricityInsightMeasure](../electricityinsightmeasure.md) instance. If the generic type is:

- **[Measurement](https://developer.apple.com/documentation/foundation/measurement)\<[UnitEnergy](https://developer.apple.com/documentation/foundation/unitenergy)\>**: The electricity usage refers to energy consumption or generation.
- **[Duration](https://developer.apple.com/documentation/swift/duration)**: The electricity usage refers to an amount of time that an electrical device is operational and consuming energy.

## Topics

### Initializing the grid data

- [init(cleaner:lessClean:avoid:unknown:)](gridcleanliness/init%28cleaner_lessclean_avoid_unknown_%29.md): Initializes the collection of grid cleanliness data.

### Getting grid cleanliness information

- [cleaner](gridcleanliness/cleaner.md): A category for electricity usage during the cleanest grid periods.
- [lessClean](gridcleanliness/lessclean.md): A category for electricity usage during less-clean grid periods.
- [avoid](gridcleanliness/avoid.md): A category for electricity usage during periods that the framework suggests a person avoid.
- [unknown](gridcleanliness/unknown.md): A category of electricity usage when grid cleanliness information is unavailable.

## See Also

### Getting the grid data

- [dataByGridCleanliness](databygridcleanliness.md): Energy consumption or production, or device operational runtime categorized by the cleanliness of the grid electricity.
