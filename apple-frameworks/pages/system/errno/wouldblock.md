> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/wouldblock](https://developer.apple.com/documentation/system/errno/wouldblock)

# wouldBlock

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Operation would block.

## Declaration

```swift
static var wouldBlock: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The corresponding C error is `EWOULDBLOCK`.

## See Also

### Runtime Errors

- [deadlock](deadlock.md): Resource deadlock avoided.
- [noMemory](nomemory.md): Can’t allocate memory.
