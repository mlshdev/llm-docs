> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetcarlockstatusintentresponse/init(code:useractivity:)](https://developer.apple.com/documentation/intents/insetcarlockstatusintentresponse/init(code:useractivity:))

# init(code:userActivity:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the response object with the specified code and user activity.

## Declaration

```swift
init(code: INSetCarLockStatusIntentResponseCode, userActivity: NSUserActivity?)
```

## Parameters

- `code`: The response code indicating success or failure when confirming or handling the intent. For a list of possible values, see [INSetCarLockStatusIntentResponseCode](../insetcarlockstatusintentresponsecode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add information that is specific to your app. If you specify `nil`, the system automatically does the following:

  - Creates a user activity for you.
  - Sets the activity’s type to the class name of the intent being handled.
  - Sets the activity’s [interaction](../../foundation/nsuseractivity/interaction.md) property to an [INInteraction](../ininteraction.md) object that contains the intent and your response.

<a id="return-value"></a>

## Return Value

A newly initialized response object.

# initWithCode:userActivity: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the response object with the specified code and user activity.

## Declaration

```objectivec
- (instancetype) initWithCode:(INSetCarLockStatusIntentResponseCode) code userActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `code`: The response code indicating success or failure when confirming or handling the intent. For a list of possible values, see [INSetCarLockStatusIntentResponseCode](../insetcarlockstatusintentresponsecode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add information that is specific to your app. If you specify `nil`, the system automatically does the following:

  - Creates a user activity for you.
  - Sets the activity’s type to the class name of the intent being handled.
  - Sets the activity’s [interaction](../../foundation/nsuseractivity/interaction.md) property to an [INInteraction](../ininteraction.md) object that contains the intent and your response.

<a id="return-value"></a>

## Return Value

A newly initialized response object.
