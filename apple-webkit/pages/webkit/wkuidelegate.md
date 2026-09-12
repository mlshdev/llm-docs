> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuidelegate](https://developer.apple.com/documentation/webkit/wkuidelegate)

# WKUIDelegate (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The methods for presenting native user interface elements on behalf of a webpage.

## Declaration

```swift
@MainActor protocol WKUIDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Web view user interface delegates implement this protocol to control the opening of new windows, augment the behavior of default menu items displayed when the user clicks elements, and perform other user interface-related tasks. These methods can be invoked as a result of handling JavaScript or other plug-in content. The default web view implementation assumes one window per web view, so nonconventional user interfaces might implement a user interface delegate.

## Topics

### Creating and closing the web view

- [webView(\_:createWebViewWith:for:windowFeatures:)](wkuidelegate/webview%28__createwebviewwith_for_windowfeatures_%29.md): Creates a new web view.
- [webViewDidClose(\_:)](wkuidelegate/webviewdidclose%28__%29.md): Notifies your app that the DOM window closed successfully.

### Displaying UI panels

- [webView(\_:runJavaScriptAlertPanelWithMessage:initiatedByFrame:completionHandler:)](wkuidelegate/webview%28__runjavascriptalertpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript alert panel.
- [webView(\_:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:completionHandler:)](wkuidelegate/webview%28__runjavascriptconfirmpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript confirm panel.
- [webView(\_:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:completionHandler:)](wkuidelegate/webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript text input panel.
- [webView(\_:showLockdownModeFirstUseMessage:completionHandler:)](wkuidelegate/webview%28__showlockdownmodefirstusemessage_completionhandler_%29.md): Displays a custom Lockdown Mode first use message.
- [WKDialogResult](wkdialogresult.md): An enumeration that lists the possible ways a delegate handled displaying a custom Lockdown Mode first use dialog.

### Displaying an upload panel

- [webView(\_:runOpenPanelWith:initiatedByFrame:completionHandler:)](wkuidelegate/webview%28__runopenpanelwith_initiatedbyframe_completionhandler_%29.md): Displays a file upload panel.
- [WKOpenPanelParameters](wkopenpanelparameters.md): The configuration details of a file upload control in your web content.

### Displaying a contextual menu

- [Adding context menus in your app](https://developer.apple.com/documentation/uikit/adding-context-menus-in-your-app): Provide quick access to useful actions by adding context menus to your iOS app.
- [webView(\_:contextMenuConfigurationForElement:completionHandler:)](wkuidelegate/webview%28__contextmenuconfigurationforelement_completionhandler_%29.md): Tells the delegate that a contextual menu interaction began.
- [webView(\_:contextMenuForElement:willCommitWithAnimator:)](wkuidelegate/webview%28__contextmenuforelement_willcommitwithanimator_%29.md): Provides the delegate with the animator object that the web view uses to display the contextual menu.
- [webView(\_:contextMenuWillPresentForElement:)](wkuidelegate/webview%28__contextmenuwillpresentforelement_%29.md): Tells the delegate that the web view is about to present the contextual menu for the specified element.
- [webView(\_:contextMenuDidEndForElement:)](wkuidelegate/webview%28__contextmenudidendforelement_%29.md): Tells the delegate that the web view dismissed the contextual menu for the specified element.
- [UIContextMenuConfiguration](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration): An object containing the configuration details for the contextual menu.

### Displaying an edit menu

- [webView(\_:willDismissEditMenuWithAnimator:)](wkuidelegate/webview%28__willdismisseditmenuwithanimator_%29.md): Tells the delegate that the web view is about to dismiss an edit menu.
- [webView(\_:willPresentEditMenuWithAnimator:)](wkuidelegate/webview%28__willpresenteditmenuwithanimator_%29.md): Tells the delegate that the web view is about to present an edit menu.

### Requesting permissions

- [webView(\_:requestDeviceOrientationAndMotionPermissionFor:initiatedByFrame:decisionHandler:)](wkuidelegate/webview%28__requestdeviceorientationandmotionpermissionfor_initiatedbyframe_decisionhandler_%29.md): Determines whether a web resource, which the security origin object describes, can access the device’s orientation and motion.
- [webView(\_:requestMediaCapturePermissionFor:initiatedByFrame:type:decisionHandler:)](wkuidelegate/webview%28__requestmediacapturepermissionfor_initiatedbyframe_type_decisionhandler_%29.md): Determines whether a web resource, which the security origin object describes, can access to the device’s microphone audio and camera video.
- [WKPermissionDecision](wkpermissiondecision.md): An enumeration of possible permission decisions for device resource access.
- [WKMediaCaptureType](wkmediacapturetype.md): An enumeration listing the types of media devices that can capture audio, video, or both.

### Deprecated

- [Deprecated symbols](wkuidelegate-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Methods

- [webView(\_:insertInputSuggestion:)](wkuidelegate/webview%28__insertinputsuggestion_%29.md)
- [webView(\_:requestGeolocationPermissionFor:initiatedByFrame:decisionHandler:)](wkuidelegate/webview%28__requestgeolocationpermissionfor_initiatedbyframe_decisionhandler_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Web views

- [Replacing UIWebView in your app](replacing-uiwebview-in-your-app.md): Find a suitable alternative to handle your app’s web content.
- [Viewing Desktop or Mobile Web Content Using a Web View](viewing-desktop-or-mobile-web-content-using-a-web-view.md): Implement a simple iPad web browser that can view either the desktop or mobile version of a website.
- [WKWebView](wkwebview.md): An object that displays interactive web content, such as for an in-app browser.

# WKUIDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The methods for presenting native user interface elements on behalf of a webpage.

## Declaration

```objectivec
@protocol WKUIDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Web view user interface delegates implement this protocol to control the opening of new windows, augment the behavior of default menu items displayed when the user clicks elements, and perform other user interface-related tasks. These methods can be invoked as a result of handling JavaScript or other plug-in content. The default web view implementation assumes one window per web view, so nonconventional user interfaces might implement a user interface delegate.

## Topics

### Creating and closing the web view

- [webView:createWebViewWithConfiguration:forNavigationAction:windowFeatures:](wkuidelegate/webview%28__createwebviewwith_for_windowfeatures_%29.md): Creates a new web view.
- [webViewDidClose:](wkuidelegate/webviewdidclose%28__%29.md): Notifies your app that the DOM window closed successfully.

### Displaying UI panels

- [webView:runJavaScriptAlertPanelWithMessage:initiatedByFrame:completionHandler:](wkuidelegate/webview%28__runjavascriptalertpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript alert panel.
- [webView:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:completionHandler:](wkuidelegate/webview%28__runjavascriptconfirmpanelwithmessage_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript confirm panel.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:completionHandler:](wkuidelegate/webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedbyframe_completionhandler_%29.md): Displays a JavaScript text input panel.
- [webView:showLockdownModeFirstUseMessage:completionHandler:](wkuidelegate/webview%28__showlockdownmodefirstusemessage_completionhandler_%29.md): Displays a custom Lockdown Mode first use message.
- [WKDialogResult](wkdialogresult.md): An enumeration that lists the possible ways a delegate handled displaying a custom Lockdown Mode first use dialog.

### Displaying an upload panel

- [webView:runOpenPanelWithParameters:initiatedByFrame:completionHandler:](wkuidelegate/webview%28__runopenpanelwith_initiatedbyframe_completionhandler_%29.md): Displays a file upload panel.
- [WKOpenPanelParameters](wkopenpanelparameters.md): The configuration details of a file upload control in your web content.

### Displaying a contextual menu

- [Adding context menus in your app](https://developer.apple.com/documentation/uikit/adding-context-menus-in-your-app): Provide quick access to useful actions by adding context menus to your iOS app.
- [webView:contextMenuConfigurationForElement:completionHandler:](wkuidelegate/webview%28__contextmenuconfigurationforelement_completionhandler_%29.md): Tells the delegate that a contextual menu interaction began.
- [webView:contextMenuForElement:willCommitWithAnimator:](wkuidelegate/webview%28__contextmenuforelement_willcommitwithanimator_%29.md): Provides the delegate with the animator object that the web view uses to display the contextual menu.
- [webView:contextMenuWillPresentForElement:](wkuidelegate/webview%28__contextmenuwillpresentforelement_%29.md): Tells the delegate that the web view is about to present the contextual menu for the specified element.
- [webView:contextMenuDidEndForElement:](wkuidelegate/webview%28__contextmenudidendforelement_%29.md): Tells the delegate that the web view dismissed the contextual menu for the specified element.
- [UIContextMenuConfiguration](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration): An object containing the configuration details for the contextual menu.

### Displaying an edit menu

- [webView:willDismissEditMenuWithAnimator:](wkuidelegate/webview%28__willdismisseditmenuwithanimator_%29.md): Tells the delegate that the web view is about to dismiss an edit menu.
- [webView:willPresentEditMenuWithAnimator:](wkuidelegate/webview%28__willpresenteditmenuwithanimator_%29.md): Tells the delegate that the web view is about to present an edit menu.

### Requesting permissions

- [webView:requestDeviceOrientationAndMotionPermissionForOrigin:initiatedByFrame:decisionHandler:](wkuidelegate/webview%28__requestdeviceorientationandmotionpermissionfor_initiatedbyframe_decisionhandler_%29.md): Determines whether a web resource, which the security origin object describes, can access the device’s orientation and motion.
- [webView:requestMediaCapturePermissionForOrigin:initiatedByFrame:type:decisionHandler:](wkuidelegate/webview%28__requestmediacapturepermissionfor_initiatedbyframe_type_decisionhandler_%29.md): Determines whether a web resource, which the security origin object describes, can access to the device’s microphone audio and camera video.
- [WKPermissionDecision](wkpermissiondecision.md): An enumeration of possible permission decisions for device resource access.
- [WKMediaCaptureType](wkmediacapturetype.md): An enumeration listing the types of media devices that can capture audio, video, or both.

### Deprecated

- [Deprecated symbols](wkuidelegate-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Methods

- [webView:insertInputSuggestion:](wkuidelegate/webview%28__insertinputsuggestion_%29.md)
- [webView:requestGeolocationPermissionForOrigin:initiatedByFrame:decisionHandler:](wkuidelegate/webview%28__requestgeolocationpermissionfor_initiatedbyframe_decisionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Web views

- [Replacing UIWebView in your app](replacing-uiwebview-in-your-app.md): Find a suitable alternative to handle your app’s web content.
- [WKWebView](wkwebview.md): An object that displays interactive web content, such as for an in-app browser.
