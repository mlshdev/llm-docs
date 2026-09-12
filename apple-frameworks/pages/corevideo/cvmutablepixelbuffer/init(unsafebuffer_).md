> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmutablepixelbuffer/init(unsafebuffer:)](https://developer.apple.com/documentation/corevideo/cvmutablepixelbuffer/init(unsafebuffer:))

# init(unsafeBuffer:)

**Framework:** Core Video  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Initialize a mutable pixel buffer by transferring existing CVPixelBuffer value.

## Declaration

```swift
init(unsafeBuffer: sending CVPixelBuffer)
```

## Parameters

- `unsafeBuffer`: Owership of this buffer is transferred to the new instance. This buffer is *not* copied and must not be modified after this call.
