> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/livecalleridlookupmanager](https://developer.apple.com/documentation/identitylookup/livecalleridlookupmanager)

# LiveCallerIDLookupManager

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The entry point that provides access to a collection of functions that help manage the state of the Live Caller ID Lookup app extension.

## Declaration

```swift
class LiveCallerIDLookupManager
```

## Mentioned In

- [Getting up-to-date calling and blocking information for your app](getting-up-to-date-calling-and-blocking-information-for-your-app.md)

<a id="overview"></a>

## Overview

You can use the provided functions to check whether your app extension is in an enabled state, open Settings to enable the extension, and manage refreshing your server data.

## Topics

### Checking status and fetching data

- [extensionPointName](extensionpointname.md): The name of the extension point.
- [openSettings()](livecalleridlookupmanager/opensettings%28%29.md): Navigates to Settings so a person can configure the Live Caller ID Lookup app extension.
- [refreshPIRParameters(forExtensionWithIdentifier:)](livecalleridlookupmanager/refreshpirparameters%28forextensionwithidentifier_%29.md): Communicates with the system to refetch Private Information Retrieval (PIR) parameters from the server.
- [reset(forExtensionWithIdentifier:)](livecalleridlookupmanager/reset%28forextensionwithidentifier_%29.md): Resets the cache associated with the app extension.
- [status(forExtensionWithIdentifier:)](livecalleridlookupmanager/status%28forextensionwithidentifier_%29.md): Queries the system to check the status of the app extension.

### Sharing the instance

- [shared](livecalleridlookupmanager/shared.md): The shared Live Caller ID Lookup manager instance for the app.

### Instance Methods

- [refreshExtensionContext(forExtensionWithIdentifier:)](livecalleridlookupmanager/refreshextensioncontext%28forextensionwithidentifier_%29.md)

## See Also

### Live Caller ID Lookup

- [Understanding how Live Caller ID Lookup preserves privacy](understanding-how-live-caller-id-lookup-preserves-privacy.md): Use Live Caller ID Lookup to protect user privacy by hiding the client’s IP address, using anonymous authentication, and hiding the incoming phone number.
- [Formatting data for blocking and identity information](formatting-data-for-blocking-and-identity-information.md): Set up your PIR payload for call blocking and identity information.
- [Setting up the HTTP endpoints for Live Caller ID Lookup](setting-up-the-http-endpoints-for-live-caller-id-lookup.md): Connect the on-device system to your server.
- [Getting up-to-date calling and blocking information for your app](getting-up-to-date-calling-and-blocking-information-for-your-app.md): Implement the Live Caller ID Lookup app extension to provide call-blocking and identity services.
- [LiveCallerIDLookupProtocol](livecalleridlookupprotocol.md): Information the system uses to query the app extension for context.
- [LiveCallerIDLookupExtensionConfiguration](livecalleridlookupextensionconfiguration.md): An object that allows the system to query the app extension.
- [LiveCallerIDLookupExtensionContext](livecalleridlookupextensioncontext.md): The information the system uses for configuration.
- [CallLookupExtensionStatus](calllookupextensionstatus.md): Returns a value with the current state of the app extension.
