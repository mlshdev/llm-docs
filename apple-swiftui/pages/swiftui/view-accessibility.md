> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view-accessibility](https://developer.apple.com/documentation/swiftui/view-accessibility)

# Accessibility modifiers

**Framework:** SwiftUI  
**Kind:** API Collection

Make your SwiftUI apps accessible to everyone, including people with disabilities.

<a id="Overview"></a>

## Overview

Like all Apple UI frameworks, SwiftUI comes with built-in accessibility support. The framework introspects common elements like navigation views, lists, text fields, sliders, buttons, and so on, and provides basic accessibility labels and values by default. You don’t have to do any extra work to enable these standard accessibility features.

SwiftUI also provides tools to help you enhance the accessibility of your app. For example, you can explicitly add accessibility labels to elements in your UI using the [accessibilityLabel(\_:)](view/accessibilitylabel%28__%29.md) or the [accessibilityValue(\_:)](view/accessibilityvalue%28__%29.md) view modifier.

To learn more about adding accessibility features to your app, see [Accessibility fundamentals](accessibility-fundamentals.md).

## Topics

### Labels

- [accessibilityLabel(\_:)](view/accessibilitylabel%28__%29.md): Adds a label to the view that describes its contents.
- [accessibilityLabel(\_:isEnabled:)](view/accessibilitylabel%28__isenabled_%29.md): Adds a label to the view that describes its contents.
- [accessibilityLabel(content:)](view/accessibilitylabel%28content_%29.md): Adds a label to the view that describes its contents.
- [accessibilityInputLabels(\_:)](view/accessibilityinputlabels%28__%29.md): Sets alternate input labels with which users identify a view.
- [accessibilityInputLabels(\_:isEnabled:)](view/accessibilityinputlabels%28__isenabled_%29.md): Sets alternate input labels with which users identify a view.
- [accessibilityLabeledPair(role:id:in:)](view/accessibilitylabeledpair%28role_id_in_%29.md): Pairs an accessibility element representing a label with the element for the matching content.

### Values

- [accessibilityValue(\_:)](view/accessibilityvalue%28__%29.md): Adds a textual description of the value that the view contains.
- [accessibilityValue(\_:isEnabled:)](view/accessibilityvalue%28__isenabled_%29.md): Adds a textual description of the value that the view contains.

### Hints

- [accessibilityHint(\_:)](view/accessibilityhint%28__%29.md): Communicates to the user what happens after performing the view’s action.
- [accessibilityHint(\_:isEnabled:)](view/accessibilityhint%28__isenabled_%29.md): Communicates to the user what happens after performing the view’s action.

### Actions

- [accessibilityAction(\_:\_:)](view/accessibilityaction%28____%29.md): Adds an accessibility action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityActions(\_:)](view/accessibilityactions%28__%29.md): Adds multiple accessibility actions to the view.
- [accessibilityActions(category:\_:)](view/accessibilityactions%28category___%29.md): Adds multiple accessibility actions to the view with a specific category. Actions allow assistive technologies, such as VoiceOver, to interact with the view by invoking the action and are grouped by their category. When multiple action modifiers with an equal category are applied to the view, the actions are combined together.
- [accessibilityAction(named:\_:)](view/accessibilityaction%28named___%29.md): Adds an accessibility action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityAction(action:label:)](view/accessibilityaction%28action_label_%29.md): Adds an accessibility action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityAction(intent:label:)](view/accessibilityaction%28intent_label_%29.md): Adds an accessibility action labeled by the contents of `label` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.
- [accessibilityAction(\_:intent:)](view/accessibilityaction%28__intent_%29.md): Adds an accessibility action representing `actionKind` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.
- [accessibilityAction(named:intent:)](view/accessibilityaction%28named_intent_%29.md): Adds an accessibility action labeled `name` to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action. When the action is performed, the `intent` will be invoked.
- [accessibilityAdjustableAction(\_:)](view/accessibilityadjustableaction%28__%29.md): Adds an accessibility adjustable action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityScrollAction(\_:)](view/accessibilityscrollaction%28__%29.md): Adds an accessibility scroll action to the view. Actions allow assistive technologies, such as the VoiceOver, to interact with the view by invoking the action.
- [accessibilityScrollStatus(\_:isEnabled:)](view/accessibilityscrollstatus%28__isenabled_%29.md): Changes the announcement provided by accessibility technologies when a user scrolls a scroll view within this view.

