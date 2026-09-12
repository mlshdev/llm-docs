> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityelement/accessibilitylabel](https://developer.apple.com/documentation/uikit/uiaccessibilityelement/accessibilitylabel)

# accessibilityLabel (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A string that succinctly identifies the accessibility element.

## Declaration

```swift
var accessibilityLabel: String? { get set }
```

## Mentioned In

- [Supporting VoiceOver in your app](../supporting-voiceover-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The label is a very short, localized string that identifies the accessibility element, but does not include the type of the control or view. For example, the label for a Save button is “Save,” not “Save button.”

By default, standard UIKit controls and views have labels that derive from their titles. If you provide a custom control or view, however, you need to set this property appropriately so that assistive applications can supply accurate information to users with disabilities.

## See Also

### Accessing the attributes of an accessibility element

- [accessibilityHint](accessibilityhint.md): A string that briefly describes the result of performing an action on the accessibility element.
- [accessibilityValue](accessibilityvalue.md): A string that represents the current value of the accessibility element.
- [accessibilityFrame](accessibilityframe.md): The frame of the accessibility element, in screen coordinates.
- [accessibilityFrameInContainerSpace](accessibilityframeincontainerspace.md): The frame of the accessibility element, in the coordinate space of its container view.
- [accessibilityTraits](accessibilitytraits.md): The combination of traits that best characterize the accessibility element.

# accessibilityLabel (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A string that succinctly identifies the accessibility element.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSString * accessibilityLabel;
```

## Mentioned In

- [Supporting VoiceOver in your app](../supporting-voiceover-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The label is a very short, localized string that identifies the accessibility element, but does not include the type of the control or view. For example, the label for a Save button is “Save,” not “Save button.”

By default, standard UIKit controls and views have labels that derive from their titles. If you provide a custom control or view, however, you need to set this property appropriately so that assistive applications can supply accurate information to users with disabilities.

## See Also

### Accessing the attributes of an accessibility element

- [accessibilityHint](accessibilityhint.md): A string that briefly describes the result of performing an action on the accessibility element.
- [accessibilityValue](accessibilityvalue.md): A string that represents the current value of the accessibility element.
- [accessibilityFrame](accessibilityframe.md): The frame of the accessibility element, in screen coordinates.
- [accessibilityFrameInContainerSpace](accessibilityframeincontainerspace.md): The frame of the accessibility element, in the coordinate space of its container view.
- [accessibilityTraits](accessibilitytraits.md): The combination of traits that best characterize the accessibility element.
