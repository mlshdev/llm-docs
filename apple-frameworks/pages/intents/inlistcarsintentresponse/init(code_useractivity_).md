> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistcarsintentresponse/init(code:useractivity:)](https://developer.apple.com/documentation/intents/inlistcarsintentresponse/init(code:useractivity:))

# init(code:userActivity:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a response object with the specified code and user activity.

## Declaration

```swift
init(code: INListCarsIntentResponseCode, userActivity: NSUserActivity?)
```

## Parameters

- `code`: The response code that indicates success or failure when confirming or handling the intent. For a list of possible values, see [INListCarsIntentResponseCode](../inlistcarsintentresponsecode.md).
- `userActivity`: A user activity that the system passes to your app if it launches as a result of this response. Use an activity if you need to provide additional information specific to your app.

  If you specify `nil`, the system automatically:

  - Creates a user activity for you.
  - Sets the activity’s type to the class name of the intent it’s handling.
  - Sets the activity’s [interaction](../../foundation/nsuseractivity/interaction.md) property to an instance of [INInteraction](../ininteraction.md) that contains the intent and your response.

# initWithCode:userActivity: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a response object with the specified code and user activity.

## Declaration

```objectivec
- (instancetype) initWithCode:(INListCarsIntentResponseCode) code userActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `code`: The response code that indicates success or failure when confirming or handling the intent. For a list of possible values, see [INListCarsIntentResponseCode](../inlistcarsintentresponsecode.md).
- `userActivity`: A user activity that the system passes to your app if it launches as a result of this response. Use an activity if you need to provide additional information specific to your app.

  If you specify `nil`, the system automatically:

  - Creates a user activity for you.
  - Sets the activity’s type to the class name of the intent it’s handling.
  - Sets the activity’s [interaction](../../foundation/nsuseractivity/interaction.md) property to an instance of [INInteraction](../ininteraction.md) that contains the intent and your response.
