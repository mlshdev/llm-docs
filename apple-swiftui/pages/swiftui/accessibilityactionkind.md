> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilityactionkind](https://developer.apple.com/documentation/swiftui/accessibilityactionkind)

# AccessibilityActionKind

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The structure that defines the kinds of available accessibility actions.

## Declaration

```swift
struct AccessibilityActionKind
```

## Topics

### Getting the kind of action

- [default](accessibilityactionkind/default.md): The value that represents the default accessibility action.
- [delete](accessibilityactionkind/delete.md)
- [escape](accessibilityactionkind/escape.md): The value that represents an accessibility action that dismisses a modal view or cancels an operation.
- [magicTap](accessibilityactionkind/magictap.md)
- [showMenu](accessibilityactionkind/showmenu.md)

### Creating an action type

- [init(named:)](accessibilityactionkind/init%28named_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding actions to views

- [accessibilityAction(\_:\_:)](view/accessibilityaction%28____%29.md): Adds an accessibility action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityActions(\_:)](view/accessibilityactions%28__%29.md): Adds multiple accessibility actions to the view.
- [accessibilityAction(named:\_:)](view/accessibilityaction%28named___%29.md): Adds an accessibility action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityAction(action:label:)](view/accessibilityaction%28action_label_%29.md): Adds an accessibility action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityAction(intent:label:)](view/accessibilityaction%28intent_label_%29.md): Adds an accessibility action labeled by the contents of `label` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.
- [accessibilityAction(\_:intent:)](view/accessibilityaction%28__intent_%29.md): Adds an accessibility action representing `actionKind` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.
- [accessibilityAction(named:intent:)](view/accessibilityaction%28named_intent_%29.md): Adds an accessibility action labeled `name` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.
- [accessibilityAdjustableAction(\_:)](view/accessibilityadjustableaction%28__%29.md): Adds an accessibility adjustable action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityScrollAction(\_:)](view/accessibilityscrollaction%28__%29.md): Adds an accessibility scroll action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityActions(category:\_:)](view/accessibilityactions%28category___%29.md): Adds multiple accessibility actions to the view with a specific category. Actions allow assistive technologies, such as VoiceOver, to interact with the view by invoking the action and are grouped by their category. When multiple action modifiers with an equal category are applied to the view, the actions are combined together.
- [AccessibilityAdjustmentDirection](accessibilityadjustmentdirection.md): A directional indicator you use when making an accessibility adjustment.
- [AccessibilityActionCategory](accessibilityactioncategory.md): Designates an accessibility action category that is provided and named by the system.
