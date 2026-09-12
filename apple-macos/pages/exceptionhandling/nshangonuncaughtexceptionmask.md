> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/exceptionhandling/nshangonuncaughtexceptionmask](https://developer.apple.com/documentation/exceptionhandling/nshangonuncaughtexceptionmask)

# NSHangOnUncaughtExceptionMask (Swift)

**Framework:** Exception Handling  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The exception handler suspends execution when it detects an uncaught exception (other than a system exception or runtime error).

## Declaration

```swift
var NSHangOnUncaughtExceptionMask: Int { get }
```

## See Also

### Constants

- [NSHangOnUncaughtSystemExceptionMask](nshangonuncaughtsystemexceptionmask.md): The exception handler suspends execution when it detects an uncaught system exception.
- [NSHangOnUncaughtRuntimeErrorMask](nshangonuncaughtruntimeerrormask.md): The exception handler suspends execution when it detects an uncaught runtime error.
- [NSHangOnTopLevelExceptionMask](nshangontoplevelexceptionmask.md): The exception handler suspends execution when it detects an exception that would be handled by the top-level handler.
- [NSHangOnOtherExceptionMask](nshangonotherexceptionmask.md): The exception handler suspends execution when it detects an exception that would be handled by an object other than the top-level handler.

# NSHangOnUncaughtExceptionMask (Objective-C)

**Framework:** Exception Handling  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The exception handler suspends execution when it detects an uncaught exception (other than a system exception or runtime error).

## Declaration

```objectivec
NSHangOnUncaughtExceptionMask
```

## See Also

### Constants

- [NSHangOnUncaughtSystemExceptionMask](nshangonuncaughtsystemexceptionmask.md): The exception handler suspends execution when it detects an uncaught system exception.
- [NSHangOnUncaughtRuntimeErrorMask](nshangonuncaughtruntimeerrormask.md): The exception handler suspends execution when it detects an uncaught runtime error.
- [NSHangOnTopLevelExceptionMask](nshangontoplevelexceptionmask.md): The exception handler suspends execution when it detects an exception that would be handled by the top-level handler.
- [NSHangOnOtherExceptionMask](nshangonotherexceptionmask.md): The exception handler suspends execution when it detects an exception that would be handled by an object other than the top-level handler.
