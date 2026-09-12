> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview](https://developer.apple.com/documentation/appkit/nstextview)

# NSTextView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A view that draws text and handles user interactions with that text.

## Declaration

```swift
class NSTextView
```

## Mentioned In

- [Customizing Writing Tools behavior for AppKit views](customizing-writing-tools-behavior-for-system-views.md)
- [Supporting Writing Tools via the pasteboard](supporting-writing-tools-via-the-pasteboard.md)
- [Adding Writing Tools support to a custom AppKit view](adding-writing-tools-support-to-a-custom-nsview.md)
- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md)

<a id="overview"></a>

## Overview

The [NSTextView](nstextview.md) class is the front-end class to the AppKit text system. The class draws the text managed by the back-end components and handles user events to select and modify its text, in addition to supporting rich text, attachments, input management, and key binding, and marked text attributes.

> **Note**

>  If you need only to implement a simple editable text field, see [NSTextField](nstextfield.md).

[NSTextView](nstextview.md) is the principal means to obtain a text object that caters to almost all needs for displaying and managing text at the user interface level. While [NSTextView](nstextview.md) is a subclass of the [NSText](nstext.md) class — which declares the most general Cocoa interface to the text system — [NSTextView](nstextview.md) adds major features beyond the capabilities of [NSText](nstext.md). You can also do more powerful and more creative text manipulation (such as displaying text in a circle) using [NSTextStorage](nstextstorage.md), [NSTextLayoutManager](nstextlayoutmanager.md), [NSTextContainer](nstextcontainer.md), and related classes.

You’re more likely to use the [NSTextView](nstextview.md) class than [NSText](nstext.md). It’s also important to remember that [NSTextView](nstextview.md) conforms to a large number of protocols, the methods of which are available to instances of the [NSTextView](nstextview.md) class.

[NSTextView](nstextview.md) communicates with its delegate through methods declared both by the [NSTextViewDelegate](nstextviewdelegate.md) and by its superclass’s protocol, [NSTextDelegate](nstextdelegate.md). All delegation messages come from the first text view.

In macOS 12 and later, if you explicitly call the `layoutManager` property on a text view or text container, the framework reverts to a compatibility mode that uses [NSLayoutManager](nslayoutmanager.md). The text view also switches to this compatibility mode when it encounters text content that’s not yet supported, such as [NSTextTable](nstexttable.md).

<a id="About-Delegate-Methods"></a>

### About Delegate Methods

The `NSTextView` class communicates with its delegate through methods declared both by the [NSTextViewDelegate](nstextviewdelegate.md) and by its superclass’s protocol, [NSTextDelegate](nstextdelegate.md). All delegation messages come from the first text view.

<a id="Becoming-the-first-responder"></a>

### Becoming the first responder

When the system invokes [becomeFirstResponder()](nsresponder/becomefirstresponder%28%29.md) on a text view, if the previous first responder was not a text view on the same layout manager as the receiving text view, the receiving text view draws the selection and updates the insertion point if necessary.

To make a text view the first responder, call the containing window’s [makeFirstResponder(\_:)](nswindow/makefirstresponder%28__%29.md) method. Never invoke a text view’s [becomeFirstResponder()](nsresponder/becomefirstresponder%28%29.md) method directly.

<a id="Resigning-as-first-responder"></a>

### Resigning as first responder

