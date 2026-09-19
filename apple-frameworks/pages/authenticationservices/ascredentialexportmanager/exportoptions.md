> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/ascredentialexportmanager/exportoptions

# ASCredentialExportManager.ExportOptions

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Options that configure the behavior of a credential export operation.

## Declaration

```swift
struct ExportOptions
```

## Topics

### Working with export options

- [formatVersion](exportoptions/formatversion.md): The version of the Credential Exchange Format standard used by the export manager.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Exporting credentials

- [requestExport(for:)](requestexport%28for_%29.md): Begins the export process.
- [exportCredentials(\_:)](exportcredentials%28__%29.md): Exports the provided credential data.
- [ASExportedCredentialData](../asexportedcredentialdata.md): A container for credential data that your app provides to an exporter or receives from an importer.
