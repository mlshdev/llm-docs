> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmbufferqueue/mindecodetimestamp

# minDecodeTimeStamp

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The earliest decode timestamp.

## Declaration

```swift
var minDecodeTimeStamp: CMTime { get }
```

## See Also

### Inspecting Duration and Timing

- [duration](duration.md): The sum of all durations of buffers in the queue.
- [totalSize](totalsize.md): The total size of all buffers in the queue.
- [firstDecodeTimeStamp](firstdecodetimestamp.md): The decode timestamp of the first buffer in the queue.
- [firstPresentationTimeStamp](firstpresentationtimestamp.md): The presentation timestamp of the first buffer in the queue.
- [endPresentationTimeStamp](endpresentationtimestamp.md): The greatest end presentation timestamp.
- [minPresentationTimeStamp](minpresentationtimestamp.md): The earliest presentation timestamp.
- [maxPresentationTimeStamp](maxpresentationtimestamp.md): The greatest presentation timestamp.
