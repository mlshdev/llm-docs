> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view-appearance](https://developer.apple.com/documentation/swiftui/view-appearance)

# Appearance modifiers

**Framework:** SwiftUI  
**Kind:** API Collection

Configure a view’s foreground and background styles, controls, and visibility.

<a id="Overview"></a>

## Overview

Use these modifiers to configure the appearance of a view, including the use of color and tint, and the application of overlays and background elements. Control the visibility of a view and specific elements within a view. Manage the shape and size of various controls.

For information about configuring views, see [View configuration](view-configuration.md).

## Topics

### Colors and patterns

- [backgroundStyle(\_:)](view/backgroundstyle%28__%29.md): Sets the specified style to render backgrounds within the view.
- [foregroundStyle(\_:)](view/foregroundstyle%28__%29.md): Sets a view’s foreground elements to use a given style.
- [foregroundStyle(\_:\_:)](view/foregroundstyle%28____%29.md): Sets the primary and secondary levels of the foreground style in the child view.
- [foregroundStyle(\_:\_:\_:)](view/foregroundstyle%28______%29.md): Sets the primary, secondary, and tertiary levels of the foreground style.
- [allowedDynamicRange(\_:)](view/alloweddynamicrange%28__%29.md): Returns a new view configured with the specified allowed dynamic range.

### Tint

- [tint(\_:)](view/tint%28__%29.md): Sets the tint color within this view.
- [listRowSeparatorTint(\_:edges:)](view/listrowseparatortint%28__edges_%29.md): Sets the tint color associated with a row.
- [listSectionSeparatorTint(\_:edges:)](view/listsectionseparatortint%28__edges_%29.md): Sets the tint color associated with a section.
- [listItemTint(\_:)](view/listitemtint%28__%29.md): Sets a fixed tint color for content in a list.

### Light and dark appearance

- [preferredColorScheme(\_:)](view/preferredcolorscheme%28__%29.md): Sets the preferred color scheme for this presentation.
- [preferredSurroundingsEffect(\_:)](view/preferredsurroundingseffect%28__%29.md): Applies an effect to passthrough video.

### Foreground elements

- [border(\_:width:)](view/border%28__width_%29.md): Adds a border to this view with the specified style and width.
- [overlay(alignment:content:)](view/overlay%28alignment_content_%29.md): Layers the views that you specify in front of this view.
- [overlay(\_:ignoresSafeAreaEdges:)](view/overlay%28__ignoressafeareaedges_%29.md): Layers the specified style in front of this view.
- [overlay(\_:in:fillStyle:)](view/overlay%28__in_fillstyle_%29.md): Layers a shape that you specify in front of this view.
- [spatialOverlay(alignment:content:)](view/spatialoverlay%28alignment_content_%29.md): Adds secondary views within the 3D bounds of this view.
- [spatialOverlayPreferenceValue(\_:alignment:\_:)](view/spatialoverlaypreferencevalue%28__alignment___%29.md): Uses the specified preference value from the view to produce another view occupying the same 3D space of the first view.

### Background elements

- [background(alignment:content:)](view/background%28alignment_content_%29.md): Layers the views that you specify behind this view.
- [background(\_:ignoresSafeAreaEdges:)](view/background%28__ignoressafeareaedges_%29.md): Sets the view’s background to a style.
- [background(ignoresSafeAreaEdges:)](view/background%28ignoressafeareaedges_%29.md): Sets the view’s background to the default background style.
- [background(\_:in:fillStyle:)](view/background%28__in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with a style.
- [background(in:fillStyle:)](view/background%28in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with the default background style.
- [alternatingRowBackgrounds(\_:)](view/alternatingrowbackgrounds%28__%29.md): Overrides whether lists and tables in this view have alternating row backgrounds.
- [listRowBackground(\_:)](view/listrowbackground%28__%29.md): Places a custom background view behind a list row item.
- [scrollContentBackground(\_:)](view/scrollcontentbackground%28__%29.md): Specifies the visibility of the background for scrollable views within this view.
- [containerBackground(\_:for:)](view/containerbackground%28__for_%29.md): Sets the container background of the enclosing container using a view.
- [containerBackground(for:alignment:content:)](view/containerbackground%28for_alignment_content_%29.md): Sets the container background of the enclosing container using a view.
- [glassBackgroundEffect(displayMode:)](view/glassbackgroundeffect%28displaymode_%29.md): Fills the view’s background with an automatic glass background effect and container-relative rounded rectangle shape.
- [glassBackgroundEffect(\_:displayMode:)](view/glassbackgroundeffect%28__displaymode_%29.md): Fills the view’s background with a custom glass background effect and container-relative rounded rectangle shape.
- [glassBackgroundEffect(in:displayMode:)](view/glassbackgroundeffect%28in_displaymode_%29.md): Fills the view’s background with an automatic glass background effect and a shape that you specify.
- [glassBackgroundEffect(\_:in:displayMode:)](view/glassbackgroundeffect%28__in_displaymode_%29.md): Fills the view’s background with a custom glass background effect and a shape that you specify.
- [backgroundExtensionEffect()](view/backgroundextensioneffect%28%29.md): Adds the background extension effect to the view. The view will be duplicated into mirrored copies which will be placed around the view on any edge with available safe area. Additionally, a blur effect will be applied on top to blur out the copies.
- [backgroundExtensionEffect(isEnabled:)](view/backgroundextensioneffect%28isenabled_%29.md): Adds the background extension effect to the view. The view will be duplicated into mirrored copies which will be placed around the view on any edge with available safe area. Additionally, a blur effect will be applied on top to blur out the copies.

### Passthrough

- [breakthroughEffect(\_:)](view/breakthrougheffect%28__%29.md): Ensures that the view is always visible to the user, even when other content is occluding it, like 3D models.

### Control configuration

- [defaultWheelPickerItemHeight(\_:)](view/defaultwheelpickeritemheight%28__%29.md): Sets the default wheel-style picker item height.
- [horizontalRadioGroupLayout()](view/horizontalradiogrouplayout%28%29.md): Sets the style for radio group style pickers within this view to be horizontally positioned with the radio buttons inside the layout.
- [controlSize(\_:)](view/controlsize%28__%29.md): Sets the size for controls within this view.
- [buttonBorderShape(\_:)](view/buttonbordershape%28__%29.md): Sets the border shape for buttons in this view.
- [buttonRepeatBehavior(\_:)](view/buttonrepeatbehavior%28__%29.md): Sets whether buttons in this view should repeatedly trigger their actions on prolonged interactions.
- [headerProminence(\_:)](view/headerprominence%28__%29.md): Sets the header prominence for this view.
- [scrollDisabled(\_:)](view/scrolldisabled%28__%29.md): Disables or enables scrolling in scrollable views.
- [scrollBounceBehavior(\_:axes:)](view/scrollbouncebehavior%28__axes_%29.md): Configures the bounce behavior of scrollable views along the specified axis.
- [scrollIndicatorsFlash(onAppear:)](view/scrollindicatorsflash%28onappear_%29.md): Flashes the scroll indicators of a scrollable view when it appears.
- [scrollIndicatorsFlash(trigger:)](view/scrollindicatorsflash%28trigger_%29.md): Flashes the scroll indicators of scrollable views when a value changes.
- [menuOrder(\_:)](view/menuorder%28__%29.md): Sets the preferred order of items for menus presented from this view.
- [menuActionDismissBehavior(\_:)](view/menuactiondismissbehavior%28__%29.md): Tells a menu whether to dismiss after performing an action.
- [paletteSelectionEffect(\_:)](view/paletteselectioneffect%28__%29.md): Specifies the selection effect to apply to a palette item.
- [typeSelectEquivalent(\_:)](view/typeselectequivalent%28__%29.md): Sets an explicit type select equivalent text in a collection, such as a list or table.

### Symbol effects

- [symbolEffect(\_:options:isActive:)](view/symboleffect%28__options_isactive_%29.md): Returns a new view with a symbol effect added to it.
- [symbolEffect(\_:options:value:)](view/symboleffect%28__options_value_%29.md): Returns a new view with a symbol effect added to it.
- [symbolEffectsRemoved(\_:)](view/symboleffectsremoved%28__%29.md): Returns a new view with its inherited symbol image effects either removed or left unchanged.

### Privacy and redaction

- [privacySensitive(\_:)](view/privacysensitive%28__%29.md): Marks the view as containing sensitive, private user data.
- [redacted(reason:)](view/redacted%28reason_%29.md): Adds a reason to apply a redaction to this view hierarchy.
- [unredacted()](view/unredacted%28%29.md): Removes any reason to apply a redaction to this view hierarchy.
- [invalidatableContent(\_:)](view/invalidatablecontent%28__%29.md): Mark the receiver as their content might be invalidated.
- [contentCaptureProtected(\_:)](view/contentcaptureprotected%28__%29.md)

### Visibility

- [hidden()](view/hidden%28%29.md): Hides this view unconditionally.
- [labelsHidden()](view/labelshidden%28%29.md): Hides the labels of any controls contained within this view.
- [labelsVisibility(\_:)](view/labelsvisibility%28__%29.md): Controls the visibility of labels of any controls contained within this view.
- [menuIndicator(\_:)](view/menuindicator%28__%29.md): Sets the menu indicator visibility for controls within this view.
- [listRowSeparator(\_:edges:)](view/listrowseparator%28__edges_%29.md): Sets the display mode for the separator associated with this specific row.
- [listSectionSeparator(\_:edges:)](view/listsectionseparator%28__edges_%29.md): Sets whether to hide the separator associated with a list section.
- [listSectionIndexVisibility(\_:)](view/listsectionindexvisibility%28__%29.md): Changes the visibility of the list section index.
- [persistentSystemOverlays(\_:)](view/persistentsystemoverlays%28__%29.md): Sets the preferred visibility of the non-transient system views overlaying the app.
- [scrollIndicators(\_:axes:)](view/scrollindicators%28__axes_%29.md): Sets the visibility of scroll indicators within this view.
- [scrollClipDisabled(\_:)](view/scrollclipdisabled%28__%29.md): Sets whether a scroll view clips its content to its bounds.
- [sliderThumbVisibility(\_:)](view/sliderthumbvisibility%28__%29.md): Sets the thumb visibility for `Slider`s within this view.
- [tableColumnHeaders(\_:)](view/tablecolumnheaders%28__%29.md): Controls the visibility of a `Table`’s column header views.
- [upperLimbVisibility(\_:)](view/upperlimbvisibility%28__%29.md): Sets the preferred visibility of the user’s upper limbs, while an [ImmersiveSpace](immersivespace.md) scene is presented.
- [volumeBaseplateVisibility(\_:)](view/volumebaseplatevisibility%28__%29.md): Sets the visibility of the baseplate of a volume, which appears when a user looks towards the ‘floor’ of a volume and during resize. Both `automatic` and `visible` will show the baseplate. `hidden` will never show it.

### Sensory feedback

- [sensoryFeedback(\_:trigger:)](view/sensoryfeedback%28__trigger_%29.md): Plays the specified `feedback` when the provided `trigger` value changes.
- [sensoryFeedback(trigger:\_:)](view/sensoryfeedback%28trigger___%29.md): Plays feedback when returned from the `feedback` closure after the provided `trigger` value changes.
- [sensoryFeedback(\_:trigger:condition:)](view/sensoryfeedback%28__trigger_condition_%29.md): Plays the specified `feedback` when the provided `trigger` value changes and the `condition` closure returns `true`.

### Widget configuration

- [widgetAccentable(\_:)](view/widgetaccentable%28__%29.md): Adds the view and all of its subviews to the accented group.
- [widgetCurvesContent(\_:)](view/widgetcurvescontent%28__%29.md): Displays the widget’s content along a curve if the context allows it.
- [widgetLabel(\_:)](view/widgetlabel%28__%29.md): Returns a localized text label that displays additional content outside the accessory family widget’s main SwiftUI view.
- [widgetLabel(label:)](view/widgetlabel%28label_%29.md): Creates a label for displaying additional content outside an accessory family widget’s main SwiftUI view.
- [dynamicIsland(verticalPlacement:)](view/dynamicisland%28verticalplacement_%29.md): Specifies the vertical placement for a view of an expanded Live Activity that appears in the Dynamic Island.
- [accessoryWidgetGroupStyle(\_:)](view/accessorywidgetgroupstyle%28__%29.md): The view modifier that can be applied to `AccessoryWidgetGroup` to specify the shape the three content views will be masked with. The value of `style` is set to `.automatic`, which is `.circular` by default.
- [controlWidgetActionHint(\_:)](view/controlwidgetactionhint%28__%29.md): The action hint of the control described by the modified label.
- [controlWidgetStatus(\_:)](view/controlwidgetstatus%28__%29.md): The status of the control described by the modified label.

### Window behaviors

- [windowDismissBehavior(\_:)](view/windowdismissbehavior%28__%29.md): Configures the dismiss functionality for the window enclosing `self`.
- [windowFullScreenBehavior(\_:)](view/windowfullscreenbehavior%28__%29.md): Configures the full screen functionality for the window enclosing `self`.
- [windowToolbarFullScreenVisibility(\_:)](view/windowtoolbarfullscreenvisibility%28__%29.md): Configures the visibility of the window toolbar when the window enters full screen mode.
- [windowMinimizeBehavior(\_:)](view/windowminimizebehavior%28__%29.md): Configures the minimize functionality for the window enclosing `self`.
- [windowResizeAnchor(\_:)](view/windowresizeanchor%28__%29.md): Sets the window anchor point used when the size of the view changes such that the window must resize.
- [windowResizeBehavior(\_:)](view/windowresizebehavior%28__%29.md): Configures the resize functionality for the window enclosing `self`.
- [preferredWindowClippingMargins(\_:\_:)](view/preferredwindowclippingmargins%28____%29.md): Requests additional margins for drawing beyond the bounds of the window.

## See Also

### Configuring view elements

- [Accessibility modifiers](view-accessibility.md): Make your SwiftUI apps accessible to everyone, including people with disabilities.
- [Text and symbol modifiers](view-text-and-symbols.md): Manage the rendering, selection, and entry of text in your view.
- [Auxiliary view modifiers](view-auxiliary-views.md): Add and configure supporting views, like toolbars and context menus.
- [Chart view modifiers](view-chart-view.md): Configure charts that you declare with Swift Charts.
