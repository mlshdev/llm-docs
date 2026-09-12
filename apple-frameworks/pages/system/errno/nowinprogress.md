> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/nowinprogress](https://developer.apple.com/documentation/system/errno/nowinprogress)

# nowInProgress

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Operation now in progress.

## Declaration

```swift
static var nowInProgress: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

You attempted an operation that takes a long time to complete, such as `connect(2)` or `connectx(2)`, on a nonblocking object. See also `fcntl(2)`.

The corresponding C error is `EINPROGRESS`.

## See Also

### System Call Errors

- [alreadyInProcess](alreadyinprocess.md): Operation already in progress.
- [badAddress](badaddress.md): Bad address.
- [interrupted](interrupted.md): Interrupted function call.
- [invalidArgument](invalidargument.md): Invalid argument.
- [noFunction](nofunction.md): Function not implemented.
- [resourceBusy](resourcebusy.md): Resource busy.
- [resourceTemporarilyUnavailable](resourcetemporarilyunavailable.md): Resource temporarily unavailable.
