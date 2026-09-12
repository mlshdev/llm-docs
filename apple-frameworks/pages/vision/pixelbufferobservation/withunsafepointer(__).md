> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/pixelbufferobservation/withunsafepointer(_:)](https://developer.apple.com/documentation/vision/pixelbufferobservation/withunsafepointer(_:))

# withUnsafePointer(\_:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Invokes the given closure with a pointer to the given argument.

## Declaration

```swift
func withUnsafePointer<R>(_ body: (UnsafeRawPointer) -> R) -> R
```