### Gestures

- [accessibilityActivationPoint(\_:)](view/accessibilityactivationpoint%28__%29.md): The activation point for an element is the location assistive technologies use to initiate gestures.
- [accessibilityActivationPoint(\_:isEnabled:)](view/accessibilityactivationpoint%28__isenabled_%29.md): The activation point for an element is the location assistive technologies use to initiate gestures.
- [accessibilityDragPoint(\_:description:)](view/accessibilitydragpoint%28__description_%29.md): The point an assistive technology should use to begin a drag interaction.
- [accessibilityDragPoint(\_:description:isEnabled:)](view/accessibilitydragpoint%28__description_isenabled_%29.md): The point an assistive technology should use to begin a drag interaction.
- [accessibilityDropPoint(\_:description:)](view/accessibilitydroppoint%28__description_%29.md): The point an assistive technology should use to end a drag interaction.
- [accessibilityDropPoint(\_:description:isEnabled:)](view/accessibilitydroppoint%28__description_isenabled_%29.md): The point an assistive technology should use to end a drag interaction.
- [accessibilityDirectTouch(\_:options:)](view/accessibilitydirecttouch%28__options_%29.md): Explicitly set whether this accessibility element is a direct touch area. Direct touch areas passthrough touch events to the app rather than being handled through an assistive technology, such as VoiceOver. The modifier accepts an optional `AccessibilityDirectTouchOptions` option set to customize the functionality of the direct touch area.
- [accessibilityZoomAction(\_:)](view/accessibilityzoomaction%28__%29.md): Adds an accessibility zoom action to the view. Actions allow assistive technologies, such as VoiceOver, to interact with the view by invoking the action.

### Elements

- [accessibilityElement(children:)](view/accessibilityelement%28children_%29.md): Creates a new accessibility element, or modifies the [AccessibilityChildBehavior](accessibilitychildbehavior.md) of the existing accessibility element.
- [accessibilityChildren(children:)](view/accessibilitychildren%28children_%29.md): Replaces the existing accessibility element’s children with one or more new synthetic accessibility elements.
- [accessibilityHidden(\_:)](view/accessibilityhidden%28__%29.md): Specifies whether to hide this view from system accessibility features.
- [accessibilityHidden(\_:isEnabled:)](view/accessibilityhidden%28__isenabled_%29.md): Specifies whether to hide this view from system accessibility features.

### Custom controls

- [accessibilityRepresentation(representation:)](view/accessibilityrepresentation%28representation_%29.md): Replaces one or more accessibility elements for this view with new accessibility elements.
- [accessibilityRespondsToUserInteraction(\_:)](view/accessibilityrespondstouserinteraction%28__%29.md): Explicitly set whether this Accessibility element responds to user interaction and would thus be interacted with by technologies such as Switch Control, Voice Control or Full Keyboard Access.
- [accessibilityRespondsToUserInteraction(\_:isEnabled:)](view/accessibilityrespondstouserinteraction%28__isenabled_%29.md): Explicitly set whether this Accessibility element responds to user interaction and would thus be interacted with by technologies such as Switch Control, Voice Control or Full Keyboard Access.

### Custom content

- [accessibilityCustomContent(\_:\_:importance:)](view/accessibilitycustomcontent%28____importance_%29.md): Add additional accessibility information to the view.

### Working with rotors

- [accessibilityRotor(\_:entries:)](view/accessibilityrotor%28__entries_%29.md): Create an Accessibility Rotor with the specified user-visible label, and entries generated from the content closure.
- [accessibilityRotor(\_:entries:entryID:entryLabel:)](view/accessibilityrotor%28__entries_entryid_entrylabel_%29.md): Create an Accessibility Rotor with the specified user-visible label and entries.
- [accessibilityRotor(\_:entries:entryLabel:)](view/accessibilityrotor%28__entries_entrylabel_%29.md): Create an Accessibility Rotor with the specified user-visible label and entries.
- [accessibilityRotor(\_:textRanges:)](view/accessibilityrotor%28__textranges_%29.md): Create an Accessibility Rotor with the specified user-visible label and entries for each of the specified ranges. The Rotor will be attached to the current Accessibility element, and each entry will go the specified range of that element.

### Configuring rotors

