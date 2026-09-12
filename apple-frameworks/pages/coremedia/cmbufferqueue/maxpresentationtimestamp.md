> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueue/maxpresentationtimestamp](https://developer.apple.com/documentation/coremedia/cmbufferqueue/maxpresentationtimestamp)

# maxPresentationTimeStamp

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The greatest presentation timestamp.

## Declaration

```swift
var maxPresentationTimeStamp: CMTime { get }
```

## See Also

### Inspecting Duration and Timing

- [duration](duration.md): The sum of all durations of buffers in the queue.
- [totalSize](totalsize.md): The total size of all buffers in the queue.
- [firstDecodeTimeStamp](firstdecodetimestamp.md): The decode timestamp of the first buffer in the queue.
- [firstPresentationTimeStamp](firstpresentationtimestamp.md): The presentation timestamp of the first buffer in the queue.
- [endPresentationTimeStamp](endpresentationtimestamp.md): The greatest end presentation timestamp.
- [minDecodeTimeStamp](mindecodetimestamp.md): The earliest decode timestamp.
- [minPresentationTimeStamp](minpresentationtimestamp.md): The earliest presentation timestamp.
