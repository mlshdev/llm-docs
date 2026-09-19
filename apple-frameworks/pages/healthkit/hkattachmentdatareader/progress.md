> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkattachmentdatareader/progress

# progress

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

An object you can use to track the progress while reading an attachment’s data.

## Declaration

```swift
var progress: Progress { get }
```

## See Also

### Reading attachment data

- [data](data.md): The abstract’s data.
- [bytes](bytes.md): An asynchronous sequence that provides the attachment’s data.
