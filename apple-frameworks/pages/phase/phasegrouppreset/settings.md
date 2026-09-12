> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegrouppreset/settings](https://developer.apple.com/documentation/phase/phasegrouppreset/settings)

# settings (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A dictionary with preset setting values and group objects as keys.

## Declaration

```swift
var settings: [String : PHASEGroupPresetSetting] { get }
```

<a id="Discussion"></a>

## Discussion

This property defines the settings and the engine’s [groups](../phaseengine/groups.md) that receive the settings.

# settings (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A dictionary with preset setting values and group objects as keys.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,PHASEGroupPresetSetting *> * settings;
```

<a id="Discussion"></a>

## Discussion

This property defines the settings and the engine’s [groups](../phaseengine/groups.md) that receive the settings.
