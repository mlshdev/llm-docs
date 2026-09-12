> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegrouppreset/init(engine:settings:timetotarget:timetoreset:)](https://developer.apple.com/documentation/phase/phasegrouppreset/init(engine:settings:timetotarget:timetoreset:))

# init(engine:settings:timeToTarget:timeToReset:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a group preset with the designated engine, settings, and fade parameters.

## Declaration

```swift
init(engine: PHASEEngine, settings: [String : PHASEGroupPresetSetting], timeToTarget: Double, timeToReset: Double)
```

## Parameters

- `engine`: An engine containing groups to configure with settings.
- `settings`: A dictionary with preset setting values and group objects as keys. See [settings](settings.md).
- `timeToTarget`: A duration in which the engine fades the settings from their original value to their new value. See [timeToTarget](timetotarget.md).
- `timeToReset`: A duration in which the framework restores the group’s original state. See [timeToReset](timetoreset.md).

# initWithEngine:settings:timeToTarget:timeToReset: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a group preset with the designated engine, settings, and fade parameters.

## Declaration

```objectivec
- (instancetype) initWithEngine:(PHASEEngine *) engine settings:(NSDictionary<NSString *,PHASEGroupPresetSetting *> *) settings timeToTarget:(double) timeToTarget timeToReset:(double) timeToReset;
```

## Parameters

- `engine`: An engine containing groups to configure with settings.
- `settings`: A dictionary with preset setting values and group objects as keys. See [settings](settings.md).
- `timeToTarget`: A duration in which the engine fades the settings from their original value to their new value. See [timeToTarget](timetotarget.md).
- `timeToReset`: A duration in which the framework restores the group’s original state. See [timeToReset](timetoreset.md).
