> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerhomebuttonsettingsmanager-10hl4/settingsdidchangehandler](https://developer.apple.com/documentation/gamecontroller/gccontrollerhomebuttonsettingsmanager-10hl4/settingsdidchangehandler)

# settingsDidChangeHandler

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A block that is scheduled after Home button settings change.

## Declaration

```objectivec
@property (atomic, copy, nullable) GCControllerHomeButtonSettingsDidChangeHandler settingsDidChangeHandler;
```

<a id="discussion"></a>

## Discussion

This block is scheduled on the `queue` the `GCControllerHomeButtonSettingsManager` was initialized with.
