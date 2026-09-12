> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintentresponsecode](https://developer.apple.com/documentation/intents/insearchformessagesintentresponsecode)

# INSearchForMessagesIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the response state.

## Declaration

```swift
enum INSearchForMessagesIntentResponseCode
```

## Topics

### Response State

- [INSearchForMessagesIntentResponseCode.unspecified](insearchformessagesintentresponsecode/unspecified.md): The response code is unknown.
- [INSearchForMessagesIntentResponseCode.ready](insearchformessagesintentresponsecode/ready.md): A response code indicating app readiness.
- [INSearchForMessagesIntentResponseCode.inProgress](insearchformessagesintentresponsecode/inprogress.md): You are performing the search but do not yet have the results.
- [INSearchForMessagesIntentResponseCode.success](insearchformessagesintentresponsecode/success.md): You successfully handled the intent.
- [INSearchForMessagesIntentResponseCode.failure](insearchformessagesintentresponsecode/failure.md): You are unable to perform the search.
- [INSearchForMessagesIntentResponseCode.failureRequiringAppLaunch](insearchformessagesintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to search their messages.
- [INSearchForMessagesIntentResponseCode.failureMessageServiceNotAvailable](insearchformessagesintentresponsecode/failuremessageservicenotavailable.md): You were unable to perform the search because your message service is currently unavailable.
- [INSearchForMessagesIntentResponseCode.failureMessageTooManyResults](insearchformessagesintentresponsecode/failuremessagetoomanyresults.md): Too many messages matched the specified search criteria.

### Enumeration Cases

- [INSearchForMessagesIntentResponseCode.failureRequiringInAppAuthentication](insearchformessagesintentresponsecode/failurerequiringinappauthentication.md)

### Initializers

- [init(rawValue:)](insearchformessagesintentresponsecode/init%28rawvalue_%29.md)

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

- [code](insearchformessagesintentresponse/code.md): The code indicating whether you successfully handled the intent.

# INSearchForMessagesIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the response state.

## Declaration

```objectivec
enum INSearchForMessagesIntentResponseCode : NSInteger;
```

## Topics

### Response State

- [INSearchForMessagesIntentResponseCodeUnspecified](insearchformessagesintentresponsecode/unspecified.md): The response code is unknown.
- [INSearchForMessagesIntentResponseCodeReady](insearchformessagesintentresponsecode/ready.md): A response code indicating app readiness.
- [INSearchForMessagesIntentResponseCodeInProgress](insearchformessagesintentresponsecode/inprogress.md): You are performing the search but do not yet have the results.
- [INSearchForMessagesIntentResponseCodeSuccess](insearchformessagesintentresponsecode/success.md): You successfully handled the intent.
- [INSearchForMessagesIntentResponseCodeFailure](insearchformessagesintentresponsecode/failure.md): You are unable to perform the search.
- [INSearchForMessagesIntentResponseCodeFailureRequiringAppLaunch](insearchformessagesintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to search their messages.
- [INSearchForMessagesIntentResponseCodeFailureMessageServiceNotAvailable](insearchformessagesintentresponsecode/failuremessageservicenotavailable.md): You were unable to perform the search because your message service is currently unavailable.
- [INSearchForMessagesIntentResponseCodeFailureMessageTooManyResults](insearchformessagesintentresponsecode/failuremessagetoomanyresults.md): Too many messages matched the specified search criteria.

### Enumeration Cases

- [INSearchForMessagesIntentResponseCodeFailureRequiringInAppAuthentication](insearchformessagesintentresponsecode/failurerequiringinappauthentication.md)

## See Also

### Getting the Response Code

- [code](insearchformessagesintentresponse/code.md): The code indicating whether you successfully handled the intent.
