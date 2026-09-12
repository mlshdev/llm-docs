> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/stat/preferredioblocksize](https://developer.apple.com/documentation/system/stat/preferredioblocksize)

# preferredIOBlockSize

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Block size for file system I/O, in bytes

## Declaration

```swift
var preferredIOBlockSize: Int { get set }
```

<a id="discussion"></a>

## Discussion

The corresponding C property is `st_blksize`.