- [accessibilityRotorEntry(id:in:)](view/accessibilityrotorentry%28id_in_%29.md): Defines an explicit identifier tying an Accessibility element for this view to an entry in an Accessibility Rotor.
- [accessibilityLinkedGroup(id:in:)](view/accessibilitylinkedgroup%28id_in_%29.md): Links multiple accessibility elements so that the user can quickly navigate from one element to another, even when the elements are not near each other in the accessibility hierarchy.
- [accessibilitySortPriority(\_:)](view/accessibilitysortpriority%28__%29.md): Sets the sort priority order for this view’s accessibility element, relative to other elements at the same level.

### Focus

- [accessibilityFocused(\_:)](view/accessibilityfocused%28__%29.md): Modifies this view by binding its accessibility element’s focus state to the given boolean state value.
- [accessibilityFocused(\_:equals:)](view/accessibilityfocused%28__equals_%29.md): Modifies this view by binding its accessibility element’s focus state to the given state value.
- [accessibilityDefaultFocus(\_:\_:)](view/accessibilitydefaultfocus%28____%29.md): Defines a region in which default accessibility focus is evaluated by assigning a value to a given accessibility focus state binding.

### Traits

- [accessibilityAddTraits(\_:)](view/accessibilityaddtraits%28__%29.md): Adds the given traits to the view.
- [accessibilityRemoveTraits(\_:)](view/accessibilityremovetraits%28__%29.md): Removes the given traits from this view.

### Identity

- [accessibilityIdentifier(\_:)](view/accessibilityidentifier%28__%29.md): Uses the string you specify to identify the view.
- [accessibilityIdentifier(\_:isEnabled:)](view/accessibilityidentifier%28__isenabled_%29.md): Uses the string you specify to identify the view.

### Color inversion

- [accessibilityIgnoresInvertColors(\_:)](view/accessibilityignoresinvertcolors%28__%29.md): Sets whether this view should ignore the system Smart Invert setting.

### Content descriptions

- [accessibilityTextContentType(\_:)](view/accessibilitytextcontenttype%28__%29.md): Sets an accessibility text content type.
- [accessibilityHeading(\_:)](view/accessibilityheading%28__%29.md): Sets the accessibility level of this heading.

### VoiceOver

- [speechAdjustedPitch(\_:)](view/speechadjustedpitch%28__%29.md): Raises or lowers the pitch of spoken text.
- [speechAlwaysIncludesPunctuation(\_:)](view/speechalwaysincludespunctuation%28__%29.md): Sets whether VoiceOver should always speak all punctuation in the text view.
- [speechAnnouncementsQueued(\_:)](view/speechannouncementsqueued%28__%29.md): Controls whether to queue pending announcements behind existing speech rather than interrupting speech in progress.
- [speechSpellsOutCharacters(\_:)](view/speechspellsoutcharacters%28__%29.md): Sets whether VoiceOver should speak the contents of the text view character by character.

### Charts

- [accessibilityChartDescriptor(\_:)](view/accessibilitychartdescriptor%28__%29.md): Adds a descriptor to a View that represents a chart to make the chart’s contents accessible to all users.

### Large content

- [accessibilityShowsLargeContentViewer()](view/accessibilityshowslargecontentviewer%28%29.md): Adds a default large content view to be shown by the large content viewer.
- [accessibilityShowsLargeContentViewer(\_:)](view/accessibilityshowslargecontentviewer%28__%29.md): Adds a custom large content view to be shown by the large content viewer.

### Quick actions

- [accessibilityQuickAction(style:content:)](view/accessibilityquickaction%28style_content_%29.md): Adds a quick action to be shown by the system when active.
- [accessibilityQuickAction(style:isActive:content:)](view/accessibilityquickaction%28style_isactive_content_%29.md): Adds a quick action to be shown by the system when active.

### Using assistive access

- [assistiveAccessNavigationIcon(\_:)](view/assistiveaccessnavigationicon%28__%29.md): Configures the view’s icon for purposes of navigation.
- [assistiveAccessNavigationIcon(systemImage:)](view/assistiveaccessnavigationicon%28systemimage_%29.md): Configures the view’s icon for purposes of navigation.

## See Also

### Configuring view elements

- [Appearance modifiers](view-appearance.md): Configure a view’s foreground and background styles, controls, and visibility.
- [Text and symbol modifiers](view-text-and-symbols.md): Manage the rendering, selection, and entry of text in your view.
- [Auxiliary view modifiers](view-auxiliary-views.md): Add and configure supporting views, like toolbars and context menus.
- [Chart view modifiers](view-chart-view.md): Configure charts that you declare with Swift Charts.
