> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focus](https://developer.apple.com/documentation/swiftui/focus)

# Focus

**Framework:** SwiftUI  
**Kind:** API Collection

Identify and control which visible object responds to user interaction.

<a id="Overview"></a>

## Overview

Focus indicates which element in the display receives the next input. Use view modifiers to indicate which views can receive focus, to detect which view has focus, and to programmatically control focus state.

![](https://developer.apple.com/images/com.apple.SwiftUI/focus-hero@2x.png)

For design guidance, see [Focus and selection](https://developer.apple.com/design/human-interface-guidelines/focus-and-selection) in the Human Interface Guidelines.

## Topics

### Essentials

- [Focus Cookbook: Supporting and enhancing focus-driven interactions in your SwiftUI app](focus-cookbook-sample.md): Create custom focusable views with key-press handlers that accelerate keyboard input and support movement, and control focus programmatically.

### Indicating that a view can receive focus

- [focusable(\_:)](view/focusable%28__%29.md): Specifies if the view is focusable.
- [focusable(\_:interactions:)](view/focusable%28__interactions_%29.md): Specifies if the view is focusable, and if so, what focus-driven interactions it supports.
- [FocusInteractions](focusinteractions.md): Values describe different focus interactions that a view can support.

### Managing focus state

- [focused(\_:equals:)](view/focused%28__equals_%29.md): Modifies this view by binding its focus state to the given state value.
- [focused(\_:)](view/focused%28__%29.md): Modifies this view by binding its focus state to the given Boolean state value.
- [isFocused](environmentvalues/isfocused.md): Returns whether the nearest focusable ancestor has focus.
- [FocusState](focusstate.md): A property wrapper type that can read and write a value that SwiftUI updates as the placement of focus within the scene changes.
- [FocusedValue](focusedvalue.md): A property wrapper for observing values from the focused view or one of its ancestors.
- [Entry()](entry%28%29.md): Creates an environment values, transaction, container values, or focused values entry.
- [FocusedValueKey](focusedvaluekey.md): A protocol for identifier types used when publishing and observing focused values.
- [FocusedBinding](focusedbinding.md): A convenience property wrapper for observing and automatically unwrapping state bindings from the focused view or one of its ancestors.
- [searchFocused(\_:)](view/searchfocused%28__%29.md): Modifies this view by binding the focus state of the search field associated with the nearest searchable modifier to the given Boolean value.
- [searchFocused(\_:equals:)](view/searchfocused%28__equals_%29.md): Modifies this view by binding the focus state of the search field associated with the nearest searchable modifier to the given value.

### Exposing value types to focused views

- [focusedValue(\_:)](view/focusedvalue%28__%29.md): Sets the focused value for the given object type.
- [focusedValue(\_:\_:)](view/focusedvalue%28____%29.md): Modifies this view by injecting a value that you provide for use by other views whose state depends on the focused view hierarchy.
- [focusedSceneValue(\_:)](view/focusedscenevalue%28__%29.md): Sets the focused value for the given object type at a scene-wide scope.
- [focusedSceneValue(\_:\_:)](view/focusedscenevalue%28____%29.md): Modifies this view by injecting a value that you provide for use by other views whose state depends on the focused scene.
- [FocusedValues](focusedvalues.md): A collection of state exported by the focused scene or view and its ancestors.

### Exposing reference types to focused views

- [focusedObject(\_:)](view/focusedobject%28__%29.md): Creates a new view that exposes the provided object to other views whose whose state depends on the focused view hierarchy.
- [focusedSceneObject(\_:)](view/focusedsceneobject%28__%29.md): Creates a new view that exposes the provided object to other views whose whose state depends on the active scene.
- [FocusedObject](focusedobject.md): A property wrapper type for an observable object supplied by the focused view or one of its ancestors.

### Setting focus scope

- [focusScope(\_:)](view/focusscope%28__%29.md): Creates a focus scope that SwiftUI uses to limit default focus preferences.
- [focusSection()](view/focussection%28%29.md): Indicates that the view’s frame and cohort of focusable descendants should be used to guide focus movement.

### Controlling default focus

- [prefersDefaultFocus(\_:in:)](view/prefersdefaultfocus%28__in_%29.md): Indicates that the view should receive focus by default for a given namespace.
- [defaultFocus(\_:\_:priority:)](view/defaultfocus%28____priority_%29.md): Defines a region of the window in which default focus is evaluated by assigning a value to a given focus state binding.
- [DefaultFocusEvaluationPriority](defaultfocusevaluationpriority.md): Prioritizations for default focus preferences when evaluating where to move focus in different circumstances.

### Resetting focus

- [resetFocus](environmentvalues/resetfocus.md): An action that requests the focus system to reevaluate default focus.
- [ResetFocusAction](resetfocusaction.md): An environment value that provides the ability to reevaluate default focus.

### Configuring effects

- [focusEffectDisabled(\_:)](view/focuseffectdisabled%28__%29.md): Adds a condition that controls whether this view can display focus effects, such as a default focus ring or hover effect.
- [isFocusEffectEnabled](environmentvalues/isfocuseffectenabled.md): A Boolean value that indicates whether the view associated with this environment allows focus effects to be displayed.

## See Also

### Event handling

- [Gestures](gestures.md): Define interactions from taps, clicks, and swipes to fine-grained gestures.
- [Input events](input-events.md): Respond to input from a hardware device, like a keyboard or a Touch Bar.
- [Clipboard](clipboard.md): Enable people to move or duplicate items by issuing Copy and Paste commands.
- [Drag and drop](drag-and-drop.md): Enable people to move or duplicate items by dragging them from one location to another.
- [System events](system-events.md): React to system events, like opening a URL.
