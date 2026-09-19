> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/stat/sizeallocated

# sizeAllocated

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Total size allocated, in bytes

## Declaration

```swift
var sizeAllocated: Int64 { get }
```

<a id="discussion"></a>

## Discussion

The semantics of this property are tied to the underlying C `st_blocks` field, which can have file-system–dependent behavior.

> **Note**

> Calculated as `512 * blocksAllocated`.
