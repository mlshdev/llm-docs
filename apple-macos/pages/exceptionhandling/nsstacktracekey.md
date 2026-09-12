> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/exceptionhandling/nsstacktracekey](https://developer.apple.com/documentation/exceptionhandling/nsstacktracekey)

# NSStackTraceKey (Swift)

**Framework:** Exception Handling  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The key for fetching the stack trace (an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object) in the [userInfo](https://developer.apple.com/documentation/foundation/nsexception/userinfo-swift.property) dictionary of the [NSException](https://developer.apple.com/documentation/foundation/nsexception) object passed into one of the delegate methods described in [NSExceptionHandlerDelegate](nsexceptionhandlerdelegate.md).

## Declaration

```swift
let NSStackTraceKey: String
```

## See Also

### Constants

- [NSUncaughtRuntimeErrorException](nsuncaughtruntimeerrorexception.md): Identifies an Objective-C runtime error.
- [NSUncaughtSystemExceptionException](nsuncaughtsystemexceptionexception.md): Identifies an uncaught system exception.

# NSStackTraceKey (Objective-C)

**Framework:** Exception Handling  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The key for fetching the stack trace (an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object) in the [userInfo](https://developer.apple.com/documentation/foundation/nsexception/userinfo-swift.property) dictionary of the [NSException](https://developer.apple.com/documentation/foundation/nsexception) object passed into one of the delegate methods described in [NSExceptionHandlerDelegate](nsexceptionhandlerdelegate.md).

## Declaration

```objectivec
extern NSString * NSStackTraceKey;
```

## See Also

### Constants

- [NSUncaughtRuntimeErrorException](nsuncaughtruntimeerrorexception.md): Identifies an Objective-C runtime error.
- [NSUncaughtSystemExceptionException](nsuncaughtsystemexceptionexception.md): Identifies an uncaught system exception.
