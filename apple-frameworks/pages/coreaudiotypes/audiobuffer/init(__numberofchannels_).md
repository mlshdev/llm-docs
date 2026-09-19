> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudiotypes/audiobuffer/init(_:numberofchannels:)

# init(\_:numberOfChannels:)

**Framework:** Core Audio Types  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Initialize an `AudioBuffer` from an `UnsafeMutableBufferPointer<Element>`.

## Declaration

```swift
init<Element>(_ typedBuffer: UnsafeMutableBufferPointer<Element>, numberOfChannels: Int)
```
