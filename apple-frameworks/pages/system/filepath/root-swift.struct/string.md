> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/filepath/root-swift.struct/string

# string

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

On Unix, this returns `"/"`.

## Declaration

```swift
var string: String { get }
```

<a id="discussion"></a>

## Discussion

On Windows, interprets the root’s content as UTF-16 on Windows.

This property is equivalent to calling `String(decoding: root)`.
