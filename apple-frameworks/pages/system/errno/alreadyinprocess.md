> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/alreadyinprocess](https://developer.apple.com/documentation/system/errno/alreadyinprocess)

# alreadyInProcess

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Operation already in progress.

## Declaration

```swift
static var alreadyInProcess: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

You attempted an operation on a nonblocking object that already had an operation in progress.

The corresponding C error is `EALREADY`.

## See Also

### System Call Errors

- [badAddress](badaddress.md): Bad address.
- [interrupted](interrupted.md): Interrupted function call.
- [invalidArgument](invalidargument.md): Invalid argument.
- [noFunction](nofunction.md): Function not implemented.
- [nowInProgress](nowinprogress.md): Operation now in progress.
- [resourceBusy](resourcebusy.md): Resource busy.
- [resourceTemporarilyUnavailable](resourcetemporarilyunavailable.md): Resource temporarily unavailable.
