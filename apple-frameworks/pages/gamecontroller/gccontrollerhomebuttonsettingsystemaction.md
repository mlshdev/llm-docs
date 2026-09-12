> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerhomebuttonsettingsystemaction](https://developer.apple.com/documentation/gamecontroller/gccontrollerhomebuttonsettingsystemaction)

# GCControllerHomeButtonSettingSystemAction (Swift)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

How the system responds to a press of the game controller Home button outside of contexts where an action of the front-most app takes priority.

## Declaration

```swift
enum GCControllerHomeButtonSettingSystemAction
```

## Topics

### Enumeration Cases

- [GCControllerHomeButtonSettingSystemAction.disabled](gccontrollerhomebuttonsettingsystemaction/disabled.md): System response to the game controller Home button press is disabled.
- [GCControllerHomeButtonSettingSystemAction.openCurrentApplication](gccontrollerhomebuttonsettingsystemaction/opencurrentapplication.md): The controller home button system action opens the current application.
- [GCControllerHomeButtonSettingSystemAction.other](gccontrollerhomebuttonsettingsystemaction/other.md): The controller home button system action performs some other action.
- [GCControllerHomeButtonSettingSystemAction.unavailable](gccontrollerhomebuttonsettingsystemaction/unavailable.md): The setting value could not be retrieved.

### Initializers

- [init(rawValue:)](gccontrollerhomebuttonsettingsystemaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# GCControllerHomeButtonSettingSystemAction (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

How the system responds to a press of the game controller Home button outside of contexts where an action of the front-most app takes priority.

## Declaration

```objectivec
enum GCControllerHomeButtonSettingSystemAction : NSInteger;
```

## Topics

### Enumeration Cases

- [GCControllerHomeButtonSettingSystemActionDisabled](gccontrollerhomebuttonsettingsystemaction/disabled.md): System response to the game controller Home button press is disabled.
- [GCControllerHomeButtonSettingSystemActionOpenCurrentApplication](gccontrollerhomebuttonsettingsystemaction/opencurrentapplication.md): The controller home button system action opens the current application.
- [GCControllerHomeButtonSettingSystemActionOther](gccontrollerhomebuttonsettingsystemaction/other.md): The controller home button system action performs some other action.
- [GCControllerHomeButtonSettingSystemActionUnavailable](gccontrollerhomebuttonsettingsystemaction/unavailable.md): The setting value could not be retrieved.
