> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inreservationaction/init(type:validduration:useractivity:)](https://developer.apple.com/documentation/intents/inreservationaction/init(type:validduration:useractivity:))

# init(type:validDuration:userActivity:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new reservation action.

## Declaration

```swift
init(type: INReservationActionType, validDuration: INDateComponentsRange, userActivity: NSUserActivity)
```

## Parameters

- `type`: The type of action to create.
- `validDuration`: The date and time range the action is valid.
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add information that is specific to your app. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the intent being handled, and fills it with an [INInteraction](../ininteraction.md) object containing the intent and your response.

# initWithType:validDuration:userActivity: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new reservation action.

## Declaration

```objectivec
- (instancetype) initWithType:(INReservationActionType) type validDuration:(INDateComponentsRange *) validDuration userActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `type`: The type of action to create.
- `validDuration`: The date and time range the action is valid.
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add information that is specific to your app. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the intent being handled, and fills it with an [INInteraction](../ininteraction.md) object containing the intent and your response.
