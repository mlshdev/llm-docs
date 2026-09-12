> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityalternativeinputmethods](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityalternativeinputmethods)

# allowsAccessibilityAlternativeInputMethods (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow alternative input methods for accessibility features during an assessment.

## Declaration

```swift
var allowsAccessibilityAlternativeInputMethods: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When the Accessibility Keyboard or Switch Control is enabled, alternative input methods such as Dwell Control may be available. An assessment session disables these alternative input methods by default, but you can allow them by setting [allowsAccessibilityAlternativeInputMethods](allowsaccessibilityalternativeinputmethods.md) to `YES` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

> **Note**

> This property only takes effect when [allowsAccessibilityKeyboard](allowsaccessibilitykeyboard.md) or [allowsAccessibilitySwitchControl](allowsaccessibilityswitchcontrol.md) is `YES`.

# allowsAccessibilityAlternativeInputMethods (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow alternative input methods for accessibility features during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilityAlternativeInputMethods;
```

<a id="discussion"></a>

## Discussion

When the Accessibility Keyboard or Switch Control is enabled, alternative input methods such as Dwell Control may be available. An assessment session disables these alternative input methods by default, but you can allow them by setting [allowsAccessibilityAlternativeInputMethods](allowsaccessibilityalternativeinputmethods.md) to `YES` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

> **Note**

> This property only takes effect when [allowsAccessibilityKeyboard](allowsaccessibilitykeyboard.md) or [allowsAccessibilitySwitchControl](allowsaccessibilityswitchcontrol.md) is `YES`.
