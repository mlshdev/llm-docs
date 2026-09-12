> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadonlydatablockbuffer/blockregion/withunsafebytes(_:)](https://developer.apple.com/documentation/coremedia/cmreadonlydatablockbuffer/blockregion/withunsafebytes(_:))

# withUnsafeBytes(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Calls the given closure with a pointer to the underlying bytes of the region’s contiguous storage.

## Declaration

```swift
func withUnsafeBytes<ResultType>(_ body: (UnsafeRawBufferPointer) throws -> ResultType) rethrows -> ResultType
```
