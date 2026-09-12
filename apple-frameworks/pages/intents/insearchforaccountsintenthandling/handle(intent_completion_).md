> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insearchforaccountsintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Handles searching for the account information.

## Declaration

```swift
func handle(intent: INSearchForAccountsIntent, completion: @escaping @Sendable (INSearchForAccountsIntentResponse) -> Void)
```

```swift
func handle(intent: INSearchForAccountsIntent) async -> INSearchForAccountsIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The information in this object has already been resolved and confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSearchForAccountsIntentResponse](../insearchforaccountsintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must perform the search using the specified parameters and return the results in your response object. If you are unable to perform the search, return a response object whose result code indicates the reason for the failure.

The response object you create should indicate the success or failure of the operation. Never create a response object using the [INSearchForAccountsIntentResponseCode.unspecified](../insearchforaccountsintentresponsecode/unspecified.md) or [INSearchForAccountsIntentResponseCode.ready](../insearchforaccountsintentresponsecode/ready.md) codes.

# handleSearchForAccounts:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Handles searching for the account information.

## Declaration

```objectivec
- (void) handleSearchForAccounts:(INSearchForAccountsIntent *) intent completion:(void (^)(INSearchForAccountsIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The information in this object has already been resolved and confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSearchForAccountsIntentResponse](../insearchforaccountsintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must perform the search using the specified parameters and return the results in your response object. If you are unable to perform the search, return a response object whose result code indicates the reason for the failure.

The response object you create should indicate the success or failure of the operation. Never create a response object using the [INSearchForAccountsIntentResponseCodeUnspecified](../insearchforaccountsintentresponsecode/unspecified.md) or [INSearchForAccountsIntentResponseCodeReady](../insearchforaccountsintentresponsecode/ready.md) codes.
