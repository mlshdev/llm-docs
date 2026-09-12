> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaresystem/allowshogmode](https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/allowshogmode)

# allowsHogMode

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A Bool where true indicates that this process wants the HAL to automatically take hog mode and false indicates that the HAL should not automatically take hog mode on behalf of the process.

## Declaration

```swift
var allowsHogMode: Bool { get throws }
```

<a id="discussion"></a>

## Discussion

Processes that only ever use the default device are the sort that should set this property’s value to false.
