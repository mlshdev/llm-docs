> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiobufferlist/sizeinbytes(maximumbuffers:)](https://developer.apple.com/documentation/coreaudiotypes/audiobufferlist/sizeinbytes(maximumbuffers:))

# sizeInBytes(maximumBuffers:)

**Framework:** Core Audio Types  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
static func sizeInBytes(maximumBuffers: Int) -> Int
```

<a id="return-value"></a>

## Return Value

The size in bytes of an `AudioBufferList` that can hold up to `maximumBuffers` `AudioBuffer`s.
