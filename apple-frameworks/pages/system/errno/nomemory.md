> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/nomemory](https://developer.apple.com/documentation/system/errno/nomemory)

# noMemory

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Can’t allocate memory.

## Declaration

```swift
static var noMemory: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The new process image required more memory than was allowed by the hardware or by system-imposed memory management constraints. A lack of swap space is normally temporary; however, a lack of core is not. You can increase soft limits up to their corresponding hard limits.

The corresponding C error is `ENOMEM`.

## See Also

### Runtime Errors

- [deadlock](deadlock.md): Resource deadlock avoided.
- [wouldBlock](wouldblock.md): Operation would block.
