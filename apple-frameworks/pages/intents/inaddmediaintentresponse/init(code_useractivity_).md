> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediaintentresponse/init(code:useractivity:)](https://developer.apple.com/documentation/intents/inaddmediaintentresponse/init(code:useractivity:))

# init(code:userActivity:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes the response object with the specified code and user activity object.

## Declaration

```swift
init(code: INAddMediaIntentResponseCode, userActivity: NSUserActivity?)
```

## Parameters

- `code`: The response code that indicates your success or failure confirming or handling the intent. For a list of possible values, see [INAddMediaIntentResponseCode](../inaddmediaintentresponsecode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add information that is specific to your app. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the intent being handled, and fills it with an [INInteraction](../ininteraction.md) object that contains the intent and your response.

<a id="return-value"></a>

## Return Value

An initialized response object or `nil` if the object could not be created.

# initWithCode:userActivity: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes the response object with the specified code and user activity object.

## Declaration

```objectivec
- (instancetype) initWithCode:(INAddMediaIntentResponseCode) code userActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `code`: The response code that indicates your success or failure confirming or handling the intent. For a list of possible values, see [INAddMediaIntentResponseCode](../inaddmediaintentresponsecode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add information that is specific to your app. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the intent being handled, and fills it with an [INInteraction](../ininteraction.md) object that contains the intent and your response.

<a id="return-value"></a>

## Return Value

An initialized response object or `nil` if the object could not be created.
