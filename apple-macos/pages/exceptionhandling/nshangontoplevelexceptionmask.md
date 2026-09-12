> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/exceptionhandling/nshangontoplevelexceptionmask](https://developer.apple.com/documentation/exceptionhandling/nshangontoplevelexceptionmask)

# NSHangOnTopLevelExceptionMask (Swift)

**Framework:** Exception Handling  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The exception handler suspends execution when it detects an exception that would be handled by the top-level handler.

## Declaration

```swift
var NSHangOnTopLevelExceptionMask: Int { get }
```

## See Also

### Constants

- [NSHangOnUncaughtExceptionMask](nshangonuncaughtexceptionmask.md): The exception handler suspends execution when it detects an uncaught exception (other than a system exception or runtime error).
- [NSHangOnUncaughtSystemExceptionMask](nshangonuncaughtsystemexceptionmask.md): The exception handler suspends execution when it detects an uncaught system exception.
- [NSHangOnUncaughtRuntimeErrorMask](nshangonuncaughtruntimeerrormask.md): The exception handler suspends execution when it detects an uncaught runtime error.
- [NSHangOnOtherExceptionMask](nshangonotherexceptionmask.md): The exception handler suspends execution when it detects an exception that would be handled by an object other than the top-level handler.

# NSHangOnTopLevelExceptionMask (Objective-C)

**Framework:** Exception Handling  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The exception handler suspends execution when it detects an exception that would be handled by the top-level handler.

## Declaration

```objectivec
NSHangOnTopLevelExceptionMask
```

## See Also

### Constants

- [NSHangOnUncaughtExceptionMask](nshangonuncaughtexceptionmask.md): The exception handler suspends execution when it detects an uncaught exception (other than a system exception or runtime error).
- [NSHangOnUncaughtSystemExceptionMask](nshangonuncaughtsystemexceptionmask.md): The exception handler suspends execution when it detects an uncaught system exception.
- [NSHangOnUncaughtRuntimeErrorMask](nshangonuncaughtruntimeerrormask.md): The exception handler suspends execution when it detects an uncaught runtime error.
- [NSHangOnOtherExceptionMask](nshangonotherexceptionmask.md): The exception handler suspends execution when it detects an exception that would be handled by an object other than the top-level handler.
