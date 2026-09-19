> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/assavepasswordrequest/event-swift.enum/userinitiated

# ASSavePasswordRequest.Event.userInitiated (Swift)

**Framework:** Authentication Services  
**Kind:** Case  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

The save event that occurs when a user has expressly stated they wish to save the credential.

## Declaration

```swift
case userInitiated
```

<a id="discussion"></a>

## Discussion

The expected behavior is to save “new” or “updated” credentials.

Providers may request any additional information from the user necessary to support the save operation.

# ASSavePasswordRequestEventUserInitiated (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration Case  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

The save event that occurs when a user has expressly stated they wish to save the credential.

## Declaration

```objectivec
ASSavePasswordRequestEventUserInitiated
```

<a id="discussion"></a>

## Discussion

The expected behavior is to save “new” or “updated” credentials.

Providers may request any additional information from the user necessary to support the save operation.
