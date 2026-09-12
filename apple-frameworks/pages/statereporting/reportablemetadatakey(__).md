> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/statereporting/reportablemetadatakey(_:)](https://developer.apple.com/documentation/statereporting/reportablemetadatakey(_:))

# ReportableMetadataKey(\_:)

**Framework:** StateReporting  
**Kind:** Macro  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Specifies a custom key name for a property in the generated `metadataDictionary`.

## Declaration

```swift
@attached(peer) macro ReportableMetadataKey(_ key: String)
```

## Mentioned In

- [Getting started with StateReporting](getting-started-with-statereporting.md)

<a id="overview"></a>

## Overview

By default, property names are used as dictionary keys. Use this macro to provide a different key name, such as for compatibility with server APIs or naming conventions.

```swift
@ReportableMetadata
struct SessionMetadata {
    @ReportableMetadataKey("uid") var userID: String
    var region: String
}
```

## See Also

### Metadata type macros

- [ReportableMetadata()](reportablemetadata%28%29.md): Automatically generates `ReportableMetadata` conformance for a type.
- [ReportableMetadataIgnored()](reportablemetadataignored%28%29.md): Excludes a property from the generated `metadataDictionary`.
