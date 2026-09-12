> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerhomebuttonsettingcustomizationstatus](https://developer.apple.com/documentation/gamecontroller/gccontrollerhomebuttonsettingcustomizationstatus)

# GCControllerHomeButtonSettingCustomizationStatus (Swift)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An additional returned flag indicating whether a setting has been modified by the user.

## Declaration

```swift
enum GCControllerHomeButtonSettingCustomizationStatus
```

## Topics

### Enumeration Cases

- [GCControllerHomeButtonSettingCustomizationStatus.systemDefault](gccontrollerhomebuttonsettingcustomizationstatus/systemdefault.md): The user has not customized this setting.
- [GCControllerHomeButtonSettingCustomizationStatus.user](gccontrollerhomebuttonsettingcustomizationstatus/user.md): The user has customized this setting at least once.

### Initializers

- [init(rawValue:)](gccontrollerhomebuttonsettingcustomizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# GCControllerHomeButtonSettingCustomizationStatus (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An additional returned flag indicating whether a setting has been modified by the user.

## Declaration

```objectivec
enum GCControllerHomeButtonSettingCustomizationStatus : NSInteger;
```

## Topics

### Enumeration Cases

- [GCControllerHomeButtonSettingCustomizationDefault](gccontrollerhomebuttonsettingcustomizationstatus/systemdefault.md): The user has not customized this setting.
- [GCControllerHomeButtonSettingCustomizationUser](gccontrollerhomebuttonsettingcustomizationstatus/user.md): The user has customized this setting at least once.
