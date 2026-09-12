> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/decisions(in:)](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/decisions(in:))

# decisions(in:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

All decisions within the given time range.

## Declaration

```swift
final func decisions(in timeRange: CMTimeRange) -> [CNDecision]
```

## Parameters

- `timeRange`: The time range of the decision.

<a id="return-value"></a>

## Return Value

An array of decisions within the given time range.
