> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insharefocusstatusintentresponse/init(code:useractivity:)](https://developer.apple.com/documentation/intents/insharefocusstatusintentresponse/init(code:useractivity:))

# init(code:userActivity:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a response with the specified response code and user activity.

## Declaration

```swift
init(code: INShareFocusStatusIntentResponseCode, userActivity: NSUserActivity?)
```

## Parameters

- `code`: Your app’s ability to handle the intent.
- `userActivity`: An object the system can send to your app to continue this interaction.

# initWithCode:userActivity: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a response with the specified response code and user activity.

## Declaration

```objectivec
- (instancetype) initWithCode:(INShareFocusStatusIntentResponseCode) code userActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `code`: Your app’s ability to handle the intent.
- `userActivity`: An object the system can send to your app to continue this interaction.
