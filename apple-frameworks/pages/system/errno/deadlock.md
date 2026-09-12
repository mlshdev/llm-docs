> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/deadlock](https://developer.apple.com/documentation/system/errno/deadlock)

# deadlock

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Resource deadlock avoided.

## Declaration

```swift
static var deadlock: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

You attempted to lock a system resource that would have resulted in a deadlock.

The corresponding C error is `EDEADLK`.

## See Also

### Runtime Errors

- [noMemory](nomemory.md): Can’t allocate memory.
- [wouldBlock](wouldblock.md): Operation would block.
