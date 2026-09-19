> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/randomaccesscontroller/markconfigurationasfinal()

# markConfigurationAsFinal()

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Informs the provider that no more reconfiguration of time ranges is necessary and allows the attached AVAssetReader to advance to `AVAssetReaderStatus/completed`.

## Declaration

```swift
func markConfigurationAsFinal()
```

## See Also

### Configuring a controller

- [resetForReading(timeRanges:)](resetforreading%28timeranges_%29.md): Starts reading over with a new set of time ranges.
