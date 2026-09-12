> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilityactions(category:_:)](https://developer.apple.com/documentation/swiftui/view/accessibilityactions(category:_:))

# accessibilityActions(category:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Adds multiple accessibility actions to the view with a specific category. Actions allow assistive technologies, such as VoiceOver, to interact with the view by invoking the action and are grouped by their category. When multiple action modifiers with an equal category are applied to the view, the actions are combined together.

## Declaration

```swift
nonisolated func accessibilityActions<Content>(category: AccessibilityActionCategory, @ContentBuilder _ content: () -> Content) -> some View where Content : View

```

## Parameters

- `category`: The category the accessibility actions are grouped by.
- `content`: The accessibility actions added to the view.

<a id="discussion"></a>

## Discussion

Var body: some View { EditorView() .accessibilityActions(category: .edit) { ForEach(editActions) { action in Button(action.title) { action() } } if hasTextSuggestions { Button(“Show Text Suggestions”) { presentTextSuggestions() } } } }

## See Also

### Adding actions to views

- [accessibilityAction(\_:\_:)](accessibilityaction%28____%29.md): Adds an accessibility action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityActions(\_:)](accessibilityactions%28__%29.md): Adds multiple accessibility actions to the view.
- [accessibilityAction(named:\_:)](accessibilityaction%28named___%29.md): Adds an accessibility action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityAction(action:label:)](accessibilityaction%28action_label_%29.md): Adds an accessibility action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityAction(intent:label:)](accessibilityaction%28intent_label_%29.md): Adds an accessibility action labeled by the contents of `label` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.
- [accessibilityAction(\_:intent:)](accessibilityaction%28__intent_%29.md): Adds an accessibility action representing `actionKind` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.
- [accessibilityAction(named:intent:)](accessibilityaction%28named_intent_%29.md): Adds an accessibility action labeled `name` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.
- [accessibilityAdjustableAction(\_:)](accessibilityadjustableaction%28__%29.md): Adds an accessibility adjustable action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityScrollAction(\_:)](accessibilityscrollaction%28__%29.md): Adds an accessibility scroll action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [AccessibilityActionKind](../accessibilityactionkind.md): The structure that defines the kinds of available accessibility actions.
- [AccessibilityAdjustmentDirection](../accessibilityadjustmentdirection.md): A directional indicator you use when making an accessibility adjustment.
- [AccessibilityActionCategory](../accessibilityactioncategory.md): Designates an accessibility action category that is provided and named by the system.
