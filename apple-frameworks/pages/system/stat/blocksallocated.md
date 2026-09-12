> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/stat/blocksallocated](https://developer.apple.com/documentation/system/stat/blocksallocated)

# blocksAllocated

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Number of 512-byte blocks allocated

## Declaration

```swift
var blocksAllocated: Int64 { get set }
```

<a id="discussion"></a>

## Discussion

The semantics of this property are tied to the underlying C `st_blocks` field, which can have file-system–dependent behavior.

The corresponding C property is `st_blocks`.
