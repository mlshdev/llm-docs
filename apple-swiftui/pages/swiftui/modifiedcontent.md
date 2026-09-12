> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent](https://developer.apple.com/documentation/swiftui/modifiedcontent)

# ModifiedContent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A value with a modifier applied to it.

## Declaration

```swift
@frozen struct ModifiedContent<Content, Modifier>
```

## Topics

### Creating a modified content view

- [init(content:modifier:)](modifiedcontent/init%28content_modifier_%29.md): A structure that defines the content and modifier needed to produce a new view or view modifier.
- [content](modifiedcontent/content.md): The content that the modifier transforms into a new view or new view modifier.
- [modifier](modifiedcontent/modifier.md): The view modifier.

### Instance Methods

- [accessibility(activationPoint:)](modifiedcontent/accessibility%28activationpoint_%29.md): Deprecated. Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Specifies the point where activations occur in the view.
- [accessibility(addTraits:)](modifiedcontent/accessibility%28addtraits_%29.md): Deprecated. Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds the given traits to the view.
- [accessibility(hidden:)](modifiedcontent/accessibility%28hidden_%29.md): Deprecated. Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Specifies whether to hide this view from system accessibility features.
- [accessibility(hint:)](modifiedcontent/accessibility%28hint_%29.md): Deprecated. Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Communicates to the user what happens after performing the view’s action.
- [accessibility(identifier:)](modifiedcontent/accessibility%28identifier_%29.md): Deprecated. Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Uses the specified string to identify the view.
- [accessibility(inputLabels:)](modifiedcontent/accessibility%28inputlabels_%29.md): Deprecated. Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Sets alternate input labels with which users identify a view.
- [accessibility(label:)](modifiedcontent/accessibility%28label_%29.md): Deprecated. Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds a label to the view that describes its contents.
- [accessibility(removeTraits:)](modifiedcontent/accessibility%28removetraits_%29.md): Deprecated. Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Removes the given traits from this view.
- [accessibility(selectionIdentifier:)](modifiedcontent/accessibility%28selectionidentifier_%29.md): Deprecated. Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Sets a selection identifier for this view’s accessibility element.
- [accessibility(sortPriority:)](modifiedcontent/accessibility%28sortpriority_%29.md): Deprecated. Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Sets the sort priority order for this view’s accessibility element, relative to other elements at the same level.
- [accessibility(value:)](modifiedcontent/accessibility%28value_%29.md): Deprecated. Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds a textual description of the value that the view contains.
- [accessibilityAction(\_:\_:)](modifiedcontent/accessibilityaction%28____%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds an accessibility action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityAction(\_:intent:)](modifiedcontent/accessibilityaction%28__intent_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds an accessibility action representing `actionKind` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.
- [accessibilityAction(named:\_:)](modifiedcontent/accessibilityaction%28named___%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds an accessibility action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityAction(named:intent:)](modifiedcontent/accessibilityaction%28named_intent_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds an accessibility action labeled `name` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.
- [accessibilityActivationPoint(\_:)](modifiedcontent/accessibilityactivationpoint%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. The activation point for an element is the location assistive technologies use to initiate gestures.
- [accessibilityActivationPoint(\_:isEnabled:)](modifiedcontent/accessibilityactivationpoint%28__isenabled_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. The activation point for an element is the location assistive technologies use to initiate gestures.
- [accessibilityAddTraits(\_:)](modifiedcontent/accessibilityaddtraits%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds the given traits to the view.
- [accessibilityAdjustableAction(\_:)](modifiedcontent/accessibilityadjustableaction%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds an accessibility adjustable action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityCustomContent(\_:\_:importance:)](modifiedcontent/accessibilitycustomcontent%28____importance_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Add additional accessibility information to the view.
- [accessibilityDirectTouch(\_:options:)](modifiedcontent/accessibilitydirecttouch%28__options_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Explicitly set whether this accessibility element is a direct touch area. Direct touch areas passthrough touch events to the app rather than being handled through an assistive technology, such as VoiceOver. The modifier accepts an optional `AccessibilityDirectTouchOptions` option set to customize the functionality of the direct touch area.
- [accessibilityDragPoint(\_:description:)](modifiedcontent/accessibilitydragpoint%28__description_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. The point an assistive technology should use to begin a drag interaction.
- [accessibilityDragPoint(\_:description:isEnabled:)](modifiedcontent/accessibilitydragpoint%28__description_isenabled_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. The point an assistive technology should use to begin a drag interaction.
- [accessibilityDropPoint(\_:description:)](modifiedcontent/accessibilitydroppoint%28__description_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. The point an assistive technology should use to end a drag interaction.
- [accessibilityDropPoint(\_:description:isEnabled:)](modifiedcontent/accessibilitydroppoint%28__description_isenabled_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. The point an assistive technology should use to end a drag interaction.
- [accessibilityHeading(\_:)](modifiedcontent/accessibilityheading%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Set the level of this heading.
- [accessibilityHidden(\_:)](modifiedcontent/accessibilityhidden%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Specifies whether to hide this view from system accessibility features.
- [accessibilityHidden(\_:isEnabled:)](modifiedcontent/accessibilityhidden%28__isenabled_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Specifies whether to hide this view from system accessibility features.
- [accessibilityHint(\_:)](modifiedcontent/accessibilityhint%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Communicates to the user what happens after performing the view’s action.
- [accessibilityHint(\_:isEnabled:)](modifiedcontent/accessibilityhint%28__isenabled_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Communicates to the user what happens after performing the view’s action.
- [accessibilityIdentifier(\_:)](modifiedcontent/accessibilityidentifier%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Uses the string you specify to identify the view.
- [accessibilityIdentifier(\_:isEnabled:)](modifiedcontent/accessibilityidentifier%28__isenabled_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Uses the string you specify to identify the view.
- [accessibilityInputLabels(\_:)](modifiedcontent/accessibilityinputlabels%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Sets alternate input labels with which users identify a view.
- [accessibilityInputLabels(\_:isEnabled:)](modifiedcontent/accessibilityinputlabels%28__isenabled_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Sets alternate input labels with which users identify a view.
- [accessibilityLabel(\_:)](modifiedcontent/accessibilitylabel%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds a label to the view that describes its contents.
- [accessibilityLabel(\_:isEnabled:)](modifiedcontent/accessibilitylabel%28__isenabled_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds a label to the view that describes its contents.
- [accessibilityRemoveTraits(\_:)](modifiedcontent/accessibilityremovetraits%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Removes the given traits from this view.
- [accessibilityRespondsToUserInteraction(\_:)](modifiedcontent/accessibilityrespondstouserinteraction%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Explicitly set whether this Accessibility element responds to user interaction and would thus be interacted with by technologies such as Switch Control, Voice Control or Full Keyboard Access.
- [accessibilityRespondsToUserInteraction(\_:isEnabled:)](modifiedcontent/accessibilityrespondstouserinteraction%28__isenabled_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Explicitly set whether this Accessibility element responds to user interaction and would thus be interacted with by technologies such as Switch Control, Voice Control or Full Keyboard Access.
- [accessibilityScrollAction(\_:)](modifiedcontent/accessibilityscrollaction%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds an accessibility scroll action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityScrollStatus(\_:isEnabled:)](modifiedcontent/accessibilityscrollstatus%28__isenabled_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Changes the announcement provided by accessibility technologies when a user scrolls a scroll view within this view.
- [accessibilitySortPriority(\_:)](modifiedcontent/accessibilitysortpriority%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Sets the sort priority order for this view’s accessibility element, relative to other elements at the same level.
- [accessibilityTextContentType(\_:)](modifiedcontent/accessibilitytextcontenttype%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Sets an accessibility text content type.
- [accessibilityValue(\_:)](modifiedcontent/accessibilityvalue%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds a textual description of the value that the view contains.
- [accessibilityValue(\_:isEnabled:)](modifiedcontent/accessibilityvalue%28__isenabled_%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds a textual description of the value that the view contains.
- [accessibilityZoomAction(\_:)](modifiedcontent/accessibilityzoomaction%28__%29.md): Conforms when `Modifier` is `AccessibilityAttachmentModifier`. Adds an accessibility zoom action to the view. Actions allow assistive technologies, such as VoiceOver, to interact with the view by invoking the action.

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [Chart3DContent](https://developer.apple.com/documentation/charts/chart3dcontent)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomHoverEffect](customhovereffect.md)
- [DynamicMapContent](https://developer.apple.com/documentation/mapkit/dynamicmapcontent)
- [DynamicTableRowContent](dynamictablerowcontent.md)
- [DynamicViewContent](dynamicviewcontent.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HoverEffectContent](hovereffectcontent.md)
- [MapContent](https://developer.apple.com/documentation/mapkit/mapcontent)
- [Scene](scene.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TableRowContent](tablerowcontent.md)
- [View](view.md)
- [ViewModifier](viewmodifier.md)
- [VisualEffect](visualeffect.md)

## See Also

### Modifying a view

- [Configuring views](configuring-views.md): Adjust the characteristics of a view by applying view modifiers.
- [Reducing view modifier maintenance](reducing-view-modifier-maintenance.md): Bundle view modifiers that you regularly reuse into a custom view modifier.
- [modifier(\_:)](view/modifier%28__%29.md): Applies a modifier to a view and returns a new view.
- [ViewModifier](viewmodifier.md): Conforms when `Content` conforms to `ViewModifier` and `Modifier` conforms to `ViewModifier`. A modifier that you apply to a view or another view modifier, producing a different version of the original value.
- [EmptyModifier](emptymodifier.md): An empty, or identity, modifier, used during development to switch modifiers at compile time.
- [EnvironmentalModifier](environmentalmodifier.md): A modifier that must resolve to a concrete modifier in an environment before use.
- [ManipulableModifier](manipulablemodifier.md)
- [ManipulableResponderModifier](manipulablerespondermodifier.md)
- [ManipulableTransformBindingModifier](manipulabletransformbindingmodifier.md)
- [ManipulationGeometryModifier](manipulationgeometrymodifier.md)
- [ManipulationGestureModifier](manipulationgesturemodifier.md)
- [ManipulationUsingGestureStateModifier](manipulationusinggesturestatemodifier.md)
- [Manipulable](manipulable.md): A namespace for various manipulable related types.
