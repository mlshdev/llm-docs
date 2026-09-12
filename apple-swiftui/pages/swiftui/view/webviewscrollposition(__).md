> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/webviewscrollposition(_:)](https://developer.apple.com/documentation/swiftui/view/webviewscrollposition(_:))

# webViewScrollPosition(\_:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Associates a binding to a scroll position with the web view.

## Declaration

```swift
nonisolated func webViewScrollPosition(_ position: Binding<ScrollPosition>) -> some View

```

<a id="discussion"></a>

## Discussion

> **Note**

> `WebView` does not support scrolling to a view with an identity. It only supports scrolling to a concrete offset, or to an edge.

## See Also

### Displaying web content

- [WebView](https://developer.apple.com/documentation/webkit/webview-swift.struct): A view that displays some web content.
- [WebPage](https://developer.apple.com/documentation/webkit/webpage): An object that controls and manages the behavior of interactive web content.
- [onWebViewImmersiveEnvironmentRequest(shouldAllow:present:dismiss:)](onwebviewimmersiveenvironmentrequest%28shouldallow_present_dismiss_%29.md): Manages the lifecycle of immersive environments requested by websites.
- [webViewBackForwardNavigationGestures(\_:)](webviewbackforwardnavigationgestures%28__%29.md): Determines whether horizontal swipe gestures trigger backward and forward page navigation.
- [webViewContentBackground(\_:)](webviewcontentbackground%28__%29.md): Specifies the visibility of the webpage’s natural background color within this view.
- [webViewContextMenu(menu:)](webviewcontextmenu%28menu_%29.md): Adds an item-based context menu to a WebView, replacing the default set of context menu items.
- [webViewElementFullscreenBehavior(\_:)](webviewelementfullscreenbehavior%28__%29.md): Determines whether a web view can display content full screen.
- [webViewLinkPreviews(\_:)](webviewlinkpreviews%28__%29.md): Determines whether pressing a link displays a preview of the destination for the link.
- [webViewMagnificationGestures(\_:)](webviewmagnificationgestures%28__%29.md): Determines whether magnify gestures change the view’s magnification.
- [webViewOnScrollGeometryChange(for:of:action:)](webviewonscrollgeometrychange%28for_of_action_%29.md): Adds an action to be performed when a value, created from a scroll geometry, changes.
- [webViewScrollInputBehavior(\_:for:)](webviewscrollinputbehavior%28__for_%29.md): Enables or disables scrolling in web views when using particular inputs.
- [webViewTextSelection(\_:)](webviewtextselection%28__%29.md): Determines whether to allow people to select or otherwise interact with text.
