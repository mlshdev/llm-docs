> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialexportmanager/requestexport(for:)](https://developer.apple.com/documentation/authenticationservices/ascredentialexportmanager/requestexport(for:))

# requestExport(for:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Begins the export process.

## Declaration

```swift
func requestExport(for extensionBundleIdentifier: String? = nil) async throws -> ASCredentialExportManager.ExportOptions
```

## Parameters

- `extensionBundleIdentifier`: If your application contains more than one credential provider extension, pass the bundle identifier of the extension performing the export. If your application contains exactly one credential provider extension, you may pass `nil` to indicate you’re exporting on behalf of that extension. If your application contains more than one credential provider extension, it’s an error to pass `nil`.

<a id="return-value"></a>

## Return Value

The selected set of export options.

<a id="discussion"></a>

## Discussion

Calling this method brings up the out-of-process system UI that guides someone using your app through the export flow. After they determine the necessary options, this method returns the selected options to your app. At that point, call [exportCredentials(\_:)](exportcredentials%28__%29.md) with the exported credentials in the specified format.

This method throws an error if the export can’t proceed, which occurs if there are no import apps available, or if the device isn’t configured with a passcode, Touch ID, or Face ID.

## See Also

### Exporting credentials

- [ASCredentialExportManager.ExportOptions](exportoptions.md): Options that configure the behavior of a credential export operation.
- [exportCredentials(\_:)](exportcredentials%28__%29.md): Exports the provided credential data.
- [ASExportedCredentialData](../asexportedcredentialdata.md): A container for credential data that your app provides to an exporter or receives from an importer.
