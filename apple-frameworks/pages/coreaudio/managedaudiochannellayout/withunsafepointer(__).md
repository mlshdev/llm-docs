> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/managedaudiochannellayout/withunsafepointer(_:)

# withUnsafePointer(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calls a closure with a pointer to the backing `AudioChannelLayout`.

## Declaration

```swift
func withUnsafePointer<Result>(_ body: (UnsafePointer<AudioChannelLayout>) throws -> Result) rethrows -> Result
```

## Parameters

- `body`: A closure that is called with a pointer to the backing `AudioChannelLayout`.
