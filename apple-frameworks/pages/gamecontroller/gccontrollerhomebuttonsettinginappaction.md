> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerhomebuttonsettinginappaction](https://developer.apple.com/documentation/gamecontroller/gccontrollerhomebuttonsettinginappaction)

# GCControllerHomeButtonSettingInAppAction (Swift)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

How the system responds to a press of the game controller Home button while your application is front-most.

## Declaration

```swift
enum GCControllerHomeButtonSettingInAppAction
```

## Topics

### Enumeration Cases

- [GCControllerHomeButtonSettingInAppAction.defer](gccontrollerhomebuttonsettinginappaction/defer.md): The system defers its handling to your app’s preference.
- [GCControllerHomeButtonSettingInAppAction.disabled](gccontrollerhomebuttonsettinginappaction/disabled.md): System response to the game controller Home button press is disabled.
- [GCControllerHomeButtonSettingInAppAction.systemDefault](gccontrollerhomebuttonsettinginappaction/systemdefault.md): The system maintains its default handling regardless of your app’s preference.
- [GCControllerHomeButtonSettingInAppAction.unavailable](gccontrollerhomebuttonsettinginappaction/unavailable.md): The setting value could not be retrieved.

### Initializers

- [init(rawValue:)](gccontrollerhomebuttonsettinginappaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# GCControllerHomeButtonSettingInAppAction (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

How the system responds to a press of the game controller Home button while your application is front-most.

## Declaration

```objectivec
enum GCControllerHomeButtonSettingInAppAction : NSInteger;
```

## Topics

### Enumeration Cases

- [GCControllerHomeButtonSettingInAppActionDefer](gccontrollerhomebuttonsettinginappaction/defer.md): The system defers its handling to your app’s preference.
- [GCControllerHomeButtonSettingInAppActionDisabled](gccontrollerhomebuttonsettinginappaction/disabled.md): System response to the game controller Home button press is disabled.
- [GCControllerHomeButtonSettingInAppActionDefault](gccontrollerhomebuttonsettinginappaction/systemdefault.md): The system maintains its default handling regardless of your app’s preference.
- [GCControllerHomeButtonSettingInAppActionUnavailable](gccontrollerhomebuttonsettinginappaction/unavailable.md): The setting value could not be retrieved.
