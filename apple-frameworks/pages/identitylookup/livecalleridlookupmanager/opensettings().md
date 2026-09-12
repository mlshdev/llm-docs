> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/livecalleridlookupmanager/opensettings()](https://developer.apple.com/documentation/identitylookup/livecalleridlookupmanager/opensettings())

# openSettings()

**Framework:** SMS and Call Reporting  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Navigates to Settings so a person can configure the Live Caller ID Lookup app extension.

## Declaration

```swift
func openSettings() async throws
```

## Mentioned In

- [Getting up-to-date calling and blocking information for your app](../getting-up-to-date-calling-and-blocking-information-for-your-app.md)

## See Also

### Checking status and fetching data

- [extensionPointName](../extensionpointname.md): The name of the extension point.
- [refreshPIRParameters(forExtensionWithIdentifier:)](refreshpirparameters%28forextensionwithidentifier_%29.md): Communicates with the system to refetch Private Information Retrieval (PIR) parameters from the server.
- [reset(forExtensionWithIdentifier:)](reset%28forextensionwithidentifier_%29.md): Resets the cache associated with the app extension.
- [status(forExtensionWithIdentifier:)](status%28forextensionwithidentifier_%29.md): Queries the system to check the status of the app extension.
