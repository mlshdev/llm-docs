> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/invalidargument](https://developer.apple.com/documentation/system/errno/invalidargument)

# invalidArgument

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Invalid argument.

## Declaration

```swift
static var invalidArgument: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

One or more of the specified arguments wasn’t valid; for example, specifying an undefined signal to a signal or kill function.

The corresponding C error is `EINVAL`.

## See Also

### System Call Errors

- [alreadyInProcess](alreadyinprocess.md): Operation already in progress.
- [badAddress](badaddress.md): Bad address.
- [interrupted](interrupted.md): Interrupted function call.
- [noFunction](nofunction.md): Function not implemented.
- [nowInProgress](nowinprogress.md): Operation now in progress.
- [resourceBusy](resourcebusy.md): Resource busy.
- [resourceTemporarilyUnavailable](resourcetemporarilyunavailable.md): Resource temporarily unavailable.
