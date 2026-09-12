> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/illegalseek](https://developer.apple.com/documentation/system/errno/illegalseek)

# illegalSeek

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Illegal seek.

## Declaration

```swift
static var illegalSeek: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

An `lseek(2)` function was issued on a socket, pipe or FIFO.

The corresponding C error is `ESPIPE`.

## See Also

### Pipe Errors

- [brokenPipe](brokenpipe.md): Broken pipe.
