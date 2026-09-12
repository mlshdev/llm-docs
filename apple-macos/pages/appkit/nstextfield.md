> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield](https://developer.apple.com/documentation/appkit/nstextfield)

# NSTextField (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

Text the user can select or edit to send an action message to a target when the user presses the Return key.

## Declaration

```swift
class NSTextField
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](adding-writing-tools-support-to-a-custom-nsview.md)
- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md)
- [Customizing Writing Tools behavior for AppKit views](customizing-writing-tools-behavior-for-system-views.md)

<a id="overview"></a>

## Overview

The [NSTextField](nstextfield.md) class uses the [NSTextFieldCell](nstextfieldcell.md) class to implement its user interface. Text fields display text either as a static label or as an editable input field. The content of a text field is either plain text or a rich-text attributed string. Text fields also support line wrapping to display multiline text, and a variety of truncation styles if the content doesn’t fit the available space.

The parent class, [NSControl](nscontrol.md), provides the methods for setting the values of the text field, such as [stringValue](nscontrol/stringvalue.md) and [doubleValue](nscontrol/doublevalue.md). There are corresponding methods to retrieve values.

## Topics

### Creating text fields

- [init(labelWithAttributedString:)](nstextfield/init%28labelwithattributedstring_%29.md): Creates a text field for use as a static label that displays styled text, doesn’t wrap, and doesn’t have selectable text.
- [init(labelWithString:)](nstextfield/init%28labelwithstring_%29.md): Initializes a text field for use as a static label that uses the system default font, doesn’t wrap, and doesn’t have selectable text.
- [init(string:)](nstextfield/init%28string_%29.md): Initializes a single-line editable text field for user input using the system default font and standard visual appearance.
- [init(wrappingLabelWithString:)](nstextfield/init%28wrappinglabelwithstring_%29.md): Initializes a text field for use as a multiline static label with selectable text that uses the system default font.

### Controlling selection and editing

- [isSelectable](nstextfield/isselectable.md): A Boolean value that determines whether the user can select the content of the text field.
- [isEditable](nstextfield/iseditable.md): A Boolean value that controls whether the user can edit the value in the text field.

### Controlling rich text behavior

- [allowsEditingTextAttributes](nstextfield/allowseditingtextattributes.md): A Boolean value that controls whether the user can change font attributes of the text field’s string.
- [importsGraphics](nstextfield/importsgraphics.md): A Boolean value that controls whether the user can drag image files into the text field.

### Setting placeholder text

- [placeholderString](nstextfield/placeholderstring.md): The string the text field displays when empty to help the user understand the text field’s purpose.
- [placeholderAttributedString](nstextfield/placeholderattributedstring.md): The attributed string the text field displays when empty to help the user understand the text field’s purpose.
- [placeholderStrings](nstextfield/placeholderstrings.md)
- [placeholderAttributedStrings](nstextfield/placeholderattributedstrings.md)

### Configuring line wrapping

- [lineBreakStrategy](nstextfield/linebreakstrategy.md): The strategy that the system uses to break lines when laying out multiple lines of text.
- [allowsDefaultTighteningForTruncation](nstextfield/allowsdefaulttighteningfortruncation.md): A Boolean value that controls whether single-line text fields tighten intercharacter spacing before truncating the text.
- [maximumNumberOfLines](nstextfield/maximumnumberoflines.md): The maximum number of lines a wrapping text field displays before clipping or truncating the text.

### Setting the text alignment

- [resolvesNaturalAlignmentWithBaseWritingDirection](nstextfield/resolvesnaturalalignmentwithbasewritingdirection.md): Specifies the behavior for resolving [NSTextAlignment.natural](nstextalignment/natural.md) to the visual alignment.

### Sizing with Auto Layout

- [preferredMaxLayoutWidth](nstextfield/preferredmaxlayoutwidth.md): The maximum width of the text field’s intrinsic content size.

### Setting the text color

- [textColor](nstextfield/textcolor.md): The color of the text field’s content.

### Controlling the background

- [backgroundColor](nstextfield/backgroundcolor.md): The color of the background the text field’s cell draws behind the text.
- [drawsBackground](nstextfield/drawsbackground.md): A Boolean value that controls whether the text field’s cell draws a background color behind the text.
- [isBezeled](nstextfield/isbezeled.md): A Boolean value that controls whether the text field draws a bezeled background around its contents.
- [bezelStyle](nstextfield/bezelstyle-swift.property.md): The text field’s bezel style, square or rounded.
- [NSTextField.BezelStyle](nstextfield/bezelstyle-swift.enum.md): The style of bezel the text field displays.

### Setting a border

- [isBordered](nstextfield/isbordered.md): A Boolean value that controls whether the text field draws a solid black border around its contents.
- [borderShape](nstextfield/bordershape.md): Set border shape `NSControlBorderShapeAutomatic` sets text field or subclass to default system shape. `NSControlBorderShapeCircle` sets text field or subclass to `NSControlBorderShapeAutomatic`.

### Selecting the text

- [selectText(\_:)](nstextfield/selecttext%28__%29.md): Ends editing in the text field and, if it’s selectable, selects the entire text content.

### Working with the responder chain

- [acceptsFirstResponder](nstextfield/acceptsfirstresponder.md): A Boolean value that indicates whether the text field is editable and accepts first responder status.

### Using keyboard interface control

- [allowsCharacterPickerTouchBarItem](nstextfield/allowscharacterpickertouchbaritem.md): A Boolean value that controls whether the Touch Bar displays the character picker item for rich text fields.

### Supporting text completion and suggestions

- [isAutomaticTextCompletionEnabled](nstextfield/isautomatictextcompletionenabled.md): A Boolean value that indicates whether the text field automatically completes text as the user types.
- [suggestionsDelegate](nstextfield/suggestionsdelegate.md): The delegate that provides text suggestions for the receiving text field and responds to the user highlighting and selecting items.
- [NSTextSuggestionsDelegate](nstextsuggestionsdelegate.md): A protocol for suggestion delegates of text fields to conform to in order to provide text suggestions in response to the user typing.
- [NSSuggestionItem](nssuggestionitem.md): The items that appear in suggestion menus.
- [NSSuggestionItemResponse](nssuggestionitemresponse.md): Describes the result of a batch of suggestion items from a search
- [NSSuggestionItemSection](nssuggestionitemsection.md): Describes a section of suggestions items in a suggestions menu

### Supporting Writing Tools

- [allowsWritingTools](nstextfield/allowswritingtools.md)
- [allowsWritingToolsAffordance](nstextfield/allowswritingtoolsaffordance.md)

### Setting the delegate

- [delegate](nstextfield/delegate.md): The text field’s delegate.

### Implementing delegate methods

- [textShouldBeginEditing(\_:)](nstextfield/textshouldbeginediting%28__%29.md): Requests permission to begin editing a text object.
- [textDidBeginEditing(\_:)](nstextfield/textdidbeginediting%28__%29.md): Posts a notification to the default notification center that the text is about to go into edit mode.
- [textDidChange(\_:)](nstextfield/textdidchange%28__%29.md): Posts a notification when the text changes, and forwards the message to the text field’s cell if it responds.
- [textShouldEndEditing(\_:)](nstextfield/textshouldendediting%28__%29.md): Performs validation on the text field’s new value.
- [textDidEndEditing(\_:)](nstextfield/textdidendediting%28__%29.md): Posts a notification when the text is no longer in edit mode.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Inherited By

- [NSComboBox](nscombobox.md)
- [NSSearchField](nssearchfield.md)
- [NSSecureTextField](nssecuretextfield.md)
- [NSTokenField](nstokenfield.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityNavigableStaticText](nsaccessibilitynavigablestatictext.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAccessibilityStaticText](nsaccessibilitystatictext.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTextContent](nstextcontent.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Text views

- [NSTextFieldDelegate](nstextfielddelegate.md): A protocol that a text field delegate can use to control its field editor action menu.
- [NSTextView](nstextview.md): A view that draws text and handles user interactions with that text.
- [NSTextViewDelegate](nstextviewdelegate.md): A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.
- [NSTextDelegate](nstextdelegate.md): A set of optional methods implemented by the delegate of an [NSText](nstext.md) object to edit text and change text formats.
- [NSText](nstext.md): The most general programmatic interface for objects that manage text.

# NSTextField (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

Text the user can select or edit to send an action message to a target when the user presses the Return key.

## Declaration

```objectivec
@interface NSTextField : NSControl
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](adding-writing-tools-support-to-a-custom-nsview.md)
- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md)
- [Customizing Writing Tools behavior for AppKit views](customizing-writing-tools-behavior-for-system-views.md)

