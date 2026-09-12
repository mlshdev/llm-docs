> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialexportmanager](https://developer.apple.com/documentation/authenticationservices/ascredentialexportmanager)

# ASCredentialExportManager

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A class to manage exporting credentials.

## Declaration

```swift
class ASCredentialExportManager
```

<a id="overview"></a>

## Overview

`ASCredentialExportManager` allows your app to exchange authentication credentials like passwords and passkeys with other apps. Participating apps such as password managers can receive your exported credentials by using the [ASCredentialImportManager](ascredentialimportmanager.md) class.

<a id="Configure-your-app"></a>

### Configure your app

To participate in credential exchange, edit your credential provider extension’s information property list and add the following key with a Boolean value of `YES`:

`NSExtension > NSExtensionAttributes > ASCredentialProviderExtensionCapabilities > SupportsCredentialExchange`

Also, declare the versions of the credential data format your app supports using the following key:

`NSExtension > NSExtensionAttributes > ASCredentialProviderExtensionCapabilities > SupportedCredentialExchangeVersions`

The value is an array of strings containing every version your app supports. Currently the only available version is `1.0`.

<a id="Export-credentials"></a>

### Export credentials

To export credentials, your app’s interface needs to allow the person using it to select the credentials they want to export. To begin the process, call the [requestExport(for:)](ascredentialexportmanager/requestexport%28for_%29.md) method on an instance of this class. Calling this method brings up an out-of-process system UI that guides the person through the export procedure. The system UI explains the risks of exporting credentials, and then allows them to choose an app to export to. The operating system acts as an intermediary to establish the identities of the password manager apps involved and performs the exchange; this process doesn’t write any data to the file system.

When a person chooses an importer app, the system launches it, sending an [NSUserActivity](../foundation/nsuseractivity.md) whose [activityType](../foundation/nsuseractivity/activitytype.md) is `ASCredentialExchangeActivity`. The importing app responds to the launch activity by calling the [ASCredentialImportManager](ascredentialimportmanager.md) method [importCredentials(token:)](ascredentialimportmanager/importcredentials%28token_%29.md) to receive the exported credentials.

When a person chooses an importer app, the [requestExport(for:)](ascredentialexportmanager/requestexport%28for_%29.md) method returns an [ASCredentialExportManager.ExportOptions](ascredentialexportmanager/exportoptions.md) structure that describes the credential data format version you should use to ensure the importer app can successfully decode the data. Use this version to construct your [ASExportedCredentialData](asexportedcredentialdata.md) object, then call [exportCredentials(\_:)](ascredentialexportmanager/exportcredentials%28__%29.md) with it. After the system receives your data, the system launches the importer app, sending the [NSUserActivity](../foundation/nsuseractivity.md) `ASCredentialExchangeActivity`. The importing app responds to the launch activity by calling the [ASCredentialImportManager](ascredentialimportmanager.md) method [importCredentials(token:)](ascredentialimportmanager/importcredentials%28token_%29.md) to receive the exported credentials.

The following example shows how to perform an export from a SwiftUI view. The example assumes the typical case where the app has a single credential provider extension, which means it can pass `nil` to [requestExport(for:)](ascredentialexportmanager/requestexport%28for_%29.md).

```swift
struct CredentialExportManagerExample: View {
    @Environment(\.credentialExportManager) private var credentialExportManager

    var body: some View {
        Button("Export Credentials") {
            Task {
                do {
                    let exportOptions = try await credentialExportManager.requestExport()
                    let credentialData = getCredentialData(exportOptions: exportOptions) // defined elsewhere
                    try await credentialExportManager.exportCredentials(credentialData)
                } catch {
                    // Handle the export error.
                }
            }
        }
    }
}

```

For a corresponding import code example, see [ASCredentialImportManager](ascredentialimportmanager.md).

## Topics

### Creating an export manager

- [init(presentationAnchor:)](ascredentialexportmanager/init%28presentationanchor_%29-56ki6.md): Creates an export manager, anchored by the given AppKit window.
- [init(presentationAnchor:)](ascredentialexportmanager/init%28presentationanchor_%29-904gt.md): Creates an export manager, anchored by the given UIKit window.
- [ASPresentationAnchor](aspresentationanchor.md): A platform-specific type that indicates the kind of user interface element to use as a presentation anchor.

### Exporting credentials

- [requestExport(for:)](ascredentialexportmanager/requestexport%28for_%29.md): Begins the export process.
- [ASCredentialExportManager.ExportOptions](ascredentialexportmanager/exportoptions.md): Options that configure the behavior of a credential export operation.
- [exportCredentials(\_:)](ascredentialexportmanager/exportcredentials%28__%29.md): Exports the provided credential data.
- [ASExportedCredentialData](asexportedcredentialdata.md): A container for credential data that your app provides to an exporter or receives from an importer.

## See Also

### Credential migration

- [ASCredentialImportManager](ascredentialimportmanager.md): A class to manage importing credentials.
