> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/accessibilitysettings/isapplicationaccessibilityenabled](https://developer.apple.com/documentation/accessibility/accessibilitysettings/isapplicationaccessibilityenabled)

# isApplicationAccessibilityEnabled (Swift)

**Framework:** Accessibility  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns whether application accessibility is currently enabled for this process.

## Declaration

```swift
static var isApplicationAccessibilityEnabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

Returns `YES` when at least one assistive technology — such as VoiceOver, Switch Control, Voice Control, or Full Keyboard Access — has requested access to this app’s accessibility information. Apps can use this signal to avoid building expensive accessibility data when no assistive technology is consuming it.

The value can change during a process’s lifetime; observe `AXApplicationAccessibilityEnabledDidChangeNotification` to react to changes.

# AXApplicationAccessibilityEnabled (Objective-C)

**Framework:** Accessibility  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns whether application accessibility is currently enabled for this process.

## Declaration

```objectivec
extern BOOL AXApplicationAccessibilityEnabled();
```

<a id="discussion"></a>

## Discussion

Returns `YES` when at least one assistive technology — such as VoiceOver, Switch Control, Voice Control, or Full Keyboard Access — has requested access to this app’s accessibility information. Apps can use this signal to avoid building expensive accessibility data when no assistive technology is consuming it.

The value can change during a process’s lifetime; observe `AXApplicationAccessibilityEnabledDidChangeNotification` to react to changes.
