> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/changes(trimmedby:)](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/changes(trimmedby:))

# changes(trimmedBy:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Changes trimmed and time range shifted to start at zero.

## Declaration

```swift
final func changes(trimmedBy timeRange: CMTimeRange) -> CNScript.Changes
```

## Parameters

- `timeRange`: The time range of interest.

<a id="return-value"></a>

## Return Value

Script changes trimmed and time range shifted to start at zero.
