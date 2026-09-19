> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscript-1ispe/frame(at:tolerance:)

# frame(at:tolerance:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

The closest frame to the given time within the given tolerance.

## Declaration

```swift
final func frame(at time: CMTime, tolerance: CMTime) -> CNScript.Frame?
```

## Parameters

- `time`: The time of interest.
- `tolerance`: The tolerance time.

<a id="return-value"></a>

## Return Value

The closest frame to the time of interest within the given tolerance.