<a id="overview"></a>

## Overview

The [NSTextField](nstextfield.md) class uses the [NSTextFieldCell](nstextfieldcell.md) class to implement its user interface. Text fields display text either as a static label or as an editable input field. The content of a text field is either plain text or a rich-text attributed string. Text fields also support line wrapping to display multiline text, and a variety of truncation styles if the content doesn’t fit the available space.

The parent class, [NSControl](nscontrol.md), provides the methods for setting the values of the text field, such as [stringValue](nscontrol/stringvalue.md) and [doubleValue](nscontrol/doublevalue.md). There are corresponding methods to retrieve values.

## Topics

### Creating text fields

- [labelWithAttributedString:](nstextfield/init%28labelwithattributedstring_%29.md): Creates a text field for use as a static label that displays styled text, doesn’t wrap, and doesn’t have selectable text.
- [labelWithString:](nstextfield/init%28labelwithstring_%29.md): Initializes a text field for use as a static label that uses the system default font, doesn’t wrap, and doesn’t have selectable text.
- [textFieldWithString:](nstextfield/init%28string_%29.md): Initializes a single-line editable text field for user input using the system default font and standard visual appearance.
- [wrappingLabelWithString:](nstextfield/init%28wrappinglabelwithstring_%29.md): Initializes a text field for use as a multiline static label with selectable text that uses the system default font.

