> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityreader](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsaccessibilityreader)

# allowsAccessibilityReader (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+

A Boolean value that indicates whether to allow the Accessibility Reader during an assessment.

## Declaration

```swift
var allowsAccessibilityReader: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can enable the Accessibility Reader in the Settings app (Accessibility \> Read & Speak \> Accessibility Reader) to have text content formatted or read aloud. An assessment session disables the Accessibility Reader by default, but you can allow it by setting [allowsAccessibilityReader](allowsaccessibilityreader.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsAccessibilityReader (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+

A Boolean value that indicates whether to allow the Accessibility Reader during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsAccessibilityReader;
```

<a id="discussion"></a>

## Discussion

Users can enable the Accessibility Reader in the Settings app (Accessibility \> Read & Speak \> Accessibility Reader) to have text content formatted or read aloud. An assessment session disables the Accessibility Reader by default, but you can allow it by setting [allowsAccessibilityReader](allowsaccessibilityreader.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
