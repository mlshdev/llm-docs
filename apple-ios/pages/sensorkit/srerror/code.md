> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srerror/code](https://developer.apple.com/documentation/sensorkit/srerror/code)

# SRError.Code (Swift)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The kinds of problems that stop a recording or a fetch.

## Declaration

```swift
enum Code
```

## Topics

### Errors

- [SRError.Code.promptDeclined](code/promptdeclined.md): Occurs when the user cancels the sensor approval workflow.
- [SRError.Code.dataInaccessible](code/datainaccessible.md): Occurs when the app can’t access the sensor’s data.
- [SRError.Code.fetchRequestInvalid](code/fetchrequestinvalid.md): Occurs when the app misconfigures a fetch request.
- [SRError.Code.invalidEntitlement](code/invalidentitlement.md): Occurs when the app lacks the required entitlement.
- [SRError.Code.noAuthorization](code/noauthorization.md): Occurs when the user declines sensor access in the Settings app.

### Creating an error

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interpreting Errors

- [SRErrorDomain](../srerrordomain.md): An error domain that’s unique to the framework.
- [SRError](../srerror.md): An error that SensorKit reports.

# SRErrorCode (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The kinds of problems that stop a recording or a fetch.

## Declaration

```objectivec
enum SRErrorCode : NSInteger;
```

## Topics

### Errors

- [SRErrorPromptDeclined](code/promptdeclined.md): Occurs when the user cancels the sensor approval workflow.
- [SRErrorDataInaccessible](code/datainaccessible.md): Occurs when the app can’t access the sensor’s data.
- [SRErrorFetchRequestInvalid](code/fetchrequestinvalid.md): Occurs when the app misconfigures a fetch request.
- [SRErrorInvalidEntitlement](code/invalidentitlement.md): Occurs when the app lacks the required entitlement.
- [SRErrorNoAuthorization](code/noauthorization.md): Occurs when the user declines sensor access in the Settings app.

## See Also

### Interpreting Errors

- [SRErrorDomain](../srerrordomain.md): An error domain that’s unique to the framework.
