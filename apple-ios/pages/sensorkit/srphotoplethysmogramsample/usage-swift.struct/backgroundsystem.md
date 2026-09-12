> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srphotoplethysmogramsample/usage-swift.struct/backgroundsystem](https://developer.apple.com/documentation/sensorkit/srphotoplethysmogramsample/usage-swift.struct/backgroundsystem)

# backgroundSystem (Swift)

**Framework:** SensorKit  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A reading taken by the system in the background.

## Declaration

```swift
static let backgroundSystem: SRPhotoplethysmogramSample.Usage
```

<a id="Discussion"></a>

## Discussion

The system takes this reading while performing various heart features on watchOS — such as background blood oxygen, atrial fibrillation (AFib), and low-cardio notifications.

## See Also

### Getting the reading method

- [foregroundHeartRate](foregroundheartrate.md): A heart rate reading that a person takes while using an app.
- [deepBreathing](deepbreathing.md): A deep breathing sensor reading that a person takes while using an app.
- [foregroundBloodOxygen](foregroundbloodoxygen.md): A blood oxygen reading that a person takes while using an app.

# SRPhotoplethysmogramSampleUsageBackgroundSystem (Objective-C)

**Framework:** SensorKit  
**Kind:** Global Variable  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A reading taken by the system in the background.

## Declaration

```objectivec
extern SRPhotoplethysmogramSampleUsage const SRPhotoplethysmogramSampleUsageBackgroundSystem;
```

<a id="Discussion"></a>

## Discussion

The system takes this reading while performing various heart features on watchOS — such as background blood oxygen, atrial fibrillation (AFib), and low-cardio notifications.

## See Also

### Getting the reading method

- [SRPhotoplethysmogramSampleUsageForegroundHeartRate](foregroundheartrate.md): A heart rate reading that a person takes while using an app.
- [SRPhotoplethysmogramSampleUsageDeepBreathing](deepbreathing.md): A deep breathing sensor reading that a person takes while using an app.
- [SRPhotoplethysmogramSampleUsageForegroundBloodOxygen](foregroundbloodoxygen.md): A blood oxygen reading that a person takes while using an app.
