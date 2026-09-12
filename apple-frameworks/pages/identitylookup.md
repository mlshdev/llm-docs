> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup](https://developer.apple.com/documentation/identitylookup)

# SMS and Call Reporting (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Technology  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Create app extensions to manage and report unwanted SMS messages and spam calls.

<a id="overview"></a>

## Overview

SMS and Call Reporting provides app extensions to manage unwanted communication.

- ****Message Filter app extension****: Identifies and filters unwanted SMS and MMS messages.
- ****Unwanted Communication app extension****: Lets people report unwanted SMS messages and calls as spam.
- ****Live Caller ID Lookup app extension****: Enables up-to-date calling and blocking information.

Register your Live Caller ID configuration on the [Identity & Trust](https://icloud.developer.apple.com/dashboard/identity) page in the [CloudKit Console](https://icloud.developer.apple.com/).

## Topics

### Message filtering

- [SMS and MMS Message Filtering](identitylookup/sms-and-mms-message-filtering.md): Create an app extension that identifies and filters unwanted SMS and MMS messages while preserving user privacy.

### Spam reporting

- [SMS and Call Spam Reporting](identitylookup/sms-and-call-spam-reporting.md): Create an app extension that lets users report unwanted SMS messages and calls as junk.

### Live Caller ID Lookup

- [Understanding how Live Caller ID Lookup preserves privacy](identitylookup/understanding-how-live-caller-id-lookup-preserves-privacy.md): Use Live Caller ID Lookup to protect user privacy by hiding the client’s IP address, using anonymous authentication, and hiding the incoming phone number.
- [Formatting data for blocking and identity information](identitylookup/formatting-data-for-blocking-and-identity-information.md): Set up your PIR payload for call blocking and identity information.
- [Setting up the HTTP endpoints for Live Caller ID Lookup](identitylookup/setting-up-the-http-endpoints-for-live-caller-id-lookup.md): Connect the on-device system to your server.
- [Getting up-to-date calling and blocking information for your app](identitylookup/getting-up-to-date-calling-and-blocking-information-for-your-app.md): Implement the Live Caller ID Lookup app extension to provide call-blocking and identity services.
- [LiveCallerIDLookupProtocol](identitylookup/livecalleridlookupprotocol.md): Information the system uses to query the app extension for context.
- [LiveCallerIDLookupExtensionConfiguration](identitylookup/livecalleridlookupextensionconfiguration.md): An object that allows the system to query the app extension.
- [LiveCallerIDLookupExtensionContext](identitylookup/livecalleridlookupextensioncontext.md): The information the system uses for configuration.
- [CallLookupExtensionStatus](identitylookup/calllookupextensionstatus.md): Returns a value with the current state of the app extension.
- [LiveCallerIDLookupManager](identitylookup/livecalleridlookupmanager.md): The entry point that provides access to a collection of functions that help manage the state of the Live Caller ID Lookup app extension.

### Macros

- [Macros](identitylookup/macros.md)

### Type Aliases

- [BlockingInfoCoreDataPropertiesSet](identitylookup/blockinginfocoredatapropertiesset.md)
- [IdentityInfoCoreDataPropertiesSet](identitylookup/identityinfocoredatapropertiesset.md)
- [LiveLookupDBExtensionCoreDataPropertiesSet](identitylookup/livelookupdbextensioncoredatapropertiesset.md)
- [LiveLookupStoreCoreDataFrameworkManagedObject](identitylookup/livelookupstorecoredataframeworkmanagedobject.md)
- [LiveLookupStoreFoundationFrameworkSet](identitylookup/livelookupstorefoundationframeworkset.md)

# SMS and Call Reporting (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Technology  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Create app extensions to manage and report unwanted SMS messages and spam calls.

<a id="overview"></a>

## Overview

SMS and Call Reporting provides app extensions to manage unwanted communication.

- ****Message Filter app extension****: Identifies and filters unwanted SMS and MMS messages.
- ****Unwanted Communication app extension****: Lets people report unwanted SMS messages and calls as spam.
- ****Live Caller ID Lookup app extension****: Enables up-to-date calling and blocking information.

Register your Live Caller ID configuration on the [Identity & Trust](https://icloud.developer.apple.com/dashboard/identity) page in the [CloudKit Console](https://icloud.developer.apple.com/).

## Topics

### Message filtering

- [SMS and MMS Message Filtering](identitylookup/sms-and-mms-message-filtering.md): Create an app extension that identifies and filters unwanted SMS and MMS messages while preserving user privacy.

### Spam reporting

- [SMS and Call Spam Reporting](identitylookup/sms-and-call-spam-reporting.md): Create an app extension that lets users report unwanted SMS messages and calls as junk.

### Live Caller ID Lookup

- [Understanding how Live Caller ID Lookup preserves privacy](identitylookup/understanding-how-live-caller-id-lookup-preserves-privacy.md): Use Live Caller ID Lookup to protect user privacy by hiding the client’s IP address, using anonymous authentication, and hiding the incoming phone number.
- [Formatting data for blocking and identity information](identitylookup/formatting-data-for-blocking-and-identity-information.md): Set up your PIR payload for call blocking and identity information.
- [Setting up the HTTP endpoints for Live Caller ID Lookup](identitylookup/setting-up-the-http-endpoints-for-live-caller-id-lookup.md): Connect the on-device system to your server.
- [Getting up-to-date calling and blocking information for your app](identitylookup/getting-up-to-date-calling-and-blocking-information-for-your-app.md): Implement the Live Caller ID Lookup app extension to provide call-blocking and identity services.

### Macros

- [Macros](identitylookup/macros.md)
