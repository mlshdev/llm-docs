> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/assavepasswordrequest/event-swift.enum/generatedpasswordfilled

# ASSavePasswordRequest.Event.generatedPasswordFilled (Swift)

**Framework:** Authentication Services  
**Kind:** Case  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

A save event that occurs when generated password is filled into a not yet submitted form.

## Declaration

```swift
case generatedPasswordFilled
```

<a id="discussion"></a>

## Discussion

The recommended behavior is to save “new” credentials as pending accounts. This event will generally be followed by a userInitiated or formDidDisappear event.

Providers should not request any additional information from the user as that will not be transmitted back to the form.

# ASSavePasswordRequestEventGeneratedPasswordFilled (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration Case  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

A save event that occurs when generated password is filled into a not yet submitted form.

## Declaration

```objectivec
ASSavePasswordRequestEventGeneratedPasswordFilled
```

<a id="discussion"></a>

## Discussion

The recommended behavior is to save “new” credentials as pending accounts. This event will generally be followed by a userInitiated or formDidDisappear event.

Providers should not request any additional information from the user as that will not be transmitted back to the form.
