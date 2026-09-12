> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/berespondereditactions](https://developer.apple.com/documentation/browserenginekit/berespondereditactions)

# BEResponderEditActions (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A set of methods that defines extended interactions in browser text views.

## Declaration

```swift
protocol BEResponderEditActions : UIResponderStandardEditActions
```

## Mentioned In

- [Supporting extended text interactions](support-extended-text-interactions.md)

<a id="overview"></a>

## Overview

Implement the methods in this protocol to support text interactions in your browser text view that conforms to [BETextInput](betextinput.md). To get the system’s standard behavior for an interaction, call [BETextInteraction](betextinteraction.md) methods in your implementation. For more information, see [Supporting extended text interactions](support-extended-text-interactions.md).

## Topics

### Finding and replacing text

- [findSelected(\_:)](berespondereditactions/findselected%28__%29.md): Begins a search for the selected content in your browser text view.
- [promptForReplace(\_:)](berespondereditactions/promptforreplace%28__%29.md): Shows potential replacements for the selected content.
- [replace(\_:)](berespondereditactions/replace%28__%29.md): Removes the selected text and inputs the chosen replacement text.
- [addShortcut(\_:)](berespondereditactions/addshortcut%28__%29.md): Adds a text-replacement shortcut to the edit dictionary.

### Defining and sharing text

- [lookup(\_:)](berespondereditactions/lookup%28__%29.md): Presents a dictionary definition for the selected content.
- [share(\_:)](berespondereditactions/share%28__%29.md): Presents UI for sharing the selected text.

### Translating and transliterating text

- [translate(\_:)](berespondereditactions/translate%28__%29.md): Presents a translation of the selected text.
- [transliterateChinese(\_:)](berespondereditactions/transliteratechinese%28__%29.md): Converts the selected text between traditional and simplified Chinese.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)

### Inherited By

- [BETextInput](betextinput.md)

## See Also

### Interaction responses

- [BETextInteraction](betextinteraction.md): An interaction you add to a text view to support extended text gestures.
- [BETextInteractionDelegate](betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [BEGestureType](begesturetype.md): The types of touch gestures that operate on input text.

# BEResponderEditActions (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A set of methods that defines extended interactions in browser text views.

## Declaration

```objectivec
@protocol BEResponderEditActions <UIResponderStandardEditActions>
```

## Mentioned In

- [Supporting extended text interactions](support-extended-text-interactions.md)

<a id="overview"></a>

## Overview

Implement the methods in this protocol to support text interactions in your browser text view that conforms to [BETextInput](betextinput.md). To get the system’s standard behavior for an interaction, call [BETextInteraction](betextinteraction.md) methods in your implementation. For more information, see [Supporting extended text interactions](support-extended-text-interactions.md).

## Topics

### Finding and replacing text

- [findSelected:](berespondereditactions/findselected%28__%29.md): Begins a search for the selected content in your browser text view.
- [promptForReplace:](berespondereditactions/promptforreplace%28__%29.md): Shows potential replacements for the selected content.
- [replace:](berespondereditactions/replace%28__%29.md): Removes the selected text and inputs the chosen replacement text.
- [addShortcut:](berespondereditactions/addshortcut%28__%29.md): Adds a text-replacement shortcut to the edit dictionary.

### Defining and sharing text

- [lookup:](berespondereditactions/lookup%28__%29.md): Presents a dictionary definition for the selected content.
- [share:](berespondereditactions/share%28__%29.md): Presents UI for sharing the selected text.

### Translating and transliterating text

- [translate:](berespondereditactions/translate%28__%29.md): Presents a translation of the selected text.
- [transliterateChinese:](berespondereditactions/transliteratechinese%28__%29.md): Converts the selected text between traditional and simplified Chinese.

## Relationships

### Inherits From

- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)

### Inherited By

- [BETextInput](betextinput.md)

## See Also

### Interaction responses

- [BETextInteraction](betextinteraction.md): An interaction you add to a text view to support extended text gestures.
- [BETextInteractionDelegate](betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [BEGestureType](begesturetype.md): The types of touch gestures that operate on input text.
