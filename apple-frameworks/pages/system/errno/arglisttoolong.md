> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/arglisttoolong](https://developer.apple.com/documentation/system/errno/arglisttoolong)

# argListTooLong

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The argument list is too long.

## Declaration

```swift
static var argListTooLong: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The number of bytes used for the argument and environment list of the new process exceeded the limit `NCARGS`, as defined in `<sys/param.h>`.

The corresponding C error is `E2BIG`.

## See Also

### Process Errors

- [identifierRemoved](identifierremoved.md): Identifier removed.
- [noChildProcess](nochildprocess.md): No child processes.
- [noSuchProcess](nosuchprocess.md): No such process.
- [previousOwnerDied](previousownerdied.md): Previous pthread mutex owner died.
- [tooManyProcesses](toomanyprocesses.md): Too many processes.
