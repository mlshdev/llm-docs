> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/input-events](https://developer.apple.com/documentation/swiftui/input-events)

# Input events

**Framework:** SwiftUI  
**Kind:** API Collection

Respond to input from a hardware device, like a keyboard or a Touch Bar.

<a id="Overview"></a>

## Overview

SwiftUI provides view modifiers that enable your app to listen for and react to various kinds of user input. For example, you can create keyboard shortcuts, respond to a form submission, or take input from the digital crown of an Apple Watch.

![](https://developer.apple.com/images/com.apple.SwiftUI/input-events-hero@2x.png)

For design guidance, see [Inputs](https://developer.apple.com/design/human-interface-guidelines/inputs) in the Human Interface Guidelines.

## Topics

### Responding to keyboard input

- [onKeyPress(\_:action:)](view/onkeypress%28__action_%29.md): Performs an action if the user presses a key on a hardware keyboard while the view has focus.
- [onKeyPress(phases:action:)](view/onkeypress%28phases_action_%29.md): Performs an action if the user presses any key on a hardware keyboard while the view has focus.
- [onKeyPress(\_:phases:action:)](view/onkeypress%28__phases_action_%29.md): Performs an action if the user presses a key on a hardware keyboard while the view has focus.
- [onKeyPress(characters:phases:action:)](view/onkeypress%28characters_phases_action_%29.md): Performs an action if the user presses one or more keys on a hardware keyboard while the view has focus.
- [onKeyPress(keys:phases:action:)](view/onkeypress%28keys_phases_action_%29.md): Performs an action if the user presses one or more keys on a hardware keyboard while the view has focus.
- [KeyPress](keypress.md)

### Creating keyboard shortcuts

- [keyboardShortcut(\_:)](view/keyboardshortcut%28__%29.md): Assigns a keyboard shortcut to the modified control.
- [keyboardShortcut(\_:modifiers:)](view/keyboardshortcut%28__modifiers_%29.md): Defines a keyboard shortcut and assigns it to the modified control.
- [keyboardShortcut(\_:modifiers:localization:)](view/keyboardshortcut%28__modifiers_localization_%29.md): Defines a keyboard shortcut and assigns it to the modified control.
- [keyboardShortcut](environmentvalues/keyboardshortcut.md): The keyboard shortcut that buttons in this environment will be triggered with.
- [KeyboardShortcut](keyboardshortcut.md): Keyboard shortcuts describe combinations of keys on a keyboard that the user can press in order to activate a button or toggle.
- [KeyEquivalent](keyequivalent.md): Key equivalents consist of a letter, punctuation, or function key that can be combined with an optional set of modifier keys to specify a keyboard shortcut.
- [EventModifiers](eventmodifiers.md): A set of key modifiers that you can add to a gesture.

### Responding to modifier keys

- [onModifierKeysChanged(mask:initial:\_:)](view/onmodifierkeyschanged%28mask_initial___%29.md): Performs an action whenever the user presses or releases a hardware modifier key.
- [modifierKeyAlternate(\_:\_:)](view/modifierkeyalternate%28____%29.md): Builds a view to use in place of the modified view when the user presses the modifier key(s) indicated by the given set.

### Responding to hover events

- [onHover(perform:)](view/onhover%28perform_%29.md): Adds an action to perform when the user moves the pointer over or away from the view’s frame.
- [onContinuousHover(coordinateSpace:perform:)](view/oncontinuoushover%28coordinatespace_perform_%29.md): Adds an action to perform when the pointer enters, moves within, and exits the view’s bounds.
- [hoverEffect(\_:isEnabled:)](view/hovereffect%28__isenabled_%29.md): Applies a hover effect to this view.
- [hoverEffectDisabled(\_:)](view/hovereffectdisabled%28__%29.md): Adds a condition that controls whether this view can display hover effects.
- [defaultHoverEffect(\_:)](view/defaulthovereffect%28__%29.md): Sets the default hover effect to use for views within this view.
- [isHoverEffectEnabled](environmentvalues/ishovereffectenabled.md): A Boolean value that indicates whether the view associated with this environment allows hover effects to be displayed.
- [HoverPhase](hoverphase.md): The current hovering state and value of the pointer.
- [HoverEffectPhaseOverride](hovereffectphaseoverride.md): Options for overriding a hover effect’s current phase.
- [OrnamentHoverContentEffect](ornamenthovercontenteffect.md): Presents an ornament on hover using a custom effect.
- [OrnamentHoverEffect](ornamenthovereffect.md): Presents an ornament on hover.

### Modifying pointer appearance

- [pointerStyle(\_:)](view/pointerstyle%28__%29.md): Sets the pointer style to display when the pointer is over the view.
- [PointerStyle](pointerstyle.md): A style describing the appearance of the pointer (also called a cursor) when it’s hovered over a view.
- [pointerVisibility(\_:)](view/pointervisibility%28__%29.md): Sets the visibility of the pointer when it’s over the view.

### Changing view appearance for hover events

- [hoverEffect(\_:)](view/hovereffect%28__%29.md): Applies a hover effect to this view.
- [HoverEffect](hovereffect.md): An effect applied when the pointer hovers over a view.
- [hoverEffect(\_:in:isEnabled:)](view/hovereffect%28__in_isenabled_%29.md): Applies a hover effect to this view, optionally adding it to a [HoverEffectGroup](hovereffectgroup.md).
- [hoverEffect(in:isEnabled:body:)](view/hovereffect%28in_isenabled_body_%29.md): Applies a hover effect to this view described by the given closure.
- [CustomHoverEffect](customhovereffect.md): A type that represents how a view should change when a pointer hovers over a view, or when someone looks at the view.
- [ContentHoverEffect](contenthovereffect.md): A `CustomHoverEffect` that applies effects to a view on hover using a closure.
- [HoverEffectGroup](hovereffectgroup.md): Describes a grouping of effects that activate together.
- [hoverEffectGroup()](view/hovereffectgroup%28%29.md): Adds an implicit [HoverEffectGroup](hovereffectgroup.md) to all effects defined on descendant views, so that all effects added to subviews activate as a group whenever this view or any descendant views are hovered.
- [hoverEffectGroup(\_:)](view/hovereffectgroup%28__%29.md): Adds a [HoverEffectGroup](hovereffectgroup.md) to all effects defined on descendant views, and activates the group whenever this view or any descendant views are hovered.
- [hoverEffectGroup(id:in:behavior:)](view/hovereffectgroup%28id_in_behavior_%29.md): Adds a [HoverEffectGroup](hovereffectgroup.md) to all effects defined on descendant views, and activates the group whenever this view or any descendant views are hovered.
- [GroupHoverEffect](grouphovereffect.md): A `CustomHoverEffect` that activates a named group of effects.
- [HoverEffectContent](hovereffectcontent.md): A type that describes the effects of a view for a particular hover effect phase.
- [EmptyHoverEffectContent](emptyhovereffectcontent.md): An empty base effect that you use to build other effects.
- [handPointerBehavior(\_:)](view/handpointerbehavior%28__%29.md): Sets the behavior of the hand pointer while the user is interacting with the view.
- [HandPointerBehavior](handpointerbehavior.md): A behavior that can be applied to the hand pointer while the user is interacting with a view.

### Responding to submission events

- [onSubmit(of:\_:)](view/onsubmit%28of___%29.md): Adds an action to perform when the user submits a value to this view.
- [submitScope(\_:)](view/submitscope%28__%29.md): Prevents submission triggers originating from this view to invoke a submission action configured by a submission modifier higher up in the view hierarchy.
- [SubmitTriggers](submittriggers.md): A type that defines various triggers that result in the firing of a submission action.

### Labeling a submission event

- [submitLabel(\_:)](view/submitlabel%28__%29.md): Sets the submit label for this view.
- [SubmitLabel](submitlabel.md): A semantic label describing the label of submission within a view hierarchy.

### Responding to commands

- [onMoveCommand(perform:)](view/onmovecommand%28perform_%29.md): Adds an action to perform in response to a move command, like when the user presses an arrow key on a Mac keyboard, or taps the edge of the Siri Remote when controlling an Apple TV.
- [onDeleteCommand(perform:)](view/ondeletecommand%28perform_%29.md): Adds an action to perform in response to the system’s Delete command, or pressing either the ⌫ (backspace) or ⌦ (forward delete) keys while the view has focus.
- [pageCommand(value:in:step:)](view/pagecommand%28value_in_step_%29.md): Steps a value through a range in response to page up or page down commands.
- [onExitCommand(perform:)](view/onexitcommand%28perform_%29.md): Sets up an action that triggers in response to receiving the exit command while the view has focus.
- [onPlayPauseCommand(perform:)](view/onplaypausecommand%28perform_%29.md): Adds an action to perform in response to the system’s Play/Pause command.
- [onCommand(\_:perform:)](view/oncommand%28__perform_%29.md): Adds an action to perform in response to the given selector.
- [MoveCommandDirection](movecommanddirection.md): Specifies the direction of an arrow key movement.

### Controlling hit testing

- [allowsTightening(\_:)](view/allowstightening%28__%29.md): Sets whether text in this view can compress the space between characters when necessary to fit text in a line.
- [contentShape(\_:eoFill:)](view/contentshape%28__eofill_%29.md): Defines the content shape for hit testing.
- [contentShape(\_:\_:eoFill:)](view/contentshape%28____eofill_%29.md): Sets the content shape for this view.
- [ContentShapeKinds](contentshapekinds.md): A kind for the content shape of a view.

### Interacting with the Digital Crown

- [digitalCrownAccessory(\_:)](view/digitalcrownaccessory%28__%29.md): Specifies the visibility of Digital Crown accessory Views on Apple Watch.
- [digitalCrownAccessory(content:)](view/digitalcrownaccessory%28content_%29.md): Places an accessory View next to the Digital Crown on Apple Watch.
- [digitalCrownRotation(\_:from:through:sensitivity:isContinuous:isHapticFeedbackEnabled:onChange:onIdle:)](view/digitalcrownrotation%28__from_through_sensitivity_iscontinuous_ishapticfeedbackenabled_onchange_onidle_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(\_:onChange:onIdle:)](view/digitalcrownrotation%28__onchange_onidle_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(detent:from:through:by:sensitivity:isContinuous:isHapticFeedbackEnabled:onChange:onIdle:)](view/digitalcrownrotation%28detent_from_through_by_sensitivity_iscontinuous_ishapticfeedbackenabled_onchange_onidle_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(\_:)](view/digitalcrownrotation%28__%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(\_:from:through:by:sensitivity:isContinuous:isHapticFeedbackEnabled:)](view/digitalcrownrotation%28__from_through_by_sensitivity_iscontinuous_ishapticfeedbackenabled_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [DigitalCrownEvent](digitalcrownevent.md): An event emitted when the user rotates the Digital Crown.
- [DigitalCrownRotationalSensitivity](digitalcrownrotationalsensitivity.md): The amount of Digital Crown rotation needed to move between two integer numbers.

### Managing Touch Bar input

- [touchBar(content:)](view/touchbar%28content_%29.md): Sets the content that the Touch Bar displays.
- [touchBar(\_:)](view/touchbar%28__%29.md): Sets the Touch Bar content to be shown in the Touch Bar when applicable.
- [touchBarItemPrincipal(\_:)](view/touchbaritemprincipal%28__%29.md): Sets principal views that have special significance to this Touch Bar.
- [touchBarCustomizationLabel(\_:)](view/touchbarcustomizationlabel%28__%29.md): Sets a user-visible string that identifies the view’s functionality.
- [touchBarItemPresence(\_:)](view/touchbaritempresence%28__%29.md): Sets the behavior of the user-customized view.
- [TouchBar](touchbar.md): A container for a view that you can show in the Touch Bar.
- [TouchBarItemPresence](touchbaritempresence.md): Options that affect user customization of the Touch Bar.

### Responding to capture events

- [onCameraCaptureEvent(isEnabled:action:)](view/oncameracaptureevent%28isenabled_action_%29.md): Used to register an action triggered by system capture events.
- [onCameraCaptureEvent(isEnabled:primaryAction:secondaryAction:)](view/oncameracaptureevent%28isenabled_primaryaction_secondaryaction_%29.md): Used to register actions triggered by system capture events.

## See Also

### Event handling

- [Gestures](gestures.md): Define interactions from taps, clicks, and swipes to fine-grained gestures.
- [Clipboard](clipboard.md): Enable people to move or duplicate items by issuing Copy and Paste commands.
- [Drag and drop](drag-and-drop.md): Enable people to move or duplicate items by dragging them from one location to another.
- [Focus](focus.md): Identify and control which visible object responds to user interaction.
- [System events](system-events.md): React to system events, like opening a URL.
