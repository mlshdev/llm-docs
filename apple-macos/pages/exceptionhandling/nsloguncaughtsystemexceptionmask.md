> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/exceptionhandling/nsloguncaughtsystemexceptionmask](https://developer.apple.com/documentation/exceptionhandling/nsloguncaughtsystemexceptionmask)

# NSLogUncaughtSystemExceptionMask (Swift)

**Framework:** Exception Handling  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The exception handler logs uncaught system exceptions.

## Declaration

```swift
var NSLogUncaughtSystemExceptionMask: Int { get }
```

## See Also

### Constants

- [NSLogUncaughtExceptionMask](nsloguncaughtexceptionmask.md): The exception handler logs uncaught exceptions.
- [NSHandleUncaughtExceptionMask](nshandleuncaughtexceptionmask.md): The exception handler handles uncaught exceptions by terminating the thread in which they occur.
- [NSHandleUncaughtSystemExceptionMask](nshandleuncaughtsystemexceptionmask.md): The exception handler handles uncaught system exceptions by converting them to [NSException](https://developer.apple.com/documentation/foundation/nsexception) objects containing a stack trace.
- [NSLogUncaughtRuntimeErrorMask](nsloguncaughtruntimeerrormask.md): The exception handler logs uncaught runtime errors.
- [NSHandleUncaughtRuntimeErrorMask](nshandleuncaughtruntimeerrormask.md): The exception handler handles uncaught runtime errors by converting them to [NSException](https://developer.apple.com/documentation/foundation/nsexception) objects containing a stack trace.
- [NSLogTopLevelExceptionMask](nslogtoplevelexceptionmask.md): The exception handler logs exceptions that would be caught by the top-level handler.
- [NSHandleTopLevelExceptionMask](nshandletoplevelexceptionmask.md): The exception handler handles exceptions caught by the top-level handler by converting them to [NSException](https://developer.apple.com/documentation/foundation/nsexception) objects containing a stack trace.
- [NSLogOtherExceptionMask](nslogotherexceptionmask.md): The exception handler logs exceptions caught by handlers lower than the top-level handler.
- [NSHandleOtherExceptionMask](nshandleotherexceptionmask.md): The exception handler handles exceptions caught by handlers lower than the top-level handler by converting them to [NSException](https://developer.apple.com/documentation/foundation/nsexception) objects containing a stack trace.

# NSLogUncaughtSystemExceptionMask (Objective-C)

**Framework:** Exception Handling  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The exception handler logs uncaught system exceptions.

## Declaration

```objectivec
NSLogUncaughtSystemExceptionMask
```

## See Also

### Constants

- [NSLogUncaughtExceptionMask](nsloguncaughtexceptionmask.md): The exception handler logs uncaught exceptions.
- [NSHandleUncaughtExceptionMask](nshandleuncaughtexceptionmask.md): The exception handler handles uncaught exceptions by terminating the thread in which they occur.
- [NSHandleUncaughtSystemExceptionMask](nshandleuncaughtsystemexceptionmask.md): The exception handler handles uncaught system exceptions by converting them to [NSException](https://developer.apple.com/documentation/foundation/nsexception) objects containing a stack trace.
- [NSLogUncaughtRuntimeErrorMask](nsloguncaughtruntimeerrormask.md): The exception handler logs uncaught runtime errors.
- [NSHandleUncaughtRuntimeErrorMask](nshandleuncaughtruntimeerrormask.md): The exception handler handles uncaught runtime errors by converting them to [NSException](https://developer.apple.com/documentation/foundation/nsexception) objects containing a stack trace.
- [NSLogTopLevelExceptionMask](nslogtoplevelexceptionmask.md): The exception handler logs exceptions that would be caught by the top-level handler.
- [NSHandleTopLevelExceptionMask](nshandletoplevelexceptionmask.md): The exception handler handles exceptions caught by the top-level handler by converting them to [NSException](https://developer.apple.com/documentation/foundation/nsexception) objects containing a stack trace.
- [NSLogOtherExceptionMask](nslogotherexceptionmask.md): The exception handler logs exceptions caught by handlers lower than the top-level handler.
- [NSHandleOtherExceptionMask](nshandleotherexceptionmask.md): The exception handler handles exceptions caught by handlers lower than the top-level handler by converting them to [NSException](https://developer.apple.com/documentation/foundation/nsexception) objects containing a stack trace.
