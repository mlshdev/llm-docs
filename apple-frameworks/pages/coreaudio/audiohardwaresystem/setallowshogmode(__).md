> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/setallowshogmode(_:)

# setAllowsHogMode(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the allowsHogMode property.

## Declaration

```swift
func setAllowsHogMode(_ allowed: Bool) throws
```

## Parameters

- `allowed`: A Bool where true indicates that this process wants the HAL to automatically take hog mode on behalf of the process.
