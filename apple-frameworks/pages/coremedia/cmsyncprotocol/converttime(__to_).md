> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsyncprotocol/converttime(_:to:)](https://developer.apple.com/documentation/coremedia/cmsyncprotocol/converttime(_:to:))

# convertTime(\_:to:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a time from one timebase or clock to another timebase or clock.

## Declaration

```swift
func convertTime<T>(_ time: CMTime, to clockOrTimebase: T) -> CMTime where T : CMSyncProtocol
```

## Parameters

- `time`: The time to convert from.
- `clockOrTimebase`: The clock or time to convert to.
