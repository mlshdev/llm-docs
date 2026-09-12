> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view-style-modifiers](https://developer.apple.com/documentation/swiftui/view-style-modifiers)

# Style modifiers

**Framework:** SwiftUI  
**Kind:** API Collection

Apply built-in styles to different types of views.

<a id="Overview"></a>

## Overview

SwiftUI defines built-in styles for certain kinds of views, and chooses the appropriate style for a particular presentation context. For example, a [Label](label.md) might appear as an icon, a string title, or both, depending on factors like the platform, whether the view appears in a toolbar, and so on.

You can override the automatic style by using one of the style modifiers. These modifiers typically propagate through container views, so you can wrap an entire view hierarchy in a style modifier to affect all the views of the given type within the hierarchy. Some view types enable you to create custom styles, which you also apply using style modifiers.

For more information about styling views, see [View styles](view-styles.md).

## Topics

### Liquid Glass

- [glassEffect(\_:in:)](view/glasseffect%28__in_%29.md): Applies the Liquid Glass effect to a view.
- [glassEffectID(\_:in:)](view/glasseffectid%28__in_%29.md): Associates an identity value to Liquid Glass effects defined within this view.
- [glassEffectTransition(\_:)](view/glasseffecttransition%28__%29.md): Associates a glass effect transition with any glass effects defined within this view.
- [glassEffectUnion(id:namespace:)](view/glasseffectunion%28id_namespace_%29.md): Associates any Liquid Glass effects defined within this view to a union with the provided identifier.

### Controls

- [buttonStyle(\_:)](view/buttonstyle%28__%29.md): Sets the style for buttons within this view to a button style with a custom appearance and standard interaction behavior.
- [buttonSizing(\_:)](view/buttonsizing%28__%29.md): The preferred sizing behavior of buttons in the view hierarchy.
- [datePickerStyle(\_:)](view/datepickerstyle%28__%29.md): Sets the style for date pickers within this view.
- [menuStyle(\_:)](view/menustyle%28__%29.md): Sets the style for menus within this view.
- [pickerStyle(\_:)](view/pickerstyle%28__%29.md): Sets the style for pickers within this view.
- [toggleStyle(\_:)](view/togglestyle%28__%29.md): Sets the style for toggles in a view hierarchy.

### Indicators

- [gaugeStyle(\_:)](view/gaugestyle%28__%29.md): Sets the style for gauges within this view.
- [progressViewStyle(\_:)](view/progressviewstyle%28__%29.md): Sets the style for progress views in this view.

### Text

- [labelStyle(\_:)](view/labelstyle%28__%29.md): Sets the style for labels within this view.
- [labeledContentStyle(\_:)](view/labeledcontentstyle%28__%29.md): Sets a style for labeled content.
- [textFieldStyle(\_:)](view/textfieldstyle%28__%29.md): Sets the style for text fields within this view.
- [textEditorStyle(\_:)](view/texteditorstyle%28__%29.md): Sets the style for text editors within this view.

### Collections

- [listStyle(\_:)](view/liststyle%28__%29.md): Sets the style for lists within this view.
- [tableStyle(\_:)](view/tablestyle%28__%29.md): Sets the style for tables within this view.
- [disclosureGroupStyle(\_:)](view/disclosuregroupstyle%28__%29.md): Sets the style for disclosure groups within this view.

### Presentation

- [navigationSplitViewStyle(\_:)](view/navigationsplitviewstyle%28__%29.md): Sets the style for navigation split views within this view.
- [tabViewStyle(\_:)](view/tabviewstyle%28__%29.md): Sets the style for the tab view within the current environment.
- [presentedWindowStyle(\_:)](view/presentedwindowstyle%28__%29.md): Sets the style for windows created by interacting with this view.
- [presentedWindowToolbarStyle(\_:)](view/presentedwindowtoolbarstyle%28__%29.md): Sets the style for the toolbar in windows created by interacting with this view.

### Groups

- [controlGroupStyle(\_:)](view/controlgroupstyle%28__%29.md): Sets the style for control groups within this view.
- [formStyle(\_:)](view/formstyle%28__%29.md): Sets the style for forms in a view hierarchy.
- [groupBoxStyle(\_:)](view/groupboxstyle%28__%29.md): Sets the style for group boxes within this view.
- [indexViewStyle(\_:)](view/indexviewstyle%28__%29.md): Sets the style for the index view within the current environment.

## See Also

### Drawing views

- [Layout modifiers](view-layout.md): Tell a view how to arrange itself within a view hierarchy by adjusting its size, position, alignment, padding, and so on.
- [Graphics and rendering modifiers](view-graphics-and-rendering.md): Affect the way the system draws a view, for example by scaling or masking a view, or by applying graphical effects.
