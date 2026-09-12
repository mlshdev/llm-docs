> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview](https://developer.apple.com/documentation/uikit/uiwebview)

# UIWebView (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0)

A view that embeds web content in your app.

> Use [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) instead.

## Declaration

```swift
@MainActor class UIWebView
```

<a id="overview"></a>

## Overview

> **Note**

>  In apps that run in iOS 8 and later, use the [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) class instead of using [UIWebView](uiwebview.md). Additionally, consider setting the [WKPreferences](https://developer.apple.com/documentation/webkit/wkpreferences) property [javaScriptEnabled](https://developer.apple.com/documentation/webkit/wkpreferences/javascriptenabled) to [false](https://developer.apple.com/documentation/swift/false) if you render files that aren’t supposed to run JavaScript.

> **Important**

>  An iOS app linked on or after iOS 10.0 must include in its `Info.plist` file the usage description keys for the types of data it needs to access or it will crash. To access a user’s photo data specifically, it must include [NSPhotoLibraryUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW17) and [NSCameraUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW24).

Use the [loadHTMLString(\_:baseURL:)](uiwebview/loadhtmlstring%28__baseurl_%29.md) method to begin loading local HTML files or the [loadRequest(\_:)](uiwebview/loadrequest%28__%29.md) method to begin loading web content. Use the [stopLoading()](uiwebview/stoploading%28%29.md) method to stop loading, and the [isLoading](uiwebview/isloading.md) property to find out if a web view is in the process of loading.

If you allow the user to move back and forward through the webpage history, then you can use the [goBack()](uiwebview/goback%28%29.md) and [goForward()](uiwebview/goforward%28%29.md) methods as actions for buttons. Use the [canGoBack](uiwebview/cangoback.md) and [canGoForward](uiwebview/cangoforward.md) properties to disable the buttons when the user can’t move in a direction.

By default, a web view automatically converts telephone numbers that appear in web content to Phone links. When a Phone link is tapped, the Phone app launches and dials the number. To turn off this default behavior, set the [dataDetectorTypes](uiwebview/datadetectortypes.md) property with a [UIDataDetectorTypes](uidatadetectortypes.md) bitfield that doesn’t contain the [phoneNumber](uidatadetectortypes/phonenumber.md) flag.

You can also use the [scalesPageToFit](uiwebview/scalespagetofit.md) property to programmatically set the scale of web content the first time it’s displayed in a web view. Thereafter, the user can change the scale using gestures.

Set the [delegate](uiwebview/delegate.md) property to an object conforming to the [UIWebViewDelegate](uiwebviewdelegate.md) protocol if you want to track the loading of web content.

> **Important**

>  You shouldn’t embed [UIWebView](uiwebview.md) or [UITableView](uitableview.md) objects in [UIScrollView](uiscrollview.md) objects. If you do so, unexpected behavior can result because touch events for the two objects can be mixed up and wrongly handled.

You can debug the HTML, CSS, and JavaScript contained inside a [UIWebView](uiwebview.md) with Web Inspector. Read Debugging Web Content on iOS to learn how to configure Web Inspector for iOS. Read the rest of [Safari Web Content Guide](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/Introduction/Introduction.html#//apple_ref/doc/uid/TP40002051) to learn how to create web content that’s optimized for Safari on iPhone and iPad.

For information about basic view behaviors, see [View Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/WindowsViews/Conceptual/ViewPG_iPhoneOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009503).

<a id="Supported-file-formats"></a>

### Supported file formats

In addition to HTML content, [UIWebView](uiwebview.md) objects can be used to display other content types, such as Keynote, PDF, and Pages documents. For the best rendering of plain and rich text in your app, however, you should use [UITextView](uitextview.md) instead.

<a id="State-preservation"></a>

### State preservation

In iOS 6 and later, if you assign a value to this view’s [restorationIdentifier](uiviewcontroller/restorationidentifier.md) property, it attempts to preserve its URL history, the scaling and scrolling positions for each page, and information about which page is currently being viewed. During restoration, the view restores these values so that the web content appears just as it did before. For more information about how state preservation and restoration works, see [App Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007072).

<a id="Subclassing-notes"></a>

### Subclassing notes

The [UIWebView](uiwebview.md) class shouldn’t be subclassed.

## Topics

### Essentials

- [Replacing UIWebView in your app](https://developer.apple.com/documentation/webkit/replacing-uiwebview-in-your-app): Find a suitable alternative to handle your app’s web content.

### Responding to web view changes

- [delegate](uiwebview/delegate.md): Deprecated. The receiver’s delegate.
- [UIWebViewDelegate](uiwebviewdelegate.md): The `UIWebViewDelegate` protocol defines methods that a delegate of a [UIWebView](uiwebview.md) object can optionally implement to intervene when web content is loaded.

### Loading content

- [load(\_:mimeType:textEncodingName:baseURL:)](uiwebview/load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadHTMLString(\_:baseURL:)](uiwebview/loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page content and base URL.
- [loadRequest(\_:)](uiwebview/loadrequest%28__%29.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [request](uiwebview/request.md): Deprecated. The URL request identifying the location of the content to load.
- [isLoading](uiwebview/isloading.md): Deprecated. A Boolean value indicating whether the receiver is done loading content.
- [stopLoading()](uiwebview/stoploading%28%29.md): Deprecated. Stops the loading of any web content managed by the receiver.
- [reload()](uiwebview/reload%28%29.md): Deprecated. Reloads the current page.

### Moving back and forward

- [canGoBack](uiwebview/cangoback.md): Deprecated. A Boolean value indicating whether the receiver can move backward.
- [canGoForward](uiwebview/cangoforward.md): Deprecated. A Boolean value indicating whether the receiver can move forward.
- [goBack()](uiwebview/goback%28%29.md): Deprecated. Loads the previous location in the back-forward list.
- [goForward()](uiwebview/goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.

### Setting web content properties

- [allowsLinkPreview](uiwebview/allowslinkpreview.md): Deprecated. A Boolean value that determines whether pressing on a link displays a preview of the destination for the link.
- [scalesPageToFit](uiwebview/scalespagetofit.md): Deprecated. A Boolean value determining whether the webpage scales to fit the view and the user can change the scale.
- [scrollView](uiwebview/scrollview.md): Deprecated. The scroll view associated with the web view.
- [suppressesIncrementalRendering](uiwebview/suppressesincrementalrendering.md): Deprecated. A Boolean value indicating whether the web view suppresses content rendering until it is fully loaded into memory.
- [keyboardDisplayRequiresUserAction](uiwebview/keyboarddisplayrequiresuseraction.md): Deprecated. A Boolean value indicating whether web content can programmatically display the keyboard.
- [dataDetectorTypes](uiwebview/datadetectortypes.md): Deprecated. The types of data converted to clickable URLs in the web view’s content.

### Running JavaScript

- [stringByEvaluatingJavaScript(from:)](uiwebview/stringbyevaluatingjavascript%28from_%29.md): Deprecated. Returns the result of running a JavaScript script.

### Managing media playback

- [allowsInlineMediaPlayback](uiwebview/allowsinlinemediaplayback.md): Deprecated. A Boolean value that determines whether HTML5 videos play inline or use the native full-screen controller.
- [mediaPlaybackRequiresUserAction](uiwebview/mediaplaybackrequiresuseraction.md): Deprecated. A Boolean value that determines whether HTML5 videos can play automatically or require the user to start playing them.
- [mediaPlaybackAllowsAirPlay](uiwebview/mediaplaybackallowsairplay.md): Deprecated. A Boolean value that determines whether Air Play is allowed from this view.
- [allowsPictureInPictureMediaPlayback](uiwebview/allowspictureinpicturemediaplayback.md): Deprecated. A Boolean value that determines whether Picture in Picture playback is allowed from this view.

### Managing pages

- [gapBetweenPages](uiwebview/gapbetweenpages.md): Deprecated. The size of the gap, in points, between pages.
- [pageCount](uiwebview/pagecount.md): Deprecated. The number of pages produced by the layout of the web view.
- [pageLength](uiwebview/pagelength.md): Deprecated. The size of each page, in points, in the direction that the pages flow.
- [paginationBreakingMode](uiwebview/paginationbreakingmode-swift.property.md): Deprecated. The manner in which column- or page-breaking occurs.
- [paginationMode](uiwebview/paginationmode-swift.property.md): Deprecated. The layout of content in the web view.

### Constants

- [UIWebView.NavigationType](uiwebview/navigationtype.md): Constant indicating the user’s action.
- [UIWebView.PaginationBreakingMode](uiwebview/paginationbreakingmode-swift.enum.md): The manner in which column- or page-breaking occurs.
- [UIWebView.PaginationMode](uiwebview/paginationmode-swift.enum.md): The layout of content in the web view, which determines the direction that the pages flow.
- [UIDataDetectorTypes](uidatadetectortypes.md): Constants that define the types of information to detect in text-based content.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearance](uiappearance.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UICoordinateSpace](uicoordinatespace.md)
- [UIDynamicItem](uidynamicitem.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIFocusItem](uifocusitem.md)
- [UIFocusItemContainer](uifocusitemcontainer.md)
- [UILargeContentViewerItem](uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UIScrollViewDelegate](uiscrollviewdelegate.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Deprecated classes

- [UIActionSheet](uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.
- [UIAlertView](uialertview.md): Deprecated. A view that displays an alert message.
- [UIDocumentMenuViewController](uidocumentmenuviewcontroller.md): Deprecated. A list of all the available document providers for a given file type and mode, in addition to custom menu items that you add.
- [UILocalNotification](uilocalnotification.md): Deprecated. A notification that an app can schedule for presentation at a specific date and time.
- [UIMenuController](uimenucontroller.md): Deprecated. The menu interface for the Cut, Copy, Paste, Select, Select All, and Delete commands.
- [UIMenuItem](uimenuitem.md): Deprecated. A custom item in the editing menu managed by the menu controller.
- [UIMutableUserNotificationAction](uimutableusernotificationaction.md): Deprecated. A modifiable version of the user notification action class.
- [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.
- [UIPopoverController](uipopovercontroller.md): Deprecated. An object that manages the presentation of content in a popover.
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UISearchDisplayController](uisearchdisplaycontroller.md): Deprecated. An object that manages the display of a search bar, along with a table view that displays search results.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
- [UIUserNotificationAction](uiusernotificationaction.md): Deprecated. A custom action that your app can perform in response to a remote or local notification.
- [UIUserNotificationCategory](uiusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.

# UIWebView (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0)

A view that embeds web content in your app.

> Use [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) instead.

## Declaration

```objectivec
@interface UIWebView : UIView
```

<a id="overview"></a>

## Overview

> **Note**

>  In apps that run in iOS 8 and later, use the [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) class instead of using [UIWebView](uiwebview.md). Additionally, consider setting the [WKPreferences](https://developer.apple.com/documentation/webkit/wkpreferences) property [javaScriptEnabled](https://developer.apple.com/documentation/webkit/wkpreferences/javascriptenabled) to [false](https://developer.apple.com/documentation/swift/false) if you render files that aren’t supposed to run JavaScript.

> **Important**

>  An iOS app linked on or after iOS 10.0 must include in its `Info.plist` file the usage description keys for the types of data it needs to access or it will crash. To access a user’s photo data specifically, it must include [NSPhotoLibraryUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW17) and [NSCameraUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW24).

Use the [loadHTMLString:baseURL:](uiwebview/loadhtmlstring%28__baseurl_%29.md) method to begin loading local HTML files or the [loadRequest:](uiwebview/loadrequest%28__%29.md) method to begin loading web content. Use the [stopLoading](uiwebview/stoploading%28%29.md) method to stop loading, and the [loading](uiwebview/isloading.md) property to find out if a web view is in the process of loading.

If you allow the user to move back and forward through the webpage history, then you can use the [goBack](uiwebview/goback%28%29.md) and [goForward](uiwebview/goforward%28%29.md) methods as actions for buttons. Use the [canGoBack](uiwebview/cangoback.md) and [canGoForward](uiwebview/cangoforward.md) properties to disable the buttons when the user can’t move in a direction.

By default, a web view automatically converts telephone numbers that appear in web content to Phone links. When a Phone link is tapped, the Phone app launches and dials the number. To turn off this default behavior, set the [dataDetectorTypes](uiwebview/datadetectortypes.md) property with a [UIDataDetectorTypes](uidatadetectortypes.md) bitfield that doesn’t contain the [UIDataDetectorTypePhoneNumber](uidatadetectortypes/phonenumber.md) flag.

You can also use the [scalesPageToFit](uiwebview/scalespagetofit.md) property to programmatically set the scale of web content the first time it’s displayed in a web view. Thereafter, the user can change the scale using gestures.

Set the [delegate](uiwebview/delegate.md) property to an object conforming to the [UIWebViewDelegate](uiwebviewdelegate.md) protocol if you want to track the loading of web content.

> **Important**

>  You shouldn’t embed [UIWebView](uiwebview.md) or [UITableView](uitableview.md) objects in [UIScrollView](uiscrollview.md) objects. If you do so, unexpected behavior can result because touch events for the two objects can be mixed up and wrongly handled.

You can debug the HTML, CSS, and JavaScript contained inside a [UIWebView](uiwebview.md) with Web Inspector. Read Debugging Web Content on iOS to learn how to configure Web Inspector for iOS. Read the rest of [Safari Web Content Guide](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/Introduction/Introduction.html#//apple_ref/doc/uid/TP40002051) to learn how to create web content that’s optimized for Safari on iPhone and iPad.

For information about basic view behaviors, see [View Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/WindowsViews/Conceptual/ViewPG_iPhoneOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009503).

<a id="Supported-file-formats"></a>

### Supported file formats

In addition to HTML content, [UIWebView](uiwebview.md) objects can be used to display other content types, such as Keynote, PDF, and Pages documents. For the best rendering of plain and rich text in your app, however, you should use [UITextView](uitextview.md) instead.

<a id="State-preservation"></a>

### State preservation

In iOS 6 and later, if you assign a value to this view’s [restorationIdentifier](uiviewcontroller/restorationidentifier.md) property, it attempts to preserve its URL history, the scaling and scrolling positions for each page, and information about which page is currently being viewed. During restoration, the view restores these values so that the web content appears just as it did before. For more information about how state preservation and restoration works, see [App Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007072).

<a id="Subclassing-notes"></a>

### Subclassing notes

The [UIWebView](uiwebview.md) class shouldn’t be subclassed.

## Topics

### Essentials

- [Replacing UIWebView in your app](https://developer.apple.com/documentation/webkit/replacing-uiwebview-in-your-app): Find a suitable alternative to handle your app’s web content.

### Responding to web view changes

- [delegate](uiwebview/delegate.md): Deprecated. The receiver’s delegate.
- [UIWebViewDelegate](uiwebviewdelegate.md): The `UIWebViewDelegate` protocol defines methods that a delegate of a [UIWebView](uiwebview.md) object can optionally implement to intervene when web content is loaded.

### Loading content

- [loadData:MIMEType:textEncodingName:baseURL:](uiwebview/load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadHTMLString:baseURL:](uiwebview/loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page content and base URL.
- [loadRequest:](uiwebview/loadrequest%28__%29.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [request](uiwebview/request.md): Deprecated. The URL request identifying the location of the content to load.
- [loading](uiwebview/isloading.md): Deprecated. A Boolean value indicating whether the receiver is done loading content.
- [stopLoading](uiwebview/stoploading%28%29.md): Deprecated. Stops the loading of any web content managed by the receiver.
- [reload](uiwebview/reload%28%29.md): Deprecated. Reloads the current page.

### Moving back and forward

- [canGoBack](uiwebview/cangoback.md): Deprecated. A Boolean value indicating whether the receiver can move backward.
- [canGoForward](uiwebview/cangoforward.md): Deprecated. A Boolean value indicating whether the receiver can move forward.
- [goBack](uiwebview/goback%28%29.md): Deprecated. Loads the previous location in the back-forward list.
- [goForward](uiwebview/goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.

### Setting web content properties

- [allowsLinkPreview](uiwebview/allowslinkpreview.md): Deprecated. A Boolean value that determines whether pressing on a link displays a preview of the destination for the link.
- [scalesPageToFit](uiwebview/scalespagetofit.md): Deprecated. A Boolean value determining whether the webpage scales to fit the view and the user can change the scale.
- [scrollView](uiwebview/scrollview.md): Deprecated. The scroll view associated with the web view.
- [suppressesIncrementalRendering](uiwebview/suppressesincrementalrendering.md): Deprecated. A Boolean value indicating whether the web view suppresses content rendering until it is fully loaded into memory.
- [keyboardDisplayRequiresUserAction](uiwebview/keyboarddisplayrequiresuseraction.md): Deprecated. A Boolean value indicating whether web content can programmatically display the keyboard.
- [dataDetectorTypes](uiwebview/datadetectortypes.md): Deprecated. The types of data converted to clickable URLs in the web view’s content.

### Running JavaScript

- [stringByEvaluatingJavaScriptFromString:](uiwebview/stringbyevaluatingjavascript%28from_%29.md): Deprecated. Returns the result of running a JavaScript script.

### Managing media playback

- [allowsInlineMediaPlayback](uiwebview/allowsinlinemediaplayback.md): Deprecated. A Boolean value that determines whether HTML5 videos play inline or use the native full-screen controller.
- [mediaPlaybackRequiresUserAction](uiwebview/mediaplaybackrequiresuseraction.md): Deprecated. A Boolean value that determines whether HTML5 videos can play automatically or require the user to start playing them.
- [mediaPlaybackAllowsAirPlay](uiwebview/mediaplaybackallowsairplay.md): Deprecated. A Boolean value that determines whether Air Play is allowed from this view.
- [allowsPictureInPictureMediaPlayback](uiwebview/allowspictureinpicturemediaplayback.md): Deprecated. A Boolean value that determines whether Picture in Picture playback is allowed from this view.

### Managing pages

- [gapBetweenPages](uiwebview/gapbetweenpages.md): Deprecated. The size of the gap, in points, between pages.
- [pageCount](uiwebview/pagecount.md): Deprecated. The number of pages produced by the layout of the web view.
- [pageLength](uiwebview/pagelength.md): Deprecated. The size of each page, in points, in the direction that the pages flow.
- [paginationBreakingMode](uiwebview/paginationbreakingmode-swift.property.md): Deprecated. The manner in which column- or page-breaking occurs.
- [paginationMode](uiwebview/paginationmode-swift.property.md): Deprecated. The layout of content in the web view.

### Constants

- [UIWebViewNavigationType](uiwebview/navigationtype.md): Constant indicating the user’s action.
- [UIWebPaginationBreakingMode](uiwebview/paginationbreakingmode-swift.enum.md): The manner in which column- or page-breaking occurs.
- [UIWebPaginationMode](uiwebview/paginationmode-swift.enum.md): The layout of content in the web view, which determines the direction that the pages flow.
- [UIDataDetectorTypes](uidatadetectortypes.md): Constants that define the types of information to detect in text-based content.

### Deprecated

- [detectsPhoneNumbers](uiwebview/detectsphonenumbers.md): Deprecated. A Boolean value indicating whether telephone number detection is on.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [UIScrollViewDelegate](uiscrollviewdelegate.md)

## See Also

### Deprecated classes

- [UIAcceleration](uiacceleration.md): Deprecated. An acceleration event that represents immediate, three-dimensional acceleration data.
- [UIAccelerometer](uiaccelerometer.md): Deprecated. An object that lets you register to receive acceleration-related data from the onboard hardware.
- [UIActionSheet](uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.
- [UIAlertView](uialertview.md): Deprecated. A view that displays an alert message.
- [UIDocumentMenuViewController](uidocumentmenuviewcontroller.md): Deprecated. A list of all the available document providers for a given file type and mode, in addition to custom menu items that you add.
- [UILocalNotification](uilocalnotification.md): Deprecated. A notification that an app can schedule for presentation at a specific date and time.
- [UIMenuController](uimenucontroller.md): Deprecated. The menu interface for the Cut, Copy, Paste, Select, Select All, and Delete commands.
- [UIMenuItem](uimenuitem.md): Deprecated. A custom item in the editing menu managed by the menu controller.
- [UIMutableUserNotificationAction](uimutableusernotificationaction.md): Deprecated. A modifiable version of the user notification action class.
- [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.
- [UIPopoverController](uipopovercontroller.md): Deprecated. An object that manages the presentation of content in a popover.
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UISearchDisplayController](uisearchdisplaycontroller.md): Deprecated. An object that manages the display of a search bar, along with a table view that displays search results.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
