> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asexportedcredentialdata](https://developer.apple.com/documentation/authenticationservices/asexportedcredentialdata)

# ASExportedCredentialData

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A container for credential data that your app provides to an exporter or receives from an importer.

## Declaration

```swift
struct ASExportedCredentialData
```

<a id="overview"></a>

## Overview

This type is a wrapper object for multiple [ASImportableAccount](asimportableaccount.md) objects.

## Topics

### Accessing accounts

- [accounts](asexportedcredentialdata/accounts.md): An array of importable accounts.
- [ASImportableAccount](asimportableaccount.md): An account for use in importing and exporting credentials.

### Initializers

- [init(accounts:formatVersion:exporterRelyingPartyIdentifier:exporterDisplayName:timestamp:)](asexportedcredentialdata/init%28accounts_formatversion_exporterrelyingpartyidentifier_exporterdisplayname_timestamp_%29.md)

### Instance Properties

- [exporterDisplayName](asexportedcredentialdata/exporterdisplayname.md)
- [exporterRelyingPartyIdentifier](asexportedcredentialdata/exporterrelyingpartyidentifier.md)
- [formatVersion](asexportedcredentialdata/formatversion-swift.property.md)
- [timestamp](asexportedcredentialdata/timestamp.md)

### Enumerations

- [ASExportedCredentialData.FormatVersion](asexportedcredentialdata/formatversion-swift.enum.md): The Credential Exchange Format version for `ASExportedCredentialData`.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Exporting credentials

- [requestExport(for:)](ascredentialexportmanager/requestexport%28for_%29.md): Begins the export process.
- [ASCredentialExportManager.ExportOptions](ascredentialexportmanager/exportoptions.md): Options that configure the behavior of a credential export operation.
- [exportCredentials(\_:)](ascredentialexportmanager/exportcredentials%28__%29.md): Exports the provided credential data.
