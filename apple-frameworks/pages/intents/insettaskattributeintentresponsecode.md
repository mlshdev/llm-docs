> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintentresponsecode](https://developer.apple.com/documentation/intents/insettaskattributeintentresponsecode)

# INSetTaskAttributeIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating the state of the response.

> INSetTaskAttributeIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
enum INSetTaskAttributeIntentResponseCode
```

## Topics

### Constants

- [INSetTaskAttributeIntentResponseCode.unspecified](insettaskattributeintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSetTaskAttributeIntentResponseCode.ready](insettaskattributeintentresponsecode/ready.md): Deprecated. You are ready to handle the intent.
- [INSetTaskAttributeIntentResponseCode.inProgress](insettaskattributeintentresponsecode/inprogress.md): Deprecated. The modification of the task list is still in progress.
- [INSetTaskAttributeIntentResponseCode.success](insettaskattributeintentresponsecode/success.md): Deprecated. You successfully modified the task attributes.
- [INSetTaskAttributeIntentResponseCode.failure](insettaskattributeintentresponsecode/failure.md): Deprecated. You were unable to modify the task attributes.
- [INSetTaskAttributeIntentResponseCode.failureRequiringAppLaunch](insettaskattributeintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must modify tasks from within your app.

### Initializers

- [init(rawValue:)](insettaskattributeintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](insettaskattributeintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INSetTaskAttributeIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating the state of the response.

> INSetTaskAttributeIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
enum INSetTaskAttributeIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSetTaskAttributeIntentResponseCodeUnspecified](insettaskattributeintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSetTaskAttributeIntentResponseCodeReady](insettaskattributeintentresponsecode/ready.md): Deprecated. You are ready to handle the intent.
- [INSetTaskAttributeIntentResponseCodeInProgress](insettaskattributeintentresponsecode/inprogress.md): Deprecated. The modification of the task list is still in progress.
- [INSetTaskAttributeIntentResponseCodeSuccess](insettaskattributeintentresponsecode/success.md): Deprecated. You successfully modified the task attributes.
- [INSetTaskAttributeIntentResponseCodeFailure](insettaskattributeintentresponsecode/failure.md): Deprecated. You were unable to modify the task attributes.
- [INSetTaskAttributeIntentResponseCodeFailureRequiringAppLaunch](insettaskattributeintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must modify tasks from within your app.

## See Also

### Getting the Response Code

- [code](insettaskattributeintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
