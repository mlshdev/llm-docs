> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/diagnosticlogs/productdata-data.dictionary/diagnosticlogs-data.dictionary/callstacktree-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/diagnosticlogs/productdata-data.dictionary/diagnosticlogs-data.dictionary/callstacktree-data.dictionary)

# diagnosticLogs.ProductData.DiagnosticLogs.CallStackTree

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The call stack representation of the diagnostic logs for single or multiple threads.

## Declaration

```
object diagnosticLogs.ProductData.DiagnosticLogs.CallStackTree
```

## Properties

- `callStackPerThread` — `boolean`: A Boolean value that indicates whether the call stack representation supports multiple threads.
- `callStacks` — `[diagnosticLogs.ProductData.DiagnosticLogs.CallStackTree.CallStacks]`: The call stack representation of the diagnostic log.

## Topics

### Objects

- [diagnosticLogs.ProductData.DiagnosticLogs.CallStackTree.CallStacks](callstacktree-data.dictionary/callstacks-data.dictionary.md): The root call stack frames of the diagnostic log.

## See Also

### Objects

- [diagnosticLogs.ProductData.DiagnosticLogs.DiagnosticMetaData](diagnosticmetadata-data.dictionary.md): Information about the diagnostic log including app version and build information, event details, OS, device type, and platform, and disk writes.
