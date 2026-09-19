> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/stat/size

# size

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Total size, in bytes

## Declaration

```swift
var size: Int64 { get set }
```

<a id="discussion"></a>

## Discussion

The semantics of this property are tied to the underlying C `st_size` field, which can have file-system–dependent behavior. For example, this property can return different values for a file’s data fork and resource fork, and some file systems report logical size rather than actual disk usage for compressed or cloned files.

The corresponding C property is `st_size`.
