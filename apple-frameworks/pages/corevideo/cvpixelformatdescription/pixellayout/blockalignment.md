> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvpixelformatdescription/pixellayout/blockalignment

# blockAlignment

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Alignment requirements on block multiples. v210 would be (8, 1) here for the horizontal case, to match the standard v210 row alignment value of 48.

## Declaration

```swift
var blockAlignment: CVPixelFormatDescription.Dimensions
```
