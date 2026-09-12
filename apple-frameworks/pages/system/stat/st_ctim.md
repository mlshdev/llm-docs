> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/stat/st_ctim](https://developer.apple.com/documentation/system/stat/st_ctim)

# st_ctim

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Time of last status (inode) change, given as a C `timespec` since the Epoch.

## Declaration

```swift
var st_ctim: timespec { get set }
```

<a id="discussion"></a>

## Discussion

The corresponding C property is `st_ctim` (or `st_ctimespec` on Darwin).