### Controlling selection and editing

- [selectable](nstextfield/isselectable.md): A Boolean value that determines whether the user can select the content of the text field.
- [editable](nstextfield/iseditable.md): A Boolean value that controls whether the user can edit the value in the text field.

### Controlling rich text behavior

- [allowsEditingTextAttributes](nstextfield/allowseditingtextattributes.md): A Boolean value that controls whether the user can change font attributes of the text field’s string.
- [importsGraphics](nstextfield/importsgraphics.md): A Boolean value that controls whether the user can drag image files into the text field.

### Setting placeholder text

- [placeholderString](nstextfield/placeholderstring.md): The string the text field displays when empty to help the user understand the text field’s purpose.
- [placeholderAttributedString](nstextfield/placeholderattributedstring.md): The attributed string the text field displays when empty to help the user understand the text field’s purpose.
- [placeholderStrings](nstextfield/placeholderstrings.md)
- [placeholderAttributedStrings](nstextfield/placeholderattributedstrings.md)

### Configuring line wrapping

- [lineBreakStrategy](nstextfield/linebreakstrategy.md): The strategy that the system uses to break lines when laying out multiple lines of text.
- [allowsDefaultTighteningForTruncation](nstextfield/allowsdefaulttighteningfortruncation.md): A Boolean value that controls whether single-line text fields tighten intercharacter spacing before truncating the text.
- [maximumNumberOfLines](nstextfield/maximumnumberoflines.md): The maximum number of lines a wrapping text field displays before clipping or truncating the text.

### Setting the text alignment

- [resolvesNaturalAlignmentWithBaseWritingDirection](nstextfield/resolvesnaturalalignmentwithbasewritingdirection.md): Specifies the behavior for resolving [NSTextAlignmentNatural](nstextalignment/natural.md) to the visual alignment.

### Sizing with Auto Layout

- [preferredMaxLayoutWidth](nstextfield/preferredmaxlayoutwidth.md): The maximum width of the text field’s intrinsic content size.

