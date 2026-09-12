> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitynavigationstyle](https://developer.apple.com/documentation/uikit/uiaccessibilitynavigationstyle)

# UIAccessibilityNavigationStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Constants that describe how to navigate an object’s elements with an assistive app.

## Declaration

```swift
enum UIAccessibilityNavigationStyle
```

## Topics

### Constants

- [UIAccessibilityNavigationStyle.automatic](uiaccessibilitynavigationstyle/automatic.md): The assistive technology automatically determines how the receiver’s elements should be navigated.
- [UIAccessibilityNavigationStyle.separate](uiaccessibilitynavigationstyle/separate.md): The receiver’s elements should be navigated as separate elements.
- [UIAccessibilityNavigationStyle.combined](uiaccessibilitynavigationstyle/combined.md): The receiver’s elements should be combined and navigated as a single item.

### Initializers

- [init(rawValue:)](uiaccessibilitynavigationstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Navigating elements

- [UIAccessibilityContainer](uiaccessibilitycontainer.md): Provide a set of methods that view subclasses use to make subcomponents accessible as separate elements.
- [accessibilityActivationPoint](../objectivec/nsobject-swift.class/accessibilityactivationpoint.md)
- [accessibilityFocusedUIElement](../objectivec/nsobject-swift.class/accessibilityfocuseduielement.md)
- [accessibilityFrame](../objectivec/nsobject-swift.class/accessibilityframe.md)
- [accessibilityHitTest(\_:)](../objectivec/nsobject-swift.class/accessibilityhittest%28__%29.md)
- [accessibilityNavigationStyle](../objectivec/nsobject-swift.class/accessibilitynavigationstyle.md)
- [accessibilityPath](../objectivec/nsobject-swift.class/accessibilitypath.md)
- [zoomFocusChanged(zoomType:toFrame:in:)](uiaccessibility/zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.
- [UIAccessibility.ZoomType](uiaccessibility/zoomtype.md): The types of system Zoom that can be in effect.
- [assistiveTouch](uiguidedaccessaccessibilityfeature/assistivetouch.md): The AssistiveTouch accessibility feature.

# UIAccessibilityNavigationStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Constants that describe how to navigate an object’s elements with an assistive app.

## Declaration

```objectivec
enum UIAccessibilityNavigationStyle : NSInteger;
```

## Topics

### Constants

- [UIAccessibilityNavigationStyleAutomatic](uiaccessibilitynavigationstyle/automatic.md): The assistive technology automatically determines how the receiver’s elements should be navigated.
- [UIAccessibilityNavigationStyleSeparate](uiaccessibilitynavigationstyle/separate.md): The receiver’s elements should be navigated as separate elements.
- [UIAccessibilityNavigationStyleCombined](uiaccessibilitynavigationstyle/combined.md): The receiver’s elements should be combined and navigated as a single item.

## See Also

### Navigating elements

- [UIAccessibilityContainer](uiaccessibilitycontainer.md): Provide a set of methods that view subclasses use to make subcomponents accessible as separate elements.
- [accessibilityActivationPoint](../objectivec/nsobject-swift.class/accessibilityactivationpoint.md)
- [accessibilityFocusedUIElement](../objectivec/nsobject-swift.class/accessibilityfocuseduielement.md)
- [accessibilityFrame](../objectivec/nsobject-swift.class/accessibilityframe.md)
- [accessibilityHitTest:](../objectivec/nsobject-swift.class/accessibilityhittest%28__%29.md)
- [accessibilityNavigationStyle](../objectivec/nsobject-swift.class/accessibilitynavigationstyle.md)
- [accessibilityPath](../objectivec/nsobject-swift.class/accessibilitypath.md)
- [UIAccessibilityZoomFocusChanged](uiaccessibility/zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.
- [UIAccessibilityZoomType](uiaccessibility/zoomtype.md): The types of system Zoom that can be in effect.
- [UIGuidedAccessAccessibilityFeatureAssistiveTouch](uiguidedaccessaccessibilityfeature/assistivetouch.md): The AssistiveTouch accessibility feature.
