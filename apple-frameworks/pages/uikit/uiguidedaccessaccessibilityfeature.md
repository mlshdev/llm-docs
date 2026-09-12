> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiguidedaccessaccessibilityfeature](https://developer.apple.com/documentation/uikit/uiguidedaccessaccessibilityfeature)

# UIGuidedAccessAccessibilityFeature (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that describe accessibility features for Guided Access.

## Declaration

```swift
struct UIGuidedAccessAccessibilityFeature
```

## Topics

### Constants

- [assistiveTouch](uiguidedaccessaccessibilityfeature/assistivetouch.md): The AssistiveTouch accessibility feature.
- [grayscaleDisplay](uiguidedaccessaccessibilityfeature/grayscaledisplay.md): The Grayscale accessibility feature.
- [invertColors](uiguidedaccessaccessibilityfeature/invertcolors.md): The Smart Invert accessibility feature.
- [voiceOver](uiguidedaccessaccessibilityfeature/voiceover.md): The VoiceOver assistive app.
- [zoom](uiguidedaccessaccessibilityfeature/zoom.md): The Zoom accessibility feature.

### Initializers

- [init(rawValue:)](uiguidedaccessaccessibilityfeature/init%28rawvalue_%29.md): Creates a Guided Access accessibility feature with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Guided Access

- [configureForGuidedAccess(features:enabled:completionHandler:)](uiaccessibility/configureforguidedaccess%28features_enabled_completionhandler_%29.md): Enables or disables the specified accessibility features while using Guided Access.
- [UIAccessibility.GuidedAccessError.Code](uiaccessibility/guidedaccesserror/code.md): Error codes for Guided Access.

# UIGuidedAccessAccessibilityFeature (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that describe accessibility features for Guided Access.

## Declaration

```objectivec
enum UIGuidedAccessAccessibilityFeature : NSUInteger;
```

## Topics

### Constants

- [UIGuidedAccessAccessibilityFeatureAssistiveTouch](uiguidedaccessaccessibilityfeature/assistivetouch.md): The AssistiveTouch accessibility feature.
- [UIGuidedAccessAccessibilityFeatureGrayscaleDisplay](uiguidedaccessaccessibilityfeature/grayscaledisplay.md): The Grayscale accessibility feature.
- [UIGuidedAccessAccessibilityFeatureInvertColors](uiguidedaccessaccessibilityfeature/invertcolors.md): The Smart Invert accessibility feature.
- [UIGuidedAccessAccessibilityFeatureVoiceOver](uiguidedaccessaccessibilityfeature/voiceover.md): The VoiceOver assistive app.
- [UIGuidedAccessAccessibilityFeatureZoom](uiguidedaccessaccessibilityfeature/zoom.md): The Zoom accessibility feature.

## See Also

### Guided Access

- [UIGuidedAccessConfigureAccessibilityFeatures](uiaccessibility/configureforguidedaccess%28features_enabled_completionhandler_%29.md): Enables or disables the specified accessibility features while using Guided Access.
- [UIGuidedAccessErrorCode](uiaccessibility/guidedaccesserror/code.md): Error codes for Guided Access.
