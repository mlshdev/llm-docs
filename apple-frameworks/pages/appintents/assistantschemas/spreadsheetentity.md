> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/assistantschemas/spreadsheetentity

# AssistantSchemas.SpreadsheetEntity

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Assistant schema conformance for app entities that describe spreadsheet data.

## Declaration

```swift
protocol SpreadsheetEntity : AssistantSchemas.Model
```

## Topics

### Instance Properties

- [document](spreadsheetentity/document.md): Deprecated. The app entity describes a spreadsheet.
- [sheet](spreadsheetentity/sheet.md): Deprecated. The app entity describes a sheet in a spreadsheet.
- [template](spreadsheetentity/template.md): Deprecated. The app entity describes a template for a spreadsheet.

## Relationships

### Inherits From

- [AssistantSchemas.Model](model.md)

### Conforming Types

- [AssistantSchema.EntitySchema](../assistantschema/entityschema.md)
- [AssistantSchemas.EntitySchema](entityschema.md)
