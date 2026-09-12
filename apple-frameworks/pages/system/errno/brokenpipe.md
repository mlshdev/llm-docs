> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/brokenpipe](https://developer.apple.com/documentation/system/errno/brokenpipe)

# brokenPipe

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Broken pipe.

## Declaration

```swift
static var brokenPipe: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

You attempted to write to a pipe, socket, or FIFO that doesn’t have a process reading its data.

The corresponding C error is `EPIPE`.

## See Also

### Pipe Errors

- [illegalSeek](illegalseek.md): Illegal seek.
