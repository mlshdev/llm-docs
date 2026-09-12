> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintentresponsecode](https://developer.apple.com/documentation/intents/insearchforbillsintentresponsecode)

# INSearchForBillsIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INSearchForBillsIntentResponseCode
```

## Topics

### Constants

- [INSearchForBillsIntentResponseCode.unspecified](insearchforbillsintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSearchForBillsIntentResponseCode.ready](insearchforbillsintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSearchForBillsIntentResponseCode.inProgress](insearchforbillsintentresponsecode/inprogress.md): Deprecated. The search is still in progress.
- [INSearchForBillsIntentResponseCode.success](insearchforbillsintentresponsecode/success.md): Deprecated. You successfully retrieved the search results.
- [INSearchForBillsIntentResponseCode.failure](insearchforbillsintentresponsecode/failure.md): Deprecated. You were unable to retrieve the search results.
- [INSearchForBillsIntentResponseCode.failureRequiringAppLaunch](insearchforbillsintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to perform the search.
- [INSearchForBillsIntentResponseCode.failureCredentialsUnverified](insearchforbillsintentresponsecode/failurecredentialsunverified.md): Deprecated. You were unable to perform the search because you couldn’t verify the user’s credentials.
- [INSearchForBillsIntentResponseCode.failureBillNotFound](insearchforbillsintentresponsecode/failurebillnotfound.md): Deprecated. The search yielded no results.

### Initializers

- [init(rawValue:)](insearchforbillsintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](insearchforbillsintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INSearchForBillsIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INSearchForBillsIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSearchForBillsIntentResponseCodeUnspecified](insearchforbillsintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSearchForBillsIntentResponseCodeReady](insearchforbillsintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSearchForBillsIntentResponseCodeInProgress](insearchforbillsintentresponsecode/inprogress.md): Deprecated. The search is still in progress.
- [INSearchForBillsIntentResponseCodeSuccess](insearchforbillsintentresponsecode/success.md): Deprecated. You successfully retrieved the search results.
- [INSearchForBillsIntentResponseCodeFailure](insearchforbillsintentresponsecode/failure.md): Deprecated. You were unable to retrieve the search results.
- [INSearchForBillsIntentResponseCodeFailureRequiringAppLaunch](insearchforbillsintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to perform the search.
- [INSearchForBillsIntentResponseCodeFailureCredentialsUnverified](insearchforbillsintentresponsecode/failurecredentialsunverified.md): Deprecated. You were unable to perform the search because you couldn’t verify the user’s credentials.
- [INSearchForBillsIntentResponseCodeFailureBillNotFound](insearchforbillsintentresponsecode/failurebillnotfound.md): Deprecated. The search yielded no results.

## See Also

### Getting the Response Code

- [code](insearchforbillsintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
