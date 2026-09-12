> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialexportmanager/exportcredentials(_:)](https://developer.apple.com/documentation/authenticationservices/ascredentialexportmanager/exportcredentials(_:))

# exportCredentials(\_:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Exports the provided credential data.

## Declaration

```swift
func exportCredentials(_ credentialData: ASExportedCredentialData) async throws
```

## Parameters

- `credentialData`: The credential data to export.

<a id="discussion"></a>

## Discussion

After you call the [requestExport(for:)](requestexport%28for_%29.md) method and collect the credentials to export, pack the credentials into an [ASExportedCredentialData](../asexportedcredentialdata.md) object and call this method.

## See Also

### Exporting credentials

- [requestExport(for:)](requestexport%28for_%29.md): Begins the export process.
- [ASCredentialExportManager.ExportOptions](exportoptions.md): Options that configure the behavior of a credential export operation.
- [ASExportedCredentialData](../asexportedcredentialdata.md): A container for credential data that your app provides to an exporter or receives from an importer.
