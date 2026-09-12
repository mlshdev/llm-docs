> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupcomingmediamanager/setsuggestedmediaintents(_:)](https://developer.apple.com/documentation/intents/inupcomingmediamanager/setsuggestedmediaintents(_:))

# setSuggestedMediaIntents(\_:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Provides Siri with a list of media intents to suggest to the user.

## Declaration

```swift
func setSuggestedMediaIntents(_ intents: NSOrderedSet)
```

## Parameters

- `intents`: An ordered list of media intents that you want Siri to suggest to the user. Begin the list with the most important or useful intents for the user, followed by less important or useful ones.

<a id="Discussion"></a>

## Discussion

Use this method to have Siri suggest media content to the user that:

- Becomes available in your app, such as a new episode in a TV series.
- The user hasn’t listened to or watched, but may be interested in.
- The user hasn’t finished listening to or watching.

To replace the list, call the method again, passing in a new set of intents. If you want to remove the suggested media intents, call the method passing in an empty array.

# setSuggestedMediaIntents: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Provides Siri with a list of media intents to suggest to the user.

## Declaration

```objectivec
- (void) setSuggestedMediaIntents:(NSOrderedSet<INPlayMediaIntent *> *) intents;
```

## Parameters

- `intents`: An ordered list of media intents that you want Siri to suggest to the user. Begin the list with the most important or useful intents for the user, followed by less important or useful ones.

<a id="Discussion"></a>

## Discussion

Use this method to have Siri suggest media content to the user that:

- Becomes available in your app, such as a new episode in a TV series.
- The user hasn’t listened to or watched, but may be interested in.
- The user hasn’t finished listening to or watching.

To replace the list, call the method again, passing in a new set of intents. If you want to remove the suggested media intents, call the method passing in an empty array.
