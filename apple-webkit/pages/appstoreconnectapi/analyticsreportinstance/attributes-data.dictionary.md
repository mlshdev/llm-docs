> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/analyticsreportinstance/attributes-data.dictionary

# AnalyticsReportInstance.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.4+

Attributes that describe an analytics report instance resource.

## Declaration

```
object AnalyticsReportInstance.Attributes
```

## Properties

- `granularity` — `string`: **Allowed values:** `DAILY`, `WEEKLY`, `MONTHLY`
- `processingDate` — `date`: Uses the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) standard, in the format `YYYY-MM-DD.`
