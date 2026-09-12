> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintentresponsecode/failurerestrictedcontent](https://developer.apple.com/documentation/intents/inplaymediaintentresponsecode/failurerestrictedcontent)

# INPlayMediaIntentResponseCode.failureRestrictedContent (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The app cannot play the media because of content restrictions.

## Declaration

```swift
case failureRestrictedContent
```

<a id="Discussion"></a>

## Discussion

Respond with this code when you cannot handle the request because of a geographic region restriction or similar constraint.

## See Also

### Failures

- [INPlayMediaIntentResponseCode.failure](failure.md): A failure occurred while confirming or handling the intent.
- [INPlayMediaIntentResponseCode.failureNoUnplayedContent](failurenounplayedcontent.md): The media container has no unplayed content.
- [INPlayMediaIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch the app before media playback can begin.
- [INPlayMediaIntentResponseCode.failureUnknownMediaType](failureunknownmediatype.md): The app cannot play the media because the type is unknown or not supported.

# INPlayMediaIntentResponseCodeFailureRestrictedContent (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The app cannot play the media because of content restrictions.

## Declaration

```objectivec
INPlayMediaIntentResponseCodeFailureRestrictedContent
```

<a id="Discussion"></a>

## Discussion

Respond with this code when you cannot handle the request because of a geographic region restriction or similar constraint.

## See Also

### Failures

- [INPlayMediaIntentResponseCodeFailure](failure.md): A failure occurred while confirming or handling the intent.
- [INPlayMediaIntentResponseCodeFailureNoUnplayedContent](failurenounplayedcontent.md): The media container has no unplayed content.
- [INPlayMediaIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch the app before media playback can begin.
- [INPlayMediaIntentResponseCodeFailureUnknownMediaType](failureunknownmediatype.md): The app cannot play the media because the type is unknown or not supported.
