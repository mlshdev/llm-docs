> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/extensionpointname](https://developer.apple.com/documentation/identitylookup/extensionpointname)

# extensionPointName

**Framework:** SMS and Call Reporting  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The name of the extension point.

## Declaration

```swift
let extensionPointName: String
```

## See Also

### Checking status and fetching data

- [openSettings()](livecalleridlookupmanager/opensettings%28%29.md): Navigates to Settings so a person can configure the Live Caller ID Lookup app extension.
- [refreshPIRParameters(forExtensionWithIdentifier:)](livecalleridlookupmanager/refreshpirparameters%28forextensionwithidentifier_%29.md): Communicates with the system to refetch Private Information Retrieval (PIR) parameters from the server.
- [reset(forExtensionWithIdentifier:)](livecalleridlookupmanager/reset%28forextensionwithidentifier_%29.md): Resets the cache associated with the app extension.
- [status(forExtensionWithIdentifier:)](livecalleridlookupmanager/status%28forextensionwithidentifier_%29.md): Queries the system to check the status of the app extension.
