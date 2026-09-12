> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatetasklistintentresponse/init(code:useractivity:)](https://developer.apple.com/documentation/intents/increatetasklistintentresponse/init(code:useractivity:))

# init(code:userActivity:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Initializes the response object with the specified code and user activity object.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
init(code: INCreateTaskListIntentResponseCode, userActivity: NSUserActivity?)
```

## Parameters

- `code`: The response code indicating your success or failure in handling the intent. For a list of possible values, see [INCreateTaskListIntentResponseCode](../increatetasklistintentresponsecode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add app-specific information. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the intent, and fills it with an [INInteraction](../ininteraction.md) object containing the intent and your response.

<a id="return-value"></a>

## Return Value

An initialized response object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

After initializing the response object, put the task list details into the [createdTaskList](createdtasklist.md) property of the object.

# initWithCode:userActivity: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Initializes the response object with the specified code and user activity object.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (instancetype) initWithCode:(INCreateTaskListIntentResponseCode) code userActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `code`: The response code indicating your success or failure in handling the intent. For a list of possible values, see [INCreateTaskListIntentResponseCode](../increatetasklistintentresponsecode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add app-specific information. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the intent, and fills it with an [INInteraction](../ininteraction.md) object containing the intent and your response.

<a id="return-value"></a>

## Return Value

An initialized response object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

After initializing the response object, put the task list details into the [createdTaskList](createdtasklist.md) property of the object.
