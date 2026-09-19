> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/opticalflowobservation/withunsafepointer(_:)

# withUnsafePointer(\_:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Invokes the given closure with a pointer to the given argument.

## Declaration

```swift
func withUnsafePointer<R>(_ body: (UnsafeRawPointer) -> R) -> R
```
