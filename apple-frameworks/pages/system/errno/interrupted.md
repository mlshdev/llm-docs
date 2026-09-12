> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/interrupted](https://developer.apple.com/documentation/system/errno/interrupted)

# interrupted

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Interrupted function call.

## Declaration

```swift
static var interrupted: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The process caught an asynchronous signal (such as `SIGINT` or `SIGQUIT`) during the execution of an interruptible function. If the signal handler performs a normal return, the caller of the interrupted function call receives this error.

The corresponding C error is `EINTR`.

## See Also

### System Call Errors

- [alreadyInProcess](alreadyinprocess.md): Operation already in progress.
- [badAddress](badaddress.md): Bad address.
- [invalidArgument](invalidargument.md): Invalid argument.
- [noFunction](nofunction.md): Function not implemented.
- [nowInProgress](nowinprogress.md): Operation now in progress.
- [resourceBusy](resourcebusy.md): Resource busy.
- [resourceTemporarilyUnavailable](resourcetemporarilyunavailable.md): Resource temporarily unavailable.
