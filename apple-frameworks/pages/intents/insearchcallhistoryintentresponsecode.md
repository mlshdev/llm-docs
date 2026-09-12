> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintentresponsecode](https://developer.apple.com/documentation/intents/insearchcallhistoryintentresponsecode)

# INSearchCallHistoryIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Constants indicating the status of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INSearchCallHistoryIntentResponseCode
```

## Topics

### Constants

- [INSearchCallHistoryIntentResponseCode.unspecified](insearchcallhistoryintentresponsecode/unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INSearchCallHistoryIntentResponseCode.ready](insearchcallhistoryintentresponsecode/ready.md): Deprecated. Your app is ready to perform the search.
- [INSearchCallHistoryIntentResponseCode.continueInApp](insearchcallhistoryintentresponsecode/continueinapp.md): Deprecated. Your extension is ready to transfer control to the app in order to display the search results.
- [INSearchCallHistoryIntentResponseCode.failure](insearchcallhistoryintentresponsecode/failure.md): Deprecated. You were unable to perform the search.
- [INSearchCallHistoryIntentResponseCode.failureRequiringAppLaunch](insearchcallhistoryintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to search their call history.
- [INSearchCallHistoryIntentResponseCode.failureAppConfigurationRequired](insearchcallhistoryintentresponsecode/failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching the call history is possible.
- [INSearchCallHistoryIntentResponseCode.inProgress](insearchcallhistoryintentresponsecode/inprogress.md): Deprecated. Your app is in the process of handling the intent.
- [INSearchCallHistoryIntentResponseCode.success](insearchcallhistoryintentresponsecode/success.md): Deprecated. Your app successfully handled the intent.

### Initializers

- [init(rawValue:)](insearchcallhistoryintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](insearchcallhistoryintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INSearchCallHistoryIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Constants indicating the status of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INSearchCallHistoryIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSearchCallHistoryIntentResponseCodeUnspecified](insearchcallhistoryintentresponsecode/unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INSearchCallHistoryIntentResponseCodeReady](insearchcallhistoryintentresponsecode/ready.md): Deprecated. Your app is ready to perform the search.
- [INSearchCallHistoryIntentResponseCodeContinueInApp](insearchcallhistoryintentresponsecode/continueinapp.md): Deprecated. Your extension is ready to transfer control to the app in order to display the search results.
- [INSearchCallHistoryIntentResponseCodeFailure](insearchcallhistoryintentresponsecode/failure.md): Deprecated. You were unable to perform the search.
- [INSearchCallHistoryIntentResponseCodeFailureRequiringAppLaunch](insearchcallhistoryintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to search their call history.
- [INSearchCallHistoryIntentResponseCodeFailureAppConfigurationRequired](insearchcallhistoryintentresponsecode/failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching the call history is possible.
- [INSearchCallHistoryIntentResponseCodeInProgress](insearchcallhistoryintentresponsecode/inprogress.md): Deprecated. Your app is in the process of handling the intent.
- [INSearchCallHistoryIntentResponseCodeSuccess](insearchcallhistoryintentresponsecode/success.md): Deprecated. Your app successfully handled the intent.

## See Also

### Getting the Response Code

- [code](insearchcallhistoryintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
