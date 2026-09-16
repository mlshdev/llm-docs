> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/perfpowermetric/attributes-data.dictionary

# PerfPowerMetric.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

Attributes that describe a Power and Performance Metrics resource.

## Declaration

```
object PerfPowerMetric.Attributes
```

## Properties

- `deviceType` — `string`: A string that represents the device type.
- `metricType` — `string`: For more information about metric types, see [MetricCategory](../metriccategory.md).
  **Allowed values:** `DISK`, `HANG`, `BATTERY`, `LAUNCH`, `MEMORY`, `ANIMATION`, `TERMINATION`, `STORAGE`
- `platform` — `string`: **Allowed values:** `IOS`
