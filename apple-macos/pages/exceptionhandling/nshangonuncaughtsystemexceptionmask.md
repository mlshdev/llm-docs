> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/exceptionhandling/nshangonuncaughtsystemexceptionmask

# NSHangOnUncaughtSystemExceptionMask (Swift)

**Framework:** Exception Handling  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The exception handler suspends execution when it detects an uncaught system exception.

## Declaration

```swift
var NSHangOnUncaughtSystemExceptionMask: Int { get }
```

## See Also

### Constants

- [NSHangOnUncaughtExceptionMask](nshangonuncaughtexceptionmask.md): The exception handler suspends execution when it detects an uncaught exception (other than a system exception or runtime error).
- [NSHangOnUncaughtRuntimeErrorMask](nshangonuncaughtruntimeerrormask.md): The exception handler suspends execution when it detects an uncaught runtime error.
- [NSHangOnTopLevelExceptionMask](nshangontoplevelexceptionmask.md): The exception handler suspends execution when it detects an exception that would be handled by the top-level handler.
- [NSHangOnOtherExceptionMask](nshangonotherexceptionmask.md): The exception handler suspends execution when it detects an exception that would be handled by an object other than the top-level handler.

# NSHangOnUncaughtSystemExceptionMask (Objective-C)

**Framework:** Exception Handling  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The exception handler suspends execution when it detects an uncaught system exception.

## Declaration

```objectivec
NSHangOnUncaughtSystemExceptionMask
```

## See Also

### Constants

- [NSHangOnUncaughtExceptionMask](nshangonuncaughtexceptionmask.md): The exception handler suspends execution when it detects an uncaught exception (other than a system exception or runtime error).
- [NSHangOnUncaughtRuntimeErrorMask](nshangonuncaughtruntimeerrormask.md): The exception handler suspends execution when it detects an uncaught runtime error.
- [NSHangOnTopLevelExceptionMask](nshangontoplevelexceptionmask.md): The exception handler suspends execution when it detects an exception that would be handled by the top-level handler.
- [NSHangOnOtherExceptionMask](nshangonotherexceptionmask.md): The exception handler suspends execution when it detects an exception that would be handled by an object other than the top-level handler.
