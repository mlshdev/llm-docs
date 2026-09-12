> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/resourcetemporarilyunavailable](https://developer.apple.com/documentation/system/errno/resourcetemporarilyunavailable)

# resourceTemporarilyUnavailable

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Resource temporarily unavailable.

## Declaration

```swift
static var resourceTemporarilyUnavailable: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

This is a temporary condition; later calls to the same routine may complete normally. Make the same function call again later.

The corresponding C error is `EAGAIN`.

## See Also

### System Call Errors

- [alreadyInProcess](alreadyinprocess.md): Operation already in progress.
- [badAddress](badaddress.md): Bad address.
- [interrupted](interrupted.md): Interrupted function call.
- [invalidArgument](invalidargument.md): Invalid argument.
- [noFunction](nofunction.md): Function not implemented.
- [nowInProgress](nowinprogress.md): Operation now in progress.
- [resourceBusy](resourcebusy.md): Resource busy.
