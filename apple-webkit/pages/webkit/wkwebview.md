> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview](https://developer.apple.com/documentation/webkit/wkwebview)

# WKWebView (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that displays interactive web content, such as for an in-app browser.

## Declaration

```swift
@MainActor class WKWebView
```

## Mentioned In

- [Replacing UIWebView in your app](replacing-uiwebview-in-your-app.md)

<a id="overview"></a>

## Overview

A [WKWebView](wkwebview.md) object is a platform-native view that you use to incorporate web content seamlessly into your app’s UI. A web view supports a full web-browsing experience, and presents HTML, CSS, and JavaScript content alongside your app’s native views. Use it when web technologies satisfy your app’s layout and styling requirements more readily than native views. For example, you might use it when your app’s content changes frequently.

A web view offers control over the navigation and user experience through delegate objects. Use the navigation delegate to react when the user clicks links in your web content, or interacts with the content in a way that affects navigation. For example, you might prevent the user from navigating to new content unless specific conditions are met. Use the UI delegate to present native UI elements, such as alerts or contextual menus, in response to interactions with your web content.

> **Note**

>  [WKWebView](wkwebview.md) replaces the [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview) class in iOS 8 and later, and it replaces the [WebView](webview-swift.class.md) class in macOS 10.10 and later.

Embed a [WKWebView](wkwebview.md) object programmatically into your view hierarchy, or add it using Interface Builder. Interface Builder supports many customizations, such as configuring data detectors, media playback, and interaction behaviors. For more extensive customizations, create your web view programmatically using a [WKWebViewConfiguration](wkwebviewconfiguration.md) object. For example, use a web view configuration object to specify handlers for custom URL schemes, manage cookies, and customize preferences for your web content.

Before your web view appears onscreen, load content from a web server using a [URLRequest](https://developer.apple.com/documentation/foundation/urlrequest) structure or load content directly from a local file or HTML string. The web view automatically loads embedded resources such as images or videos as part of the initial load request. It then renders your content and displays the results inside the view’s bounds rectangle. The following code example shows a view controller that replaces its default view with a custom [WKWebView](wkwebview.md) object.

```swift
import UIKit
import WebKit

class ViewController: UIViewController, WKUIDelegate {
    
    var webView: WKWebView!
    
    override func loadView() {
        let webConfiguration = WKWebViewConfiguration()
        webView = WKWebView(frame: .zero, configuration: webConfiguration)
        webView.uiDelegate = self
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let myURL = URL(string:"https://www.apple.com")
        let myRequest = URLRequest(url: myURL!)
        webView.load(myRequest)
    }
}
```

A web view automatically converts telephone numbers that appear in web content to Phone links. When the user taps a Phone link, the Phone app launches and dials the number. Use the [WKWebViewConfiguration](wkwebviewconfiguration.md) object to change the default data detector behavior.

You can also use [setMagnification(\_:centeredAt:)](wkwebview/setmagnification%28__centeredat_%29.md) to programmatically set the scale of web content the first time it appears in a web view. Thereafter, the user can change the scale using gestures.

<a id="Manage-the-navigation-through-your-web-content"></a>

### Manage the navigation through your web content

[WKWebView](wkwebview.md) provides a complete browsing experience, including the ability to navigate between different webpages using links, forward and back buttons, and more. When the user clicks a link in your content, the web view acts like a browser and displays the content at that link. To disallow navigation, or to customize your web view’s navigation behavior, provide your web view with a navigation delegate — an object that conforms to the [WKNavigationDelegate](wknavigationdelegate.md) protocol. Use your navigation delegate to modify the web view’s navigation behavior, or to track the loading progress of new content.

You can also use the methods of [WKWebView](wkwebview.md) to navigate programmatically through your content, or to trigger navigation from other parts of your app’s interface. For example, if your UI includes forward and back buttons, connect those buttons to the [goBack(\_:)](wkwebview/goback%28__%29.md) and [goForward(\_:)](wkwebview/goforward%28__%29.md) methods of your web view to trigger the corresponding web navigation. Use the [canGoBack](wkwebview/cangoback.md) and [canGoForward](wkwebview/cangoforward.md) properties to determine when to enable or disable your buttons.

<a id="Provide-sharing-options"></a>

### Provide sharing options

People may want to share the contents of your web view with an app or other people. Use a [UIActivityViewController](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller) to present a share sheet offering all the ways people can share the web content.

If your app has the [com.apple.developer.web-browser](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.web-browser) entitlement, the iOS share sheet can offer Add to Home Screen for an `http` or `https` webpage, creating a convenient link to a web app or bookmark. To allow someone to add the current webpage to the Home Screen, include the [WKWebView](wkwebview.md) instance in the `activityItems` array when you call [init(activityItems:applicationActivities:)](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller/init%28activityitems:applicationactivities:%29) to create the [UIActivityViewController](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller). For more information about building a browser app, see [Preparing your app to be the default web browser](https://developer.apple.com/documentation/xcode/preparing-your-app-to-be-the-default-browser).

## Topics

### Creating a web view

- [init(frame:configuration:)](wkwebview/init%28frame_configuration_%29.md): Creates a web view and initializes it with the specified frame and configuration data.
- [init(coder:)](wkwebview/init%28coder_%29.md): Returns an object initialized from data in the specified coder object.
- [configuration](wkwebview/configuration.md): The object that contains the configuration details for the web view.

### Determining whether WebKit can load content

- [handlesURLScheme(\_:)](wkwebview/handlesurlscheme%28__%29.md): Returns a Boolean value that indicates whether WebKit natively supports resources with the specified URL scheme.

### Displaying native user interface elements

- [uiDelegate](wkwebview/uidelegate.md): The object you use to integrate custom user interface elements, such as contextual menus or panels, into web view interactions.
- [WKUIDelegate](wkuidelegate.md): The methods for presenting native user interface elements on behalf of a webpage.

### Managing navigation between webpages

- [navigationDelegate](wkwebview/navigationdelegate.md): The object you use to manage navigation behavior for the web view.
- [WKNavigationDelegate](wknavigationdelegate.md): Methods for accepting or rejecting navigation changes, and for tracking the progress of navigation requests.

### Loading web content

- [load(\_:mimeType:characterEncodingName:baseURL:)](wkwebview/load%28__mimetype_characterencodingname_baseurl_%29.md): Loads the content of the specified data object and navigates to it.
- [load(\_:)](wkwebview/load%28__%29-5siv6.md)
- [load(\_:)](wkwebview/load%28__%29-4xx8m.md)
- [loadHTMLString(\_:baseURL:)](wkwebview/loadhtmlstring%28__baseurl_%29.md): Loads the contents of the specified HTML string and navigates to it.
- [loadFileRequest(\_:allowingReadAccessTo:)](wkwebview/loadfilerequest%28__allowingreadaccessto_%29.md): Loads the web content from the file the URL request object specifies and navigates to that content.
- [loadFileURL(\_:allowingReadAccessTo:)](wkwebview/loadfileurl%28__allowingreadaccessto_%29.md): Loads the web content from the specified file and navigates to it.
- [loadSimulatedRequest(\_:response:responseData:)](wkwebview/loadsimulatedrequest%28__response_responsedata_%29.md): Loads the web content from the data you provide as if the data were the response to the request.
- [loadSimulatedRequest(\_:responseHTML:)](wkwebview/loadsimulatedrequest%28__responsehtml_%29.md): Loads the web content from the HTML you provide as if the HTML were the response to the request.
- [isLoading](wkwebview/isloading.md): A Boolean value that indicates whether the view is currently loading content.
- [estimatedProgress](wkwebview/estimatedprogress.md): An estimate of what fraction of the current navigation has been loaded.

### Managing the loading process

- [reload()](wkwebview/reload%28%29.md): Reloads the current webpage.
- [reload(\_:)](wkwebview/reload%28__%29.md): Reloads the current webpage.
- [reloadFromOrigin()](wkwebview/reloadfromorigin%28%29.md): Reloads the current webpage, and performs end-to-end revalidation of the content using cache-validating conditionals, if possible.
- [reloadFromOrigin(\_:)](wkwebview/reloadfromorigin%28__%29.md): Reloads the current webpage, and performs end-to-end revalidation of the content using cache-validating conditionals, if possible.
- [stopLoading()](wkwebview/stoploading%28%29.md): Stops loading all resources on the current page.
- [stopLoading(\_:)](wkwebview/stoploading%28__%29.md): Stops loading all resources on the current page.

### Managing downloads

- [startDownload(using:completionHandler:)](wkwebview/startdownload%28using_completionhandler_%29.md): Starts to download the resource at the URL in the request.
- [resumeDownload(fromResumeData:completionHandler:)](wkwebview/resumedownload%28fromresumedata_completionhandler_%29.md): Resumes a failed or canceled download.

### Making web content inspectable

- [isInspectable](wkwebview/isinspectable.md): A Boolean value that indicates whether you can inspect the view with Safari Web Inspector.

### Inspecting the view information

- [scrollView](wkwebview/scrollview.md): The scroll view associated with the web view.
- [title](wkwebview/title.md): The page title.
- [url](wkwebview/url.md): The URL for the current webpage.
- [mediaType](wkwebview/mediatype.md): The media type for the contents of the web view.
- [customUserAgent](wkwebview/customuseragent.md): The custom user agent string.
- [serverTrust](wkwebview/servertrust.md): The trust management object you use to evaluate trust for the current webpage.
- [hasOnlySecureContent](wkwebview/hasonlysecurecontent.md): A Boolean value that indicates whether the web view loaded all resources on the page through securely encrypted connections.
- [themeColor](wkwebview/themecolor.md): The theme color that the system gets from the first valid meta tag in the webpage.
- [underPageBackgroundColor](wkwebview/underpagebackgroundcolor.md): The color the web view displays behind the active page, visible when the user scrolls beyond the bounds of the page.
- [refreshController](wkwebview/refreshcontroller.md)

### Scaling content

- [pageZoom](wkwebview/pagezoom.md): The scale factor by which the web view scales content relative to its bounds.
- [allowsMagnification](wkwebview/allowsmagnification.md): A Boolean value that indicates whether magnify gestures change the web view’s magnification.
- [magnification](wkwebview/magnification.md): The factor by which the page content is currently scaled.
- [setMagnification(\_:centeredAt:)](wkwebview/setmagnification%28__centeredat_%29.md): Scales the page content and centers the result on the specified point.

### Interacting with media

- [pauseAllMediaPlayback(completionHandler:)](wkwebview/pauseallmediaplayback%28completionhandler_%29.md): Pauses playback of all media in the web view.
- [requestMediaPlaybackState(completionHandler:)](wkwebview/requestmediaplaybackstate%28completionhandler_%29.md): Requests the playback status of media in the web view.
- [setAllMediaPlaybackSuspended(\_:completionHandler:)](wkwebview/setallmediaplaybacksuspended%28__completionhandler_%29.md): Changes whether the webpage is suspending playback of all media in the page.
- [closeAllMediaPresentations(completionHandler:)](wkwebview/closeallmediapresentations%28completionhandler_%29.md): Closes all media the web view is presenting, including picture-in-picture video and fullscreen video.
- [WKMediaPlaybackState](wkmediaplaybackstate.md): An enumeration that describes whether an audio or video presentation is playing, paused, or suspended.

### Managing the microphone and camera

- [cameraCaptureState](wkwebview/cameracapturestate.md): An enumeration case that indicates whether the webpage is using the camera to capture images or video.
- [microphoneCaptureState](wkwebview/microphonecapturestate.md): An enumeration case that indicates whether the webpage is using the microphone to capture audio.
- [setCameraCaptureState(\_:completionHandler:)](wkwebview/setcameracapturestate%28__completionhandler_%29.md): Changes whether the webpage is using the camera to capture images or video.
- [setMicrophoneCaptureState(\_:completionHandler:)](wkwebview/setmicrophonecapturestate%28__completionhandler_%29.md): Changes whether the webpage is using the microphone to capture audio.
- [WKMediaCaptureState](wkmediacapturestate.md): An enumeration that describes whether a media device, like a camera or microphone, is currently capturing audio or video.

### Presenting immersive environments

- [immersiveEnvironmentDelegate](wkwebview/immersiveenvironmentdelegate.md)
- [dismissImmersiveEnvironment(completionHandler:)](wkwebview/dismissimmersiveenvironment%28completionhandler_%29.md)

### Searching the current page’s content

- [find(\_:configuration:completionHandler:)](wkwebview/find%28__configuration_completionhandler_%29.md): Searches for the specified string in the web view’s content.
- [find(\_:configuration:)](wkwebview/find%28__configuration_%29.md): Searches for the specified string in the web view’s content.
- [WKFindConfiguration](wkfindconfiguration.md): The configuration parameters to use when searching the contents of the web view.
- [WKFindResult](wkfindresult.md): An object that contains the results of searching the web view’s contents.

### Navigating between webpages

- [allowsBackForwardNavigationGestures](wkwebview/allowsbackforwardnavigationgestures.md): A Boolean value that indicates whether horizontal swipe gestures trigger backward and forward page navigation.
- [backForwardList](wkwebview/backforwardlist.md): The web view’s back-forward list.
- [goBack(\_:)](wkwebview/goback%28__%29.md): Navigates to the back item in the back-forward list.
- [goBack()](wkwebview/goback%28%29.md): Navigates to the back item in the back-forward list.
- [goForward(\_:)](wkwebview/goforward%28__%29.md): Navigates to the forward item in the back-forward list.
- [goForward()](wkwebview/goforward%28%29.md): Navigates to the forward item in the back-forward list.
- [go(to:)](wkwebview/go%28to_%29.md): Navigates to an item from the back-forward list and sets it as the current item.
- [canGoBack](wkwebview/cangoback.md): A Boolean value that indicates whether there is a valid back item in the back-forward list.
- [canGoForward](wkwebview/cangoforward.md): A Boolean value that indicates whether there is a valid forward item in the back-forward list.
- [allowsLinkPreview](wkwebview/allowslinkpreview.md): A Boolean value that determines whether pressing a link displays a preview of the destination for the link.
- [interactionState](wkwebview/interactionstate.md): An object you use to capture the current state of interaction in a web view so that you can restore that state later to another web view.

### Executing JavaScript

- [evaluateJavaScript(\_:completionHandler:)](wkwebview/evaluatejavascript%28__completionhandler_%29.md): Evaluates the specified JavaScript string.
- [evaluateJavaScript(\_:in:in:completionHandler:)](wkwebview/evaluatejavascript%28__in_in_completionhandler_%29.md): Evaluates a JavaScript string in the context of the specified frame and content world.
- [evaluateJavaScript(\_:in:contentWorld:)](wkwebview/evaluatejavascript%28__in_contentworld_%29.md): Evaluates a JavaScript string in the context of the specified frame and content world.
- [callAsyncJavaScript(\_:arguments:in:in:completionHandler:)](wkwebview/callasyncjavascript%28__arguments_in_in_completionhandler_%29.md): Executes the specified string as an asynchronous JavaScript function.
- [callAsyncJavaScript(\_:arguments:in:contentWorld:)](wkwebview/callasyncjavascript%28__arguments_in_contentworld_%29.md): Executes the specified string as an asynchronous JavaScript function.

### Capturing the web view’s content

- [takeSnapshot(with:completionHandler:)](wkwebview/takesnapshot%28with_completionhandler_%29.md): Generates a platform-native image from the web view’s contents asynchronously.
- [createPDF(configuration:completionHandler:)](wkwebview/createpdf%28configuration_completionhandler_%29.md): Generates PDF data from the web view’s contents asynchronously.
- [pdf(configuration:)](wkwebview/pdf%28configuration_%29.md): Generates PDF data from the web view’s contents asynchronously.
- [createWebArchiveData(completionHandler:)](wkwebview/createwebarchivedata%28completionhandler_%29.md): Creates a web archive of the web view’s current contents asynchronously.
- [printOperation(with:)](wkwebview/printoperation%28with_%29.md): Returns the print operation object to use when printing the contents of the web view.
- [WKSnapshotConfiguration](wksnapshotconfiguration.md): The configuration data to use when generating an image from a web view’s contents.
- [WKPDFConfiguration](wkpdfconfiguration.md): The configuration data to use when generating a PDF representation of a web view’s contents.

### Supporting Find and Replace

- [isFindInteractionEnabled](wkwebview/isfindinteractionenabled.md)
- [findInteraction](wkwebview/findinteraction.md)

### Handling full-screen transitions

- [fullscreenState](wkwebview/fullscreenstate-swift.property.md)
- [WKWebView.FullscreenState](wkwebview/fullscreenstate-swift.enum.md)

### Configuring viewport insets

- [setMinimumViewportInset(\_:maximumViewportInset:)](wkwebview/setminimumviewportinset%28__maximumviewportinset_%29.md)
- [minimumViewportInset](wkwebview/minimumviewportinset.md)
- [maximumViewportInset](wkwebview/maximumviewportinset.md)
- [obscuredContentInsets](wkwebview/obscuredcontentinsets.md)

### Saving and restoring data

- [fetchData(of:completionHandler:)](wkwebview/fetchdata%28of_completionhandler_%29.md)
- [restoreData(\_:completionHandler:)](wkwebview/restoredata%28__completionhandler_%29.md)
- [WKWebViewDataType](wkwebviewdatatype.md)

### Supporting Writing Tools

- [isWritingToolsActive](wkwebview/iswritingtoolsactive.md)
- [conversationContext](wkwebview/conversationcontext.md)

### Supporting Screen Time

- [isBlockedByScreenTime](wkwebview/isblockedbyscreentime.md)

### Deprecated

- [Deprecated symbols](wkwebview-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](https://developer.apple.com/documentation/uikit/uiview)

### Conforms To

- [CALayerDelegate](https://developer.apple.com/documentation/quartzcore/calayerdelegate)
- [CLBodyIdentifiable](https://developer.apple.com/documentation/corelocation/clbodyidentifiable)
- [CMBodyIdentifiable](https://developer.apple.com/documentation/coremotion/cmbodyidentifiable)
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
- [NSTextFinderClient](https://developer.apple.com/documentation/appkit/nstextfinderclient)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [NSUserInterfaceValidations](https://developer.apple.com/documentation/appkit/nsuserinterfacevalidations)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](https://developer.apple.com/documentation/uikit/uiaccessibilityidentification)
- [UIActivityItemsConfigurationProviding](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationproviding)
- [UIAppearance](https://developer.apple.com/documentation/uikit/uiappearance)
- [UIAppearanceContainer](https://developer.apple.com/documentation/uikit/uiappearancecontainer)
- [UICoordinateSpace](https://developer.apple.com/documentation/uikit/uicoordinatespace)
- [UIDynamicItem](https://developer.apple.com/documentation/uikit/uidynamicitem)
- [UIFocusEnvironment](https://developer.apple.com/documentation/uikit/uifocusenvironment)
- [UIFocusItem](https://developer.apple.com/documentation/uikit/uifocusitem)
- [UIFocusItemContainer](https://developer.apple.com/documentation/uikit/uifocusitemcontainer)
- [UILargeContentViewerItem](https://developer.apple.com/documentation/uikit/uilargecontentvieweritem)
- [UIPasteConfigurationSupporting](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting)
- [UIPopoverPresentationControllerSourceItem](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontrollersourceitem)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)
- [UITraitChangeObservable](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94)
- [UITraitEnvironment](https://developer.apple.com/documentation/uikit/uitraitenvironment)
- [UIUserActivityRestoring](https://developer.apple.com/documentation/uikit/uiuseractivityrestoring)

## See Also

### Web views

- [Replacing UIWebView in your app](replacing-uiwebview-in-your-app.md): Find a suitable alternative to handle your app’s web content.
- [Viewing Desktop or Mobile Web Content Using a Web View](viewing-desktop-or-mobile-web-content-using-a-web-view.md): Implement a simple iPad web browser that can view either the desktop or mobile version of a website.
- [WKUIDelegate](wkuidelegate.md): The methods for presenting native user interface elements on behalf of a webpage.

# WKWebView (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that displays interactive web content, such as for an in-app browser.

## Declaration

```objectivec
@interface WKWebView : UIView
```

```objectivec
@interface WKWebView : NSView
```

## Mentioned In

- [Replacing UIWebView in your app](replacing-uiwebview-in-your-app.md)

<a id="overview"></a>

## Overview

A [WKWebView](wkwebview.md) object is a platform-native view that you use to incorporate web content seamlessly into your app’s UI. A web view supports a full web-browsing experience, and presents HTML, CSS, and JavaScript content alongside your app’s native views. Use it when web technologies satisfy your app’s layout and styling requirements more readily than native views. For example, you might use it when your app’s content changes frequently.

A web view offers control over the navigation and user experience through delegate objects. Use the navigation delegate to react when the user clicks links in your web content, or interacts with the content in a way that affects navigation. For example, you might prevent the user from navigating to new content unless specific conditions are met. Use the UI delegate to present native UI elements, such as alerts or contextual menus, in response to interactions with your web content.

> **Note**

>  [WKWebView](wkwebview.md) replaces the [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview) class in iOS 8 and later, and it replaces the [WebView](webview-swift.class.md) class in macOS 10.10 and later.

Embed a [WKWebView](wkwebview.md) object programmatically into your view hierarchy, or add it using Interface Builder. Interface Builder supports many customizations, such as configuring data detectors, media playback, and interaction behaviors. For more extensive customizations, create your web view programmatically using a [WKWebViewConfiguration](wkwebviewconfiguration.md) object. For example, use a web view configuration object to specify handlers for custom URL schemes, manage cookies, and customize preferences for your web content.

Before your web view appears onscreen, load content from a web server using a [URLRequest](https://developer.apple.com/documentation/foundation/urlrequest) structure or load content directly from a local file or HTML string. The web view automatically loads embedded resources such as images or videos as part of the initial load request. It then renders your content and displays the results inside the view’s bounds rectangle. The following code example shows a view controller that replaces its default view with a custom [WKWebView](wkwebview.md) object.

```swift
import UIKit
import WebKit

class ViewController: UIViewController, WKUIDelegate {
    
    var webView: WKWebView!
    
    override func loadView() {
        let webConfiguration = WKWebViewConfiguration()
        webView = WKWebView(frame: .zero, configuration: webConfiguration)
        webView.uiDelegate = self
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let myURL = URL(string:"https://www.apple.com")
        let myRequest = URLRequest(url: myURL!)
        webView.load(myRequest)
    }
}
```

A web view automatically converts telephone numbers that appear in web content to Phone links. When the user taps a Phone link, the Phone app launches and dials the number. Use the [WKWebViewConfiguration](wkwebviewconfiguration.md) object to change the default data detector behavior.

You can also use [setMagnification:centeredAtPoint:](wkwebview/setmagnification%28__centeredat_%29.md) to programmatically set the scale of web content the first time it appears in a web view. Thereafter, the user can change the scale using gestures.

<a id="Manage-the-navigation-through-your-web-content"></a>

### Manage the navigation through your web content

[WKWebView](wkwebview.md) provides a complete browsing experience, including the ability to navigate between different webpages using links, forward and back buttons, and more. When the user clicks a link in your content, the web view acts like a browser and displays the content at that link. To disallow navigation, or to customize your web view’s navigation behavior, provide your web view with a navigation delegate — an object that conforms to the [WKNavigationDelegate](wknavigationdelegate.md) protocol. Use your navigation delegate to modify the web view’s navigation behavior, or to track the loading progress of new content.

You can also use the methods of [WKWebView](wkwebview.md) to navigate programmatically through your content, or to trigger navigation from other parts of your app’s interface. For example, if your UI includes forward and back buttons, connect those buttons to the [goBack:](wkwebview/goback%28__%29.md) and [goForward:](wkwebview/goforward%28__%29.md) methods of your web view to trigger the corresponding web navigation. Use the [canGoBack](wkwebview/cangoback.md) and [canGoForward](wkwebview/cangoforward.md) properties to determine when to enable or disable your buttons.

<a id="Provide-sharing-options"></a>

### Provide sharing options

People may want to share the contents of your web view with an app or other people. Use a [UIActivityViewController](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller) to present a share sheet offering all the ways people can share the web content.

If your app has the [com.apple.developer.web-browser](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.web-browser) entitlement, the iOS share sheet can offer Add to Home Screen for an `http` or `https` webpage, creating a convenient link to a web app or bookmark. To allow someone to add the current webpage to the Home Screen, include the [WKWebView](wkwebview.md) instance in the `activityItems` array when you call [initWithActivityItems:applicationActivities:](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller/init%28activityitems:applicationactivities:%29) to create the [UIActivityViewController](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller). For more information about building a browser app, see [Preparing your app to be the default web browser](https://developer.apple.com/documentation/xcode/preparing-your-app-to-be-the-default-browser).

## Topics

### Creating a web view

- [initWithFrame:configuration:](wkwebview/init%28frame_configuration_%29.md): Creates a web view and initializes it with the specified frame and configuration data.
- [initWithCoder:](wkwebview/init%28coder_%29.md): Returns an object initialized from data in the specified coder object.
- [configuration](wkwebview/configuration.md): The object that contains the configuration details for the web view.

### Determining whether WebKit can load content

- [handlesURLScheme:](wkwebview/handlesurlscheme%28__%29.md): Returns a Boolean value that indicates whether WebKit natively supports resources with the specified URL scheme.

### Displaying native user interface elements

- [UIDelegate](wkwebview/uidelegate.md): The object you use to integrate custom user interface elements, such as contextual menus or panels, into web view interactions.
- [WKUIDelegate](wkuidelegate.md): The methods for presenting native user interface elements on behalf of a webpage.

### Managing navigation between webpages

- [navigationDelegate](wkwebview/navigationdelegate.md): The object you use to manage navigation behavior for the web view.
- [WKNavigationDelegate](wknavigationdelegate.md): Methods for accepting or rejecting navigation changes, and for tracking the progress of navigation requests.

### Loading web content

- [loadData:MIMEType:characterEncodingName:baseURL:](wkwebview/load%28__mimetype_characterencodingname_baseurl_%29.md): Loads the content of the specified data object and navigates to it.
- [loadRequest:](wkwebview/load%28__%29-5siv6.md)
- [loadURL:](wkwebview/load%28__%29-4xx8m.md)
- [loadHTMLString:baseURL:](wkwebview/loadhtmlstring%28__baseurl_%29.md): Loads the contents of the specified HTML string and navigates to it.
- [loadFileRequest:allowingReadAccessToURL:](wkwebview/loadfilerequest%28__allowingreadaccessto_%29.md): Loads the web content from the file the URL request object specifies and navigates to that content.
- [loadFileURL:allowingReadAccessToURL:](wkwebview/loadfileurl%28__allowingreadaccessto_%29.md): Loads the web content from the specified file and navigates to it.
- [loadSimulatedRequest:response:responseData:](wkwebview/loadsimulatedrequest%28__response_responsedata_%29.md): Loads the web content from the data you provide as if the data were the response to the request.
- [loadSimulatedRequest:responseHTMLString:](wkwebview/loadsimulatedrequest%28__responsehtml_%29.md): Loads the web content from the HTML you provide as if the HTML were the response to the request.
- [loading](wkwebview/isloading.md): A Boolean value that indicates whether the view is currently loading content.
- [estimatedProgress](wkwebview/estimatedprogress.md): An estimate of what fraction of the current navigation has been loaded.

### Managing the loading process

- [reload](wkwebview/reload%28%29.md): Reloads the current webpage.
- [reload:](wkwebview/reload%28__%29.md): Reloads the current webpage.
- [reloadFromOrigin](wkwebview/reloadfromorigin%28%29.md): Reloads the current webpage, and performs end-to-end revalidation of the content using cache-validating conditionals, if possible.
- [reloadFromOrigin:](wkwebview/reloadfromorigin%28__%29.md): Reloads the current webpage, and performs end-to-end revalidation of the content using cache-validating conditionals, if possible.
- [stopLoading](wkwebview/stoploading%28%29.md): Stops loading all resources on the current page.
- [stopLoading:](wkwebview/stoploading%28__%29.md): Stops loading all resources on the current page.

### Managing downloads

- [startDownloadUsingRequest:completionHandler:](wkwebview/startdownload%28using_completionhandler_%29.md): Starts to download the resource at the URL in the request.
- [resumeDownloadFromResumeData:completionHandler:](wkwebview/resumedownload%28fromresumedata_completionhandler_%29.md): Resumes a failed or canceled download.

### Making web content inspectable

- [inspectable](wkwebview/isinspectable.md): A Boolean value that indicates whether you can inspect the view with Safari Web Inspector.

### Inspecting the view information

- [scrollView](wkwebview/scrollview.md): The scroll view associated with the web view.
- [title](wkwebview/title.md): The page title.
- [URL](wkwebview/url.md): The URL for the current webpage.
- [mediaType](wkwebview/mediatype.md): The media type for the contents of the web view.
- [customUserAgent](wkwebview/customuseragent.md): The custom user agent string.
- [serverTrust](wkwebview/servertrust.md): The trust management object you use to evaluate trust for the current webpage.
- [hasOnlySecureContent](wkwebview/hasonlysecurecontent.md): A Boolean value that indicates whether the web view loaded all resources on the page through securely encrypted connections.
- [themeColor](wkwebview/themecolor.md): The theme color that the system gets from the first valid meta tag in the webpage.
- [underPageBackgroundColor](wkwebview/underpagebackgroundcolor.md): The color the web view displays behind the active page, visible when the user scrolls beyond the bounds of the page.
- [refreshController](wkwebview/refreshcontroller.md)

### Scaling content

- [pageZoom](wkwebview/pagezoom.md): The scale factor by which the web view scales content relative to its bounds.
- [allowsMagnification](wkwebview/allowsmagnification.md): A Boolean value that indicates whether magnify gestures change the web view’s magnification.
- [magnification](wkwebview/magnification.md): The factor by which the page content is currently scaled.
- [setMagnification:centeredAtPoint:](wkwebview/setmagnification%28__centeredat_%29.md): Scales the page content and centers the result on the specified point.

### Interacting with media

- [pauseAllMediaPlaybackWithCompletionHandler:](wkwebview/pauseallmediaplayback%28completionhandler_%29.md): Pauses playback of all media in the web view.
- [pauseAllMediaPlayback:](wkwebview/pauseallmediaplayback_.md): Deprecated. Pauses playback of all media in the web view.
- [requestMediaPlaybackStateWithCompletionHandler:](wkwebview/requestmediaplaybackstate%28completionhandler_%29.md): Requests the playback status of media in the web view.
- [requestMediaPlaybackState:](wkwebview/requestmediaplaybackstate_.md): Deprecated. Requests the playback status of media in the web view.
- [setAllMediaPlaybackSuspended:completionHandler:](wkwebview/setallmediaplaybacksuspended%28__completionhandler_%29.md): Changes whether the webpage is suspending playback of all media in the page.
- [suspendAllMediaPlayback:](wkwebview/suspendallmediaplayback_.md): Deprecated. Changes whether the webpage is suspending playback of all media in the page.
- [resumeAllMediaPlayback:](wkwebview/resumeallmediaplayback_.md): Deprecated. Resumes playback of all media in a web view.
- [closeAllMediaPresentationsWithCompletionHandler:](wkwebview/closeallmediapresentations%28completionhandler_%29.md): Closes all media the web view is presenting, including picture-in-picture video and fullscreen video.
- [WKMediaPlaybackState](wkmediaplaybackstate.md): An enumeration that describes whether an audio or video presentation is playing, paused, or suspended.

### Managing the microphone and camera

- [cameraCaptureState](wkwebview/cameracapturestate.md): An enumeration case that indicates whether the webpage is using the camera to capture images or video.
- [microphoneCaptureState](wkwebview/microphonecapturestate.md): An enumeration case that indicates whether the webpage is using the microphone to capture audio.
- [setCameraCaptureState:completionHandler:](wkwebview/setcameracapturestate%28__completionhandler_%29.md): Changes whether the webpage is using the camera to capture images or video.
- [setMicrophoneCaptureState:completionHandler:](wkwebview/setmicrophonecapturestate%28__completionhandler_%29.md): Changes whether the webpage is using the microphone to capture audio.
- [WKMediaCaptureState](wkmediacapturestate.md): An enumeration that describes whether a media device, like a camera or microphone, is currently capturing audio or video.

### Presenting immersive environments

- [immersiveEnvironmentDelegate](wkwebview/immersiveenvironmentdelegate.md)
- [dismissImmersiveEnvironmentWithCompletionHandler:](wkwebview/dismissimmersiveenvironment%28completionhandler_%29.md)

### Searching the current page’s content

- [findString:withConfiguration:completionHandler:](wkwebview/findstring_withconfiguration_completionhandler_.md): Searches for the specified string in the web view’s content.
- [WKFindConfiguration](wkfindconfiguration.md): The configuration parameters to use when searching the contents of the web view.
- [WKFindResult](wkfindresult.md): An object that contains the results of searching the web view’s contents.

### Navigating between webpages

- [allowsBackForwardNavigationGestures](wkwebview/allowsbackforwardnavigationgestures.md): A Boolean value that indicates whether horizontal swipe gestures trigger backward and forward page navigation.
- [backForwardList](wkwebview/backforwardlist.md): The web view’s back-forward list.
- [goBack:](wkwebview/goback%28__%29.md): Navigates to the back item in the back-forward list.
- [goBack](wkwebview/goback%28%29.md): Navigates to the back item in the back-forward list.
- [goForward:](wkwebview/goforward%28__%29.md): Navigates to the forward item in the back-forward list.
- [goForward](wkwebview/goforward%28%29.md): Navigates to the forward item in the back-forward list.
- [goToBackForwardListItem:](wkwebview/go%28to_%29.md): Navigates to an item from the back-forward list and sets it as the current item.
- [canGoBack](wkwebview/cangoback.md): A Boolean value that indicates whether there is a valid back item in the back-forward list.
- [canGoForward](wkwebview/cangoforward.md): A Boolean value that indicates whether there is a valid forward item in the back-forward list.
- [allowsLinkPreview](wkwebview/allowslinkpreview.md): A Boolean value that determines whether pressing a link displays a preview of the destination for the link.
- [interactionState](wkwebview/interactionstate.md): An object you use to capture the current state of interaction in a web view so that you can restore that state later to another web view.

### Executing JavaScript

- [evaluateJavaScript:completionHandler:](wkwebview/evaluatejavascript%28__completionhandler_%29.md): Evaluates the specified JavaScript string.
- [evaluateJavaScript:inFrame:inContentWorld:completionHandler:](wkwebview/evaluatejavascript_inframe_incontentworld_completionhandler_.md): Evaluates the specified JavaScript string in the specified frame and content world.
- [callAsyncJavaScript:arguments:inFrame:inContentWorld:completionHandler:](wkwebview/callasyncjavascript_arguments_inframe_incontentworld_completionhandler_.md): Executes the specified string as an asynchronous JavaScript function.

### Capturing the web view’s content

- [takeSnapshotWithConfiguration:completionHandler:](wkwebview/takesnapshot%28with_completionhandler_%29.md): Generates a platform-native image from the web view’s contents asynchronously.
- [createPDFWithConfiguration:completionHandler:](wkwebview/createpdfwithconfiguration_completionhandler_.md): Generates PDF data from the web view’s contents asynchronously.
- [createWebArchiveDataWithCompletionHandler:](wkwebview/createwebarchivedatawithcompletionhandler_.md): Creates a web archive of the web view’s contents asynchronously.
- [printOperationWithPrintInfo:](wkwebview/printoperation%28with_%29.md): Returns the print operation object to use when printing the contents of the web view.
- [WKSnapshotConfiguration](wksnapshotconfiguration.md): The configuration data to use when generating an image from a web view’s contents.
- [WKPDFConfiguration](wkpdfconfiguration.md): The configuration data to use when generating a PDF representation of a web view’s contents.

### Supporting Find and Replace

- [findInteractionEnabled](wkwebview/isfindinteractionenabled.md)
- [findInteraction](wkwebview/findinteraction.md)

### Handling full-screen transitions

- [fullscreenState](wkwebview/fullscreenstate-swift.property.md)
- [WKFullscreenState](wkwebview/fullscreenstate-swift.enum.md)

### Configuring viewport insets

- [setMinimumViewportInset:maximumViewportInset:](wkwebview/setminimumviewportinset%28__maximumviewportinset_%29.md)
- [minimumViewportInset](wkwebview/minimumviewportinset.md)
- [maximumViewportInset](wkwebview/maximumviewportinset.md)
- [obscuredContentInsets](wkwebview/obscuredcontentinsets.md)

### Saving and restoring data

- [fetchDataOfTypes:completionHandler:](wkwebview/fetchdata%28of_completionhandler_%29.md)
- [restoreData:completionHandler:](wkwebview/restoredata%28__completionhandler_%29.md)
- [WKWebViewDataType](wkwebviewdatatype.md)

### Supporting Writing Tools

- [writingToolsActive](wkwebview/iswritingtoolsactive.md)
- [conversationContext](wkwebview/conversationcontext.md)

### Supporting Screen Time

- [isBlockedByScreenTime](wkwebview/isblockedbyscreentime.md)

### Deprecated

- [Deprecated symbols](wkwebview-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](https://developer.apple.com/documentation/uikit/uiview)

### Conforms To

- [NSTextFinderClient](https://developer.apple.com/documentation/appkit/nstextfinderclient)
- [NSUserInterfaceValidations](https://developer.apple.com/documentation/appkit/nsuserinterfacevalidations)

## See Also

### Web views

- [Replacing UIWebView in your app](replacing-uiwebview-in-your-app.md): Find a suitable alternative to handle your app’s web content.
- [WKUIDelegate](wkuidelegate.md): The methods for presenting native user interface elements on behalf of a webpage.
