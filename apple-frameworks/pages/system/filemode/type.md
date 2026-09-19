> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/filemode/type

# type

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The file’s type, from the mode’s file-type bits.

## Declaration

```swift
var type: FileType { get set }
```

<a id="discussion"></a>

## Discussion

Setting this property will mask the `newValue` with the file-type bit mask `S_IFMT`.
