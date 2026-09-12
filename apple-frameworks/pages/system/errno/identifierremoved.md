> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/identifierremoved](https://developer.apple.com/documentation/system/errno/identifierremoved)

# identifierRemoved

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Identifier removed.

## Declaration

```swift
static var identifierRemoved: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

An IPC identifier was removed while the current process was waiting on it.

The corresponding C error is `EIDRM`.

## See Also

### Process Errors

- [argListTooLong](arglisttoolong.md): The argument list is too long.
- [noChildProcess](nochildprocess.md): No child processes.
- [noSuchProcess](nosuchprocess.md): No such process.
- [previousOwnerDied](previousownerdied.md): Previous pthread mutex owner died.
- [tooManyProcesses](toomanyprocesses.md): Too many processes.
