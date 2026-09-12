> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/statereporting/reportablemetadata](https://developer.apple.com/documentation/statereporting/reportablemetadata)

# ReportableMetadata

**Framework:** StateReporting  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A protocol for types that can supply their metadata as a dictionary of reportable values.

## Declaration

```swift
protocol ReportableMetadata
```

## Mentioned In

- [Getting started with StateReporting](getting-started-with-statereporting.md)

<a id="overview"></a>

## Overview

Adopt `ReportableMetadata` to pass stable or volatile metadata to [StateReporter](statereporter.md). The single required property, [metadataDictionary](reportablemetadata/metadatadictionary.md), maps string keys to [ReportableMetadataValue](reportablemetadatavalue.md) cases. Use the [ReportableMetadata()](reportablemetadata%28%29.md) macro to synthesize the conformance automatically from stored properties, rather than implementing it by hand.

## Topics

### Instance Properties

- [metadataDictionary](reportablemetadata/metadatadictionary.md): A dictionary mapping string keys to reportable values that describes the current metadata.

## See Also

### Defining metadata

- [ReportableMetadataValue](reportablemetadatavalue.md): A value in a reportable-metadata dictionary.
