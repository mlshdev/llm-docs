> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webkit-for-appkit-and-uikit](https://developer.apple.com/documentation/webkit/webkit-for-appkit-and-uikit)

# WebKit for AppKit and UIKit (Swift)

**Framework:** WebKit  
**Kind:** API Collection

Display web content in AppKit or UIKit apps, or apps built with Objective-C.

<a id="Overview"></a>

## Overview

Present a [WKWebView](wkwebview.md) object from your custom view hierarchies and load the content you want to display. Use supporting objects to manage cookies, evaluate scripts, control navigation, generate snapshots, and perform text-based searches.

> **Important**

>  Always call WebKit functions and methods from your app’s main thread or main dispatch queue.

## Topics

### Web views

- [Replacing UIWebView in your app](replacing-uiwebview-in-your-app.md): Find a suitable alternative to handle your app’s web content.
- [Viewing Desktop or Mobile Web Content Using a Web View](viewing-desktop-or-mobile-web-content-using-a-web-view.md): Implement a simple iPad web browser that can view either the desktop or mobile version of a website.
- [WKWebView](wkwebview.md): An object that displays interactive web content, such as for an in-app browser.
- [WKUIDelegate](wkuidelegate.md): The methods for presenting native user interface elements on behalf of a webpage.

### Web view configuration

- [WKWebViewConfiguration](wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.
- [WKWindowFeatures](wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKProcessPool](wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKPreferences](wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences](wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKWebpagePreferences.ContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferences.UpgradeToHTTPSPolicy](wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](wksecurityrestrictionmode.md)
- [WKPreferences.InactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKWebView.FullscreenState](wkwebview/fullscreenstate-swift.enum.md)

### Web data management

- [WKWebsiteDataStore](wkwebsitedatastore.md): An object that manages cookies, disk and memory caches, and other types of data for a web view.
- [WKWebsiteDataRecord](wkwebsitedatarecord.md): A record of the data that a particular website stores persistently.
- [WKHTTPCookieStore](wkhttpcookiestore.md): An object that manages the HTTP cookies associated with a particular web view.
- [WKURLSchemeHandler](wkurlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [WKURLSchemeTask](wkurlschemetask.md): An interface that WebKit uses to request custom resources from your app.
- [readAccessURL](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey/readaccessurl): The local files WebKit can access when loading content.

### Navigation

- [WKNavigationDelegate](wknavigationdelegate.md): Methods for accepting or rejecting navigation changes, and for tracking the progress of navigation requests.
- [WKBackForwardList](wkbackforwardlist.md): An object that manages the list of previously loaded webpages, which the web view uses for forward and backward navigation.
- [WKBackForwardListItem](wkbackforwardlistitem.md): A representation of a webpage that the web view previously visited.
- [WKNavigation](wknavigation.md): An object that tracks the loading progress of a webpage.
- [WKNavigationAction](wknavigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WKNavigationResponse](wknavigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WKFormInfo](wkforminfo.md)

### Downloads

- [WKDownload](wkdownload.md): An object that represents the download of a web resource.
- [WKDownloadDelegate](wkdownloaddelegate.md): A protocol you implement to track download progress and handle redirects, authentication challenges, and failures.
- [WKDownload.PlaceholderPolicy](wkdownload/placeholderpolicy.md)

### Page content

- [WKUserContentController](wkusercontentcontroller.md): An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.
- [WKContentRuleListStore](wkcontentruleliststore.md): An object that contains the rules for how to load and filter content in the web view.
- [WKContentWorld](wkcontentworld.md): An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.
- [WKFrameInfo](wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKSecurityOrigin](wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKUserScript](wkuserscript.md): A script that the web view injects into a webpage.
- [WKContentWorld.Configuration](wkcontentworld/configuration.md)
- [WKJSHandle](wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.

### Page-level search

- [WKFindConfiguration](wkfindconfiguration.md): The configuration parameters to use when searching the contents of the web view.
- [WKFindResult](wkfindresult.md): An object that contains the results of searching the web view’s contents.

### Contextual menus

- [WKContextMenuElementInfo](wkcontextmenuelementinfo.md): An object that contains information about a link the user clicked in a webpage, and which you use to configure a context menu for that link.

### Snapshots

- [WKSnapshotConfiguration](wksnapshotconfiguration.md): The configuration data to use when generating an image from a web view’s contents.
- [WKPDFConfiguration](wkpdfconfiguration.md): The configuration data to use when generating a PDF representation of a web view’s contents.

### Web extensions

- [WKWebExtension](wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtension.Action](wkwebextension/action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtension.Command](wkwebextension/command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtension.MatchPattern](wkwebextension/matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtension.MessagePort](wkwebextension/messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtension.DataRecord](wkwebextension/datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtension.TabConfiguration](wkwebextension/tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtension.WindowConfiguration](wkwebextension/windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionController.Configuration](wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionController.Configuration](wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.

### Errors

- [WKError.Code](wkerror/code.md): Possible error values that WebKit APIs can return.
- [WKError](wkerror.md): Possible error values that WebKit APIs can return.

### Immersive environments

- [WKImmersiveEnvironment](wkimmersiveenvironment.md)
- [WKImmersiveEnvironmentDelegate](wkimmersiveenvironmentdelegate.md)
- [allowsImmersiveEnvironments](wkwebviewconfiguration/allowsimmersiveenvironments.md)
- [immersiveEnvironmentDelegate](wkwebview/immersiveenvironmentdelegate.md)
- [dismissImmersiveEnvironment(completionHandler:)](wkwebview/dismissimmersiveenvironment%28completionhandler_%29.md)

### Deprecated

Avoid using deprecated classes and protocols in your apps.

- [Deprecated Symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

### Web extension errors

- [WKWebExtension.Error.Code](wkwebextension/error/code.md): Constants that indicate errors in the [WKWebExtension](wkwebextension.md) domain.
- [WKWebExtensionContext.Error.Code](wkwebextensioncontext/error/code.md): Constants that indicate errors in the [WKWebExtensionContext](wkwebextensioncontext.md) domain.
- [WKWebExtension.DataRecord.Error.Code](wkwebextension/datarecord/error/code.md): Constants that indicate errors in the [WKWebExtension.DataRecord](wkwebextension/datarecord.md) domain.
- [WKWebExtension.DataRecord.Error](wkwebextension/datarecord/error.md): Constants that indicate errors in the [WKWebExtension.DataRecord](wkwebextension/datarecord.md) domain.
- [WKWebExtension.MatchPattern.Error.Code](wkwebextension/matchpattern/error/code.md): Constants that indicate errors in the [WKWebExtension.MatchPattern](wkwebextension/matchpattern.md) domain.
- [WKWebExtension.MessagePort.Error.Code](wkwebextension/messageport/error/code.md): Constants that indicate errors in the [WKWebExtension.MessagePort](wkwebextension/messageport.md) domain.
- [WKWebExtension.MessagePort.Error](wkwebextension/messageport/error.md): Constants that indicate errors in the [WKWebExtension.MessagePort](wkwebextension/messageport.md) domain.

## See Also

### WebKit APIs

- [WebKit for SwiftUI](webkit-for-swiftui.md): Integrate web content into your SwiftUI apps with new standard views you connect to webpages.

# WebKit for AppKit and UIKit (Objective-C)

**Framework:** WebKit  
**Kind:** API Collection

Display web content in AppKit or UIKit apps, or apps built with Objective-C.

<a id="Overview"></a>

## Overview

Present a [WKWebView](wkwebview.md) object from your custom view hierarchies and load the content you want to display. Use supporting objects to manage cookies, evaluate scripts, control navigation, generate snapshots, and perform text-based searches.

> **Important**

>  Always call WebKit functions and methods from your app’s main thread or main dispatch queue.

## Topics

### Web views

- [Replacing UIWebView in your app](replacing-uiwebview-in-your-app.md): Find a suitable alternative to handle your app’s web content.
- [WKWebView](wkwebview.md): An object that displays interactive web content, such as for an in-app browser.
- [WKUIDelegate](wkuidelegate.md): The methods for presenting native user interface elements on behalf of a webpage.

### Web view configuration

- [WKWebViewConfiguration](wkwebviewconfiguration.md): A collection of properties that you use to initialize a web view.
- [WKWindowFeatures](wkwindowfeatures.md): Display-related attributes that a webpage requests for its window.
- [WKProcessPool](wkprocesspool.md): Deprecated. An opaque token that you use to run multiple web views in a single process.
- [WKPreferences](wkpreferences.md): An object that encapsulates the standard behaviors to apply to websites.
- [WKWebpagePreferences](wkwebpagepreferences.md): An object that specifies the behaviors to use when loading and rendering page content.
- [WKContentMode](wkwebpagepreferences/contentmode.md): Constants that indicate how to render web view content.
- [WKWebpagePreferencesUpgradeToHTTPSPolicy](wkwebpagepreferences/upgradetohttpspolicy.md)
- [WKSecurityRestrictionMode](wksecurityrestrictionmode.md)
- [WKInactiveSchedulingPolicy](wkpreferences/inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
- [WKFullscreenState](wkwebview/fullscreenstate-swift.enum.md)

### Web data management

- [WKWebsiteDataStore](wkwebsitedatastore.md): An object that manages cookies, disk and memory caches, and other types of data for a web view.
- [WKWebsiteDataRecord](wkwebsitedatarecord.md): A record of the data that a particular website stores persistently.
- [WKHTTPCookieStore](wkhttpcookiestore.md): An object that manages the HTTP cookies associated with a particular web view.
- [WKURLSchemeHandler](wkurlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [WKURLSchemeTask](wkurlschemetask.md): An interface that WebKit uses to request custom resources from your app.
- [NSReadAccessURLDocumentOption](nsreadaccessurldocumentoption.md)
- [WKCookiePolicy](wkhttpcookiestore/cookiepolicy.md): An enumeration with cases that indicate whether a cookie store allows cookie storage.

### Navigation

- [WKNavigationDelegate](wknavigationdelegate.md): Methods for accepting or rejecting navigation changes, and for tracking the progress of navigation requests.
- [WKBackForwardList](wkbackforwardlist.md): An object that manages the list of previously loaded webpages, which the web view uses for forward and backward navigation.
- [WKBackForwardListItem](wkbackforwardlistitem.md): A representation of a webpage that the web view previously visited.
- [WKNavigation](wknavigation.md): An object that tracks the loading progress of a webpage.
- [WKNavigationAction](wknavigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WKNavigationResponse](wknavigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WKFormInfo](wkforminfo.md)

### Downloads

- [WKDownload](wkdownload.md): An object that represents the download of a web resource.
- [WKDownloadDelegate](wkdownloaddelegate.md): A protocol you implement to track download progress and handle redirects, authentication challenges, and failures.
- [WKDownloadPlaceholderPolicy](wkdownload/placeholderpolicy.md)

### Page content

- [WKUserContentController](wkusercontentcontroller.md): An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.
- [WKContentRuleListStore](wkcontentruleliststore.md): An object that contains the rules for how to load and filter content in the web view.
- [WKContentWorld](wkcontentworld.md): An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.
- [WKFrameInfo](wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKSecurityOrigin](wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKUserScript](wkuserscript.md): A script that the web view injects into a webpage.
- [WKContentWorldConfiguration](wkcontentworld/configuration.md)
- [WKJSHandle](wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.

### Page-level search

- [WKFindConfiguration](wkfindconfiguration.md): The configuration parameters to use when searching the contents of the web view.
- [WKFindResult](wkfindresult.md): An object that contains the results of searching the web view’s contents.

### Contextual menus

- [WKContextMenuElementInfo](wkcontextmenuelementinfo.md): An object that contains information about a link the user clicked in a webpage, and which you use to configure a context menu for that link.

### Snapshots

- [WKSnapshotConfiguration](wksnapshotconfiguration.md): The configuration data to use when generating an image from a web view’s contents.
- [WKPDFConfiguration](wkpdfconfiguration.md): The configuration data to use when generating a PDF representation of a web view’s contents.

### Web extensions

- [WKWebExtension](wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtensionAction](wkwebextension/action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtensionCommand](wkwebextension/command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtensionMatchPattern](wkwebextension/matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtensionMessagePort](wkwebextension/messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtensionDataRecord](wkwebextension/datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtensionTabConfiguration](wkwebextension/tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtensionWindowConfiguration](wkwebextension/windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionControllerConfiguration](wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionControllerConfiguration](wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.

### Errors

- [WKErrorCode](wkerror/code.md): Possible error values that WebKit APIs can return.

### Macros

- [WebKit Macros](webkit-macros.md)

### Data types

- [NSAttributedStringCompletionHandler](nsattributedstringcompletionhandler.md)

### Immersive environments

- [WKImmersiveEnvironment](wkimmersiveenvironment.md)
- [WKImmersiveEnvironmentDelegate](wkimmersiveenvironmentdelegate.md)
- [allowsImmersiveEnvironments](wkwebviewconfiguration/allowsimmersiveenvironments.md)
- [immersiveEnvironmentDelegate](wkwebview/immersiveenvironmentdelegate.md)
- [dismissImmersiveEnvironmentWithCompletionHandler:](wkwebview/dismissimmersiveenvironment%28completionhandler_%29.md)

### Deprecated

Avoid using deprecated classes and protocols in your apps.

- [Deprecated Symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

### Web extension errors

- [WKWebExtensionError](wkwebextension/error/code.md): Constants that indicate errors in the [WKWebExtension](wkwebextension.md) domain.
- [WKWebExtensionContextError](wkwebextensioncontext/error/code.md): Constants that indicate errors in the [WKWebExtensionContext](wkwebextensioncontext.md) domain.
- [WKWebExtensionDataRecordError](wkwebextension/datarecord/error/code.md): Constants that indicate errors in the [WKWebExtensionDataRecord](wkwebextension/datarecord.md) domain.
- [WKWebExtensionMatchPatternError](wkwebextension/matchpattern/error/code.md): Constants that indicate errors in the [WKWebExtensionMatchPattern](wkwebextension/matchpattern.md) domain.
- [WKWebExtensionMessagePortError](wkwebextension/messageport/error/code.md): Constants that indicate errors in the [WKWebExtensionMessagePort](wkwebextension/messageport.md) domain.
