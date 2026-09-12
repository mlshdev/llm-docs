> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webkit-constants](https://developer.apple.com/documentation/webkit/webkit-constants)

# WebKit Constants (Swift)

**Framework:** WebKit  
**Kind:** API Collection

WebKit constants affecting multiple classes.

## Topics

### WKPreview Constants

- [WKPreviewActionItemIdentifierAddToReadingList](wkpreviewactionitemidentifieraddtoreadinglist.md): Deprecated. Adds the item to the Reading List.
- [WKPreviewActionItemIdentifierCopy](wkpreviewactionitemidentifiercopy.md): Deprecated. Copies the item to the clipboard.
- [WKPreviewActionItemIdentifierOpen](wkpreviewactionitemidentifieropen.md): Deprecated. Opens the item.
- [WKPreviewActionItemIdentifierShare](wkpreviewactionitemidentifiershare.md): Deprecated. Displays the Share panel options available for the item.

### WKWebsiteDataType Constants

- [WKWebsiteDataTypeCookies](wkwebsitedatatypecookies.md): Cookies.
- [WKWebsiteDataTypeDiskCache](wkwebsitedatatypediskcache.md): On-disk caches.
- [WKWebsiteDataTypeIndexedDBDatabases](wkwebsitedatatypeindexeddbdatabases.md): IndexedDB databases.
- [WKWebsiteDataTypeLocalStorage](wkwebsitedatatypelocalstorage.md): HTML local storage.
- [WKWebsiteDataTypeMemoryCache](wkwebsitedatatypememorycache.md): In-memory caches.
- [WKWebsiteDataTypeOfflineWebApplicationCache](wkwebsitedatatypeofflinewebapplicationcache.md): Deprecated. HTML offline web app caches.
- [WKWebsiteDataTypeSessionStorage](wkwebsitedatatypesessionstorage.md): HTML session storage.
- [WKWebsiteDataTypeWebSQLDatabases](wkwebsitedatatypewebsqldatabases.md): WebSQL databases.

### DOM Constants

- [DOMEventException](domeventexception.md): Deprecated.
- [DOMException](domexception.md): Deprecated.
- [DOMRangeException](domrangeexception.md): Deprecated.
- [DOMXPathException](domxpathexception.md): Deprecated.
- [DOM_BAD_BOUNDARYPOINTS_ERR](dom_bad_boundarypoints_err.md): Deprecated.
- [DOM_DOMSTRING_SIZE_ERR](dom_domstring_size_err.md): Deprecated.
- [DOM_HIERARCHY_REQUEST_ERR](dom_hierarchy_request_err.md): Deprecated.
- [DOM_INDEX_SIZE_ERR](dom_index_size_err.md): Deprecated.
- [DOM_INUSE_ATTRIBUTE_ERR](dom_inuse_attribute_err.md): Deprecated.
- [DOM_INVALID_ACCESS_ERR](dom_invalid_access_err.md): Deprecated.
- [DOM_INVALID_CHARACTER_ERR](dom_invalid_character_err.md): Deprecated.
- [DOM_INVALID_EXPRESSION_ERR](dom_invalid_expression_err.md): Deprecated.
- [DOM_INVALID_MODIFICATION_ERR](dom_invalid_modification_err.md): Deprecated.
- [DOM_INVALID_NODE_TYPE_ERR](dom_invalid_node_type_err.md): Deprecated.
- [DOM_INVALID_STATE_ERR](dom_invalid_state_err.md): Deprecated.
- [DOM_NAMESPACE_ERR](dom_namespace_err.md): Deprecated.
- [DOM_NOT_FOUND_ERR](dom_not_found_err.md): Deprecated.
- [DOM_NOT_SUPPORTED_ERR](dom_not_supported_err.md): Deprecated.
- [DOM_NO_DATA_ALLOWED_ERR](dom_no_data_allowed_err.md): Deprecated.
- [DOM_NO_MODIFICATION_ALLOWED_ERR](dom_no_modification_allowed_err.md): Deprecated.
- [DOM_SYNTAX_ERR](dom_syntax_err.md): Deprecated.
- [DOM_TYPE_ERR](dom_type_err.md): Deprecated.
- [DOM_UNSPECIFIED_EVENT_TYPE_ERR](dom_unspecified_event_type_err.md): Deprecated.
- [DOM_WRONG_DOCUMENT_ERR](dom_wrong_document_err.md): Deprecated.

### WebKit Constants (Legacy)

- [WebActionButtonKey](webactionbuttonkey.md): Deprecated. An NSNumber object where `0` indicates the left button, `1` indicates the middle button, and `2` indicates the right button.
- [WebActionElementKey](webactionelementkey.md): Deprecated. A dictionary containing element information. See [WebView](webview-swift.class.md) for a description of the key-value pairs in this dictionary.
- [WebActionModifierFlagsKey](webactionmodifierflagskey.md): Deprecated. An unsigned number that indicates the modifier flag.
- [WebActionNavigationTypeKey](webactionnavigationtypekey.md): Deprecated. The navigation type of the action. Can be any of the values defined in [WebNavigationType](webnavigationtype.md) below.
- [WebActionOriginalURLKey](webactionoriginalurlkey.md): Deprecated. The URL that initiated the action.
- [WebArchivePboardType](webarchivepboardtype.md): Deprecated. The pasteboard type constant used when adding or accessing a WebArchive on the pasteboard.
- [WebElementDOMNodeKey](webelementdomnodekey.md): Deprecated. The DOMNode for this element.
- [WebElementFrameKey](webelementframekey.md): Deprecated. The WebFrame object associated with this element.
- [WebElementImageAltStringKey](webelementimagealtstringkey.md): Deprecated. An NSString of the ALT attribute of an image element.
- [WebElementImageKey](webelementimagekey.md): Deprecated. An NSImage representing an image element.
- [WebElementImageRectKey](webelementimagerectkey.md): Deprecated. An NSValue containing an NSRect, the size of an image element.
- [WebElementImageURLKey](webelementimageurlkey.md): Deprecated. An NSURL containing the location of an image element.
- [WebElementIsSelectedKey](webelementisselectedkey.md): Deprecated. An NSNumber used as a BOOL value to indicate whether a text element is selected or not. Zero value indicates false, true otherwise.
- [WebElementLinkLabelKey](webelementlinklabelkey.md): Deprecated. An NSString containing the text within an anchor.
- [WebElementLinkTargetFrameKey](webelementlinktargetframekey.md): Deprecated. The WebFrame object associated with the target of the anchor.
- [WebElementLinkTitleKey](webelementlinktitlekey.md): Deprecated. An NSString containing the title of an anchor.
- [WebElementLinkURLKey](webelementlinkurlkey.md): Deprecated. An NSURL containing the location of a link if the element is within an anchor.
- [WebHistoryAllItemsRemoved](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webhistoryallitemsremoved): Deprecated. Posted when all history items have been removed from the web history.
- [WebHistoryItemChanged](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webhistoryitemchanged): Deprecated. Posted by a WebHistoryItem object when the value of the history item’s title, alternate title, URL strings, or last visited interval changes.
- [WebHistoryItemsAdded](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webhistoryitemsadded): Deprecated. Posted when history items have been added to a web history.
- [WebHistoryItemsKey](webhistoryitemskey.md): Deprecated. The key to access an array containing the added or removed web history items.
- [WebHistoryItemsRemoved](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webhistoryitemsremoved): Deprecated. Posted when items have been removed from the web history.
- [WebHistoryLoaded](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webhistoryloaded): Deprecated. Posted when web history items have been loaded from a URL.
- [WebHistorySaved](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webhistorysaved): Deprecated. Posted when web history items have been saved to a URL.
- [WebKitErrorDomain](webkiterrordomain.md): Deprecated.
- [WebKitErrorMIMETypeKey](webkiterrormimetypekey.md): Deprecated.
- [WebKitErrorPlugInNameKey](webkiterrorpluginnamekey.md): Deprecated.
- [WebKitErrorPlugInPageURLStringKey](webkiterrorpluginpageurlstringkey.md): Deprecated.
- [WebPlugInAttributesKey](webpluginattributeskey.md): Deprecated. The `NSDictionary` object containing all names and values of all attributes of the plug-in’s associated HTML element, as well as all names and values of the parameters to be passed to the plug-in. For example, this dictionary will contain all `PARAM` elements within an `APPLET` element. If attribute and parameter names conflict, the attributes of an element take precedence over any of its parameters. All keys and values in this dictionary must be of type `NSString`. *Required key*.
- [WebPlugInBaseURLKey](webpluginbaseurlkey.md): Deprecated. The base URL of the document containing the plug-in’s view. *Required key*.
- [WebPlugInContainerKey](webplugincontainerkey.md): Deprecated. An object that conforms to the `WebPlugInContainer` informal protocol. This object is used for callbacks from the plug-in to the enclosing application. If `WebPlugInContainerKey` is `nil`, no callbacks will occur.
- [WebPlugInContainingElementKey](webplugincontainingelementkey.md): Deprecated. If an element of the page’s Document Object Model was used to specify the plug-in, this will contain that element. Otherwise, it will be `nil`.
- [WebPlugInShouldLoadMainResourceKey](webpluginshouldloadmainresourcekey.md): Deprecated. A Boolean value indicating whether the plug-in should load its own main resource (the `src` URL, in most cases).
- [WebPreferencesChanged](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webpreferenceschanged): Deprecated. Posted when the web preference settings are changed.
- [WebViewDidBeginEditing](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewdidbeginediting): Deprecated. Posted when a web view begins any operation that changes its contents in response to user editing.
- [WebViewDidChange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewdidchange): Deprecated. Posted when a web view performs any operation that changes its contents in response to user editing.
- [WebViewDidChangeSelection](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewdidchangeselection): Deprecated. Posted when a web view changes its typing selection.
- [WebViewDidChangeTypingStyle](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewdidchangetypingstyle): Deprecated. Posted when a web view changes its typing style.
- [WebViewDidEndEditing](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewdidendediting): Deprecated. Posted when a web view ends any operation that changes its contents in response to user editing.
- [WebViewProgressEstimateChanged](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewprogressestimatechanged): Deprecated. Posted by a WebView object when the estimated progress value of a load changes.
- [WebViewProgressFinished](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewprogressfinished): Deprecated. Posted by a WebView object when the load has finished.
- [WebViewProgressStarted](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webviewprogressstarted): Deprecated. Posted by a WebView object when a load begins, including a load that is initiated in a subframe.

### Constants

- [WKErrorDomain](wkerrordomain.md): String that identifies the WebKit error domain.
- [WKWebsiteDataTypeFetchCache](wkwebsitedatatypefetchcache.md)
- [WKWebsiteDataTypeFileSystem](wkwebsitedatatypefilesystem.md)
- [WKWebsiteDataTypeHashSalt](wkwebsitedatatypehashsalt.md)
- [WKWebsiteDataTypeMediaKeys](wkwebsitedatatypemediakeys.md)
- [WKWebsiteDataTypeSearchFieldRecentSearches](wkwebsitedatatypesearchfieldrecentsearches.md)
- [WKWebsiteDataTypeServiceWorkerRegistrations](wkwebsitedatatypeserviceworkerregistrations.md)

## See Also

### Document Object Model (DOM) APIs

- [DOMAbstractView](domabstractview.md): Deprecated.
- [DOMAttr](domattr.md): Deprecated.
- [DOMBlob](domblob.md): Deprecated.
- [DOMCDATASection](domcdatasection.md): Deprecated.
- [DOMCharacterData](domcharacterdata.md): Deprecated.
- [DOMComment](domcomment.md): Deprecated.
- [DOMCounter](domcounter.md): Deprecated.
- [DOMCSSCharsetRule](domcsscharsetrule.md): Deprecated.
- [DOMCSSFontFaceRule](domcssfontfacerule.md): Deprecated.
- [DOMCSSImportRule](domcssimportrule.md): Deprecated.
- [DOMCSSMediaRule](domcssmediarule.md): Deprecated.
- [DOMCSSPageRule](domcsspagerule.md): Deprecated.
- [DOMCSSPrimitiveValue](domcssprimitivevalue.md): Deprecated.
- [DOMCSSRule](domcssrule.md): Deprecated.
- [DOMCSSRuleList](domcssrulelist.md): Deprecated.

# WebKit Constants (Objective-C)

**Framework:** WebKit  
**Kind:** API Collection

WebKit constants affecting multiple classes.

## Topics

### WKPreview Constants

- [WKPreviewActionItemIdentifierAddToReadingList](wkpreviewactionitemidentifieraddtoreadinglist.md): Deprecated. Adds the item to the Reading List.
- [WKPreviewActionItemIdentifierCopy](wkpreviewactionitemidentifiercopy.md): Deprecated. Copies the item to the clipboard.
- [WKPreviewActionItemIdentifierOpen](wkpreviewactionitemidentifieropen.md): Deprecated. Opens the item.
- [WKPreviewActionItemIdentifierShare](wkpreviewactionitemidentifiershare.md): Deprecated. Displays the Share panel options available for the item.

### WKWebsiteDataType Constants

- [WKWebsiteDataTypeCookies](wkwebsitedatatypecookies.md): Cookies.
- [WKWebsiteDataTypeDiskCache](wkwebsitedatatypediskcache.md): On-disk caches.
- [WKWebsiteDataTypeIndexedDBDatabases](wkwebsitedatatypeindexeddbdatabases.md): IndexedDB databases.
- [WKWebsiteDataTypeLocalStorage](wkwebsitedatatypelocalstorage.md): HTML local storage.
- [WKWebsiteDataTypeMemoryCache](wkwebsitedatatypememorycache.md): In-memory caches.
- [WKWebsiteDataTypeOfflineWebApplicationCache](wkwebsitedatatypeofflinewebapplicationcache.md): Deprecated. HTML offline web app caches.
- [WKWebsiteDataTypeSessionStorage](wkwebsitedatatypesessionstorage.md): HTML session storage.
- [WKWebsiteDataTypeWebSQLDatabases](wkwebsitedatatypewebsqldatabases.md): WebSQL databases.

### DOM Constants

- [DOMEventException](domeventexception.md): Deprecated.
- [DOMException](domexception.md): Deprecated.
- [DOMRangeException](domrangeexception.md): Deprecated.
- [DOMXPathException](domxpathexception.md): Deprecated.
- [DOM_BAD_BOUNDARYPOINTS_ERR](dom_bad_boundarypoints_err.md): Deprecated.
- [DOM_DOMSTRING_SIZE_ERR](dom_domstring_size_err.md): Deprecated.
- [DOM_HIERARCHY_REQUEST_ERR](dom_hierarchy_request_err.md): Deprecated.
- [DOM_INDEX_SIZE_ERR](dom_index_size_err.md): Deprecated.
- [DOM_INUSE_ATTRIBUTE_ERR](dom_inuse_attribute_err.md): Deprecated.
- [DOM_INVALID_ACCESS_ERR](dom_invalid_access_err.md): Deprecated.
- [DOM_INVALID_CHARACTER_ERR](dom_invalid_character_err.md): Deprecated.
- [DOM_INVALID_EXPRESSION_ERR](dom_invalid_expression_err.md): Deprecated.
- [DOM_INVALID_MODIFICATION_ERR](dom_invalid_modification_err.md): Deprecated.
- [DOM_INVALID_NODE_TYPE_ERR](dom_invalid_node_type_err.md): Deprecated.
- [DOM_INVALID_STATE_ERR](dom_invalid_state_err.md): Deprecated.
- [DOM_NAMESPACE_ERR](dom_namespace_err.md): Deprecated.
- [DOM_NOT_FOUND_ERR](dom_not_found_err.md): Deprecated.
- [DOM_NOT_SUPPORTED_ERR](dom_not_supported_err.md): Deprecated.
- [DOM_NO_DATA_ALLOWED_ERR](dom_no_data_allowed_err.md): Deprecated.
- [DOM_NO_MODIFICATION_ALLOWED_ERR](dom_no_modification_allowed_err.md): Deprecated.
- [DOM_SYNTAX_ERR](dom_syntax_err.md): Deprecated.
- [DOM_TYPE_ERR](dom_type_err.md): Deprecated.
- [DOM_UNSPECIFIED_EVENT_TYPE_ERR](dom_unspecified_event_type_err.md): Deprecated.
- [DOM_WRONG_DOCUMENT_ERR](dom_wrong_document_err.md): Deprecated.

### WebKit Constants (Legacy)

- [WebActionButtonKey](webactionbuttonkey.md): Deprecated. An NSNumber object where `0` indicates the left button, `1` indicates the middle button, and `2` indicates the right button.
- [WebActionElementKey](webactionelementkey.md): Deprecated. A dictionary containing element information. See [WebView](webview-swift.class.md) for a description of the key-value pairs in this dictionary.
- [WebActionModifierFlagsKey](webactionmodifierflagskey.md): Deprecated. An unsigned number that indicates the modifier flag.
- [WebActionNavigationTypeKey](webactionnavigationtypekey.md): Deprecated. The navigation type of the action. Can be any of the values defined in [WebNavigationType](webnavigationtype.md) below.
- [WebActionOriginalURLKey](webactionoriginalurlkey.md): Deprecated. The URL that initiated the action.
- [WebArchivePboardType](webarchivepboardtype.md): Deprecated. The pasteboard type constant used when adding or accessing a WebArchive on the pasteboard.
- [WebElementDOMNodeKey](webelementdomnodekey.md): Deprecated. The DOMNode for this element.
- [WebElementFrameKey](webelementframekey.md): Deprecated. The WebFrame object associated with this element.
- [WebElementImageAltStringKey](webelementimagealtstringkey.md): Deprecated. An NSString of the ALT attribute of an image element.
- [WebElementImageKey](webelementimagekey.md): Deprecated. An NSImage representing an image element.
- [WebElementImageRectKey](webelementimagerectkey.md): Deprecated. An NSValue containing an NSRect, the size of an image element.
- [WebElementImageURLKey](webelementimageurlkey.md): Deprecated. An NSURL containing the location of an image element.
- [WebElementIsSelectedKey](webelementisselectedkey.md): Deprecated. An NSNumber used as a BOOL value to indicate whether a text element is selected or not. Zero value indicates false, true otherwise.
- [WebElementLinkLabelKey](webelementlinklabelkey.md): Deprecated. An NSString containing the text within an anchor.
- [WebElementLinkTargetFrameKey](webelementlinktargetframekey.md): Deprecated. The WebFrame object associated with the target of the anchor.
- [WebElementLinkTitleKey](webelementlinktitlekey.md): Deprecated. An NSString containing the title of an anchor.
- [WebElementLinkURLKey](webelementlinkurlkey.md): Deprecated. An NSURL containing the location of a link if the element is within an anchor.
- [WebHistoryAllItemsRemovedNotification](webhistoryallitemsremovednotification.md): Deprecated. Posted when all history items have been removed from the web history.
- [WebHistoryItemChangedNotification](webhistoryitemchangednotification.md): Deprecated. Posted by a WebHistoryItem object when the value of the history item’s title, alternate title, URL strings, or last visited interval changes.
- [WebHistoryItemsAddedNotification](webhistoryitemsaddednotification.md): Deprecated. Posted when history items have been added to a web history.
- [WebHistoryItemsKey](webhistoryitemskey.md): Deprecated. The key to access an array containing the added or removed web history items.
- [WebHistoryItemsRemovedNotification](webhistoryitemsremovednotification.md): Deprecated. Posted when items have been removed from the web history.
- [WebHistoryLoadedNotification](webhistoryloadednotification.md): Deprecated. Posted when web history items have been loaded from a URL.
- [WebHistorySavedNotification](webhistorysavednotification.md): Deprecated. Posted when web history items have been saved to a URL.
- [WebKitErrorDomain](webkiterrordomain.md): Deprecated.
- [WebKitErrorMIMETypeKey](webkiterrormimetypekey.md): Deprecated.
- [WebKitErrorPlugInNameKey](webkiterrorpluginnamekey.md): Deprecated.
- [WebKitErrorPlugInPageURLStringKey](webkiterrorpluginpageurlstringkey.md): Deprecated.
- [WebPlugInAttributesKey](webpluginattributeskey.md): Deprecated. The `NSDictionary` object containing all names and values of all attributes of the plug-in’s associated HTML element, as well as all names and values of the parameters to be passed to the plug-in. For example, this dictionary will contain all `PARAM` elements within an `APPLET` element. If attribute and parameter names conflict, the attributes of an element take precedence over any of its parameters. All keys and values in this dictionary must be of type `NSString`. *Required key*.
- [WebPlugInBaseURLKey](webpluginbaseurlkey.md): Deprecated. The base URL of the document containing the plug-in’s view. *Required key*.
- [WebPlugInContainerKey](webplugincontainerkey.md): Deprecated. An object that conforms to the `WebPlugInContainer` informal protocol. This object is used for callbacks from the plug-in to the enclosing application. If `WebPlugInContainerKey` is `nil`, no callbacks will occur.
- [WebPlugInContainingElementKey](webplugincontainingelementkey.md): Deprecated. If an element of the page’s Document Object Model was used to specify the plug-in, this will contain that element. Otherwise, it will be `nil`.
- [WebPlugInShouldLoadMainResourceKey](webpluginshouldloadmainresourcekey.md): Deprecated. A Boolean value indicating whether the plug-in should load its own main resource (the `src` URL, in most cases).
- [WebPreferencesChangedNotification](webpreferenceschangednotification.md): Deprecated. Posted when the web preference settings are changed.
- [WebViewDidBeginEditingNotification](webviewdidbegineditingnotification.md): Deprecated. Posted when a web view begins any operation that changes its contents in response to user editing.
- [WebViewDidChangeNotification](webviewdidchangenotification.md): Deprecated. Posted when a web view performs any operation that changes its contents in response to user editing.
- [WebViewDidChangeSelectionNotification](webviewdidchangeselectionnotification.md): Deprecated. Posted when a web view changes its typing selection.
- [WebViewDidChangeTypingStyleNotification](webviewdidchangetypingstylenotification.md): Deprecated. Posted when a web view changes its typing style.
- [WebViewDidEndEditingNotification](webviewdidendeditingnotification.md): Deprecated. Posted when a web view ends any operation that changes its contents in response to user editing.
- [WebViewProgressEstimateChangedNotification](webviewprogressestimatechangednotification.md): Deprecated. Posted by a WebView object when the estimated progress value of a load changes.
- [WebViewProgressFinishedNotification](webviewprogressfinishednotification.md): Deprecated. Posted by a WebView object when the load has finished.
- [WebViewProgressStartedNotification](webviewprogressstartednotification.md): Deprecated. Posted by a WebView object when a load begins, including a load that is initiated in a subframe.

### Constants

- [WKErrorDomain](wkerrordomain.md): String that identifies the WebKit error domain.
- [WKWebsiteDataTypeFetchCache](wkwebsitedatatypefetchcache.md)
- [WKWebsiteDataTypeFileSystem](wkwebsitedatatypefilesystem.md)
- [WKWebsiteDataTypeHashSalt](wkwebsitedatatypehashsalt.md)
- [WKWebsiteDataTypeMediaKeys](wkwebsitedatatypemediakeys.md)
- [WKWebsiteDataTypeSearchFieldRecentSearches](wkwebsitedatatypesearchfieldrecentsearches.md)
- [WKWebsiteDataTypeServiceWorkerRegistrations](wkwebsitedatatypeserviceworkerregistrations.md)

## See Also

### Document Object Model (DOM) APIs

- [DOMAbstractView](domabstractview.md): Deprecated.
- [DOMAttr](domattr.md): Deprecated.
- [DOMBlob](domblob.md): Deprecated.
- [DOMCDATASection](domcdatasection.md): Deprecated.
- [DOMCharacterData](domcharacterdata.md): Deprecated.
- [DOMComment](domcomment.md): Deprecated.
- [DOMCounter](domcounter.md): Deprecated.
- [DOMCSSCharsetRule](domcsscharsetrule.md): Deprecated.
- [DOMCSSFontFaceRule](domcssfontfacerule.md): Deprecated.
- [DOMCSSImportRule](domcssimportrule.md): Deprecated.
- [DOMCSSMediaRule](domcssmediarule.md): Deprecated.
- [DOMCSSPageRule](domcsspagerule.md): Deprecated.
- [DOMCSSPrimitiveValue](domcssprimitivevalue.md): Deprecated.
- [DOMCSSRule](domcssrule.md): Deprecated.
- [DOMCSSRuleList](domcssrulelist.md): Deprecated.
