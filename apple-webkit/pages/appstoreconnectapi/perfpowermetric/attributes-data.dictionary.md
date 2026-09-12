> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/perfpowermetric/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/perfpowermetric/attributes-data.dictionary)

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
