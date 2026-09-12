> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/accessibilitysettings/feature](https://developer.apple.com/documentation/accessibility/accessibilitysettings/feature)

# AccessibilitySettings.Feature (Swift)

**Framework:** Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Constants that describe specific Accessibility settings in the Settings app.

## Declaration

```swift
enum Feature
```

## Topics

### Audio features

- [AccessibilitySettings.Feature.personalVoiceAllowAppsToRequestToUse](feature/personalvoiceallowappstorequesttouse.md): A constant for opening the Settings app to the setting for Personal Voice \> Allow Apps to Request to Use.

### Accessibility feature structure creation

- [init(rawValue:)](feature/init%28rawvalue_%29.md)

### Enumeration Cases

- [AccessibilitySettings.Feature.allowAppsToAddAudioToCalls](feature/allowappstoaddaudiotocalls.md)
- [AccessibilitySettings.Feature.assistiveTouch](feature/assistivetouch.md)
- [AccessibilitySettings.Feature.assistiveTouchDevices](feature/assistivetouchdevices.md)
- [AccessibilitySettings.Feature.captionStyles](feature/captionstyles.md)
- [AccessibilitySettings.Feature.dwellControl](feature/dwellcontrol.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Opening the Settings app

- [openSettings(for:)](opensettings%28for_%29.md): Opens the Settings app to a specific section of Accessibility settings.

# AXSettingsFeature (Objective-C)

**Framework:** Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Constants that describe specific Accessibility settings in the Settings app.

## Declaration

```objectivec
enum AXSettingsFeature : NSInteger;
```

## Topics

### Audio features

- [AXSettingsFeaturePersonalVoiceAllowAppsToRequestToUse](feature/personalvoiceallowappstorequesttouse.md): A constant for opening the Settings app to the setting for Personal Voice \> Allow Apps to Request to Use.

### Enumeration Cases

- [AXSettingsFeatureAllowAppsToAddAudioToCalls](feature/allowappstoaddaudiotocalls.md)
- [AXSettingsFeatureAssistiveTouch](feature/assistivetouch.md)
- [AXSettingsFeatureAssistiveTouchDevices](feature/assistivetouchdevices.md)
- [AXSettingsFeatureCaptionStyles](feature/captionstyles.md)
- [AXSettingsFeatureDwellControl](feature/dwellcontrol.md)
