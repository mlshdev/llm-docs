> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintenterror/unrecoverable](https://developer.apple.com/documentation/appintents/appintenterror/unrecoverable)

# AppIntentError.Unrecoverable

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Unknown or unrecoverable errors that might have occurred due to either a system or user error.

## Declaration

```swift
enum Unrecoverable
```

<a id="overview"></a>

## Overview

Use these system-defined errors to inform people that there’s no immediate way to remedy an error.

## Topics

### Type Properties

- [entityNotFound](unrecoverable/entitynotfound.md): No app entity matched the search criteria.
- [featureCurrentlyRestricted](unrecoverable/featurecurrentlyrestricted.md): This feature is currently restricted due to Screen Time restrictions, MDM profiles, or similar.
- [networkFailure](unrecoverable/networkfailure.md): The person needs to be connected to the internet.
- [notAllowed](unrecoverable/notallowed.md): This action isn’t allowed.
- [partialFailure](unrecoverable/partialfailure.md): Not every action was completed.
- [unknown](unrecoverable/unknown.md): Deprecated. Something went wrong.
- [unsupportedOnDevice](unrecoverable/unsupportedondevice.md): This feature isn’t supported on this device.
