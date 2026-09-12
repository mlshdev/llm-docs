> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerhomebuttonsettingscustomizationactivity](https://developer.apple.com/documentation/gamecontroller/gccontrollerhomebuttonsettingscustomizationactivity)

# GCControllerHomeButtonSettingsCustomizationActivity (Swift)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A hint passed to `-openControllerHomeButtonSettingsForActivity:` to indicate the reason the app is requesting to open Settings.

## Declaration

```swift
enum GCControllerHomeButtonSettingsCustomizationActivity
```

<a id="overview"></a>

## Overview

The system uses this hint to navigate to the appropriate screen in the Settings application.

## Topics

### Enumeration Cases

- [GCControllerHomeButtonSettingsCustomizationActivity.customizeInAppAction](gccontrollerhomebuttonsettingscustomizationactivity/customizeinappaction.md): Customize the in-app action.
- [GCControllerHomeButtonSettingsCustomizationActivity.customizeSystemAction](gccontrollerhomebuttonsettingscustomizationactivity/customizesystemaction.md): Customize the system action.

### Initializers

- [init(rawValue:)](gccontrollerhomebuttonsettingscustomizationactivity/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# GCControllerHomeButtonSettingsCustomizationActivity (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A hint passed to `-openControllerHomeButtonSettingsForActivity:` to indicate the reason the app is requesting to open Settings.

## Declaration

```objectivec
enum GCControllerHomeButtonSettingsCustomizationActivity : NSInteger;
```

<a id="overview"></a>

## Overview

The system uses this hint to navigate to the appropriate screen in the Settings application.

## Topics

### Enumeration Cases

- [GCControllerHomeButtonSettingsCustomizeInAppActionActivity](gccontrollerhomebuttonsettingscustomizationactivity/customizeinappaction.md): Customize the in-app action.
- [GCControllerHomeButtonSettingsCustomizeSystemActionActivity](gccontrollerhomebuttonsettingscustomizationactivity/customizesystemaction.md): Customize the system action.
