> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/saerror/code](https://developer.apple.com/documentation/safetykit/saerror/code)

# SAError.Code (Swift)

**Framework:** SafetyKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Codes for identifying errors in SafetyKit.

## Declaration

```swift
enum Code
```

## Topics

### Determining the error type

- [SAError.Code.invalidArgument](code/invalidargument.md): The passed argument is invalid.
- [SAError.Code.notAllowed](code/notallowed.md): The system restricts the feature on this iPhone at the current time.
- [SAError.Code.notAuthorized](code/notauthorized.md): The app isn’t authorized to perform the requested operation.
- [SAError.Code.operationFailed](code/operationfailed.md): The requested operation failed; retrying may succeed.

### Initializers

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

### Handling errors

- [SAErrorDomain](../saerrordomain.md): The domain for error objects that SafetyKit produces.
- [SAError](../saerror.md): An error reported by SafetyKit.

# SAErrorCode (Objective-C)

**Framework:** SafetyKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Codes for identifying errors in SafetyKit.

## Declaration

```objectivec
enum SAErrorCode : NSInteger;
```

## Topics

### Determining the error type

- [SAErrorInvalidArgument](code/invalidargument.md): The passed argument is invalid.
- [SAErrorNotAllowed](code/notallowed.md): The system restricts the feature on this iPhone at the current time.
- [SAErrorNotAuthorized](code/notauthorized.md): The app isn’t authorized to perform the requested operation.
- [SAErrorOperationFailed](code/operationfailed.md): The requested operation failed; retrying may succeed.

## See Also

### Handling errors

- [SAErrorDomain](../saerrordomain.md): The domain for error objects that SafetyKit produces.
