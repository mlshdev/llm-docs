> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/exittest/condition/signal(_:)](https://developer.apple.com/documentation/testing/exittest/condition/signal(_:))

# signal(\_:)

**Framework:** Swift Testing  
**Kind:** Type Method  
**Availability:** Swift 6.2+ · Xcode 26.0+

Creates a condition that matches when a process exits with a given signal.

## Declaration

```swift
static func signal(_ signal: CInt) -> ExitTest.Condition
```

## Parameters

- `signal`: The signal that caused the process to exit.

## Mentioned In

- [Exit testing](../../exit-testing.md)

<a id="discussion"></a>

## Discussion

The C programming language defines a number of standard signals. Platforms may additionally define their own non-standard signal codes:

| Platform | Header |
| --- | --- |
| macOS | [\<signal.h\>](https://developer.apple.com/library/archive/documentation/System/Conceptual/ManPages_iPhoneOS/man3/signal.3.html) |
| Linux | [\<signal.h\>](https://www.kernel.org/doc/man-pages/online/pages/man7/signal.7.html) |
| FreeBSD | [\<signal.h\>](https://man.freebsd.org/cgi/man.cgi?signal%283%29) |
| OpenBSD | [\<signal.h\>](https://man.openbsd.org/signal.3) |
| Windows | [\<signal.h\>](https://learn.microsoft.com/en-us/cpp/c-runtime-library/signal-constants) |

## See Also

### Failing exit conditions

- [failure](failure.md): A condition that matches when a process exits abnormally
- [exitCode(\_:)](exitcode%28__%29.md): Creates a condition that matches when a process terminates with a given exit code.
