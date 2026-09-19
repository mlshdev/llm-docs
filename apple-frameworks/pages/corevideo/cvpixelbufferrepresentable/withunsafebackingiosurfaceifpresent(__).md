> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvpixelbufferrepresentable/withunsafebackingiosurfaceifpresent(_:)

# withUnsafeBackingIOSurfaceIfPresent(\_:)

**Framework:** Core Video  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Access the IOSurface backing the pixel buffer if present.

## Declaration

```swift
func withUnsafeBackingIOSurfaceIfPresent<R>(_ block: (IOSurface) throws -> sending R) rethrows -> sending R?
```
