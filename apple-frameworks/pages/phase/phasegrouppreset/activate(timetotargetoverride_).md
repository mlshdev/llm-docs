> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasegrouppreset/activate(timetotargetoverride:)

# activate(timeToTargetOverride:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Applies settings with an overriden fade duration.

## Declaration

```swift
func activate(timeToTargetOverride: Double)
```

## Parameters

- `timeToTargetOverride`: A duration in which the engine fades the settings from their original value to their new value. Overrides [timeToTarget](timetotarget.md).

## See Also

### Activating a Group Preset

- [activate()](activate%28%29.md): Applies settings to the designated groups.

# activateWithTimeToTargetOverride: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Applies settings with an overriden fade duration.

## Declaration

```objectivec
- (void) activateWithTimeToTargetOverride:(double) timeToTargetOverride;
```

## Parameters

- `timeToTargetOverride`: A duration in which the engine fades the settings from their original value to their new value. Overrides [timeToTarget](timetotarget.md).

## See Also

### Activating a Group Preset

- [activate](activate%28%29.md): Applies settings to the designated groups.