### Setting the text color

- [textColor](nstextfield/textcolor.md): The color of the text field’s content.

### Controlling the background

- [backgroundColor](nstextfield/backgroundcolor.md): The color of the background the text field’s cell draws behind the text.
- [drawsBackground](nstextfield/drawsbackground.md): A Boolean value that controls whether the text field’s cell draws a background color behind the text.
- [bezeled](nstextfield/isbezeled.md): A Boolean value that controls whether the text field draws a bezeled background around its contents.
- [bezelStyle](nstextfield/bezelstyle-swift.property.md): The text field’s bezel style, square or rounded.
- [NSTextFieldBezelStyle](nstextfield/bezelstyle-swift.enum.md): The style of bezel the text field displays.

### Setting a border

- [bordered](nstextfield/isbordered.md): A Boolean value that controls whether the text field draws a solid black border around its contents.
- [borderShape](nstextfield/bordershape.md): Set border shape `NSControlBorderShapeAutomatic` sets text field or subclass to default system shape. `NSControlBorderShapeCircle` sets text field or subclass to `NSControlBorderShapeAutomatic`.

### Selecting the text

- [selectText:](nstextfield/selecttext%28__%29.md): Ends editing in the text field and, if it’s selectable, selects the entire text content.

### Working with the responder chain

- [acceptsFirstResponder](nstextfield/acceptsfirstresponder.md): A Boolean value that indicates whether the text field is editable and accepts first responder status.

### Using keyboard interface control

- [allowsCharacterPickerTouchBarItem](nstextfield/allowscharacterpickertouchbaritem.md): A Boolean value that controls whether the Touch Bar displays the character picker item for rich text fields.
- [setTitleWithMnemonic:](nstextfield/settitlewithmnemonic_.md): Deprecated. Sets the text field’s string value using the embedded character as the keyboard mnemonic.

### Supporting text completion and suggestions

- [automaticTextCompletionEnabled](nstextfield/isautomatictextcompletionenabled.md): A Boolean value that indicates whether the text field automatically completes text as the user types.

### Supporting Writing Tools

- [allowsWritingTools](nstextfield/allowswritingtools.md)
- [allowsWritingToolsAffordance](nstextfield/allowswritingtoolsaffordance.md)

### Setting the delegate

- [delegate](nstextfield/delegate.md): The text field’s delegate.

### Implementing delegate methods

- [textShouldBeginEditing:](nstextfield/textshouldbeginediting%28__%29.md): Requests permission to begin editing a text object.
- [textDidBeginEditing:](nstextfield/textdidbeginediting%28__%29.md): Posts a notification to the default notification center that the text is about to go into edit mode.
- [textDidChange:](nstextfield/textdidchange%28__%29.md): Posts a notification when the text changes, and forwards the message to the text field’s cell if it responds.
- [textShouldEndEditing:](nstextfield/textshouldendediting%28__%29.md): Performs validation on the text field’s new value.
- [textDidEndEditing:](nstextfield/textdidendediting%28__%29.md): Posts a notification when the text is no longer in edit mode.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Inherited By

- [NSComboBox](nscombobox.md)
- [NSSearchField](nssearchfield.md)
- [NSSecureTextField](nssecuretextfield.md)
- [NSTokenField](nstokenfield.md)

### Conforms To

- [NSAccessibilityNavigableStaticText](nsaccessibilitynavigablestatictext.md)
- [NSTextContent](nstextcontent.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)

## See Also

### Text views

- [NSTextFieldDelegate](nstextfielddelegate.md): A protocol that a text field delegate can use to control its field editor action menu.
- [NSTextView](nstextview.md): A view that draws text and handles user interactions with that text.
- [NSTextViewDelegate](nstextviewdelegate.md): A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.
- [NSTextDelegate](nstextdelegate.md): A set of optional methods implemented by the delegate of an [NSText](nstext.md) object to edit text and change text formats.
- [NSText](nstext.md): The most general programmatic interface for objects that manage text.
