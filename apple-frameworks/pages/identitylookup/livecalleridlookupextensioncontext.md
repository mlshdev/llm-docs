> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/livecalleridlookupextensioncontext](https://developer.apple.com/documentation/identitylookup/livecalleridlookupextensioncontext)

# LiveCallerIDLookupExtensionContext

**Framework:** SMS and Call Reporting  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The information the system uses for configuration.

## Declaration

```swift
struct LiveCallerIDLookupExtensionContext
```

## Mentioned In

- [Getting up-to-date calling and blocking information for your app](getting-up-to-date-calling-and-blocking-information-for-your-app.md)

<a id="overview"></a>

## Overview

The extension context allows the system to obtain information from your app.

## Topics

### Initializing the app extension context

- [init(serviceURL:tokenIssuerURL:userTierToken:)](livecalleridlookupextensioncontext/init%28serviceurl_tokenissuerurl_usertiertoken_%29.md): Creates the app extension context.

### Configuring the system

- [serviceURL](livecalleridlookupextensioncontext/serviceurl.md): The endpoint of the service to fetch identity and blocking information.
- [tokenIssuerURL](livecalleridlookupextensioncontext/tokenissuerurl.md): The URL of the Privacy Pass token issuer.
- [userTierToken](livecalleridlookupextensioncontext/usertiertoken.md): An HTTP bearer token that authenticates the person using your app.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Live Caller ID Lookup

- [Understanding how Live Caller ID Lookup preserves privacy](understanding-how-live-caller-id-lookup-preserves-privacy.md): Use Live Caller ID Lookup to protect user privacy by hiding the client’s IP address, using anonymous authentication, and hiding the incoming phone number.
- [Formatting data for blocking and identity information](formatting-data-for-blocking-and-identity-information.md): Set up your PIR payload for call blocking and identity information.
- [Setting up the HTTP endpoints for Live Caller ID Lookup](setting-up-the-http-endpoints-for-live-caller-id-lookup.md): Connect the on-device system to your server.
- [Getting up-to-date calling and blocking information for your app](getting-up-to-date-calling-and-blocking-information-for-your-app.md): Implement the Live Caller ID Lookup app extension to provide call-blocking and identity services.
- [LiveCallerIDLookupProtocol](livecalleridlookupprotocol.md): Information the system uses to query the app extension for context.
- [LiveCallerIDLookupExtensionConfiguration](livecalleridlookupextensionconfiguration.md): An object that allows the system to query the app extension.
- [CallLookupExtensionStatus](calllookupextensionstatus.md): Returns a value with the current state of the app extension.
- [LiveCallerIDLookupManager](livecalleridlookupmanager.md): The entry point that provides access to a collection of functions that help manage the state of the Live Caller ID Lookup app extension.
