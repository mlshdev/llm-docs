> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintentresponsecode](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintentresponsecode)

# INSearchForNotebookItemsIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating the state of the response.

> INSearchForNotebookItemsIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
enum INSearchForNotebookItemsIntentResponseCode
```

## Topics

### Constants

- [INSearchForNotebookItemsIntentResponseCode.unspecified](insearchfornotebookitemsintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSearchForNotebookItemsIntentResponseCode.ready](insearchfornotebookitemsintentresponsecode/ready.md): Deprecated. You are ready to handle the intent.
- [INSearchForNotebookItemsIntentResponseCode.inProgress](insearchfornotebookitemsintentresponsecode/inprogress.md): Deprecated. You are in the process of searching for the results.
- [INSearchForNotebookItemsIntentResponseCode.success](insearchfornotebookitemsintentresponsecode/success.md): Deprecated. You successfully performed the search.
- [INSearchForNotebookItemsIntentResponseCode.failure](insearchfornotebookitemsintentresponsecode/failure.md): Deprecated. You were unable to perform the search.
- [INSearchForNotebookItemsIntentResponseCode.failureRequiringAppLaunch](insearchfornotebookitemsintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to perform the search and view the results.

### Initializers

- [init(rawValue:)](insearchfornotebookitemsintentresponsecode/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Response Code

- [code](insearchfornotebookitemsintentresponse/code.md): Deprecated. The code indicating whether your app successfully handled the intent.

# INSearchForNotebookItemsIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating the state of the response.

> INSearchForNotebookItemsIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
enum INSearchForNotebookItemsIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSearchForNotebookItemsIntentResponseCodeUnspecified](insearchfornotebookitemsintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSearchForNotebookItemsIntentResponseCodeReady](insearchfornotebookitemsintentresponsecode/ready.md): Deprecated. You are ready to handle the intent.
- [INSearchForNotebookItemsIntentResponseCodeInProgress](insearchfornotebookitemsintentresponsecode/inprogress.md): Deprecated. You are in the process of searching for the results.
- [INSearchForNotebookItemsIntentResponseCodeSuccess](insearchfornotebookitemsintentresponsecode/success.md): Deprecated. You successfully performed the search.
- [INSearchForNotebookItemsIntentResponseCodeFailure](insearchfornotebookitemsintentresponsecode/failure.md): Deprecated. You were unable to perform the search.
- [INSearchForNotebookItemsIntentResponseCodeFailureRequiringAppLaunch](insearchfornotebookitemsintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to perform the search and view the results.

## See Also

### Getting the Response Code

- [code](insearchfornotebookitemsintentresponse/code.md): Deprecated. The code indicating whether your app successfully handled the intent.
