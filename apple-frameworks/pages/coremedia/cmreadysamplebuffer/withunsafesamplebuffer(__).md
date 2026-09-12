> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadysamplebuffer/withunsafesamplebuffer(_:)](https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/withunsafesamplebuffer(_:))

# withUnsafeSampleBuffer(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Access the underlying CMSampleBuffer instance.

## Declaration

```swift
func withUnsafeSampleBuffer<R>(_ body: (CMSampleBuffer) throws -> sending R) rethrows -> sending R where R : ~Copyable
```
