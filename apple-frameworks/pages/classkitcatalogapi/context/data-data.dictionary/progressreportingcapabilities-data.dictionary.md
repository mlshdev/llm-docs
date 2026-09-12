> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitcatalogapi/context/data-data.dictionary/progressreportingcapabilities-data.dictionary](https://developer.apple.com/documentation/classkitcatalogapi/context/data-data.dictionary/progressreportingcapabilities-data.dictionary)

# Context.Data.ProgressReportingCapabilities

**Interface language:** Data

**Framework:** ClassKit Catalog API  
**Kind:** Dictionary  
**Availability:** ClassKit 1.0+

The progress reporting capabilities supported by a context.

## Declaration

```
object Context.Data.ProgressReportingCapabilities
```

## Properties

- `details` — `string`: A description of the capability presented to teachers. See [details](../../../classkit/clsprogressreportingcapability/details.md).
- `kind` — `string`: The kind of progress reporting capability. See [kind](../../../classkit/clsprogressreportingcapability/kind-swift.property.md).
  **Allowed values:** `duration`, `percent`, `binary`, `quantity`, `score`

<a id="Discussion"></a>

## Discussion

When creating a context, if you don’t specify a progress reporting capability with `kind` set to `duration`, the system adds one automatically, using an empty string for the `details` field.
