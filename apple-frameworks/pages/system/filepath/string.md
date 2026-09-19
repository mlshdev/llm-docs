> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/filepath/string

# string

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a string by interpreting the path’s content as UTF-8 on Unix and UTF-16 on Windows.

## Declaration

```swift
var string: String { get }
```

<a id="discussion"></a>

## Discussion

This property is equivalent to calling `String(decoding: path)`
