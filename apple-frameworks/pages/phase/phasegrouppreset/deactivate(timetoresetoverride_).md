> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasegrouppreset/deactivate(timetoresetoverride:)

# deactivate(timeToResetOverride:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Reverts settings for the preset’s groups using a timed adjustment.

## Declaration

```swift
func deactivate(timeToResetOverride: Double)
```

## Parameters

- `timeToResetOverride`: A duration that overrides [timeToReset](timetoreset.md), in which the engine restores the group’s original state.

## See Also

### Deactivating a Group Preset

- [deactivate()](deactivate%28%29.md): Reverts settings for the preset’s groups.

# deactivateWithTimeToResetOverride: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Reverts settings for the preset’s groups using a timed adjustment.

## Declaration

```objectivec
- (void) deactivateWithTimeToResetOverride:(double) timeToResetOverride;
```

## Parameters

- `timeToResetOverride`: A duration that overrides [timeToReset](timetoreset.md), in which the engine restores the group’s original state.

## See Also

### Deactivating a Group Preset

- [deactivate](deactivate%28%29.md): Reverts settings for the preset’s groups.
