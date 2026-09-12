> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/nochildprocess](https://developer.apple.com/documentation/system/errno/nochildprocess)

# noChildProcess

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

No child processes.

## Declaration

```swift
static var noChildProcess: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A `wait(2)` or `waitpid(2)` function was executed by a process that doesn’t have any existing child processes or whose child processes are all already being waited for.

The corresponding C error is `ECHILD`.

## See Also

### Process Errors

- [argListTooLong](arglisttoolong.md): The argument list is too long.
- [identifierRemoved](identifierremoved.md): Identifier removed.
- [noSuchProcess](nosuchprocess.md): No such process.
- [previousOwnerDied](previousownerdied.md): Previous pthread mutex owner died.
- [tooManyProcesses](toomanyprocesses.md): Too many processes.
