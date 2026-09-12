> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityelement/accessibilityhint](https://developer.apple.com/documentation/uikit/uiaccessibilityelement/accessibilityhint)

# accessibilityHint (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A string that briefly describes the result of performing an action on the accessibility element.

## Declaration

```swift
var accessibilityHint: String? { get set }
```

## Mentioned In

- [Supporting VoiceOver in your app](../supporting-voiceover-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The hint is a brief, localized description of the result of performing an action on the element without identifying the element or the action. For example, the hint for a table row that contains an email message might be “Selects the message,” but not “Tap this row to select the message.”

By default, standard UIKit controls and views have system-provided hints. If you provide a custom control or view, however, you need to set this property appropriately so that assistive applications can supply accurate information to users with disabilities.

## See Also

### Accessing the attributes of an accessibility element

- [accessibilityLabel](accessibilitylabel.md): A string that succinctly identifies the accessibility element.
- [accessibilityValue](accessibilityvalue.md): A string that represents the current value of the accessibility element.
- [accessibilityFrame](accessibilityframe.md): The frame of the accessibility element, in screen coordinates.
- [accessibilityFrameInContainerSpace](accessibilityframeincontainerspace.md): The frame of the accessibility element, in the coordinate space of its container view.
- [accessibilityTraits](accessibilitytraits.md): The combination of traits that best characterize the accessibility element.

# accessibilityHint (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A string that briefly describes the result of performing an action on the accessibility element.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSString * accessibilityHint;
```

## Mentioned In

- [Supporting VoiceOver in your app](../supporting-voiceover-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The hint is a brief, localized description of the result of performing an action on the element without identifying the element or the action. For example, the hint for a table row that contains an email message might be “Selects the message,” but not “Tap this row to select the message.”

By default, standard UIKit controls and views have system-provided hints. If you provide a custom control or view, however, you need to set this property appropriately so that assistive applications can supply accurate information to users with disabilities.

## See Also

### Accessing the attributes of an accessibility element

- [accessibilityLabel](accessibilitylabel.md): A string that succinctly identifies the accessibility element.
- [accessibilityValue](accessibilityvalue.md): A string that represents the current value of the accessibility element.
- [accessibilityFrame](accessibilityframe.md): The frame of the accessibility element, in screen coordinates.
- [accessibilityFrameInContainerSpace](accessibilityframeincontainerspace.md): The frame of the accessibility element, in the coordinate space of its container view.
- [accessibilityTraits](accessibilitytraits.md): The combination of traits that best characterize the accessibility element.
