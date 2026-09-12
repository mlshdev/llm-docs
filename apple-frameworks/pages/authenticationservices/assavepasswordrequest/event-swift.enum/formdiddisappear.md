> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/assavepasswordrequest/event-swift.enum/formdiddisappear](https://developer.apple.com/documentation/authenticationservices/assavepasswordrequest/event-swift.enum/formdiddisappear)

# ASSavePasswordRequest.Event.formDidDisappear (Swift)

**Framework:** Authentication Services  
**Kind:** Case  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

The save event that occurs when a form is submitted or removed from the screen without prompting the user.

## Declaration

```swift
case formDidDisappear
```

<a id="discussion"></a>

## Discussion

The recommended behavior is to save “new” credentials, and ask the user if they wish to overwrite “updated” credentials.

Providers may request any additional information from the user necessary to support the save operation.

# ASSavePasswordRequestEventFormDidDisappear (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration Case  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

The save event that occurs when a form is submitted or removed from the screen without prompting the user.

## Declaration

```objectivec
ASSavePasswordRequestEventFormDidDisappear
```

<a id="discussion"></a>

## Discussion

The recommended behavior is to save “new” credentials, and ask the user if they wish to overwrite “updated” credentials.

Providers may request any additional information from the user necessary to support the save operation.
