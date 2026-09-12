> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/badmessage](https://developer.apple.com/documentation/system/errno/badmessage)

# badMessage

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Bad message.

## Declaration

```swift
static var badMessage: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The message to be received is inappropriate for the attempted operation.

The corresponding C error is `EBADMSG`.

## See Also

### General Errors

- [canceled](canceled.md): Operation canceled.
- [illegalByteSequence](illegalbytesequence.md): Illegal byte sequence.
- [noData](nodata.md): No message available.
- [noMessage](nomessage.md): No message of desired type.
- [noSuchPolicy](nosuchpolicy.md): No such policy registered.
- [notPermitted](notpermitted.md): Operation not permitted.
- [notRecoverable](notrecoverable.md): State not recoverable.
- [outputQueueFull](outputqueuefull.md): Interface output queue is full.
- [tooManyReferences](toomanyreferences.md): Too many references: can’t splice.
- [tooManyUsers](toomanyusers.md): Too many users.
