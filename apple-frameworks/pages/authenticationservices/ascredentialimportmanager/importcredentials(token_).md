> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialimportmanager/importcredentials(token:)](https://developer.apple.com/documentation/authenticationservices/ascredentialimportmanager/importcredentials(token:))

# importCredentials(token:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Begins the credential import process.

## Declaration

```swift
func importCredentials(token: UUID) async throws -> ASExportedCredentialData
```

## Parameters

- `token`: The UUID token that the system provided in the [NSUserActivity](../../foundation/nsuseractivity.md) when launching the app.

<a id="return-value"></a>

## Return Value

The credential data exported from the source app.

<a id="discussion"></a>

## Discussion

When a person chooses your app to receive credentials exported from another app, the system launches your app using an [NSUserActivity](../../foundation/nsuseractivity.md) of type `ASCredentialExchangeActivityType`. Handle this in your app delegate for AppKit/UIKit or the [onContinueUserActivity(\_:perform:)](https://developer.apple.com/documentation/swiftui/view/oncontinueuseractivity%28_:perform:%29) modifier for SwiftUI. The `NSUserActivity` you receive contains a single [UUID](../../foundation/uuid.md) object in its `userInfo` field with the key `ASCredentialImportToken`; pass this UUID as the `token` parameter to this method.

This method throws an error if the import can’t proceed, which happens if the token doesn’t match what the system expects, indicating an app other than the one the export was meant for.

## See Also

### Importing credentials

- [ASExportedCredentialData](../asexportedcredentialdata.md): A container for credential data that your app provides to an exporter or receives from an importer.
