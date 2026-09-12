> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/stat/type](https://developer.apple.com/documentation/system/stat/type)

# type

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

File type for the given mode

## Declaration

```swift
var type: FileType { get set }
```

<a id="discussion"></a>

## Discussion

> **Note**

> This property is equivalent to `mode.type`. Modifying this property will update the underlying `st_mode` accordingly.
