> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view-text-and-symbols](https://developer.apple.com/documentation/swiftui/view-text-and-symbols)

# Text and symbol modifiers

**Framework:** SwiftUI  
**Kind:** API Collection

Manage the rendering, selection, and entry of text in your view.

<a id="Overview"></a>

## Overview

SwiftUI provides built-in views that display text to the user, like [Text](text.md) and [Label](label.md), or that collect text from the user, like [TextField](textfield.md) and [TextEditor](texteditor.md). Use text and symbol modifiers to control how SwiftUI displays and manages that text. For example, you can set a font, specify text layout parameters, and indicate what kind of input to expect.

To learn more about the kinds of views that you use to display text and the ways in which you can configure those views, see [Text input and output](text-input-and-output.md).

## Topics

### Fonts

- [font(\_:)](view/font%28__%29.md): Sets the default font for text in this view.

### Dynamic type

- [dynamicTypeSize(\_:)](view/dynamictypesize%28__%29.md): Sets the Dynamic Type size within the view to the given value.

### Text style

- [bold(\_:)](view/bold%28__%29.md): Applies a bold font weight to the text in this view.
- [fontDesign(\_:)](view/fontdesign%28__%29.md): Sets the font design of the text in this view.
- [fontWeight(\_:)](view/fontweight%28__%29.md): Sets the font weight of the text in this view.
- [fontWidth(\_:)](view/fontwidth%28__%29.md): Sets the font width of the text in this view.
- [italic(\_:)](view/italic%28__%29.md): Applies italics to the text in this view.
- [monospaced(\_:)](view/monospaced%28__%29.md): Modifies the fonts of all child views to use the fixed-width variant of the current font, if possible.
- [monospacedDigit()](view/monospaceddigit%28%29.md): Modifies the fonts of all child views to use fixed-width digits, if possible, while leaving other characters proportionally spaced.
- [strikethrough(\_:pattern:color:)](view/strikethrough%28__pattern_color_%29.md): Applies a strikethrough to the text in this view.
- [textCase(\_:)](view/textcase%28__%29.md): Sets a transform for the case of the text contained in this view when displayed.
- [textScale(\_:isEnabled:)](view/textscale%28__isenabled_%29.md): Applies a text scale to text in the view.
- [textRenderer(\_:)](view/textrenderer%28__%29.md): Returns a new view such that any text views within it will use `renderer` to draw themselves.
- [underline(\_:pattern:color:)](view/underline%28__pattern_color_%29.md): Applies an underline to the text in this view.
- [attributedTextFormattingDefinition(\_:)](view/attributedtextformattingdefinition%28__%29.md): Apply a text formatting definition to nested views.

### Label configuration

- [labelIconToTitleSpacing(\_:)](view/labelicontotitlespacing%28__%29.md): Set the spacing between the icon and title in labels.
- [labelReservedIconWidth(\_:)](view/labelreservediconwidth%28__%29.md): Set the width reserved for icons in labels.

### Text layout

- [allowsTightening(\_:)](view/allowstightening%28__%29.md): Sets whether text in this view can compress the space between characters when necessary to fit text in a line.
- [baselineOffset(\_:)](view/baselineoffset%28__%29.md): Sets the vertical offset for the text relative to its baseline in this view.
- [flipsForRightToLeftLayoutDirection(\_:)](view/flipsforrighttoleftlayoutdirection%28__%29.md): Sets whether this view mirrors its contents horizontally when the layout direction is right-to-left.
- [kerning(\_:)](view/kerning%28__%29.md): Sets the spacing, or kerning, between characters for the text in this view.
- [lineHeight(\_:)](view/lineheight%28__%29.md): A modifier for the default line height in the view hierarchy.
- [minimumScaleFactor(\_:)](view/minimumscalefactor%28__%29.md): Sets the minimum amount that text in this view scales down to fit in the available space.
- [tracking(\_:)](view/tracking%28__%29.md): Sets the tracking for the text in this view.
- [truncationMode(\_:)](view/truncationmode%28__%29.md): Sets the truncation mode for lines of text that are too long to fit in the available space.
- [typesettingLanguage(\_:isEnabled:)](view/typesettinglanguage%28__isenabled_%29.md): Specifies the language for typesetting.
- [writingDirection(strategy:)](view/writingdirection%28strategy_%29.md): A modifier for the default text writing direction strategy in the view hierarchy.

### Multiline text

- [lineLimit(\_:)](view/linelimit%28__%29.md): Sets to a closed range the number of lines that text can occupy in this view.
- [lineLimit(\_:reservesSpace:)](view/linelimit%28__reservesspace_%29.md): Sets a limit for the number of lines text can occupy in this view.
- [lineSpacing(\_:)](view/linespacing%28__%29.md): Sets the amount of space between lines of text in this view.
- [multilineTextAlignment(\_:)](view/multilinetextalignment%28__%29.md): Sets the alignment of a text view that contains multiple lines of text.
- [multilineTextAlignment(strategy:)](view/multilinetextalignment%28strategy_%29.md): A modifier for the default text alignment strategy in the view hierarchy.

### Text selection

- [textSelection(\_:)](view/textselection%28__%29.md): Controls whether people can select text within this view.
- [textSelectionAffinity(\_:)](view/textselectionaffinity%28__%29.md): Sets the direction of a selection or cursor relative to a text character.

### Data detection

- [dataDetection(\_:options:)](view/datadetection%28__options_%29.md): Asynchronously detects data in the view’s content and styles them to indicate they are clickable.

### Text entry

- [autocorrectionDisabled(\_:)](view/autocorrectiondisabled%28__%29.md): Sets whether to disable autocorrection for this view.
- [keyboardType(\_:)](view/keyboardtype%28__%29.md): Sets the keyboard type for this view.
- [scrollDismissesKeyboard(\_:)](view/scrolldismisseskeyboard%28__%29.md): Configures the behavior in which scrollable content interacts with the software keyboard.
- [textInputAutocapitalization(\_:)](view/textinputautocapitalization%28__%29.md): Sets how often the shift key in the keyboard is automatically enabled.
- [textInputBorderShape(\_:)](view/textinputbordershape%28__%29.md): Sets the border shape for text input controls in the view hierarchy.
- [textInputCompletion(\_:)](view/textinputcompletion%28__%29.md): Associates a fully formed string with the value of this view when used as a text input suggestion
- [textInputSuggestions(\_:)](view/textinputsuggestions%28__%29.md): Configures the text input suggestions for this view.
- [textInputSuggestions(\_:content:)](view/textinputsuggestions%28__content_%29.md): Configures the text input suggestions for this view.
- [textInputSuggestions(\_:id:content:)](view/textinputsuggestions%28__id_content_%29.md): Configures the text input suggestions for this view.
- [textContentType(\_:)](view/textcontenttype%28__%29.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on macOS.
- [textContentType(\_:)](view/textcontenttype%28__%29-4dqqb.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on a watchOS device.
- [textContentType(\_:)](view/textcontenttype%28__%29-6fic1.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on macOS.
- [textContentType(\_:)](view/textcontenttype%28__%29-ufdv.md): Sets the text content type for this view, which the system uses to offer suggestions while the user enters text on an iOS or tvOS device.
- [textInputFormattingControlVisibility(\_:for:)](view/textinputformattingcontrolvisibility%28__for_%29.md): Specifies which system text formatting controls are available for people to format text.

### Find and replace

- [findNavigator(isPresented:)](view/findnavigator%28ispresented_%29.md): Programmatically presents the find and replace interface for text editor views.
- [findDisabled(\_:)](view/finddisabled%28__%29.md): Prevents find and replace operations in a text editor.
- [replaceDisabled(\_:)](view/replacedisabled%28__%29.md): Prevents replace operations in a text editor.

### Symbol appearance

- [symbolRenderingMode(\_:)](view/symbolrenderingmode%28__%29.md): Sets the rendering mode for symbol images within this view.
- [symbolColorRenderingMode(\_:)](view/symbolcolorrenderingmode%28__%29.md): Sets the color rendering mode for symbol images.
- [symbolVariableValueMode(\_:)](view/symbolvariablevaluemode%28__%29.md): Sets the variable value mode mode for symbol images within this view.
- [symbolVariant(\_:)](view/symbolvariant%28__%29.md): Makes symbols within the view show a particular variant.

### Writing Tools

- [writingToolsAffordanceVisibility(\_:)](view/writingtoolsaffordancevisibility%28__%29.md): Specifies whether the system should show the Writing Tools affordance for text input views affected by the environment.
- [writingToolsBehavior(\_:)](view/writingtoolsbehavior%28__%29.md): Specifies the Writing Tools behavior for text and text input in the environment.
- [WritingToolsBehavior](writingtoolsbehavior.md): The Writing Tools editing experience for text and text input.

## See Also

### Configuring view elements

- [Accessibility modifiers](view-accessibility.md): Make your SwiftUI apps accessible to everyone, including people with disabilities.
- [Appearance modifiers](view-appearance.md): Configure a view’s foreground and background styles, controls, and visibility.
- [Auxiliary view modifiers](view-auxiliary-views.md): Add and configure supporting views, like toolbars and context menus.
- [Chart view modifiers](view-chart-view.md): Configure charts that you declare with Swift Charts.
