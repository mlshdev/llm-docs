> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/exitstatus/exitcode(_:)](https://developer.apple.com/documentation/testing/exitstatus/exitcode(_:))

# ExitStatus.exitCode(\_:)

**Framework:** Swift Testing  
**Kind:** Case  
**Availability:** Swift 6.2+ · Xcode 26.0+

The process exited with the given exit code.

## Declaration

```swift
case exitCode(CInt)
```

## Parameters

- `exitCode`: The exit code reported by the process.

<a id="discussion"></a>

## Discussion

The C programming language defines two standard exit codes, `EXIT_SUCCESS` and `EXIT_FAILURE`. Platforms may additionally define their own non-standard exit codes:

| Platform | Header |
| --- | --- |
| macOS | [\<stdlib.h\>](https://developer.apple.com/library/archive/documentation/System/Conceptual/ManPages_iPhoneOS/man3/_Exit.3.html), [\<sysexits.h\>](https://developer.apple.com/library/archive/documentation/System/Conceptual/ManPages_iPhoneOS/man3/sysexits.3.html) |
| Linux | [\<stdlib.h\>](https://www.kernel.org/doc/man-pages/online/pages/man3/exit.3.html), [\<sysexits.h\>](https://www.kernel.org/doc/man-pages/online/pages/man3/sysexits.h.3head.html) |
| FreeBSD | [\<stdlib.h\>](https://man.freebsd.org/cgi/man.cgi?exit%283%29), [\<sysexits.h\>](https://man.freebsd.org/cgi/man.cgi?sysexits%283%29) |
| OpenBSD | [\<stdlib.h\>](https://man.openbsd.org/exit.3), [\<sysexits.h\>](https://man.openbsd.org/sysexits.3) |
| Windows | [\<stdlib.h\>](https://learn.microsoft.com/en-us/cpp/c-runtime-library/exit-success-exit-failure) |

On macOS, FreeBSD, OpenBSD, and Windows, the full exit code reported by the process is reported to the parent process. Linux and other POSIX-like systems may only reliably report the low unsigned 8 bits (0–255) of the exit code.
