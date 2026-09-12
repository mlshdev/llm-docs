> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintentresponse/init(code:useractivity:)](https://developer.apple.com/documentation/intents/insnoozetasksintentresponse/init(code:useractivity:))

# init(code:userActivity:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Initializes the response object with the specified code and user activity object.

> INSnoozeTasksIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
init(code: INSnoozeTasksIntentResponseCode, userActivity: NSUserActivity?)
```

## Parameters

- `code`: The response code that indicates your success or failure in handling the intent. For a list of possible values, see [INSnoozeTasksIntentResponseCode](../insnoozetasksintentresponsecode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add app-specific information. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the handled intent, and fills it with an [INInteraction](../ininteraction.md) object that contains the intent and your response.

<a id="return-value"></a>

## Return Value

An initialized response object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

After you initialize the response object, create an [INTask](../intask.md) object with the updated values that you intend to apply to your app’s data structures and assign that object to the [snoozedTasks](snoozedtasks.md) property.

# initWithCode:userActivity: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Initializes the response object with the specified code and user activity object.

> INSnoozeTasksIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (instancetype) initWithCode:(INSnoozeTasksIntentResponseCode) code userActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `code`: The response code that indicates your success or failure in handling the intent. For a list of possible values, see [INSnoozeTasksIntentResponseCode](../insnoozetasksintentresponsecode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add app-specific information. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the handled intent, and fills it with an [INInteraction](../ininteraction.md) object that contains the intent and your response.

<a id="return-value"></a>

## Return Value

An initialized response object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

After you initialize the response object, create an [INTask](../intask.md) object with the updated values that you intend to apply to your app’s data structures and assign that object to the [snoozedTasks](snoozedtasks.md) property.