When the system invokes [resignFirstResponder()](nsresponder/resignfirstresponder%28%29.md) on a text view, if the object that will become the new first responder is a text view attached to the same layout manager as the receiver, the receiving text view returns [true](https://developer.apple.com/documentation/swift/true) with no further action. Otherwise, it sends a [textShouldEndEditing(\_:)](nstextdelegate/textshouldendediting%28__%29.md) message to its delegate (if any). If the delegate returns [false](https://developer.apple.com/documentation/swift/false), the text view returns [false](https://developer.apple.com/documentation/swift/false). If the delegate returns [true](https://developer.apple.com/documentation/swift/true), the text view hides the selection highlighting and posts an [didEndEditingNotification](nstext/didendeditingnotification.md) to the default notification center and then returns [true](https://developer.apple.com/documentation/swift/true).

## Topics

### Creating a text view

- [init(frame:textContainer:)](nstextview/init%28frame_textcontainer_%29.md): Initializes a text view.
- [init(frame:)](nstextview/init%28frame_%29.md): Initializes a text view.
- [init(usingTextLayoutManager:)](nstextview/init%28usingtextlayoutmanager_%29.md)
- [init(coder:)](nstextview/init%28coder_%29.md): Initializes a text view with data in an unarchiver.

### Managing the text view’s content

- [delegate](nstextview/delegate.md): The delegate for all text views sharing the receiver’s layout manager.
- [NSTextViewDelegate](nstextviewdelegate.md): A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.

### Registering services information

- [registerForServices()](nstextview/registerforservices%28%29.md): Registers send and return types for the Services facility.

### Accessing text system objects

- [stronglyReferencesTextStorage](nstextview/stronglyreferencestextstorage.md): A Boolean value that indicates whether instances of the class operate in the object ownership policy.
- [fieldEditor()](nstextview/fieldeditor%28%29.md)
- [textContainer](nstextview/textcontainer.md): The receiver’s text container.
- [replaceTextContainer(\_:)](nstextview/replacetextcontainer%28__%29.md): Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.
- [textContainerInset](nstextview/textcontainerinset.md): The empty space the receiver leaves around its associated text container.
- [textContainerOrigin](nstextview/textcontainerorigin.md): The origin of the receiver’s text container.
- [invalidateTextContainerOrigin()](nstextview/invalidatetextcontainerorigin%28%29.md): Invalidates the calculated origin of the text container.
- [textLayoutManager](nstextview/textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [layoutManager](nstextview/layoutmanager.md): The layout manager that lays out text for the receiver’s text container.
- [textContentStorage](nstextview/textcontentstorage.md): The receiver’s text storage object.
- [textStorage](nstextview/textstorage.md): The receiver’s text storage object.

### Setting graphics attributes

- [backgroundColor](nstextview/backgroundcolor.md): The receiver’s background color.
- [drawsBackground](nstextview/drawsbackground.md): A Boolean value that indicates whether the receiver draws its background.
- [allowsDocumentBackgroundColorChange](nstextview/allowsdocumentbackgroundcolorchange.md): A Boolean value that indicates whether the receiver allows its background color to change.
- [changeDocumentBackgroundColor(\_:)](nstextview/changedocumentbackgroundcolor%28__%29.md): An action method used to set the background color.

### Controlling text display

- [setNeedsDisplay(\_:avoidAdditionalLayout:)](nstextview/setneedsdisplay%28__avoidadditionallayout_%29.md): Marks the receiver as requiring display.
- [shouldDrawInsertionPoint](nstextview/shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawInsertionPoint(in:color:turnedOn:)](nstextview/drawinsertionpoint%28in_color_turnedon_%29.md): Draws or erases the insertion point.
- [drawBackground(in:)](nstextview/drawbackground%28in_%29.md): Draws the background of the text view.
- [setConstrainedFrameSize(\_:)](nstextview/setconstrainedframesize%28__%29.md): Attempts to set the frame size as if by user action.
- [cleanUpAfterDragOperation()](nstextview/cleanupafterdragoperation%28%29.md): Releases the drag information still existing after the dragging session has completed.
- [showFindIndicator(for:)](nstextview/showfindindicator%28for_%29.md): Causes a temporary highlighting effect to appear around the visible portion (or portions) of the specified range.
- [scrollableDocumentContentTextView()](nstextview/scrollabledocumentcontenttextview%28%29.md)
- [scrollablePlainDocumentContentTextView()](nstextview/scrollableplaindocumentcontenttextview%28%29.md)
- [scrollableTextView()](nstextview/scrollabletextview%28%29.md)

### Inserting text

- [allowedInputSourceLocales](nstextview/allowedinputsourcelocales.md): An array of locale identifiers representing input sources that are allowed to be enabled when the receiver has the keyboard focus.
- [insertText(\_:)](nstextview/inserttext%28__%29.md): Deprecated. Inserts `aString` into the receiver’s text at the insertion point if there is one, otherwise replacing the selection.

### Setting behavioral attributes

- [allowsUndo](nstextview/allowsundo.md): A Boolean value that indicates whether the receiver allows undo.
- [isEditable](nstextview/iseditable.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to edit text.
- [isSelectable](nstextview/isselectable.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to select text.
- [isFieldEditor](nstextview/isfieldeditor.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager behave as field editors.
- [isRichText](nstextview/isrichtext.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to apply attributes to specific ranges of text.
- [importsGraphics](nstextview/importsgraphics.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to import files by dragging.
- [setBaseWritingDirection(\_:range:)](nstextview/setbasewritingdirection%28__range_%29.md): Sets the base writing direction of a range of text.
- [defaultParagraphStyle](nstextview/defaultparagraphstyle.md): The receiver’s default paragraph style.
- [outline(\_:)](nstextview/outline%28__%29.md): Adds the outline attribute to the selected text attributes if absent; removes the attribute if present.
- [allowsImageEditing](nstextview/allowsimageediting.md): Indicates whether image attachments should permit editing of their images.
- [isAutomaticQuoteSubstitutionEnabled](nstextview/isautomaticquotesubstitutionenabled.md): A Boolean value that enables and disables automatic quotation mark substitution.
- [toggleAutomaticQuoteSubstitution(\_:)](nstextview/toggleautomaticquotesubstitution%28__%29.md): Changes the state of automatic quotation mark substitution from enabled to disabled and vice versa.
- [isAutomaticLinkDetectionEnabled](nstextview/isautomaticlinkdetectionenabled.md): A Boolean value that enables or disables automatic link detection.
- [toggleAutomaticLinkDetection(\_:)](nstextview/toggleautomaticlinkdetection%28__%29.md): Changes the state of automatic link detection from enabled to disabled and vice versa.
- [displaysLinkToolTips](nstextview/displayslinktooltips.md): A Boolean value that indicates whether the text view automatically supplies the destination of a link as a tooltip for text that has a link attribute.
- [isAutomaticTextCompletionEnabled](nstextview/isautomatictextcompletionenabled.md): A Boolean value that indicates whether the text view supplies autocompletion suggestions as the user types.
- [toggleAutomaticTextCompletion(\_:)](nstextview/toggleautomatictextcompletion%28__%29.md)
- [usesAdaptiveColorMappingForDarkAppearance](nstextview/usesadaptivecolormappingfordarkappearance.md): A Boolean value that indicates whether the framework should use adaptive color mapping for dark appearance.
- [usesRolloverButtonForSelection](nstextview/usesrolloverbuttonforselection.md)

### Using text formatting controls

- [usesRuler](nstextview/usesruler.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager use a ruler.
- [isRulerVisible](nstextview/isrulervisible.md): A Boolean value that controls whether the scroll view enclosing text views sharing the receiver’s layout manager displays the ruler.
- [usesInspectorBar](nstextview/usesinspectorbar.md): A Boolean value that indicates whether this text view uses the inspector bar.

### Managing the selection

- [selectedRanges](nstextview/selectedranges.md): An array containing the ranges of characters selected in the receiver’s layout manager.
- [setSelectedRange(\_:)](nstextview/setselectedrange%28__%29.md): Selects the specified range of characters in response to user action.
- [setSelectedRange(\_:affinity:stillSelecting:)](nstextview/setselectedrange%28__affinity_stillselecting_%29.md): Sets the selection to a range of characters in response to user action.
- [setSelectedRanges(\_:affinity:stillSelecting:)](nstextview/setselectedranges%28__affinity_stillselecting_%29.md): Sets the selection to the characters in an array of ranges in response to user action.
- [selectionAffinity](nstextview/selectionaffinity.md): The preferred direction of selection.
- [selectionGranularity](nstextview/selectiongranularity.md): The selection granularity for subsequent extension of a selection.
- [insertionPointColor](nstextview/insertionpointcolor.md): The color of the insertion point.
- [updateInsertionPointStateAndRestartTimer(\_:)](nstextview/updateinsertionpointstateandrestarttimer%28__%29.md): Updates the insertion point’s location and optionally restarts the blinking cursor timer.
- [selectedTextAttributes](nstextview/selectedtextattributes.md): The attributes used to indicate the selection.
- [markedTextAttributes](nstextview/markedtextattributes.md): The attributes used to draw marked text.
- [linkTextAttributes](nstextview/linktextattributes.md): The attributes used to draw the onscreen presentation of link text.
- [characterIndexForInsertion(at:)](nstextview/characterindexforinsertion%28at_%29.md): Returns a character index appropriate for placing a zero-length selection for an insertion point associated with the mouse at the given point.
- [updateCandidates()](nstextview/updatecandidates%28%29.md)

### Managing the pasteboard

- [preferredPasteboardType(from:restrictedToTypesFrom:)](nstextview/preferredpasteboardtype%28from_restrictedtotypesfrom_%29.md): Returns whatever type on the pasteboard would be most preferred for copying data.
- [readSelection(from:)](nstextview/readselection%28from_%29.md): Reads the text view’s preferred type of data from the specified pasteboard.
- [readSelection(from:type:)](nstextview/readselection%28from_type_%29.md): Reads data of the given type from the specified pasteboard.
- [readablePasteboardTypes](nstextview/readablepasteboardtypes.md): The types this text view can read immediately from the pasteboard.
- [writablePasteboardTypes](nstextview/writablepasteboardtypes.md): The pasteboard types that can be provided from the current selection.
- [writeSelection(to:type:)](nstextview/writeselection%28to_type_%29.md): Writes the current selection to the specified pasteboard using the given type.
- [writeSelection(to:types:)](nstextview/writeselection%28to_types_%29.md): Writes the current selection to the specified pasteboard under each given type.
- [validRequestor(forSendType:returnType:)](nstextview/validrequestor%28forsendtype_returntype_%29.md): Returns `self` if the text view can provide and accept the specified data types, or `nil` if it can’t.

### Setting text attributes

- [alignJustified(\_:)](nstextview/alignjustified%28__%29.md): Applies full justification to selected paragraphs (or all text, if the receiver is a plain text object).
- [changeAttributes(\_:)](nstextview/changeattributes%28__%29.md): Changes the attributes of the current selection.
- [changeColor(\_:)](nstextview/changecolor%28__%29.md): Sets the color of the selected text.
- [setAlignment(\_:range:)](nstextview/setalignment%28__range_%29.md): Sets the alignment of the paragraphs containing characters in the specified range.
- [typingAttributes](nstextview/typingattributes.md): The receiver’s typing attributes.
- [useStandardKerning(\_:)](nstextview/usestandardkerning%28__%29.md): Set the receiver to use pair kerning data for the glyphs in its selection, or for all glyphs if the receiver is a plain text view.
- [lowerBaseline(\_:)](nstextview/lowerbaseline%28__%29.md): Lowers the baseline offset of selected text by 1 point, or of all text if the receiver is a plain text view.
- [raiseBaseline(\_:)](nstextview/raisebaseline%28__%29.md): Raises the baseline offset of selected text by 1 point, or of all text if the receiver is a plain text view.
- [turnOffKerning(\_:)](nstextview/turnoffkerning%28__%29.md): Sets the receiver to use nominal glyph spacing for the glyphs in its selection, or for all glyphs if the receiver is a plain text view.
- [loosenKerning(\_:)](nstextview/loosenkerning%28__%29.md): Increases the space between glyphs in the receiver’s selection, or in all text if the receiver is a plain text view.
- [tightenKerning(\_:)](nstextview/tightenkerning%28__%29.md): Decreases the space between glyphs in the receiver’s selection, or for all glyphs if the receiver is a plain text view.
- [useStandardLigatures(\_:)](nstextview/usestandardligatures%28__%29.md): Sets the receiver to use the standard ligatures available for the fonts and languages used when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [turnOffLigatures(\_:)](nstextview/turnoffligatures%28__%29.md): Sets the receiver to use only required ligatures when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [useAllLigatures(\_:)](nstextview/useallligatures%28__%29.md): Sets the receiver to use all ligatures available for the fonts and languages used when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [toggleTraditionalCharacterShape(\_:)](nstextview/toggletraditionalcharactershape%28__%29.md): Deprecated. Toggles the `NSCharacterShapeAttributeName` attribute at the current selection.

### Clicking and pasting

- [clicked(onLink:at:)](nstextview/clicked%28onlink_at_%29.md): Causes the text view to act as if the user clicked on some text with the given link as the value of a link attribute associated with the text.
- [pasteAsPlainText(\_:)](nstextview/pasteasplaintext%28__%29.md): Inserts the contents of the pasteboard into the receiver’s text as plain text.
- [pasteAsRichText(\_:)](nstextview/pasteasrichtext%28__%29.md): This action method inserts the contents of the pasteboard into the receiver’s text as rich text, maintaining its attributes.

### Supporting undo

- [breakUndoCoalescing()](nstextview/breakundocoalescing%28%29.md): Informs the receiver that it should begin coalescing successive typing operations in a new undo grouping.
- [isCoalescingUndo](nstextview/iscoalescingundo.md): A Boolean value that indicates whether undo coalescing is in progress.

### Customizing subclass behaviors

- [updateFontPanel()](nstextview/updatefontpanel%28%29.md): Updates the Font panel to contain the font attributes of the selection.
- [updateRuler()](nstextview/updateruler%28%29.md): Updates the ruler view in the receiver’s enclosing scroll view to reflect the selection’s paragraph and marker attributes.
- [acceptableDragTypes](nstextview/acceptabledragtypes.md): The data types that the receiver accepts as the destination view of a dragging operation.
- [updateDragTypeRegistration()](nstextview/updatedragtyperegistration%28%29.md): Updates the acceptable drag types of all text views associated with the receiver’s layout manager.
- [selectionRange(forProposedRange:granularity:)](nstextview/selectionrange%28forproposedrange_granularity_%29.md): Returns an adjusted selected range based on the selection granularity.
- [rangeForUserCharacterAttributeChange](nstextview/rangeforusercharacterattributechange.md): The range of characters affected by an action method that changes character (not paragraph) attributes.
- [rangesForUserCharacterAttributeChange](nstextview/rangesforusercharacterattributechange.md): An array containing the ranges of characters affected by an action method that changes character (not paragraph) attributes.
- [rangeForUserParagraphAttributeChange](nstextview/rangeforuserparagraphattributechange.md): The range of characters affected by an action method that changes paragraph (not character) attributes.
- [rangesForUserParagraphAttributeChange](nstextview/rangesforuserparagraphattributechange.md): An array containing the ranges of characters affected by a method that changes paragraph (not character) attributes.
- [rangeForUserTextChange](nstextview/rangeforusertextchange.md): The range of characters affected by a method that changes characters (as opposed to attributes).
- [rangesForUserTextChange](nstextview/rangesforusertextchange.md): An array containing the ranges of characters affected by a method that changes characters (as opposed to attributes).
- [shouldChangeText(in:replacementString:)](nstextview/shouldchangetext%28in_replacementstring_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.
- [shouldChangeText(inRanges:replacementStrings:)](nstextview/shouldchangetext%28inranges_replacementstrings_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.
- [didChangeText()](nstextview/didchangetext%28%29.md): Sends out necessary notifications when a text change completes.
- [smartInsertDeleteEnabled](nstextview/smartinsertdeleteenabled.md): A Boolean value that controls whether the receiver inserts or deletes space around selected words so as to preserve proper spacing and punctuation.
- [smartDeleteRange(forProposedRange:)](nstextview/smartdeleterange%28forproposedrange_%29.md): Returns an extended range that includes adjacent whitespace that should be deleted along with the proposed range in order to preserve proper spacing and punctuation.
- [smartInsert(afterStringFor:replacing:)](nstextview/smartinsert%28afterstringfor_replacing_%29.md): Returns any whitespace that needs to be added after the string to preserve proper spacing and punctuation when the string replaces the characters in the specified range.
- [smartInsert(beforeStringFor:replacing:)](nstextview/smartinsert%28beforestringfor_replacing_%29.md): Returns any whitespace that needs to be added before the string to preserve proper spacing and punctuation when the string replaces the characters in the specified range.
- [smartInsert(for:replacing:before:after:)](nstextview/smartinsert%28for_replacing_before_after_%29.md): Determines whether whitespace needs to be added around the string to preserve proper spacing and punctuation when it replaces the characters in the specified range.
- [toggleSmartInsertDelete(\_:)](nstextview/togglesmartinsertdelete%28__%29.md): Changes the state of smart insert and delete from enabled to disabled and vice versa.

### Working with the spelling checker

- [isContinuousSpellCheckingEnabled](nstextview/iscontinuousspellcheckingenabled.md): A Boolean value that indicates whether the receiver has continuous spell checking enabled.
- [spellCheckerDocumentTag](nstextview/spellcheckerdocumenttag.md): A tag identifying the text view’s text as a document for the spell checker server.
- [toggleContinuousSpellChecking(\_:)](nstextview/togglecontinuousspellchecking%28__%29.md): Toggles whether continuous spell checking is enabled for the receiver.
- [isGrammarCheckingEnabled](nstextview/isgrammarcheckingenabled.md): Enables and disables grammar checking.
- [toggleGrammarChecking(\_:)](nstextview/togglegrammarchecking%28__%29.md): Changes the state of grammar checking from enabled to disabled and vice versa.
- [setSpellingState(\_:range:)](nstextview/setspellingstate%28__range_%29.md): Sets the spelling state, which controls the display of the spelling and grammar indicators on the given text range.

### Working with the sharing service picker

- [orderFrontSharingServicePicker(\_:)](nstextview/orderfrontsharingservicepicker%28__%29.md): Creates and displays a new instance of the sharing service picker.

### Supporting the ruler view

- [rulerView(\_:didMove:)](nstextview/rulerview%28__didmove_%29.md): Modifies the paragraph style of the paragraphs containing the selection to record the new location of the marker.
- [rulerView(\_:willMove:toLocation:)](nstextview/rulerview%28__willmove_tolocation_%29.md): Returns a potentially modified location to which the marker should be moved.
- [rulerView(\_:shouldMove:)](nstextview/rulerview%28__shouldmove_%29.md): Returns whether the marker should be moved.
- [rulerView(\_:didRemove:)](nstextview/rulerview%28__didremove_%29.md): Modifies the paragraph style of the paragraphs containing the selection—if possible—by removing the specified marker.
- [rulerView(\_:shouldRemove:)](nstextview/rulerview%28__shouldremove_%29.md): Returns whether the marker should be removed.
- [rulerView(\_:didAdd:)](nstextview/rulerview%28__didadd_%29.md): Modifies the paragraph style of the paragraphs containing the selection to accommodate a new marker.
- [rulerView(\_:shouldAdd:)](nstextview/rulerview%28__shouldadd_%29.md): Returns whether a new marker can be added.
- [rulerView(\_:willAdd:atLocation:)](nstextview/rulerview%28__willadd_atlocation_%29.md): Returns a potentially modified location to which the marker should be added.
- [rulerView(\_:handleMouseDownWith:)](nstextview/rulerview%28__handlemousedownwith_%29.md): Adds a left tab marker to the ruler at the location clicked.

### Dragging

- [dragImageForSelection(with:origin:)](nstextview/dragimageforselection%28with_origin_%29.md): Returns an appropriate drag image for the drag initiated by the specified event.
- [dragOperation(for:type:)](nstextview/dragoperation%28for_type_%29.md): Returns the type of drag operation that should be performed if the image were released now.
- [dragSelection(with:offset:slideBack:)](nstextview/dragselection%28with_offset_slideback_%29.md): Begins dragging the current selected text range.
- [acceptsGlyphInfo](nstextview/acceptsglyphinfo.md): A Boolean value that indicates whether the receiver accepts the glyph info attribute.

### Speaking text

- [startSpeaking(\_:)](nstextview/startspeaking%28__%29.md): Speaks the selected text, or all text if no selection.
- [stopSpeaking(\_:)](nstextview/stopspeaking%28__%29.md): Stops the speaking of text.

### Working with panels

- [usesFontPanel](nstextview/usesfontpanel.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager use the Font panel and Font menu.
- [usesFindPanel](nstextview/usesfindpanel.md): A Boolean value that indicates whether the receiver allows for a find panel.
- [performFindPanelAction(\_:)](nstextview/performfindpanelaction%28__%29.md): Performs a find panel action specified by the sender’s tag.
- [orderFrontLinkPanel(\_:)](nstextview/orderfrontlinkpanel%28__%29.md): Brings forward a panel allowing the user to manipulate links in the text view.
- [orderFrontListPanel(\_:)](nstextview/orderfrontlistpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text lists in the text view.
- [orderFrontSpacingPanel(\_:)](nstextview/orderfrontspacingpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text line heights, interline spacing, and paragraph spacing, in the text view.
- [orderFrontTablePanel(\_:)](nstextview/orderfronttablepanel%28__%29.md): Brings forward a panel allowing the user to manipulate text tables in the text view.
- [orderFrontSubstitutionsPanel(\_:)](nstextview/orderfrontsubstitutionspanel%28__%29.md): Brings forward a panel allowing the user to specify string substitutions in the text view.

### Performing text completion

- [complete(\_:)](nstextview/complete%28__%29.md): Invokes completion in a text view.
- [completions(forPartialWordRange:indexOfSelectedItem:)](nstextview/completions%28forpartialwordrange_indexofselecteditem_%29.md): Returns an array of potential completions, in the order to be presented, representing possible word completions available from a partial word.
- [insertCompletion(\_:forPartialWordRange:movement:isFinal:)](nstextview/insertcompletion%28__forpartialwordrange_movement_isfinal_%29.md): Inserts the selected completion into the text at the appropriate location.
- [rangeForUserCompletion](nstextview/rangeforusercompletion.md): The partial range from the most recent beginning of a word up to the insertion point.

### Checking and substituting text

- [checkTextInDocument(\_:)](nstextview/checktextindocument%28__%29.md): Performs the default text checking on the entire document.
- [checkTextInSelection(\_:)](nstextview/checktextinselection%28__%29.md): Performs the default text checking on the current selection.
- [checkText(in:types:options:)](nstextview/checktext%28in_types_options_%29.md): Check and replace the text in the range using the specified checking types and options.
- [handleTextCheckingResults(\_:forRange:types:options:orthography:wordCount:)](nstextview/handletextcheckingresults%28__forrange_types_options_orthography_wordcount_%29.md): Handles the text checking results returned by the text view
- [enabledTextCheckingTypes](nstextview/enabledtextcheckingtypes.md): The default text checking types.
- [isAutomaticDashSubstitutionEnabled](nstextview/isautomaticdashsubstitutionenabled.md): A Boolean value that indicates whether automatic dash substitution is enabled.
- [toggleAutomaticDashSubstitution(\_:)](nstextview/toggleautomaticdashsubstitution%28__%29.md): Toggles the state of the automatic dash substitution.
- [isAutomaticDataDetectionEnabled](nstextview/isautomaticdatadetectionenabled.md): A Boolean value that indicates whether automatic data detection is enabled.
- [toggleAutomaticDataDetection(\_:)](nstextview/toggleautomaticdatadetection%28__%29.md): Toggles the state of the automatic data detection.
- [isAutomaticSpellingCorrectionEnabled](nstextview/isautomaticspellingcorrectionenabled.md): A Boolean value that indicates whether automatic spelling correction is enabled.
- [toggleAutomaticSpellingCorrection(\_:)](nstextview/toggleautomaticspellingcorrection%28__%29.md): Toggles the state of the automatic spelling correction.
- [isAutomaticTextReplacementEnabled](nstextview/isautomatictextreplacementenabled.md): A Boolean value that indicates whether automatic text replacement is enabled.
- [toggleAutomaticTextReplacement(\_:)](nstextview/toggleautomatictextreplacement%28__%29.md): Toggles the state of the automatic text replacement.
- [performValidatedReplacement(in:with:)](nstextview/performvalidatedreplacement%28in_with_%29.md): Replaces text in the range you specify with the attributed string you provide.

### Getting the writing tools status

- [isWritingToolsActive](nstextview/iswritingtoolsactive.md)

### Supporting QuickLook

- [updateQuickLookPreviewPanel()](nstextview/updatequicklookpreviewpanel%28%29.md): Notifies the QuickLook panel that an update may be required.
- [toggleQuickLookPreviewPanel(\_:)](nstextview/togglequicklookpreviewpanel%28__%29.md): An action message that toggles the visibility state of the Quick Look preview panel.
- [quickLookPreviewableItems(inRanges:)](nstextview/quicklookpreviewableitems%28inranges_%29.md): Returns an array of URLs for items that can be displayed by QuickLook in the specified ranges.

### Changing layout orientation

- [changeLayoutOrientation(\_:)](nstextview/changelayoutorientation%28__%29.md): An action method that sets the layout orientation of the text.
- [setLayoutOrientation(\_:)](nstextview/setlayoutorientation%28__%29.md): Changes the receiver’s layout orientation and invalidates the contents.

### Using the Find Bar

- [usesFindBar](nstextview/usesfindbar.md): A Boolean value that indicates whether to use the find bar for this text view.
- [isIncrementalSearchingEnabled](nstextview/isincrementalsearchingenabled.md): A Boolean value that indicates whether incremental searching is enabled.

### Constants

- [NSSelectionGranularity](nsselectiongranularity.md): These constants specify how much the text view extends the selection when the user drags the mouse. They’re used by [selectionGranularity](nstextview/selectiongranularity.md), and [selectionRange(forProposedRange:granularity:)](nstextview/selectionrange%28forproposedrange_granularity_%29.md):
- [NSSelectionAffinity](nsselectionaffinity.md): These constants specify the preferred direction of selection. They’re used by [selectionAffinity](nstextview/selectionaffinity.md) and [setSelectedRange(\_:affinity:stillSelecting:)](nstextview/setselectedrange%28__affinity_stillselecting_%29.md).
- [NSFindPanelAction](nsfindpanelaction.md): These constants define the tags for [performFindPanelAction(\_:)](nstextview/performfindpanelaction%28__%29.md).
- [Input Sources Locale Identifiers](input-sources-locale-identifiers.md): Locale identifiers represent the input sources available.
- [Find Panel Search Metadata](find-panel-search-metadata.md): In addition to communicating search strings via the find pasteboard, the standard Find panel for `NSTextView` also communicates search option metadata, including case sensitivity and substring matching options. This metadata is stored in a property list as the [findPanelSearchOptions](nspasteboard/pasteboardtype/findpanelsearchoptions.md) value on the global find pasteboard. As such, third party applications may store additional keys in this property list to communicate additional metadata as desired to support the various search options common to many third-party applications’ Find panels.
- [NSFindPanelSubstringMatchType](nsfindpanelsubstringmatchtype.md): The type of substring matching used by the Find panel.

### Notifications

`NSTextView` posts the following notifications as well as those declared by its superclasses, particularly [NSText](nstext.md). See the Notifications section in the [NSText](nstext.md) class specification for those other notifications.

- [didChangeSelectionNotification](nstextview/didchangeselectionnotification.md): Posted when the selected range of characters changes.
- [willChangeNotifyingTextViewNotification](nstextview/willchangenotifyingtextviewnotification.md): Posted when a new text view is established as the text view that sends notifications.
- [didChangeTypingAttributesNotification](nstextview/didchangetypingattributesnotification.md): Posted when there is a change in the typing attributes within a text view.
- [didSwitchToNSLayoutManagerNotification](nstextview/didswitchtonslayoutmanagernotification.md): Posted by the framework after switching to using the compatibility mode layout manager.
- [willSwitchToNSLayoutManagerNotification](nstextview/willswitchtonslayoutmanagernotification.md): Posted by the framework before switching to the compatibility mode layout manager.

### Interacting with the Touch Bar

- [allowsCharacterPickerTouchBarItem](nstextview/allowscharacterpickertouchbaritem.md)
- [candidateListTouchBarItem](nstextview/candidatelisttouchbaritem.md)
- [updateTextTouchBarItems()](nstextview/updatetexttouchbaritems%28%29.md)
- [updateTouchBarItemIdentifiers()](nstextview/updatetouchbaritemidentifiers%28%29.md)

### Structures

- [NSTextView.DidBeginEditingMessage](nstextview/didbegineditingmessage.md)
- [NSTextView.DidChangeMessage](nstextview/didchangemessage.md)
- [NSTextView.DidChangeSelectionMessage](nstextview/didchangeselectionmessage.md)
- [NSTextView.DidChangeTypingAttributesMessage](nstextview/didchangetypingattributesmessage.md)
- [NSTextView.DidEndEditingMessage](nstextview/didendeditingmessage.md)
- [NSTextView.WillChangeNotifyingTextViewMessage](nstextview/willchangenotifyingtextviewmessage.md)

### Instance Properties

- [allowedWritingToolsResultOptions](nstextview/allowedwritingtoolsresultoptions.md)
- [inlinePredictionType](nstextview/inlinepredictiontype.md)
- [mathExpressionCompletionType](nstextview/mathexpressioncompletiontype.md)
- [textHighlightAttributes](nstextview/texthighlightattributes.md): \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* Text Highlight support \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
- [writingToolsBehavior](nstextview/writingtoolsbehavior.md)

### Instance Methods

- [drawTextHighlightBackground(for:origin:)](nstextview/drawtexthighlightbackground%28for_origin_%29.md)
- [highlight(\_:)](nstextview/highlight%28__%29.md): An action for toggling `NSTextHighlightStyleAttributeName` in the receiver’s selected range. The sender should be a menu item with a `representedObject` of type (`NSTextHighlightColorScheme`).
- [register(\_:forTextAttachmentViewProviderType:)](nstextview/register%28__fortextattachmentviewprovidertype_%29.md): Register the NSTextAttachmentViewProviderReusePolicy for all instances of a particular subclass of NSTextAttachmentViewProvider.

## Relationships

### Inherits From

- [NSText](nstext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityNavigableStaticText](nsaccessibilitynavigablestatictext.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAccessibilityStaticText](nsaccessibilitystatictext.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCandidateListTouchBarItemDelegate](nscandidatelisttouchbaritemdelegate.md)
- [NSChangeSpelling](nschangespelling.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSColorChanging](nscolorchanging.md)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSDraggingSource](nsdraggingsource.md)
- [NSIgnoreMisspelledWords](nsignoremisspelledwords.md)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTextContent](nstextcontent.md)
- [NSTextInput](nstextinput.md)
- [NSTextInputClient](nstextinputclient.md)
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md)
- [NSTextViewportLayoutControllerDelegate](nstextviewportlayoutcontrollerdelegate.md)
- [NSTouchBarDelegate](nstouchbardelegate.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Text views

- [NSTextField](nstextfield.md): Text the user can select or edit to send an action message to a target when the user presses the Return key.
- [NSTextFieldDelegate](nstextfielddelegate.md): A protocol that a text field delegate can use to control its field editor action menu.
- [NSTextViewDelegate](nstextviewdelegate.md): A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.
- [NSTextDelegate](nstextdelegate.md): A set of optional methods implemented by the delegate of an [NSText](nstext.md) object to edit text and change text formats.
- [NSText](nstext.md): The most general programmatic interface for objects that manage text.

# NSTextView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A view that draws text and handles user interactions with that text.

## Declaration

```objectivec
@interface NSTextView : NSText
```

## Mentioned In

- [Customizing Writing Tools behavior for AppKit views](customizing-writing-tools-behavior-for-system-views.md)
- [Supporting Writing Tools via the pasteboard](supporting-writing-tools-via-the-pasteboard.md)
- [Adding Writing Tools support to a custom AppKit view](adding-writing-tools-support-to-a-custom-nsview.md)
- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md)

<a id="overview"></a>

## Overview

The [NSTextView](nstextview.md) class is the front-end class to the AppKit text system. The class draws the text managed by the back-end components and handles user events to select and modify its text, in addition to supporting rich text, attachments, input management, and key binding, and marked text attributes.

> **Note**

>  If you need only to implement a simple editable text field, see [NSTextField](nstextfield.md).

[NSTextView](nstextview.md) is the principal means to obtain a text object that caters to almost all needs for displaying and managing text at the user interface level. While [NSTextView](nstextview.md) is a subclass of the [NSText](nstext.md) class — which declares the most general Cocoa interface to the text system — [NSTextView](nstextview.md) adds major features beyond the capabilities of [NSText](nstext.md). You can also do more powerful and more creative text manipulation (such as displaying text in a circle) using [NSTextStorage](nstextstorage.md), [NSTextLayoutManager](nstextlayoutmanager.md), [NSTextContainer](nstextcontainer.md), and related classes.

You’re more likely to use the [NSTextView](nstextview.md) class than [NSText](nstext.md). It’s also important to remember that [NSTextView](nstextview.md) conforms to a large number of protocols, the methods of which are available to instances of the [NSTextView](nstextview.md) class.

[NSTextView](nstextview.md) communicates with its delegate through methods declared both by the [NSTextViewDelegate](nstextviewdelegate.md) and by its superclass’s protocol, [NSTextDelegate](nstextdelegate.md). All delegation messages come from the first text view.

In macOS 12 and later, if you explicitly call the `layoutManager` property on a text view or text container, the framework reverts to a compatibility mode that uses [NSLayoutManager](nslayoutmanager.md). The text view also switches to this compatibility mode when it encounters text content that’s not yet supported, such as [NSTextTable](nstexttable.md).

<a id="About-Delegate-Methods"></a>

### About Delegate Methods

The `NSTextView` class communicates with its delegate through methods declared both by the [NSTextViewDelegate](nstextviewdelegate.md) and by its superclass’s protocol, [NSTextDelegate](nstextdelegate.md). All delegation messages come from the first text view.

<a id="Becoming-the-first-responder"></a>

### Becoming the first responder

When the system invokes [becomeFirstResponder](nsresponder/becomefirstresponder%28%29.md) on a text view, if the previous first responder was not a text view on the same layout manager as the receiving text view, the receiving text view draws the selection and updates the insertion point if necessary.

To make a text view the first responder, call the containing window’s [makeFirstResponder:](nswindow/makefirstresponder%28__%29.md) method. Never invoke a text view’s [becomeFirstResponder](nsresponder/becomefirstresponder%28%29.md) method directly.

<a id="Resigning-as-first-responder"></a>

### Resigning as first responder

When the system invokes [resignFirstResponder](nsresponder/resignfirstresponder%28%29.md) on a text view, if the object that will become the new first responder is a text view attached to the same layout manager as the receiver, the receiving text view returns [true](https://developer.apple.com/documentation/swift/true) with no further action. Otherwise, it sends a [textShouldEndEditing:](nstextdelegate/textshouldendediting%28__%29.md) message to its delegate (if any). If the delegate returns [false](https://developer.apple.com/documentation/swift/false), the text view returns [false](https://developer.apple.com/documentation/swift/false). If the delegate returns [true](https://developer.apple.com/documentation/swift/true), the text view hides the selection highlighting and posts an [NSTextDidEndEditingNotification](nstext/didendeditingnotification.md) to the default notification center and then returns [true](https://developer.apple.com/documentation/swift/true).

## Topics

### Creating a text view

- [initWithFrame:textContainer:](nstextview/init%28frame_textcontainer_%29.md): Initializes a text view.
- [initWithFrame:](nstextview/init%28frame_%29.md): Initializes a text view.
- [initUsingTextLayoutManager:](nstextview/init%28usingtextlayoutmanager_%29.md)
- [textViewUsingTextLayoutManager:](nstextview/textviewusingtextlayoutmanager_.md)
- [initWithCoder:](nstextview/init%28coder_%29.md): Initializes a text view with data in an unarchiver.

### Managing the text view’s content

- [delegate](nstextview/delegate.md): The delegate for all text views sharing the receiver’s layout manager.
- [NSTextViewDelegate](nstextviewdelegate.md): A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.

### Registering services information

- [registerForServices](nstextview/registerforservices%28%29.md): Registers send and return types for the Services facility.

### Accessing text system objects

- [stronglyReferencesTextStorage](nstextview/stronglyreferencestextstorage.md): A Boolean value that indicates whether instances of the class operate in the object ownership policy.
- [fieldEditor](nstextview/fieldeditor%28%29.md)
- [textContainer](nstextview/textcontainer.md): The receiver’s text container.
- [replaceTextContainer:](nstextview/replacetextcontainer%28__%29.md): Replaces the text container for the group of text system objects containing the receiver, keeping the association between the receiver and its layout manager intact.
- [textContainerInset](nstextview/textcontainerinset.md): The empty space the receiver leaves around its associated text container.
- [textContainerOrigin](nstextview/textcontainerorigin.md): The origin of the receiver’s text container.
- [invalidateTextContainerOrigin](nstextview/invalidatetextcontainerorigin%28%29.md): Invalidates the calculated origin of the text container.
- [textLayoutManager](nstextview/textlayoutmanager.md): The manager that lays out text for the receiver’s text container.
- [layoutManager](nstextview/layoutmanager.md): The layout manager that lays out text for the receiver’s text container.
- [textContentStorage](nstextview/textcontentstorage.md): The receiver’s text storage object.
- [textStorage](nstextview/textstorage.md): The receiver’s text storage object.

### Setting graphics attributes

- [backgroundColor](nstextview/backgroundcolor.md): The receiver’s background color.
- [drawsBackground](nstextview/drawsbackground.md): A Boolean value that indicates whether the receiver draws its background.
- [allowsDocumentBackgroundColorChange](nstextview/allowsdocumentbackgroundcolorchange.md): A Boolean value that indicates whether the receiver allows its background color to change.
- [changeDocumentBackgroundColor:](nstextview/changedocumentbackgroundcolor%28__%29.md): An action method used to set the background color.

### Controlling text display

- [setNeedsDisplayInRect:avoidAdditionalLayout:](nstextview/setneedsdisplay%28__avoidadditionallayout_%29.md): Marks the receiver as requiring display.
- [shouldDrawInsertionPoint](nstextview/shoulddrawinsertionpoint.md): A Boolean value that determines whether the receiver should draw its insertion point.
- [drawInsertionPointInRect:color:turnedOn:](nstextview/drawinsertionpoint%28in_color_turnedon_%29.md): Draws or erases the insertion point.
- [drawViewBackgroundInRect:](nstextview/drawbackground%28in_%29.md): Draws the background of the text view.
- [setConstrainedFrameSize:](nstextview/setconstrainedframesize%28__%29.md): Attempts to set the frame size as if by user action.
- [cleanUpAfterDragOperation](nstextview/cleanupafterdragoperation%28%29.md): Releases the drag information still existing after the dragging session has completed.
- [showFindIndicatorForRange:](nstextview/showfindindicator%28for_%29.md): Causes a temporary highlighting effect to appear around the visible portion (or portions) of the specified range.
- [scrollableDocumentContentTextView](nstextview/scrollabledocumentcontenttextview%28%29.md)
- [scrollablePlainDocumentContentTextView](nstextview/scrollableplaindocumentcontenttextview%28%29.md)
- [scrollableTextView](nstextview/scrollabletextview%28%29.md)

### Inserting text

- [allowedInputSourceLocales](nstextview/allowedinputsourcelocales.md): An array of locale identifiers representing input sources that are allowed to be enabled when the receiver has the keyboard focus.
- [insertText:](nstextview/inserttext%28__%29.md): Deprecated. Inserts `aString` into the receiver’s text at the insertion point if there is one, otherwise replacing the selection.

### Setting behavioral attributes

- [allowsUndo](nstextview/allowsundo.md): A Boolean value that indicates whether the receiver allows undo.
- [editable](nstextview/iseditable.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to edit text.
- [selectable](nstextview/isselectable.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to select text.
- [fieldEditor](nstextview/isfieldeditor.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager behave as field editors.
- [richText](nstextview/isrichtext.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to apply attributes to specific ranges of text.
- [importsGraphics](nstextview/importsgraphics.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to import files by dragging.
- [setBaseWritingDirection:range:](nstextview/setbasewritingdirection%28__range_%29.md): Sets the base writing direction of a range of text.
- [toggleBaseWritingDirection:](nstextview/togglebasewritingdirection_.md): Deprecated. Changes the base writing direction of a paragraph between left-to-right and right-to-left.
- [defaultParagraphStyle](nstextview/defaultparagraphstyle.md): The receiver’s default paragraph style.
- [outline:](nstextview/outline%28__%29.md): Adds the outline attribute to the selected text attributes if absent; removes the attribute if present.
- [allowsImageEditing](nstextview/allowsimageediting.md): Indicates whether image attachments should permit editing of their images.
- [automaticQuoteSubstitutionEnabled](nstextview/isautomaticquotesubstitutionenabled.md): A Boolean value that enables and disables automatic quotation mark substitution.
- [toggleAutomaticQuoteSubstitution:](nstextview/toggleautomaticquotesubstitution%28__%29.md): Changes the state of automatic quotation mark substitution from enabled to disabled and vice versa.
- [automaticLinkDetectionEnabled](nstextview/isautomaticlinkdetectionenabled.md): A Boolean value that enables or disables automatic link detection.
- [toggleAutomaticLinkDetection:](nstextview/toggleautomaticlinkdetection%28__%29.md): Changes the state of automatic link detection from enabled to disabled and vice versa.
- [displaysLinkToolTips](nstextview/displayslinktooltips.md): A Boolean value that indicates whether the text view automatically supplies the destination of a link as a tooltip for text that has a link attribute.
- [automaticTextCompletionEnabled](nstextview/isautomatictextcompletionenabled.md): A Boolean value that indicates whether the text view supplies autocompletion suggestions as the user types.
- [toggleAutomaticTextCompletion:](nstextview/toggleautomatictextcompletion%28__%29.md)
- [usesAdaptiveColorMappingForDarkAppearance](nstextview/usesadaptivecolormappingfordarkappearance.md): A Boolean value that indicates whether the framework should use adaptive color mapping for dark appearance.
- [usesRolloverButtonForSelection](nstextview/usesrolloverbuttonforselection.md)

### Using text formatting controls

- [usesRuler](nstextview/usesruler.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager use a ruler.
- [rulerVisible](nstextview/isrulervisible.md): A Boolean value that controls whether the scroll view enclosing text views sharing the receiver’s layout manager displays the ruler.
- [usesInspectorBar](nstextview/usesinspectorbar.md): A Boolean value that indicates whether this text view uses the inspector bar.

### Managing the selection

- [selectedRanges](nstextview/selectedranges.md): An array containing the ranges of characters selected in the receiver’s layout manager.
- [setSelectedRange:](nstextview/setselectedrange%28__%29.md): Selects the specified range of characters in response to user action.
- [setSelectedRange:affinity:stillSelecting:](nstextview/setselectedrange%28__affinity_stillselecting_%29.md): Sets the selection to a range of characters in response to user action.
- [setSelectedRanges:affinity:stillSelecting:](nstextview/setselectedranges%28__affinity_stillselecting_%29.md): Sets the selection to the characters in an array of ranges in response to user action.
- [selectionAffinity](nstextview/selectionaffinity.md): The preferred direction of selection.
- [selectionGranularity](nstextview/selectiongranularity.md): The selection granularity for subsequent extension of a selection.
- [insertionPointColor](nstextview/insertionpointcolor.md): The color of the insertion point.
- [updateInsertionPointStateAndRestartTimer:](nstextview/updateinsertionpointstateandrestarttimer%28__%29.md): Updates the insertion point’s location and optionally restarts the blinking cursor timer.
- [selectedTextAttributes](nstextview/selectedtextattributes.md): The attributes used to indicate the selection.
- [markedTextAttributes](nstextview/markedtextattributes.md): The attributes used to draw marked text.
- [linkTextAttributes](nstextview/linktextattributes.md): The attributes used to draw the onscreen presentation of link text.
- [characterIndexForInsertionAtPoint:](nstextview/characterindexforinsertion%28at_%29.md): Returns a character index appropriate for placing a zero-length selection for an insertion point associated with the mouse at the given point.
- [updateCandidates](nstextview/updatecandidates%28%29.md)

### Managing the pasteboard

- [preferredPasteboardTypeFromArray:restrictedToTypesFromArray:](nstextview/preferredpasteboardtype%28from_restrictedtotypesfrom_%29.md): Returns whatever type on the pasteboard would be most preferred for copying data.
- [readSelectionFromPasteboard:](nstextview/readselection%28from_%29.md): Reads the text view’s preferred type of data from the specified pasteboard.
- [readSelectionFromPasteboard:type:](nstextview/readselection%28from_type_%29.md): Reads data of the given type from the specified pasteboard.
- [readablePasteboardTypes](nstextview/readablepasteboardtypes.md): The types this text view can read immediately from the pasteboard.
- [writablePasteboardTypes](nstextview/writablepasteboardtypes.md): The pasteboard types that can be provided from the current selection.
- [writeSelectionToPasteboard:type:](nstextview/writeselection%28to_type_%29.md): Writes the current selection to the specified pasteboard using the given type.
- [writeSelectionToPasteboard:types:](nstextview/writeselection%28to_types_%29.md): Writes the current selection to the specified pasteboard under each given type.
- [validRequestorForSendType:returnType:](nstextview/validrequestor%28forsendtype_returntype_%29.md): Returns `self` if the text view can provide and accept the specified data types, or `nil` if it can’t.

### Setting text attributes

- [alignJustified:](nstextview/alignjustified%28__%29.md): Applies full justification to selected paragraphs (or all text, if the receiver is a plain text object).
- [changeAttributes:](nstextview/changeattributes%28__%29.md): Changes the attributes of the current selection.
- [changeColor:](nstextview/changecolor%28__%29.md): Sets the color of the selected text.
- [setAlignment:range:](nstextview/setalignment%28__range_%29.md): Sets the alignment of the paragraphs containing characters in the specified range.
- [typingAttributes](nstextview/typingattributes.md): The receiver’s typing attributes.
- [useStandardKerning:](nstextview/usestandardkerning%28__%29.md): Set the receiver to use pair kerning data for the glyphs in its selection, or for all glyphs if the receiver is a plain text view.
- [lowerBaseline:](nstextview/lowerbaseline%28__%29.md): Lowers the baseline offset of selected text by 1 point, or of all text if the receiver is a plain text view.
- [raiseBaseline:](nstextview/raisebaseline%28__%29.md): Raises the baseline offset of selected text by 1 point, or of all text if the receiver is a plain text view.
- [turnOffKerning:](nstextview/turnoffkerning%28__%29.md): Sets the receiver to use nominal glyph spacing for the glyphs in its selection, or for all glyphs if the receiver is a plain text view.
- [loosenKerning:](nstextview/loosenkerning%28__%29.md): Increases the space between glyphs in the receiver’s selection, or in all text if the receiver is a plain text view.
- [tightenKerning:](nstextview/tightenkerning%28__%29.md): Decreases the space between glyphs in the receiver’s selection, or for all glyphs if the receiver is a plain text view.
- [useStandardLigatures:](nstextview/usestandardligatures%28__%29.md): Sets the receiver to use the standard ligatures available for the fonts and languages used when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [turnOffLigatures:](nstextview/turnoffligatures%28__%29.md): Sets the receiver to use only required ligatures when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [useAllLigatures:](nstextview/useallligatures%28__%29.md): Sets the receiver to use all ligatures available for the fonts and languages used when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [toggleTraditionalCharacterShape:](nstextview/toggletraditionalcharactershape%28__%29.md): Deprecated. Toggles the `NSCharacterShapeAttributeName` attribute at the current selection.

### Clicking and pasting

- [clickedOnLink:atIndex:](nstextview/clicked%28onlink_at_%29.md): Causes the text view to act as if the user clicked on some text with the given link as the value of a link attribute associated with the text.
- [pasteAsPlainText:](nstextview/pasteasplaintext%28__%29.md): Inserts the contents of the pasteboard into the receiver’s text as plain text.
- [pasteAsRichText:](nstextview/pasteasrichtext%28__%29.md): This action method inserts the contents of the pasteboard into the receiver’s text as rich text, maintaining its attributes.

### Supporting undo

- [breakUndoCoalescing](nstextview/breakundocoalescing%28%29.md): Informs the receiver that it should begin coalescing successive typing operations in a new undo grouping.
- [coalescingUndo](nstextview/iscoalescingundo.md): A Boolean value that indicates whether undo coalescing is in progress.

### Customizing subclass behaviors

- [updateFontPanel](nstextview/updatefontpanel%28%29.md): Updates the Font panel to contain the font attributes of the selection.
- [updateRuler](nstextview/updateruler%28%29.md): Updates the ruler view in the receiver’s enclosing scroll view to reflect the selection’s paragraph and marker attributes.
- [acceptableDragTypes](nstextview/acceptabledragtypes.md): The data types that the receiver accepts as the destination view of a dragging operation.
- [updateDragTypeRegistration](nstextview/updatedragtyperegistration%28%29.md): Updates the acceptable drag types of all text views associated with the receiver’s layout manager.
- [selectionRangeForProposedRange:granularity:](nstextview/selectionrange%28forproposedrange_granularity_%29.md): Returns an adjusted selected range based on the selection granularity.
- [rangeForUserCharacterAttributeChange](nstextview/rangeforusercharacterattributechange.md): The range of characters affected by an action method that changes character (not paragraph) attributes.
- [rangesForUserCharacterAttributeChange](nstextview/rangesforusercharacterattributechange.md): An array containing the ranges of characters affected by an action method that changes character (not paragraph) attributes.
- [rangeForUserParagraphAttributeChange](nstextview/rangeforuserparagraphattributechange.md): The range of characters affected by an action method that changes paragraph (not character) attributes.
- [rangesForUserParagraphAttributeChange](nstextview/rangesforuserparagraphattributechange.md): An array containing the ranges of characters affected by a method that changes paragraph (not character) attributes.
- [rangeForUserTextChange](nstextview/rangeforusertextchange.md): The range of characters affected by a method that changes characters (as opposed to attributes).
- [rangesForUserTextChange](nstextview/rangesforusertextchange.md): An array containing the ranges of characters affected by a method that changes characters (as opposed to attributes).
- [shouldChangeTextInRange:replacementString:](nstextview/shouldchangetext%28in_replacementstring_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.
- [shouldChangeTextInRanges:replacementStrings:](nstextview/shouldchangetext%28inranges_replacementstrings_%29.md): Initiates a series of delegate messages (and general notifications) to determine whether modifications can be made to the characters and attributes of the receiver’s text.
- [didChangeText](nstextview/didchangetext%28%29.md): Sends out necessary notifications when a text change completes.
- [smartInsertDeleteEnabled](nstextview/smartinsertdeleteenabled.md): A Boolean value that controls whether the receiver inserts or deletes space around selected words so as to preserve proper spacing and punctuation.
- [smartDeleteRangeForProposedRange:](nstextview/smartdeleterange%28forproposedrange_%29.md): Returns an extended range that includes adjacent whitespace that should be deleted along with the proposed range in order to preserve proper spacing and punctuation.
- [smartInsertAfterStringForString:replacingRange:](nstextview/smartinsert%28afterstringfor_replacing_%29.md): Returns any whitespace that needs to be added after the string to preserve proper spacing and punctuation when the string replaces the characters in the specified range.
- [smartInsertBeforeStringForString:replacingRange:](nstextview/smartinsert%28beforestringfor_replacing_%29.md): Returns any whitespace that needs to be added before the string to preserve proper spacing and punctuation when the string replaces the characters in the specified range.
- [smartInsertForString:replacingRange:beforeString:afterString:](nstextview/smartinsert%28for_replacing_before_after_%29.md): Determines whether whitespace needs to be added around the string to preserve proper spacing and punctuation when it replaces the characters in the specified range.
- [toggleSmartInsertDelete:](nstextview/togglesmartinsertdelete%28__%29.md): Changes the state of smart insert and delete from enabled to disabled and vice versa.

### Working with the spelling checker

- [continuousSpellCheckingEnabled](nstextview/iscontinuousspellcheckingenabled.md): A Boolean value that indicates whether the receiver has continuous spell checking enabled.
- [spellCheckerDocumentTag](nstextview/spellcheckerdocumenttag.md): A tag identifying the text view’s text as a document for the spell checker server.
- [toggleContinuousSpellChecking:](nstextview/togglecontinuousspellchecking%28__%29.md): Toggles whether continuous spell checking is enabled for the receiver.
- [grammarCheckingEnabled](nstextview/isgrammarcheckingenabled.md): Enables and disables grammar checking.
- [toggleGrammarChecking:](nstextview/togglegrammarchecking%28__%29.md): Changes the state of grammar checking from enabled to disabled and vice versa.
- [setSpellingState:range:](nstextview/setspellingstate%28__range_%29.md): Sets the spelling state, which controls the display of the spelling and grammar indicators on the given text range.

### Working with the sharing service picker

- [orderFrontSharingServicePicker:](nstextview/orderfrontsharingservicepicker%28__%29.md): Creates and displays a new instance of the sharing service picker.

### Supporting the ruler view

- [rulerView:didMoveMarker:](nstextview/rulerview%28__didmove_%29.md): Modifies the paragraph style of the paragraphs containing the selection to record the new location of the marker.
- [rulerView:willMoveMarker:toLocation:](nstextview/rulerview%28__willmove_tolocation_%29.md): Returns a potentially modified location to which the marker should be moved.
- [rulerView:shouldMoveMarker:](nstextview/rulerview%28__shouldmove_%29.md): Returns whether the marker should be moved.
- [rulerView:didRemoveMarker:](nstextview/rulerview%28__didremove_%29.md): Modifies the paragraph style of the paragraphs containing the selection—if possible—by removing the specified marker.
- [rulerView:shouldRemoveMarker:](nstextview/rulerview%28__shouldremove_%29.md): Returns whether the marker should be removed.
- [rulerView:didAddMarker:](nstextview/rulerview%28__didadd_%29.md): Modifies the paragraph style of the paragraphs containing the selection to accommodate a new marker.
- [rulerView:shouldAddMarker:](nstextview/rulerview%28__shouldadd_%29.md): Returns whether a new marker can be added.
- [rulerView:willAddMarker:atLocation:](nstextview/rulerview%28__willadd_atlocation_%29.md): Returns a potentially modified location to which the marker should be added.
- [rulerView:handleMouseDown:](nstextview/rulerview%28__handlemousedownwith_%29.md): Adds a left tab marker to the ruler at the location clicked.

### Dragging

- [dragImageForSelectionWithEvent:origin:](nstextview/dragimageforselection%28with_origin_%29.md): Returns an appropriate drag image for the drag initiated by the specified event.
- [dragOperationForDraggingInfo:type:](nstextview/dragoperation%28for_type_%29.md): Returns the type of drag operation that should be performed if the image were released now.
- [dragSelectionWithEvent:offset:slideBack:](nstextview/dragselection%28with_offset_slideback_%29.md): Begins dragging the current selected text range.
- [acceptsGlyphInfo](nstextview/acceptsglyphinfo.md): A Boolean value that indicates whether the receiver accepts the glyph info attribute.

### Speaking text

- [startSpeaking:](nstextview/startspeaking%28__%29.md): Speaks the selected text, or all text if no selection.
- [stopSpeaking:](nstextview/stopspeaking%28__%29.md): Stops the speaking of text.

### Working with panels

- [usesFontPanel](nstextview/usesfontpanel.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager use the Font panel and Font menu.
- [usesFindPanel](nstextview/usesfindpanel.md): A Boolean value that indicates whether the receiver allows for a find panel.
- [performFindPanelAction:](nstextview/performfindpanelaction%28__%29.md): Performs a find panel action specified by the sender’s tag.
- [orderFrontLinkPanel:](nstextview/orderfrontlinkpanel%28__%29.md): Brings forward a panel allowing the user to manipulate links in the text view.
- [orderFrontListPanel:](nstextview/orderfrontlistpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text lists in the text view.
- [orderFrontSpacingPanel:](nstextview/orderfrontspacingpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text line heights, interline spacing, and paragraph spacing, in the text view.
- [orderFrontTablePanel:](nstextview/orderfronttablepanel%28__%29.md): Brings forward a panel allowing the user to manipulate text tables in the text view.
- [orderFrontSubstitutionsPanel:](nstextview/orderfrontsubstitutionspanel%28__%29.md): Brings forward a panel allowing the user to specify string substitutions in the text view.

### Performing text completion

- [complete:](nstextview/complete%28__%29.md): Invokes completion in a text view.
- [completionsForPartialWordRange:indexOfSelectedItem:](nstextview/completions%28forpartialwordrange_indexofselecteditem_%29.md): Returns an array of potential completions, in the order to be presented, representing possible word completions available from a partial word.
- [insertCompletion:forPartialWordRange:movement:isFinal:](nstextview/insertcompletion%28__forpartialwordrange_movement_isfinal_%29.md): Inserts the selected completion into the text at the appropriate location.
- [rangeForUserCompletion](nstextview/rangeforusercompletion.md): The partial range from the most recent beginning of a word up to the insertion point.

### Checking and substituting text

- [checkTextInDocument:](nstextview/checktextindocument%28__%29.md): Performs the default text checking on the entire document.
- [checkTextInSelection:](nstextview/checktextinselection%28__%29.md): Performs the default text checking on the current selection.
- [checkTextInRange:types:options:](nstextview/checktext%28in_types_options_%29.md): Check and replace the text in the range using the specified checking types and options.
- [handleTextCheckingResults:forRange:types:options:orthography:wordCount:](nstextview/handletextcheckingresults%28__forrange_types_options_orthography_wordcount_%29.md): Handles the text checking results returned by the text view
- [enabledTextCheckingTypes](nstextview/enabledtextcheckingtypes.md): The default text checking types.
- [automaticDashSubstitutionEnabled](nstextview/isautomaticdashsubstitutionenabled.md): A Boolean value that indicates whether automatic dash substitution is enabled.
- [toggleAutomaticDashSubstitution:](nstextview/toggleautomaticdashsubstitution%28__%29.md): Toggles the state of the automatic dash substitution.
- [automaticDataDetectionEnabled](nstextview/isautomaticdatadetectionenabled.md): A Boolean value that indicates whether automatic data detection is enabled.
- [toggleAutomaticDataDetection:](nstextview/toggleautomaticdatadetection%28__%29.md): Toggles the state of the automatic data detection.
- [automaticSpellingCorrectionEnabled](nstextview/isautomaticspellingcorrectionenabled.md): A Boolean value that indicates whether automatic spelling correction is enabled.
- [toggleAutomaticSpellingCorrection:](nstextview/toggleautomaticspellingcorrection%28__%29.md): Toggles the state of the automatic spelling correction.
- [automaticTextReplacementEnabled](nstextview/isautomatictextreplacementenabled.md): A Boolean value that indicates whether automatic text replacement is enabled.
- [toggleAutomaticTextReplacement:](nstextview/toggleautomatictextreplacement%28__%29.md): Toggles the state of the automatic text replacement.
- [performValidatedReplacementInRange:withAttributedString:](nstextview/performvalidatedreplacement%28in_with_%29.md): Replaces text in the range you specify with the attributed string you provide.

### Getting the writing tools status

- [writingToolsActive](nstextview/iswritingtoolsactive.md)

### Supporting QuickLook

- [updateQuickLookPreviewPanel](nstextview/updatequicklookpreviewpanel%28%29.md): Notifies the QuickLook panel that an update may be required.
- [toggleQuickLookPreviewPanel:](nstextview/togglequicklookpreviewpanel%28__%29.md): An action message that toggles the visibility state of the Quick Look preview panel.
- [quickLookPreviewableItemsInRanges:](nstextview/quicklookpreviewableitems%28inranges_%29.md): Returns an array of URLs for items that can be displayed by QuickLook in the specified ranges.

### Changing layout orientation

- [changeLayoutOrientation:](nstextview/changelayoutorientation%28__%29.md): An action method that sets the layout orientation of the text.
- [setLayoutOrientation:](nstextview/setlayoutorientation%28__%29.md): Changes the receiver’s layout orientation and invalidates the contents.

### Using the Find Bar

- [usesFindBar](nstextview/usesfindbar.md): A Boolean value that indicates whether to use the find bar for this text view.
- [incrementalSearchingEnabled](nstextview/isincrementalsearchingenabled.md): A Boolean value that indicates whether incremental searching is enabled.

### Constants

- [NSSelectionGranularity](nsselectiongranularity.md): These constants specify how much the text view extends the selection when the user drags the mouse. They’re used by [selectionGranularity](nstextview/selectiongranularity.md), and [selectionRangeForProposedRange:granularity:](nstextview/selectionrange%28forproposedrange_granularity_%29.md):
- [NSSelectionAffinity](nsselectionaffinity.md): These constants specify the preferred direction of selection. They’re used by [selectionAffinity](nstextview/selectionaffinity.md) and [setSelectedRange:affinity:stillSelecting:](nstextview/setselectedrange%28__affinity_stillselecting_%29.md).
- [NSFindPanelAction](nsfindpanelaction.md): These constants define the tags for [performFindPanelAction:](nstextview/performfindpanelaction%28__%29.md).
- [Input Sources Locale Identifiers](input-sources-locale-identifiers.md): Locale identifiers represent the input sources available.
- [Find Panel Search Metadata](find-panel-search-metadata.md): In addition to communicating search strings via the find pasteboard, the standard Find panel for `NSTextView` also communicates search option metadata, including case sensitivity and substring matching options. This metadata is stored in a property list as the [NSFindPanelSearchOptionsPboardType](nspasteboard/pasteboardtype/findpanelsearchoptions.md) value on the global find pasteboard. As such, third party applications may store additional keys in this property list to communicate additional metadata as desired to support the various search options common to many third-party applications’ Find panels.
- [NSFindPanelSubstringMatchType](nsfindpanelsubstringmatchtype.md): The type of substring matching used by the Find panel.

### Notifications

`NSTextView` posts the following notifications as well as those declared by its superclasses, particularly [NSText](nstext.md). See the Notifications section in the [NSText](nstext.md) class specification for those other notifications.

- [NSTextViewDidChangeSelectionNotification](nstextview/didchangeselectionnotification.md): Posted when the selected range of characters changes.
- [NSTextViewWillChangeNotifyingTextViewNotification](nstextview/willchangenotifyingtextviewnotification.md): Posted when a new text view is established as the text view that sends notifications.
- [NSTextViewDidChangeTypingAttributesNotification](nstextview/didchangetypingattributesnotification.md): Posted when there is a change in the typing attributes within a text view.
- [NSTextViewDidSwitchToNSLayoutManagerNotification](nstextview/didswitchtonslayoutmanagernotification.md): Posted by the framework after switching to using the compatibility mode layout manager.
- [NSTextViewWillSwitchToNSLayoutManagerNotification](nstextview/willswitchtonslayoutmanagernotification.md): Posted by the framework before switching to the compatibility mode layout manager.

### Interacting with the Touch Bar

- [allowsCharacterPickerTouchBarItem](nstextview/allowscharacterpickertouchbaritem.md)
- [candidateListTouchBarItem](nstextview/candidatelisttouchbaritem.md)
- [updateTextTouchBarItems](nstextview/updatetexttouchbaritems%28%29.md)
- [updateTouchBarItemIdentifiers](nstextview/updatetouchbaritemidentifiers%28%29.md)

### Instance Properties

- [allowedWritingToolsResultOptions](nstextview/allowedwritingtoolsresultoptions.md)
- [inlinePredictionType](nstextview/inlinepredictiontype.md)
- [mathExpressionCompletionType](nstextview/mathexpressioncompletiontype.md)
- [textHighlightAttributes](nstextview/texthighlightattributes.md): \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* Text Highlight support \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
- [writingToolsBehavior](nstextview/writingtoolsbehavior.md)

### Instance Methods

- [drawTextHighlightBackgroundForTextRange:origin:](nstextview/drawtexthighlightbackground%28for_origin_%29.md)
- [highlight:](nstextview/highlight%28__%29.md): An action for toggling `NSTextHighlightStyleAttributeName` in the receiver’s selected range. The sender should be a menu item with a `representedObject` of type (`NSTextHighlightColorScheme`).
- [registerTextAttachmentViewProviderReusePolicy:forTextAttachmentViewProviderType:](nstextview/register%28__fortextattachmentviewprovidertype_%29.md): Register the NSTextAttachmentViewProviderReusePolicy for all instances of a particular subclass of NSTextAttachmentViewProvider.
- [textViewportLayoutController:configureRenderingSurfaceForTextLayoutFragment:](nstextview/textviewportlayoutcontroller_configurerenderingsurfacefortextlayoutfragment_.md): `NSTextViewportLayoutControllerDelegate` method that the framework calls when the layout controller lays out a text layout fragment in the UI. Requires a call to super.
- [textViewportLayoutControllerDidLayout:](nstextview/textviewportlayoutcontrollerdidlayout_.md): `NSTextViewportLayoutControllerDelegate` method that the framework calls when the text viewport layout controller finishes its layout process. Requires a call to super.
- [textViewportLayoutControllerReceivedSetNeedsLayout:](nstextview/textviewportlayoutcontrollerreceivedsetneedslayout_.md): `NSTextViewportLayoutControllerDelegate` method that the framework calls when the text viewport layout controller receives a `setNeedsLayout` call. Requires a call to super.
- [textViewportLayoutControllerWillLayout:](nstextview/textviewportlayoutcontrollerwilllayout_.md): `NSTextViewportLayoutControllerDelegate` method that the framework calls when the text viewport layout controller starts its layout process. Requires a call to super.
- [viewportBoundsForTextViewportLayoutController:](nstextview/viewportboundsfortextviewportlayoutcontroller_.md): `NSTextViewportLayoutControllerDelegate` method that the framework calls to request the current viewport, which is the view visible bounds plus the overdraw area. Requires a call to super.

## Relationships

### Inherits From

- [NSText](nstext.md)

### Conforms To

- [NSAccessibilityNavigableStaticText](nsaccessibilitynavigablestatictext.md)
- [NSCandidateListTouchBarItemDelegate](nscandidatelisttouchbaritemdelegate.md)
- [NSColorChanging](nscolorchanging.md)
- [NSDraggingSource](nsdraggingsource.md)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTextContent](nstextcontent.md)
- [NSTextInput](nstextinput.md)
- [NSTextInputClient](nstextinputclient.md)
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md)
- [NSTextViewportLayoutControllerDelegate](nstextviewportlayoutcontrollerdelegate.md)
- [NSTouchBarDelegate](nstouchbardelegate.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)

## See Also

### Text views

- [NSTextField](nstextfield.md): Text the user can select or edit to send an action message to a target when the user presses the Return key.
- [NSTextFieldDelegate](nstextfielddelegate.md): A protocol that a text field delegate can use to control its field editor action menu.
- [NSTextViewDelegate](nstextviewdelegate.md): A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.
- [NSTextDelegate](nstextdelegate.md): A set of optional methods implemented by the delegate of an [NSText](nstext.md) object to edit text and change text formats.
- [NSText](nstext.md): The most general programmatic interface for objects that manage text.
