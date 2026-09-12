> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webeditingdelegate](https://developer.apple.com/documentation/webkit/webeditingdelegate)

# WebEditingDelegate (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

## Declaration

```swift
protocol WebEditingDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [undoManager(for:)](webeditingdelegate/undomanager%28for_%29.md): Deprecated. Returns the undo manager to be used by a web view.
- [webView(\_:doCommandBy:)](webeditingdelegate/webview%28__docommandby_%29.md): Deprecated. Returns whether the receiver performs a command instead of the web view.
- [webView(\_:shouldApplyStyle:toElementsIn:)](webeditingdelegate/webview%28__shouldapplystyle_toelementsin_%29.md): Deprecated. Returns whether the user should be allowed to apply a style to a range of content.
- [webView(\_:shouldBeginEditingIn:)](webeditingdelegate/webview%28__shouldbegineditingin_%29.md): Deprecated. Returns whether the user is allowed to edit a range of content in a web view.
- [webView(\_:shouldChangeSelectedDOMRange:to:affinity:stillSelecting:)](webeditingdelegate/webview%28__shouldchangeselecteddomrange_to_affinity_stillselecting_%29.md): Deprecated. Returns whether the user should be allowed to change the selected range.
- [webView(\_:shouldChangeTypingStyle:toStyle:)](webeditingdelegate/webview%28__shouldchangetypingstyle_tostyle_%29.md): Deprecated. Returns whether the user should be allowed to change the typing style in a web view.
- [webView(\_:shouldDelete:)](webeditingdelegate/webview%28__shoulddelete_%29.md): Deprecated. Returns whether the user should be allowed to delete a range of content.
- [webView(\_:shouldEndEditingIn:)](webeditingdelegate/webview%28__shouldendeditingin_%29.md): Deprecated. Returns whether the user should be allowed to end editing.
- [webView(\_:shouldInsert:replacing:given:)](webeditingdelegate/webview%28__shouldinsert_replacing_given_%29.md): Deprecated. Returns whether the user should be allowed to insert a node in place of a range of content.
- [webView(\_:shouldInsertText:replacing:given:)](webeditingdelegate/webview%28__shouldinserttext_replacing_given_%29.md): Deprecated. Returns whether a user should be allowed to insert text in place of a range of content.
- [webViewDidBeginEditing(\_:)](webeditingdelegate/webviewdidbeginediting%28__%29.md): Deprecated. Sent by the default notification center when the user begins editing the web view.
- [webViewDidChange(\_:)](webeditingdelegate/webviewdidchange%28__%29.md): Deprecated. Sent by the default notification center when the user changes content in the web view.
- [webViewDidChangeSelection(\_:)](webeditingdelegate/webviewdidchangeselection%28__%29.md): Deprecated. Sent by the default notification center when the user changes the selection in the web view.
- [webViewDidChangeTypingStyle(\_:)](webeditingdelegate/webviewdidchangetypingstyle%28__%29.md): Deprecated. Sent by the default notification center when the user changes the typing style in the web view.
- [webViewDidEndEditing(\_:)](webeditingdelegate/webviewdidendediting%28__%29.md): Deprecated. Sent by the default notification center when the user stops editing the web view.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Setting Up a Web View (Legacy)

- [WebView](webview-swift.class.md): Deprecated. `WebView` is the core view class in the WebKit framework that manages interactions between the `WebFrame` and `WebFrameView` classes. To embed web content in your application, you just create a `WebView` object, attach it to a window, and send a [load(\_:)](webframe/load%28__%29-47p2s.md) message to its main frame.
- [WebPreferences](webpreferences.md): Deprecated. WebPreferences encapsulates the preferences you can change per WebView object. These preferences include font, text encoding, and image settings. Normally a WebView object uses the standard preferences returned by the [standard()](webpreferences/standard%28%29.md) class method. However, you can modify the preferences for individual WebView instances too. Use the [preferencesIdentifier](webview-swift.class/preferencesidentifier.md) WebView method to change a WebView object’s preferences, or to share preferences between WebView objects. Use the [autosaves](webpreferences/autosaves.md) method to specify if the preferences object should be automatically saved to the user defaults database.
- [WebUIDelegate](webuidelegate.md): Deprecated. Web view user interface delegates implement this protocol to control the opening of new windows, augment the behavior of default menu items displayed when the user clicks elements, and perform other user interface–related tasks. These methods can be invoked as a result of handling JavaScript or other plug-in content. Delegates that display more than one web view per window, for example, need to implement some of these methods to handle that case. The default implementation assumes one window per web view, so non-conventional user interfaces might implement a user interface delegate.

# WebEditingDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

## Declaration

```objectivec
@protocol WebEditingDelegate <NSObject>
```

## Topics

### Instance Methods

- [undoManagerForWebView:](webeditingdelegate/undomanager%28for_%29.md): Deprecated. Returns the undo manager to be used by a web view.
- [webView:doCommandBySelector:](webeditingdelegate/webview%28__docommandby_%29.md): Deprecated. Returns whether the receiver performs a command instead of the web view.
- [webView:shouldApplyStyle:toElementsInDOMRange:](webeditingdelegate/webview%28__shouldapplystyle_toelementsin_%29.md): Deprecated. Returns whether the user should be allowed to apply a style to a range of content.
- [webView:shouldBeginEditingInDOMRange:](webeditingdelegate/webview%28__shouldbegineditingin_%29.md): Deprecated. Returns whether the user is allowed to edit a range of content in a web view.
- [webView:shouldChangeSelectedDOMRange:toDOMRange:affinity:stillSelecting:](webeditingdelegate/webview%28__shouldchangeselecteddomrange_to_affinity_stillselecting_%29.md): Deprecated. Returns whether the user should be allowed to change the selected range.
- [webView:shouldChangeTypingStyle:toStyle:](webeditingdelegate/webview%28__shouldchangetypingstyle_tostyle_%29.md): Deprecated. Returns whether the user should be allowed to change the typing style in a web view.
- [webView:shouldDeleteDOMRange:](webeditingdelegate/webview%28__shoulddelete_%29.md): Deprecated. Returns whether the user should be allowed to delete a range of content.
- [webView:shouldEndEditingInDOMRange:](webeditingdelegate/webview%28__shouldendeditingin_%29.md): Deprecated. Returns whether the user should be allowed to end editing.
- [webView:shouldInsertNode:replacingDOMRange:givenAction:](webeditingdelegate/webview%28__shouldinsert_replacing_given_%29.md): Deprecated. Returns whether the user should be allowed to insert a node in place of a range of content.
- [webView:shouldInsertText:replacingDOMRange:givenAction:](webeditingdelegate/webview%28__shouldinserttext_replacing_given_%29.md): Deprecated. Returns whether a user should be allowed to insert text in place of a range of content.
- [webViewDidBeginEditing:](webeditingdelegate/webviewdidbeginediting%28__%29.md): Deprecated. Sent by the default notification center when the user begins editing the web view.
- [webViewDidChange:](webeditingdelegate/webviewdidchange%28__%29.md): Deprecated. Sent by the default notification center when the user changes content in the web view.
- [webViewDidChangeSelection:](webeditingdelegate/webviewdidchangeselection%28__%29.md): Deprecated. Sent by the default notification center when the user changes the selection in the web view.
- [webViewDidChangeTypingStyle:](webeditingdelegate/webviewdidchangetypingstyle%28__%29.md): Deprecated. Sent by the default notification center when the user changes the typing style in the web view.
- [webViewDidEndEditing:](webeditingdelegate/webviewdidendediting%28__%29.md): Deprecated. Sent by the default notification center when the user stops editing the web view.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Setting Up a Web View (Legacy)

- [WebView](webview-swift.class.md): Deprecated. `WebView` is the core view class in the WebKit framework that manages interactions between the `WebFrame` and `WebFrameView` classes. To embed web content in your application, you just create a `WebView` object, attach it to a window, and send a [loadRequest:](webframe/load%28__%29-47p2s.md) message to its main frame.
- [WebPreferences](webpreferences.md): Deprecated. WebPreferences encapsulates the preferences you can change per WebView object. These preferences include font, text encoding, and image settings. Normally a WebView object uses the standard preferences returned by the [standardPreferences](webpreferences/standard%28%29.md) class method. However, you can modify the preferences for individual WebView instances too. Use the [preferencesIdentifier](webview-swift.class/preferencesidentifier.md) WebView method to change a WebView object’s preferences, or to share preferences between WebView objects. Use the [autosaves](webpreferences/autosaves.md) method to specify if the preferences object should be automatically saved to the user defaults database.
- [WebUIDelegate](webuidelegate.md): Deprecated. Web view user interface delegates implement this protocol to control the opening of new windows, augment the behavior of default menu items displayed when the user clicks elements, and perform other user interface–related tasks. These methods can be invoked as a result of handling JavaScript or other plug-in content. Delegates that display more than one web view per window, for example, need to implement some of these methods to handle that case. The default implementation assumes one window per web view, so non-conventional user interfaces might implement a user interface delegate.
