> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/calllookupextensionstatus](https://developer.apple.com/documentation/identitylookup/calllookupextensionstatus)

# CallLookupExtensionStatus

**Framework:** SMS and Call Reporting  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Returns a value with the current state of the app extension.

## Declaration

```swift
enum CallLookupExtensionStatus
```

## Topics

### Checking the state of the app extension

- [CallLookupExtensionStatus.disabled](calllookupextensionstatus/disabled.md): The Live Caller ID Lookup app extension is in a disabled state.
- [CallLookupExtensionStatus.enabled](calllookupextensionstatus/enabled.md): The Live Caller ID Lookup app extension is in an enabled state.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Live Caller ID Lookup

- [Understanding how Live Caller ID Lookup preserves privacy](understanding-how-live-caller-id-lookup-preserves-privacy.md): Use Live Caller ID Lookup to protect user privacy by hiding the client’s IP address, using anonymous authentication, and hiding the incoming phone number.
- [Formatting data for blocking and identity information](formatting-data-for-blocking-and-identity-information.md): Set up your PIR payload for call blocking and identity information.
- [Setting up the HTTP endpoints for Live Caller ID Lookup](setting-up-the-http-endpoints-for-live-caller-id-lookup.md): Connect the on-device system to your server.
- [Getting up-to-date calling and blocking information for your app](getting-up-to-date-calling-and-blocking-information-for-your-app.md): Implement the Live Caller ID Lookup app extension to provide call-blocking and identity services.
- [LiveCallerIDLookupProtocol](livecalleridlookupprotocol.md): Information the system uses to query the app extension for context.
- [LiveCallerIDLookupExtensionConfiguration](livecalleridlookupextensionconfiguration.md): An object that allows the system to query the app extension.
- [LiveCallerIDLookupExtensionContext](livecalleridlookupextensioncontext.md): The information the system uses for configuration.
- [LiveCallerIDLookupManager](livecalleridlookupmanager.md): The entry point that provides access to a collection of functions that help manage the state of the Live Caller ID Lookup app extension.
