> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmutablepixelbuffer/pool/configuration/minimumbuffercount](https://developer.apple.com/documentation/corevideo/cvmutablepixelbuffer/pool/configuration/minimumbuffercount)

# minimumBufferCount

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The pool keeps at least this many buffers alive. These buffers do not participate in the age-out mechanism.

## Declaration

```swift
var minimumBufferCount: Int
```
