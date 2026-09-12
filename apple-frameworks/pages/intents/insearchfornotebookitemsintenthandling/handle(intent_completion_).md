> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Performs the search and deliver the results to SiriKit.

> INSearchForNotebookItemsIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
func handle(intent: INSearchForNotebookItemsIntent, completion: @escaping @Sendable (INSearchForNotebookItemsIntentResponse) -> Void)
```

```swift
func handle(intent: INSearchForNotebookItemsIntent) async -> INSearchForNotebookItemsIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The information in this object has already been resolved and confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSearchForNotebookItemsIntentResponse](../insearchfornotebookitemsintentresponse.md) object containing the search results. This parameter must not be `nil`.

<a id="discussion"></a>

## Discussion

In your implementation of this method, perform the search based on the available criteria, create a response object with the results, and call the provided completion handler.

# handleSearchForNotebookItems:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Performs the search and deliver the results to SiriKit.

> INSearchForNotebookItemsIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) handleSearchForNotebookItems:(INSearchForNotebookItemsIntent *) intent completion:(void (^)(INSearchForNotebookItemsIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The information in this object has already been resolved and confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSearchForNotebookItemsIntentResponse](../insearchfornotebookitemsintentresponse.md) object containing the search results. This parameter must not be `nil`.

<a id="discussion"></a>

## Discussion

In your implementation of this method, perform the search based on the available criteria, create a response object with the results, and call the provided completion handler.
