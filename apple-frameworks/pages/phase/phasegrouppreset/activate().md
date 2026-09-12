> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegrouppreset/activate()](https://developer.apple.com/documentation/phase/phasegrouppreset/activate())

# activate() (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Applies settings to the designated groups.

## Declaration

```swift
func activate()
```

<a id="Discussion"></a>

## Discussion

When you call this function, the framework assigns the group preset as the engine’s [activeGroupPreset](../phaseengine/activegrouppreset.md) and deactivates the previous assignee, as needed. The settings take effect according to [timeToTarget](timetotarget.md).

## See Also

### Activating a Group Preset

- [activate(timeToTargetOverride:)](activate%28timetotargetoverride_%29.md): Applies settings with an overriden fade duration.

# activate (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Applies settings to the designated groups.

## Declaration

```objectivec
- (void) activate;
```

<a id="Discussion"></a>

## Discussion

When you call this function, the framework assigns the group preset as the engine’s [activeGroupPreset](../phaseengine/activegrouppreset.md) and deactivates the previous assignee, as needed. The settings take effect according to [timeToTarget](timetotarget.md).

## See Also

### Activating a Group Preset

- [activateWithTimeToTargetOverride:](activate%28timetotargetoverride_%29.md): Applies settings with an overriden fade duration.
