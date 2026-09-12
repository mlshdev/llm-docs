> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/zoomtype](https://developer.apple.com/documentation/uikit/uiaccessibility/zoomtype)

# UIAccessibility.ZoomType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The types of system Zoom that can be in effect.

## Declaration

```swift
enum ZoomType
```

## Topics

### Constants

- [UIAccessibility.ZoomType.insertionPoint](zoomtype/insertionpoint.md): The system zoom type is the text insertion point.

### Initializers

- [init(rawValue:)](zoomtype/init%28rawvalue_%29.md)

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

- [UIAccessibilityContainer](../uiaccessibilitycontainer.md): Provide a set of methods that view subclasses use to make subcomponents accessible as separate elements.
- [accessibilityActivationPoint](../../objectivec/nsobject-swift.class/accessibilityactivationpoint.md)
- [accessibilityFocusedUIElement](../../objectivec/nsobject-swift.class/accessibilityfocuseduielement.md)
- [accessibilityFrame](../../objectivec/nsobject-swift.class/accessibilityframe.md)
- [accessibilityHitTest(\_:)](../../objectivec/nsobject-swift.class/accessibilityhittest%28__%29.md)
- [accessibilityNavigationStyle](../../objectivec/nsobject-swift.class/accessibilitynavigationstyle.md)
- [UIAccessibilityNavigationStyle](../uiaccessibilitynavigationstyle.md): Constants that describe how to navigate an object’s elements with an assistive app.
- [accessibilityPath](../../objectivec/nsobject-swift.class/accessibilitypath.md)
- [zoomFocusChanged(zoomType:toFrame:in:)](zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.
- [assistiveTouch](../uiguidedaccessaccessibilityfeature/assistivetouch.md): The AssistiveTouch accessibility feature.

# UIAccessibilityZoomType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The types of system Zoom that can be in effect.

## Declaration

```objectivec
enum UIAccessibilityZoomType : NSInteger;
```

## Topics

### Constants

- [UIAccessibilityZoomTypeInsertionPoint](zoomtype/insertionpoint.md): The system zoom type is the text insertion point.

## See Also

### Navigating elements

- [UIAccessibilityContainer](../uiaccessibilitycontainer.md): Provide a set of methods that view subclasses use to make subcomponents accessible as separate elements.
- [accessibilityActivationPoint](../../objectivec/nsobject-swift.class/accessibilityactivationpoint.md)
- [accessibilityFocusedUIElement](../../objectivec/nsobject-swift.class/accessibilityfocuseduielement.md)
- [accessibilityFrame](../../objectivec/nsobject-swift.class/accessibilityframe.md)
- [accessibilityHitTest:](../../objectivec/nsobject-swift.class/accessibilityhittest%28__%29.md)
- [accessibilityNavigationStyle](../../objectivec/nsobject-swift.class/accessibilitynavigationstyle.md)
- [UIAccessibilityNavigationStyle](../uiaccessibilitynavigationstyle.md): Constants that describe how to navigate an object’s elements with an assistive app.
- [accessibilityPath](../../objectivec/nsobject-swift.class/accessibilitypath.md)
- [UIAccessibilityZoomFocusChanged](zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.
- [UIGuidedAccessAccessibilityFeatureAssistiveTouch](../uiguidedaccessaccessibilityfeature/assistivetouch.md): The AssistiveTouch accessibility feature.
