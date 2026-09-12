> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class](https://developer.apple.com/documentation/webkit/webview-swift.class)

# WebView (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

`WebView` is the core view class in the WebKit framework that manages interactions between the `WebFrame` and `WebFrameView` classes. To embed web content in your application, you just create a `WebView` object, attach it to a window, and send a [load(\_:)](webframe/load%28__%29-47p2s.md) message to its main frame.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
@MainActor class WebView
```

<a id="overview"></a>

## Overview

> **Note**

>  In apps that run in OS X 10.10 and later, use the [WKWebView](wkwebview.md) class instead of using [WebView](webview-swift.class.md).

Behind the scenes, `WebFrame` objects encapsulate the content contained in a single frame element. A hierarchy of `WebFrame` objects is used to model an entire webpage where the root is called the **main frame**. There is a `WebFrameView` object per `WebFrame` object used to display the frame content. Therefore, there is a parallel hierarchy of `WebFrameView` objects used to render an entire page. The `WebView` object is also the parent view of this hierarchy. You do not need to create `WebFrame` and `WebFrameView` objects directly. These objects are automatically created when the page loads, either programmatically or by the user clicking a link.

You customize your embedded web content by implementing `WebView` delegates to handle certain aspects of the process. `WebView` objects have multiple delegates because the process of loading a webpage is asynchronous and complicated if errors occur. All the `WebView` delegates use informal protocols so you only need to implement only the delegates and methods that define the behavior you wish to change—default implementations are already provided.

For example, you might want to implement the frame load and resource load delegates to monitor the load progress and display status messages. Applications that use multiple windows may want to implement a user interface delegate. See the individual informal delegate protocols for more details: `WebFrameLoadDelegate`, `WebPolicyDelegate`, [WebResourceLoadDelegate](webresourceloaddelegate.md), and [WebUIDelegate](webuidelegate.md).

Another way to monitor load progress with less control is to observe the [WebViewProgressEstimateChangedNotification](webviewprogressestimatechangednotification.md), [WebViewProgressFinishedNotification](webviewprogressfinishednotification.md), and [WebViewProgressStartedNotification](webviewprogressstartednotification.md) notifications. For example, you could observe these notifications to implement a simple progress indicator in your application. You update the progress indicator by invoking the [estimatedProgress](webview-swift.class/estimatedprogress.md) method to get an estimate of the amount of content that is currently loaded.

A `WebView` object is intended to support most features you would expect in a web browser except that it doesn’t implement the specific user interface for those features. You are responsible for implementing the user interface objects such as status bars, toolbars, buttons, and text fields. For example, a `WebView` object manages a back-forward list by default, and has [goBack(\_:)](webview-swift.class/goback%28__%29.md) and [goForward(\_:)](webview-swift.class/goforward%28__%29.md) action methods. It is your responsibility to create the buttons that would send theses action messages. Note, there is some overhead in maintaining a back-forward list and page cache, so you should disable it if your application doesn’t use it.

You use a `WebPreferences` object to encapsulate the preferences of a `WebView` object, such as the font, text encoding, and image settings. You can modify the preferences for individual `WebView` objects or specify a shared `WebPreferences` object using the [preferencesIdentifier](webview-swift.class/preferencesidentifier.md) method. Use the [autosaves](webpreferences/autosaves.md)  `WebPreferences` method to specify whether the preferences should be automatically saved to the user defaults database.

You can also extend WebKit by implementing your own document view and representation classes for specific MIME types. Use the [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) class method to register your custom classes with a `WebView` object.

## Topics

### Registering Document Views and Representations

- [registerURLScheme(asLocal:)](webview-swift.class/registerurlscheme%28aslocal_%29.md): Deprecated. Adds the specified URL scheme to the list of local schemes.
- [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md): Deprecated. Specifies the view and representation objects to be used for specific MIME types.

### Initializing Views

- [init(frame:frameName:groupName:)](webview-swift.class/init%28frame_framename_groupname_%29.md): Deprecated. Initializes the receiver with a frame rectangle, frame name, and group name.

### Closing the View

- [close()](webview-swift.class/close%28%29.md): Deprecated. Closes the web view when it’s no longer needed.
- [shouldCloseWithWindow](webview-swift.class/shouldclosewithwindow.md): Deprecated. A Boolean that indicates whether the web view should close when its window or host window closes.

### Getting the Main Frame

- [mainFrame](webview-swift.class/mainframe.md): Deprecated. The main frame, the root of the web frame hierarchy for this page.

### Loading Content

- [stopLoading(\_:)](webview-swift.class/stoploading%28__%29.md): An action method that stops the loading of any web frame content managed by the receiver.
- [takeStringURLFrom(\_:)](webview-swift.class/takestringurlfrom%28__%29.md): Sets the receiver’s current location by obtaining a URL string from the sender.
- [reload(\_:)](webview-swift.class/reload%28__%29.md): An action method that reloads the current page.
- [reloadFromOrigin(\_:)](webview-swift.class/reloadfromorigin%28__%29.md): Action method that performs an end-to-end revalidation using cache-validating conditionals if possible.
- [estimatedProgress](webview-swift.class/estimatedprogress.md): Deprecated. An estimate, as a percentage, of the amount of content that is currently loaded.

### Drawing

- [drawsBackground](webview-swift.class/drawsbackground.md): Deprecated. A Boolean that indicates whether the web view draws a background.
- [shouldUpdateWhileOffscreen](webview-swift.class/shouldupdatewhileoffscreen.md): Deprecated. A Boolean that inidicates whether the web view should update even when it is not in a window that is currently visible.

### Moving Back and Forward

- [setMaintainsBackForwardList(\_:)](webview-swift.class/setmaintainsbackforwardlist%28__%29.md): Deprecated. Sets whether to use a back-forward list.
- [backForwardList](webview-swift.class/backforwardlist.md): Deprecated. The receiver’s back-forward list.
- [canGoBack](webview-swift.class/cangoback.md): A Boolean that indicates whether the previous location can be loaded.
- [goBack()](webview-swift.class/goback%28%29.md): Deprecated. Loads the previous location in the back-forward list.
- [goBack(\_:)](webview-swift.class/goback%28__%29.md): An action method that loads the previous location in the back-forward list.
- [canGoForward](webview-swift.class/cangoforward.md): A Boolean that indicates whether the next location can be loaded.
- [goForward()](webview-swift.class/goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.
- [goForward(\_:)](webview-swift.class/goforward%28__%29.md): An action method that loads the next location in the back-forward list.
- [go(toBackForwardItem:)](webview-swift.class/go%28tobackforwarditem_%29.md): Deprecated. Loads a specific location from the back-forward list and sets it as the current item.

### Changing the Text Size

- [canMakeTextLarger](webview-swift.class/canmaketextlarger.md): A Boolean that indicates whether the text can be made larger.
- [makeTextLarger(\_:)](webview-swift.class/maketextlarger%28__%29.md): Action method that increases the text size by one unit.
- [canMakeTextSmaller](webview-swift.class/canmaketextsmaller.md): A Boolean that indicates whether the text can be made smaller.
- [makeTextSmaller(\_:)](webview-swift.class/maketextsmaller%28__%29.md): Action method that reduces the text size by one unit.

### Getting and Setting Delegates

- [downloadDelegate](webview-swift.class/downloaddelegate.md): Deprecated. The receiver’s download delegate.
- [frameLoadDelegate](webview-swift.class/frameloaddelegate.md): Deprecated. The receiver’s frame load delegate.
- [policyDelegate](webview-swift.class/policydelegate.md): Deprecated. The receiver’s policy delegate.
- [resourceLoadDelegate](webview-swift.class/resourceloaddelegate.md): Deprecated. The receiver’s resource load delegate.
- [uiDelegate](webview-swift.class/uidelegate.md): Deprecated. The receiver’s user interface delegate.

### Getting and Setting the Window

- [hostWindow](webview-swift.class/hostwindow.md): Deprecated. The receiver’s host window.

### Getting and Setting Preferences

- [preferences](webview-swift.class/preferences.md): Deprecated. The receiver’s preferences.
- [preferencesIdentifier](webview-swift.class/preferencesidentifier.md): Deprecated. The identifier of the receiver’s preferences.

### Getting and Setting Frame Contents

- [isLoading](webview-swift.class/isloading.md): Deprecated. A Boolean that indicates whether the web view is loading content.
- [selectedFrame](webview-swift.class/selectedframe.md): Deprecated. The frame with the active selection.
- [mainFrameURL](webview-swift.class/mainframeurl.md): Deprecated. The URL that the main frame loads.
- [mainFrameTitle](webview-swift.class/mainframetitle.md): Deprecated. The HTML title of the loaded page.
- [mainFrameIcon](webview-swift.class/mainframeicon.md): Deprecated. The site’s favicon.
- [mainFrameDocument](webview-swift.class/mainframedocument.md): Deprecated. The DOM document for the main frame.

### Getting and Setting Content Information

- [canShowMIMEType(\_:)](webview-swift.class/canshowmimetype%28__%29.md): Deprecated. Returns whether the receiver can display content of a given MIME type.
- [mimeTypesShownAsHTML()](webview-swift.class/mimetypesshownashtml%28%29.md): Deprecated. Returns a list of MIME types that WebKit renders as HTML.
- [setMIMETypesShownAsHTML(\_:)](webview-swift.class/setmimetypesshownashtml%28__%29.md): Deprecated. Sets the MIME types that WebKit attempts to render as HTML.
- [canShowMIMEType(asHTML:)](webview-swift.class/canshowmimetype%28ashtml_%29.md): Deprecated. Returns whether the receiver interprets a MIME type as HTML.
- [supportsTextEncoding](webview-swift.class/supportstextencoding.md): Deprecated. A Boolean that indicates whether the document view supports different text encodings.
- [customTextEncodingName](webview-swift.class/customtextencodingname.md): Deprecated. The custom text encoding name.
- [textSizeMultiplier](webview-swift.class/textsizemultiplier.md): Deprecated. The font size multiplier for text displayed in web frame view objects managed by the receiver.

### Searching the Document

- [search(for:direction:caseSensitive:wrap:)](webview-swift.class/search%28for_direction_casesensitive_wrap_%29.md): Deprecated. Searches a document view for a string and highlights it if it is found.

### Getting and Setting the Group Name

- [groupName](webview-swift.class/groupname.md): Deprecated. The receiver’s group name.

### Getting and Setting User-agent Strings

- [userAgent(for:)](webview-swift.class/useragent%28for_%29.md): Deprecated. Returns the appropriate user-agent string for a given URL.
- [applicationNameForUserAgent](webview-swift.class/applicationnameforuseragent.md): Deprecated. The receiver’s application name that is used in the user-agent string.
- [customUserAgent](webview-swift.class/customuseragent.md): Deprecated. The receiver’s custom user-agent string.

### Processing JavaScript

- [stringByEvaluatingJavaScript(from:)](webview-swift.class/stringbyevaluatingjavascript%28from_%29.md): Deprecated. Returns the result of running a script.

### Using the Pasteboard

- [url(from:)](webview-swift.class/url%28from_%29.md): Deprecated. Returns a URL from the specified pasteboard.
- [urlTitle(from:)](webview-swift.class/urltitle%28from_%29.md): Deprecated. Returns the title of a URL from the specified pasteboard.
- [pasteboardTypes(forElement:)](webview-swift.class/pasteboardtypes%28forelement_%29.md): Deprecated. Returns an array of pasteboard types for an element.
- [pasteboardTypesForSelection](webview-swift.class/pasteboardtypesforselection.md): Deprecated. An array of pasteboard types that can be used for the current selection of the receiver.
- [writeElement(\_:withPasteboardTypes:to:)](webview-swift.class/writeelement%28__withpasteboardtypes_to_%29.md): Deprecated. Writes an element to the pasteboard using a list of types.
- [writeSelection(withPasteboardTypes:to:)](webview-swift.class/writeselection%28withpasteboardtypes_to_%29.md): Deprecated. Writes the receiver’s current selection to a pasteboard using a list of types.

### Dragging

- [element(at:)](webview-swift.class/element%28at_%29.md): Deprecated. Returns a dictionary description of the element at a given point in the receiver’s coordinates.
- [moveDragCaret(to:)](webview-swift.class/movedragcaret%28to_%29.md): Deprecated. Moves the drag caret that indicates the destination of a drag operation to a given point.
- [removeDragCaret()](webview-swift.class/removedragcaret%28%29.md): Deprecated. Removes the drag caret that indicates the destination of a drag operation.

### Cut, Copy and Paste Action Methods

- [copy(\_:)](webview-swift.class/copy%28__%29.md): Action method that copies the selected content to the general pasteboard.
- [copyFont(\_:)](webview-swift.class/copyfont%28__%29.md): An action method that copies font information onto the font pasteboard.
- [cut(\_:)](webview-swift.class/cut%28__%29.md): An action method that deletes selected content and puts it on the general pasteboard.
- [delete(\_:)](webview-swift.class/delete%28__%29.md): An action method that deletes the selected content.
- [paste(\_:)](webview-swift.class/paste%28__%29.md): An action method that pastes content from the pasteboard at the insertion point or over the selection.
- [pasteFont(\_:)](webview-swift.class/pastefont%28__%29.md): An action method that pastes font information from the font pasteboard.
- [pasteAsPlainText(\_:)](webview-swift.class/pasteasplaintext%28__%29.md): An action method that pastes pasteboard content as plain text.
- [pasteAsRichText(\_:)](webview-swift.class/pasteasrichtext%28__%29.md): An action method that pastes pasteboard content into the receiver as rich text, maintaining its attributes.

### Content Alignment Action Methods

- [alignCenter(\_:)](webview-swift.class/aligncenter%28__%29.md): An action method that applies center alignment to selected content or all content if there’s no selection.
- [alignJustified(\_:)](webview-swift.class/alignjustified%28__%29.md): An action method that applies full justification to selected content or all content if there’s no selection.
- [alignLeft(\_:)](webview-swift.class/alignleft%28__%29.md): An action method that applies left justification to selected content or all content if there’s no selection.
- [alignRight(\_:)](webview-swift.class/alignright%28__%29.md): An action method that applies right justification to selected content or all content if there is no selection.

### Changing the Font, Color and Other Attributes When Editing

- [changeFont(\_:)](webview-swift.class/changefont%28__%29.md): An action method that changes the font of the selection, or all content if there is no selection.
- [changeAttributes(\_:)](webview-swift.class/changeattributes%28__%29.md): An action method that changes the attributes of the current selection.
- [changeDocumentBackgroundColor(\_:)](webview-swift.class/changedocumentbackgroundcolor%28__%29.md): Sets the background color of the selected content.
- [changeColor(\_:)](webview-swift.class/changecolor%28__%29.md): Sets the color of the selected content.

### Spell-checking Action Methods

- [checkSpelling(\_:)](webview-swift.class/checkspelling%28__%29.md): An action method that searches for a misspelled word in the receiver.
- [showGuessPanel(\_:)](webview-swift.class/showguesspanel%28__%29.md): An action method that shows a spelling correction panel.

### Find Panel Action Method

- [performFindPanelAction(\_:)](webview-swift.class/performfindpanelaction%28__%29.md): An action method that opens the Find menu and Find panel.

### Controlling Speakable Text

- [startSpeaking(\_:)](webview-swift.class/startspeaking%28__%29.md): An action method that starts speaking the selected text or all text if there’s no selection.
- [stopSpeaking(\_:)](webview-swift.class/stopspeaking%28__%29.md): An action method that stops speaking that is in progress.

### Getting and Setting Document Editing Attributes

- [isEditable](webview-swift.class/iseditable.md): A Boolean that indicates whether the user is allowed to edit the document.
- [smartInsertDeleteEnabled](webview-swift.class/smartinsertdeleteenabled.md): A Boolean that indicates whether smart-space insertion and deletion is enabled.
- [isContinuousSpellCheckingEnabled](webview-swift.class/iscontinuousspellcheckingenabled.md): A Boolean that indicates whether the web view has continuous spell-checking enabled.
- [spellCheckerDocumentTag](webview-swift.class/spellcheckerdocumenttag.md): The spell-checker document tag for this document.
- [undoManager](webview-swift.class/undomanager.md): The receiver’s undo manager.
- [editingDelegate](webview-swift.class/editingdelegate.md): The receiver’s editing delegate.
- [editableDOMRange(for:)](webview-swift.class/editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.

### Editing Documents

- [replaceSelection(with:)](webview-swift.class/replaceselection%28with_%29-5px9m.md): Replaces the receiver’s current selection with the specified DOM node.
- [replaceSelection(withText:)](webview-swift.class/replaceselection%28withtext_%29.md): Replaces the current selection with a string of text.
- [replaceSelection(withMarkupString:)](webview-swift.class/replaceselection%28withmarkupstring_%29.md): Replaces the current selection with mixed text and markup.
- [replaceSelection(with:)](webview-swift.class/replaceselection%28with_%29-3vj8l.md): Replaces the current selection with an archive’s contents.
- [deleteSelection()](webview-swift.class/deleteselection%28%29.md): Deletes the receiver’s current selection unless it’s collapsed.
- [moveToBeginningOfSentence(\_:)](webview-swift.class/movetobeginningofsentence%28__%29.md): Moves the insertion point to the beginning of the current sentence.
- [moveToBeginningOfSentenceAndModifySelection(\_:)](webview-swift.class/movetobeginningofsentenceandmodifyselection%28__%29.md): Moves the insertion point and extends the selection to the beginning of the current sentence.
- [moveToEndOfSentence(\_:)](webview-swift.class/movetoendofsentence%28__%29.md): Moves the insertion point to the end of the current sentence.
- [moveToEndOfSentenceAndModifySelection(\_:)](webview-swift.class/movetoendofsentenceandmodifyselection%28__%29.md): Moves the insertion point and extends the selection to the end of the current sentence.
- [selectSentence(\_:)](webview-swift.class/selectsentence%28__%29.md): Selects the entire sentence around the insertion point.
- [toggleContinuousSpellChecking(\_:)](webview-swift.class/togglecontinuousspellchecking%28__%29.md): Toggles whether continuous spell checking is available.
- [toggleSmartInsertDelete(\_:)](webview-swift.class/togglesmartinsertdelete%28__%29.md): Toggles whether spaces around selected words are inserted or deleted to preserve proper spacing and punctuation.
- [canMakeTextStandardSize](webview-swift.class/canmaketextstandardsize.md): A Boolean that indicates whether the current text size is a multiple of 1.
- [makeTextStandardSize(\_:)](webview-swift.class/maketextstandardsize%28__%29.md): Resets the text size to a multiple of 1.
- [maintainsInactiveSelection](webview-swift.class/maintainsinactiveselection.md): A Boolean that indicates whether the selection is maintained when focus is lost.

### Selecting Content in the Document

- [selectedDOMRange](webview-swift.class/selecteddomrange.md): The range of the current selection.
- [setSelectedDOMRange(\_:affinity:)](webview-swift.class/setselecteddomrange%28__affinity_%29.md): Selects a range of nodes.
- [selectionAffinity](webview-swift.class/selectionaffinity.md): The current selection affinity.

### Getting and Setting CSS Properties

- [computedStyle(for:pseudoElement:)](webview-swift.class/computedstyle%28for_pseudoelement_%29.md): Returns the computed style of an element and its pseudo element.
- [mediaStyle](webview-swift.class/mediastyle.md): Deprecated. The receiver’s CSS media property.
- [typingStyle](webview-swift.class/typingstyle.md): The receiver’s CSS typing style.
- [styleDeclaration(withText:)](webview-swift.class/styledeclaration%28withtext_%29.md): Returns the CSS style declaration for the specified text.
- [applyStyle(\_:)](webview-swift.class/applystyle%28__%29.md): Applies the CSS typing style to the current selection.

### Using WebScript

- [windowScriptObject](webview-swift.class/windowscriptobject.md): Deprecated. The receiver’s window object from the scripting environment.

### Constants

- [Element Dictionary Keys](element-dictionary-keys.md): Predefined keys used to access an element dictionary.

### Notifications

- [WebViewDidBeginEditing](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewdidbeginediting): Deprecated. Posted when a web view begins any operation that changes its contents in response to user editing.
- [WebViewDidChange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewdidchange): Deprecated. Posted when a web view performs any operation that changes its contents in response to user editing.
- [WebViewDidChangeSelection](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewdidchangeselection): Deprecated. Posted when a web view changes its typing selection.
- [WebViewDidChangeTypingStyle](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewdidchangetypingstyle): Deprecated. Posted when a web view changes its typing style.
- [WebViewDidEndEditing](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewdidendediting): Deprecated. Posted when a web view ends any operation that changes its contents in response to user editing.
- [WebViewProgressEstimateChanged](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewprogressestimatechanged): Deprecated. Posted by a WebView object when the estimated progress value of a load changes.
- [WebViewProgressFinished](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewprogressfinished): Deprecated. Posted by a WebView object when the load has finished.
- [WebViewProgressStarted](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewprogressstarted): Deprecated. Posted by a WebView object when a load begins, including a load that is initiated in a subframe.

### Instance Methods

- [overWrite(\_:)](webview-swift.class/overwrite%28__%29.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [NSUserInterfaceValidations](https://developer.apple.com/documentation/appkit/nsuserinterfacevalidations)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Content

- [WebNavigationType](webnavigationtype.md): Deprecated. Possible values for the [WebActionNavigationTypeKey](webactionnavigationtypekey.md) key that appears in an action dictionary.
- [WebViewInsertAction](webviewinsertaction.md): Deprecated. The type of user action that initiated a delegate message.

# WebView (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

`WebView` is the core view class in the WebKit framework that manages interactions between the `WebFrame` and `WebFrameView` classes. To embed web content in your application, you just create a `WebView` object, attach it to a window, and send a [loadRequest:](webframe/load%28__%29-47p2s.md) message to its main frame.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@interface WebView : NSView
```

<a id="overview"></a>

## Overview

> **Note**

>  In apps that run in OS X 10.10 and later, use the [WKWebView](wkwebview.md) class instead of using [WebView](webview-swift.class.md).

Behind the scenes, `WebFrame` objects encapsulate the content contained in a single frame element. A hierarchy of `WebFrame` objects is used to model an entire webpage where the root is called the **main frame**. There is a `WebFrameView` object per `WebFrame` object used to display the frame content. Therefore, there is a parallel hierarchy of `WebFrameView` objects used to render an entire page. The `WebView` object is also the parent view of this hierarchy. You do not need to create `WebFrame` and `WebFrameView` objects directly. These objects are automatically created when the page loads, either programmatically or by the user clicking a link.

You customize your embedded web content by implementing `WebView` delegates to handle certain aspects of the process. `WebView` objects have multiple delegates because the process of loading a webpage is asynchronous and complicated if errors occur. All the `WebView` delegates use informal protocols so you only need to implement only the delegates and methods that define the behavior you wish to change—default implementations are already provided.

For example, you might want to implement the frame load and resource load delegates to monitor the load progress and display status messages. Applications that use multiple windows may want to implement a user interface delegate. See the individual informal delegate protocols for more details: `WebFrameLoadDelegate`, `WebPolicyDelegate`, [WebResourceLoadDelegate](webresourceloaddelegate.md), and [WebUIDelegate](webuidelegate.md).

Another way to monitor load progress with less control is to observe the [WebViewProgressEstimateChangedNotification](webviewprogressestimatechangednotification.md), [WebViewProgressFinishedNotification](webviewprogressfinishednotification.md), and [WebViewProgressStartedNotification](webviewprogressstartednotification.md) notifications. For example, you could observe these notifications to implement a simple progress indicator in your application. You update the progress indicator by invoking the [estimatedProgress](webview-swift.class/estimatedprogress.md) method to get an estimate of the amount of content that is currently loaded.

A `WebView` object is intended to support most features you would expect in a web browser except that it doesn’t implement the specific user interface for those features. You are responsible for implementing the user interface objects such as status bars, toolbars, buttons, and text fields. For example, a `WebView` object manages a back-forward list by default, and has [goBack:](webview-swift.class/goback%28__%29.md) and [goForward:](webview-swift.class/goforward%28__%29.md) action methods. It is your responsibility to create the buttons that would send theses action messages. Note, there is some overhead in maintaining a back-forward list and page cache, so you should disable it if your application doesn’t use it.

You use a `WebPreferences` object to encapsulate the preferences of a `WebView` object, such as the font, text encoding, and image settings. You can modify the preferences for individual `WebView` objects or specify a shared `WebPreferences` object using the [preferencesIdentifier](webview-swift.class/preferencesidentifier.md) method. Use the [autosaves](webpreferences/autosaves.md)  `WebPreferences` method to specify whether the preferences should be automatically saved to the user defaults database.

You can also extend WebKit by implementing your own document view and representation classes for specific MIME types. Use the [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) class method to register your custom classes with a `WebView` object.

## Topics

### Registering Document Views and Representations

- [registerURLSchemeAsLocal:](webview-swift.class/registerurlscheme%28aslocal_%29.md): Deprecated. Adds the specified URL scheme to the list of local schemes.
- [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md): Deprecated. Specifies the view and representation objects to be used for specific MIME types.

### Initializing Views

- [initWithFrame:frameName:groupName:](webview-swift.class/init%28frame_framename_groupname_%29.md): Deprecated. Initializes the receiver with a frame rectangle, frame name, and group name.

### Closing the View

- [close](webview-swift.class/close%28%29.md): Deprecated. Closes the web view when it’s no longer needed.
- [shouldCloseWithWindow](webview-swift.class/shouldclosewithwindow.md): Deprecated. A Boolean that indicates whether the web view should close when its window or host window closes.

### Getting the Main Frame

- [mainFrame](webview-swift.class/mainframe.md): Deprecated. The main frame, the root of the web frame hierarchy for this page.

### Loading Content

- [stopLoading:](webview-swift.class/stoploading%28__%29.md): An action method that stops the loading of any web frame content managed by the receiver.
- [takeStringURLFrom:](webview-swift.class/takestringurlfrom%28__%29.md): Sets the receiver’s current location by obtaining a URL string from the sender.
- [reload:](webview-swift.class/reload%28__%29.md): An action method that reloads the current page.
- [reloadFromOrigin:](webview-swift.class/reloadfromorigin%28__%29.md): Action method that performs an end-to-end revalidation using cache-validating conditionals if possible.
- [estimatedProgress](webview-swift.class/estimatedprogress.md): Deprecated. An estimate, as a percentage, of the amount of content that is currently loaded.

### Drawing

- [drawsBackground](webview-swift.class/drawsbackground.md): Deprecated. A Boolean that indicates whether the web view draws a background.
- [shouldUpdateWhileOffscreen](webview-swift.class/shouldupdatewhileoffscreen.md): Deprecated. A Boolean that inidicates whether the web view should update even when it is not in a window that is currently visible.

### Moving Back and Forward

- [setMaintainsBackForwardList:](webview-swift.class/setmaintainsbackforwardlist%28__%29.md): Deprecated. Sets whether to use a back-forward list.
- [backForwardList](webview-swift.class/backforwardlist.md): Deprecated. The receiver’s back-forward list.
- [canGoBack](webview-swift.class/cangoback.md): A Boolean that indicates whether the previous location can be loaded.
- [goBack](webview-swift.class/goback%28%29.md): Deprecated. Loads the previous location in the back-forward list.
- [goBack:](webview-swift.class/goback%28__%29.md): An action method that loads the previous location in the back-forward list.
- [canGoForward](webview-swift.class/cangoforward.md): A Boolean that indicates whether the next location can be loaded.
- [goForward](webview-swift.class/goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.
- [goForward:](webview-swift.class/goforward%28__%29.md): An action method that loads the next location in the back-forward list.
- [goToBackForwardItem:](webview-swift.class/go%28tobackforwarditem_%29.md): Deprecated. Loads a specific location from the back-forward list and sets it as the current item.

### Changing the Text Size

- [canMakeTextLarger](webview-swift.class/canmaketextlarger.md): A Boolean that indicates whether the text can be made larger.
- [makeTextLarger:](webview-swift.class/maketextlarger%28__%29.md): Action method that increases the text size by one unit.
- [canMakeTextSmaller](webview-swift.class/canmaketextsmaller.md): A Boolean that indicates whether the text can be made smaller.
- [makeTextSmaller:](webview-swift.class/maketextsmaller%28__%29.md): Action method that reduces the text size by one unit.

### Getting and Setting Delegates

- [downloadDelegate](webview-swift.class/downloaddelegate.md): Deprecated. The receiver’s download delegate.
- [frameLoadDelegate](webview-swift.class/frameloaddelegate.md): Deprecated. The receiver’s frame load delegate.
- [policyDelegate](webview-swift.class/policydelegate.md): Deprecated. The receiver’s policy delegate.
- [resourceLoadDelegate](webview-swift.class/resourceloaddelegate.md): Deprecated. The receiver’s resource load delegate.
- [UIDelegate](webview-swift.class/uidelegate.md): Deprecated. The receiver’s user interface delegate.

### Getting and Setting the Window

- [hostWindow](webview-swift.class/hostwindow.md): Deprecated. The receiver’s host window.

### Getting and Setting Preferences

- [preferences](webview-swift.class/preferences.md): Deprecated. The receiver’s preferences.
- [preferencesIdentifier](webview-swift.class/preferencesidentifier.md): Deprecated. The identifier of the receiver’s preferences.

### Getting and Setting Frame Contents

- [loading](webview-swift.class/isloading.md): Deprecated. A Boolean that indicates whether the web view is loading content.
- [selectedFrame](webview-swift.class/selectedframe.md): Deprecated. The frame with the active selection.
- [mainFrameURL](webview-swift.class/mainframeurl.md): Deprecated. The URL that the main frame loads.
- [mainFrameTitle](webview-swift.class/mainframetitle.md): Deprecated. The HTML title of the loaded page.
- [mainFrameIcon](webview-swift.class/mainframeicon.md): Deprecated. The site’s favicon.
- [mainFrameDocument](webview-swift.class/mainframedocument.md): Deprecated. The DOM document for the main frame.

### Getting and Setting Content Information

- [canShowMIMEType:](webview-swift.class/canshowmimetype%28__%29.md): Deprecated. Returns whether the receiver can display content of a given MIME type.
- [MIMETypesShownAsHTML](webview-swift.class/mimetypesshownashtml%28%29.md): Deprecated. Returns a list of MIME types that WebKit renders as HTML.
- [setMIMETypesShownAsHTML:](webview-swift.class/setmimetypesshownashtml%28__%29.md): Deprecated. Sets the MIME types that WebKit attempts to render as HTML.
- [canShowMIMETypeAsHTML:](webview-swift.class/canshowmimetype%28ashtml_%29.md): Deprecated. Returns whether the receiver interprets a MIME type as HTML.
- [supportsTextEncoding](webview-swift.class/supportstextencoding.md): Deprecated. A Boolean that indicates whether the document view supports different text encodings.
- [customTextEncodingName](webview-swift.class/customtextencodingname.md): Deprecated. The custom text encoding name.
- [textSizeMultiplier](webview-swift.class/textsizemultiplier.md): Deprecated. The font size multiplier for text displayed in web frame view objects managed by the receiver.

### Searching the Document

- [searchFor:direction:caseSensitive:wrap:](webview-swift.class/search%28for_direction_casesensitive_wrap_%29.md): Deprecated. Searches a document view for a string and highlights it if it is found.

### Getting and Setting the Group Name

- [groupName](webview-swift.class/groupname.md): Deprecated. The receiver’s group name.

### Getting and Setting User-agent Strings

- [userAgentForURL:](webview-swift.class/useragent%28for_%29.md): Deprecated. Returns the appropriate user-agent string for a given URL.
- [applicationNameForUserAgent](webview-swift.class/applicationnameforuseragent.md): Deprecated. The receiver’s application name that is used in the user-agent string.
- [customUserAgent](webview-swift.class/customuseragent.md): Deprecated. The receiver’s custom user-agent string.

### Processing JavaScript

- [stringByEvaluatingJavaScriptFromString:](webview-swift.class/stringbyevaluatingjavascript%28from_%29.md): Deprecated. Returns the result of running a script.

### Using the Pasteboard

- [URLFromPasteboard:](webview-swift.class/url%28from_%29.md): Deprecated. Returns a URL from the specified pasteboard.
- [URLTitleFromPasteboard:](webview-swift.class/urltitle%28from_%29.md): Deprecated. Returns the title of a URL from the specified pasteboard.
- [pasteboardTypesForElement:](webview-swift.class/pasteboardtypes%28forelement_%29.md): Deprecated. Returns an array of pasteboard types for an element.
- [pasteboardTypesForSelection](webview-swift.class/pasteboardtypesforselection.md): Deprecated. An array of pasteboard types that can be used for the current selection of the receiver.
- [writeElement:withPasteboardTypes:toPasteboard:](webview-swift.class/writeelement%28__withpasteboardtypes_to_%29.md): Deprecated. Writes an element to the pasteboard using a list of types.
- [writeSelectionWithPasteboardTypes:toPasteboard:](webview-swift.class/writeselection%28withpasteboardtypes_to_%29.md): Deprecated. Writes the receiver’s current selection to a pasteboard using a list of types.

### Dragging

- [elementAtPoint:](webview-swift.class/element%28at_%29.md): Deprecated. Returns a dictionary description of the element at a given point in the receiver’s coordinates.
- [moveDragCaretToPoint:](webview-swift.class/movedragcaret%28to_%29.md): Deprecated. Moves the drag caret that indicates the destination of a drag operation to a given point.
- [removeDragCaret](webview-swift.class/removedragcaret%28%29.md): Deprecated. Removes the drag caret that indicates the destination of a drag operation.

### Cut, Copy and Paste Action Methods

- [copy:](webview-swift.class/copy%28__%29.md): Action method that copies the selected content to the general pasteboard.
- [copyFont:](webview-swift.class/copyfont%28__%29.md): An action method that copies font information onto the font pasteboard.
- [cut:](webview-swift.class/cut%28__%29.md): An action method that deletes selected content and puts it on the general pasteboard.
- [delete:](webview-swift.class/delete%28__%29.md): An action method that deletes the selected content.
- [paste:](webview-swift.class/paste%28__%29.md): An action method that pastes content from the pasteboard at the insertion point or over the selection.
- [pasteFont:](webview-swift.class/pastefont%28__%29.md): An action method that pastes font information from the font pasteboard.
- [pasteAsPlainText:](webview-swift.class/pasteasplaintext%28__%29.md): An action method that pastes pasteboard content as plain text.
- [pasteAsRichText:](webview-swift.class/pasteasrichtext%28__%29.md): An action method that pastes pasteboard content into the receiver as rich text, maintaining its attributes.

### Content Alignment Action Methods

- [alignCenter:](webview-swift.class/aligncenter%28__%29.md): An action method that applies center alignment to selected content or all content if there’s no selection.
- [alignJustified:](webview-swift.class/alignjustified%28__%29.md): An action method that applies full justification to selected content or all content if there’s no selection.
- [alignLeft:](webview-swift.class/alignleft%28__%29.md): An action method that applies left justification to selected content or all content if there’s no selection.
- [alignRight:](webview-swift.class/alignright%28__%29.md): An action method that applies right justification to selected content or all content if there is no selection.

### Changing the Font, Color and Other Attributes When Editing

- [changeFont:](webview-swift.class/changefont%28__%29.md): An action method that changes the font of the selection, or all content if there is no selection.
- [changeAttributes:](webview-swift.class/changeattributes%28__%29.md): An action method that changes the attributes of the current selection.
- [changeDocumentBackgroundColor:](webview-swift.class/changedocumentbackgroundcolor%28__%29.md): Sets the background color of the selected content.
- [changeColor:](webview-swift.class/changecolor%28__%29.md): Sets the color of the selected content.

### Spell-checking Action Methods

- [checkSpelling:](webview-swift.class/checkspelling%28__%29.md): An action method that searches for a misspelled word in the receiver.
- [showGuessPanel:](webview-swift.class/showguesspanel%28__%29.md): An action method that shows a spelling correction panel.

### Find Panel Action Method

- [performFindPanelAction:](webview-swift.class/performfindpanelaction%28__%29.md): An action method that opens the Find menu and Find panel.

### Controlling Speakable Text

- [startSpeaking:](webview-swift.class/startspeaking%28__%29.md): An action method that starts speaking the selected text or all text if there’s no selection.
- [stopSpeaking:](webview-swift.class/stopspeaking%28__%29.md): An action method that stops speaking that is in progress.

### Getting and Setting Document Editing Attributes

- [editable](webview-swift.class/iseditable.md): A Boolean that indicates whether the user is allowed to edit the document.
- [smartInsertDeleteEnabled](webview-swift.class/smartinsertdeleteenabled.md): A Boolean that indicates whether smart-space insertion and deletion is enabled.
- [continuousSpellCheckingEnabled](webview-swift.class/iscontinuousspellcheckingenabled.md): A Boolean that indicates whether the web view has continuous spell-checking enabled.
- [spellCheckerDocumentTag](webview-swift.class/spellcheckerdocumenttag.md): The spell-checker document tag for this document.
- [undoManager](webview-swift.class/undomanager.md): The receiver’s undo manager.
- [editingDelegate](webview-swift.class/editingdelegate.md): The receiver’s editing delegate.
- [editableDOMRangeForPoint:](webview-swift.class/editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.

### Editing Documents

- [replaceSelectionWithNode:](webview-swift.class/replaceselection%28with_%29-5px9m.md): Replaces the receiver’s current selection with the specified DOM node.
- [replaceSelectionWithText:](webview-swift.class/replaceselection%28withtext_%29.md): Replaces the current selection with a string of text.
- [replaceSelectionWithMarkupString:](webview-swift.class/replaceselection%28withmarkupstring_%29.md): Replaces the current selection with mixed text and markup.
- [replaceSelectionWithArchive:](webview-swift.class/replaceselection%28with_%29-3vj8l.md): Replaces the current selection with an archive’s contents.
- [deleteSelection](webview-swift.class/deleteselection%28%29.md): Deletes the receiver’s current selection unless it’s collapsed.
- [moveToBeginningOfSentence:](webview-swift.class/movetobeginningofsentence%28__%29.md): Moves the insertion point to the beginning of the current sentence.
- [moveToBeginningOfSentenceAndModifySelection:](webview-swift.class/movetobeginningofsentenceandmodifyselection%28__%29.md): Moves the insertion point and extends the selection to the beginning of the current sentence.
- [moveToEndOfSentence:](webview-swift.class/movetoendofsentence%28__%29.md): Moves the insertion point to the end of the current sentence.
- [moveToEndOfSentenceAndModifySelection:](webview-swift.class/movetoendofsentenceandmodifyselection%28__%29.md): Moves the insertion point and extends the selection to the end of the current sentence.
- [selectSentence:](webview-swift.class/selectsentence%28__%29.md): Selects the entire sentence around the insertion point.
- [toggleContinuousSpellChecking:](webview-swift.class/togglecontinuousspellchecking%28__%29.md): Toggles whether continuous spell checking is available.
- [toggleSmartInsertDelete:](webview-swift.class/togglesmartinsertdelete%28__%29.md): Toggles whether spaces around selected words are inserted or deleted to preserve proper spacing and punctuation.
- [canMakeTextStandardSize](webview-swift.class/canmaketextstandardsize.md): A Boolean that indicates whether the current text size is a multiple of 1.
- [makeTextStandardSize:](webview-swift.class/maketextstandardsize%28__%29.md): Resets the text size to a multiple of 1.
- [maintainsInactiveSelection](webview-swift.class/maintainsinactiveselection.md): A Boolean that indicates whether the selection is maintained when focus is lost.

### Selecting Content in the Document

- [selectedDOMRange](webview-swift.class/selecteddomrange.md): The range of the current selection.
- [setSelectedDOMRange:affinity:](webview-swift.class/setselecteddomrange%28__affinity_%29.md): Selects a range of nodes.
- [selectionAffinity](webview-swift.class/selectionaffinity.md): The current selection affinity.

### Getting and Setting CSS Properties

- [computedStyleForElement:pseudoElement:](webview-swift.class/computedstyle%28for_pseudoelement_%29.md): Returns the computed style of an element and its pseudo element.
- [mediaStyle](webview-swift.class/mediastyle.md): Deprecated. The receiver’s CSS media property.
- [typingStyle](webview-swift.class/typingstyle.md): The receiver’s CSS typing style.
- [styleDeclarationWithText:](webview-swift.class/styledeclaration%28withtext_%29.md): Returns the CSS style declaration for the specified text.
- [applyStyle:](webview-swift.class/applystyle%28__%29.md): Applies the CSS typing style to the current selection.

### Using WebScript

- [windowScriptObject](webview-swift.class/windowscriptobject.md): Deprecated. The receiver’s window object from the scripting environment.

### Constants

- [Element Dictionary Keys](element-dictionary-keys.md): Predefined keys used to access an element dictionary.

### Notifications

- [WebViewDidBeginEditingNotification](webviewdidbegineditingnotification.md): Deprecated. Posted when a web view begins any operation that changes its contents in response to user editing.
- [WebViewDidChangeNotification](webviewdidchangenotification.md): Deprecated. Posted when a web view performs any operation that changes its contents in response to user editing.
- [WebViewDidChangeSelectionNotification](webviewdidchangeselectionnotification.md): Deprecated. Posted when a web view changes its typing selection.
- [WebViewDidChangeTypingStyleNotification](webviewdidchangetypingstylenotification.md): Deprecated. Posted when a web view changes its typing style.
- [WebViewDidEndEditingNotification](webviewdidendeditingnotification.md): Deprecated. Posted when a web view ends any operation that changes its contents in response to user editing.
- [WebViewProgressEstimateChangedNotification](webviewprogressestimatechangednotification.md): Deprecated. Posted by a WebView object when the estimated progress value of a load changes.
- [WebViewProgressFinishedNotification](webviewprogressfinishednotification.md): Deprecated. Posted by a WebView object when the load has finished.
- [WebViewProgressStartedNotification](webviewprogressstartednotification.md): Deprecated. Posted by a WebView object when a load begins, including a load that is initiated in a subframe.

### Instance Methods

- [overWrite:](webview-swift.class/overwrite%28__%29.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [NSUserInterfaceValidations](https://developer.apple.com/documentation/appkit/nsuserinterfacevalidations)

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Content

- [WebNavigationType](webnavigationtype.md): Deprecated. Possible values for the [WebActionNavigationTypeKey](webactionnavigationtypekey.md) key that appears in an action dictionary.
- [WebViewInsertAction](webviewinsertaction.md): Deprecated. The type of user action that initiated a delegate message.
