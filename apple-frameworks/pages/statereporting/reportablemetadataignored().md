> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/statereporting/reportablemetadataignored()](https://developer.apple.com/documentation/statereporting/reportablemetadataignored())

# ReportableMetadataIgnored()

**Framework:** StateReporting  
**Kind:** Macro  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Excludes a property from the generated `metadataDictionary`.

## Declaration

```swift
@attached(peer) macro ReportableMetadataIgnored()
```

## Mentioned In

- [Getting started with StateReporting](getting-started-with-statereporting.md)

<a id="overview"></a>

## Overview

Attach `@ReportableMetadataIgnored` to any stored property inside a type annotated with [ReportableMetadata()](reportablemetadata%28%29.md) to prevent that property from appearing in the generated `metadataDictionary`. Use this for any property you want to omit — for example, properties that hold sensitive data, cached values that derive from other reported metadata, or fields that are unimportant or too verbose to include in metadata reports.

```swift
@ReportableMetadata
struct PaymentMetadata {
    var lastFourDigits: String
    @ReportableMetadataIgnored var rawCardToken: String
}
```

## See Also

### Metadata type macros

- [ReportableMetadata()](reportablemetadata%28%29.md): Automatically generates `ReportableMetadata` conformance for a type.
- [ReportableMetadataKey(\_:)](reportablemetadatakey%28__%29.md): Specifies a custom key name for a property in the generated `metadataDictionary`.
