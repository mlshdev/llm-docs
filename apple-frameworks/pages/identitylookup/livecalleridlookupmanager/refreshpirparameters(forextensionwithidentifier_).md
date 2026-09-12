> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/livecalleridlookupmanager/refreshpirparameters(forextensionwithidentifier:)](https://developer.apple.com/documentation/identitylookup/livecalleridlookupmanager/refreshpirparameters(forextensionwithidentifier:))

# refreshPIRParameters(forExtensionWithIdentifier:)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Communicates with the system to refetch Private Information Retrieval (PIR) parameters from the server.

## Declaration

```swift
func refreshPIRParameters(forExtensionWithIdentifier identifier: String) async throws
```

## Parameters

- `identifier`: The identifier for the app extension.

## Mentioned In

- [Getting up-to-date calling and blocking information for your app](../getting-up-to-date-calling-and-blocking-information-for-your-app.md)

<a id="Discussion"></a>

## Discussion

This throws an error when the system can’t referesh the PIR parameters.

## See Also

### Checking status and fetching data

- [extensionPointName](../extensionpointname.md): The name of the extension point.
- [openSettings()](opensettings%28%29.md): Navigates to Settings so a person can configure the Live Caller ID Lookup app extension.
- [reset(forExtensionWithIdentifier:)](reset%28forextensionwithidentifier_%29.md): Resets the cache associated with the app extension.
- [status(forExtensionWithIdentifier:)](status%28forextensionwithidentifier_%29.md): Queries the system to check the status of the app extension.
