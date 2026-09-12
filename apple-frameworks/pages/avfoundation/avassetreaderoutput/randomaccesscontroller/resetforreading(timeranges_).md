> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutput/randomaccesscontroller/resetforreading(timeranges:)](https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/randomaccesscontroller/resetforreading(timeranges:))

# resetForReading(timeRanges:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Starts reading over with a new set of time ranges.

## Declaration

```swift
func resetForReading(timeRanges: [CMTimeRange])
```

## Parameters

- `timeRanges`: The time ranges to read

## See Also

### Configuring a controller

- [markConfigurationAsFinal()](markconfigurationasfinal%28%29.md): Informs the provider that no more reconfiguration of time ranges is necessary and allows the attached AVAssetReader to advance to `AVAssetReaderStatus/completed`.
