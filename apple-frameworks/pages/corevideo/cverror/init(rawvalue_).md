> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cverror/init(rawvalue:)

# init(rawValue:)

**Framework:** Core Video  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates `CVError` with the given error code. Returns nil if `rawValue` is `kCVReturnSuccess`

## Declaration

```swift
init?(rawValue: CVReturn)
```
