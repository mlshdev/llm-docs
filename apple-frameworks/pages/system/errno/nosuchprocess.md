> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/nosuchprocess](https://developer.apple.com/documentation/system/errno/nosuchprocess)

# noSuchProcess

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

No such process.

## Declaration

```swift
static var noSuchProcess: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

There isn’t a process that corresponds to the specified process ID.

The corresponding C error is `ESRCH`.

## See Also

### Process Errors

- [argListTooLong](arglisttoolong.md): The argument list is too long.
- [identifierRemoved](identifierremoved.md): Identifier removed.
- [noChildProcess](nochildprocess.md): No child processes.
- [previousOwnerDied](previousownerdied.md): Previous pthread mutex owner died.
- [tooManyProcesses](toomanyprocesses.md): Too many processes.
