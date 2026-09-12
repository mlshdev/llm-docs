> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegrouppreset/deactivate()](https://developer.apple.com/documentation/phase/phasegrouppreset/deactivate())

# deactivate() (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Reverts settings for the preset’s groups.

## Declaration

```swift
func deactivate()
```

<a id="Discussion"></a>

## Discussion

When you call this function, the framework restores the group’s default state by removing the preset’s settings. The settings fade over the [timeToReset](timetoreset.md) duration, and the engine removes the preset from [activeGroupPreset](../phaseengine/activegrouppreset.md).

## See Also

### Deactivating a Group Preset

- [deactivate(timeToResetOverride:)](deactivate%28timetoresetoverride_%29.md): Reverts settings for the preset’s groups using a timed adjustment.

# deactivate (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Reverts settings for the preset’s groups.

## Declaration

```objectivec
- (void) deactivate;
```

<a id="Discussion"></a>

## Discussion

When you call this function, the framework restores the group’s default state by removing the preset’s settings. The settings fade over the [timeToReset](timetoreset.md) duration, and the engine removes the preset from [activeGroupPreset](../phaseengine/activegrouppreset.md).

## See Also

### Deactivating a Group Preset

- [deactivateWithTimeToResetOverride:](deactivate%28timetoresetoverride_%29.md): Reverts settings for the preset’s groups using a timed adjustment.
