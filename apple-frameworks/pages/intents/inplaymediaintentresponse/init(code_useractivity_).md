> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintentresponse/init(code:useractivity:)](https://developer.apple.com/documentation/intents/inplaymediaintentresponse/init(code:useractivity:))

# init(code:userActivity:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a response for a play media intent.

## Declaration

```swift
init(code: INPlayMediaIntentResponseCode, userActivity: NSUserActivity?)
```

## Parameters

- `code`: A response code that indicates whether the app can play the media.
- `userActivity`: A user activity that contains private state data that your Intents app extension shares with your main app.

# initWithCode:userActivity: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a response for a play media intent.

## Declaration

```objectivec
- (instancetype) initWithCode:(INPlayMediaIntentResponseCode) code userActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `code`: A response code that indicates whether the app can play the media.
- `userActivity`: A user activity that contains private state data that your Intents app extension shares with your main app.
