> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/resourcebusy](https://developer.apple.com/documentation/system/errno/resourcebusy)

# resourceBusy

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Resource busy.

## Declaration

```swift
static var resourceBusy: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

You attempted to use a system resource which was in use at the time, in a manner that would have conflicted with the request.

The corresponding C error is `EBUSY`.

## See Also

### System Call Errors

- [alreadyInProcess](alreadyinprocess.md): Operation already in progress.
- [badAddress](badaddress.md): Bad address.
- [interrupted](interrupted.md): Interrupted function call.
- [invalidArgument](invalidargument.md): Invalid argument.
- [noFunction](nofunction.md): Function not implemented.
- [nowInProgress](nowinprogress.md): Operation now in progress.
- [resourceTemporarilyUnavailable](resourcetemporarilyunavailable.md): Resource temporarily unavailable.
