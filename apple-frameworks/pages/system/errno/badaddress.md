> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/badaddress](https://developer.apple.com/documentation/system/errno/badaddress)

# badAddress

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Bad address.

## Declaration

```swift
static var badAddress: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

An address passed as an argument to a system call was invalid.

The corresponding C error is `EFAULT`.

## See Also

### System Call Errors

- [alreadyInProcess](alreadyinprocess.md): Operation already in progress.
- [interrupted](interrupted.md): Interrupted function call.
- [invalidArgument](invalidargument.md): Invalid argument.
- [noFunction](nofunction.md): Function not implemented.
- [nowInProgress](nowinprogress.md): Operation now in progress.
- [resourceBusy](resourcebusy.md): Resource busy.
- [resourceTemporarilyUnavailable](resourcetemporarilyunavailable.md): Resource temporarily unavailable.
