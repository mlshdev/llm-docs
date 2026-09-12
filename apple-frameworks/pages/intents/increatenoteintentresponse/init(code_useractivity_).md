> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintentresponse/init(code:useractivity:)](https://developer.apple.com/documentation/intents/increatenoteintentresponse/init(code:useractivity:))

# init(code:userActivity:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Initializes the response object with the specified code and user activity object.

> INCreateNoteIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
init(code: INCreateNoteIntentResponseCode, userActivity: NSUserActivity?)
```

## Parameters

- `code`: The response code indicating your success or failure in handling the intent. For a list of possible values, see [INCreateNoteIntentResponseCode](../increatenoteintentresponsecode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add app-specific information. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the intent being handled, and fills it with an [INInteraction](../ininteraction.md) object containing the intent and your response.

<a id="return-value"></a>

## Return Value

An initialized response object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

After initializing the response object, put the note details into the [createdNote](creatednote.md) property of the object.

When your app creates the note successfully, Siri displays information about the created note to the user. If the user chooses to view the new note in your app, SiriKit does not launch your app using the value in the `userActivity` parameter. Instead, SiriKit creates a new [NSUserActivity](../../foundation/nsuseractivity.md) object whose interaction property contains an [INSearchForNotebookItemsIntent](../insearchfornotebookitemsintent.md) object. The value of that intent’s [notebookItemIdentifier](../insearchfornotebookitemsintent/notebookitemidentifier.md) property is the identifier of the note that you provided in the [createdNote](creatednote.md) property of your response object.

# initWithCode:userActivity: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Initializes the response object with the specified code and user activity object.

> INCreateNoteIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (instancetype) initWithCode:(INCreateNoteIntentResponseCode) code userActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `code`: The response code indicating your success or failure in handling the intent. For a list of possible values, see [INCreateNoteIntentResponseCode](../increatenoteintentresponsecode.md).
- `userActivity`: The user activity object to use when launching your app. Provide an object if you want to add app-specific information. If you specify `nil`, the system automatically creates a user activity object for you, sets its type to the class name of the intent being handled, and fills it with an [INInteraction](../ininteraction.md) object containing the intent and your response.

<a id="return-value"></a>

## Return Value

An initialized response object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

After initializing the response object, put the note details into the [createdNote](creatednote.md) property of the object.

When your app creates the note successfully, Siri displays information about the created note to the user. If the user chooses to view the new note in your app, SiriKit does not launch your app using the value in the `userActivity` parameter. Instead, SiriKit creates a new [NSUserActivity](../../foundation/nsuseractivity.md) object whose interaction property contains an [INSearchForNotebookItemsIntent](../insearchfornotebookitemsintent.md) object. The value of that intent’s [notebookItemIdentifier](../insearchfornotebookitemsintent/notebookitemidentifier.md) property is the identifier of the note that you provided in the [createdNote](creatednote.md) property of your response object.
