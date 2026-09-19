> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/appintenterror/useractionrequired

# AppIntentError.UserActionRequired

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Errors that represent a state where a person needs to respond to successfully complete the action.

## Declaration

```swift
enum UserActionRequired
```

<a id="overview"></a>

## Overview

Use these system-defined errors to inform people about steps they can take to fix the error.

## Topics

### Type Properties

- [accountSetup](useractionrequired/accountsetup.md): The person needs to set up their account.
- [confirmation](useractionrequired/confirmation.md): The person needs to confirm the action.
- [signin](useractionrequired/signin.md): The person needs to sign in to continue.
