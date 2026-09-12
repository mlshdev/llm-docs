> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintentresponsecode/ready](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintentresponsecode/ready)

# INSearchForNotebookItemsIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

You are ready to handle the intent.

> INSearchForNotebookItemsIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

Return this response code during the confirmation phase after you have verified that you are able to perform the search. Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INSearchForNotebookItemsIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSearchForNotebookItemsIntentResponseCode.inProgress](inprogress.md): Deprecated. You are in the process of searching for the results.
- [INSearchForNotebookItemsIntentResponseCode.success](success.md): Deprecated. You successfully performed the search.
- [INSearchForNotebookItemsIntentResponseCode.failure](failure.md): Deprecated. You were unable to perform the search.
- [INSearchForNotebookItemsIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to perform the search and view the results.

# INSearchForNotebookItemsIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

You are ready to handle the intent.

> INSearchForNotebookItemsIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INSearchForNotebookItemsIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

Return this response code during the confirmation phase after you have verified that you are able to perform the search. Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INSearchForNotebookItemsIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSearchForNotebookItemsIntentResponseCodeInProgress](inprogress.md): Deprecated. You are in the process of searching for the results.
- [INSearchForNotebookItemsIntentResponseCodeSuccess](success.md): Deprecated. You successfully performed the search.
- [INSearchForNotebookItemsIntentResponseCodeFailure](failure.md): Deprecated. You were unable to perform the search.
- [INSearchForNotebookItemsIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to perform the search and view the results.
