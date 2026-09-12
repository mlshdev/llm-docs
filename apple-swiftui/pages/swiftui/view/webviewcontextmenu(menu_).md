> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/webviewcontextmenu(menu:)](https://developer.apple.com/documentation/swiftui/view/webviewcontextmenu(menu:))

# webViewContextMenu(menu:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Adds an item-based context menu to a WebView, replacing the default set of context menu items.

## Declaration

```swift
nonisolated func webViewContextMenu(@ViewBuilder menu: @escaping @MainActor @Sendable (WebView.ActivatedElementInfo) -> some View) -> some View

```

## Parameters

- `menu`: A closure that produces the menu. The single parameter to the closure describes the type of webpage element that was acted upon.

<a id="return-value"></a>

## Return Value

A view that can display an item-based context menu.

## See Also

### Displaying web content

- [WebView](https://developer.apple.com/documentation/webkit/webview-swift.struct): A view that displays some web content.
- [WebPage](https://developer.apple.com/documentation/webkit/webpage): An object that controls and manages the behavior of interactive web content.
- [onWebViewImmersiveEnvironmentRequest(shouldAllow:present:dismiss:)](onwebviewimmersiveenvironmentrequest%28shouldallow_present_dismiss_%29.md): Manages the lifecycle of immersive environments requested by websites.
- [webViewBackForwardNavigationGestures(\_:)](webviewbackforwardnavigationgestures%28__%29.md): Determines whether horizontal swipe gestures trigger backward and forward page navigation.
- [webViewContentBackground(\_:)](webviewcontentbackground%28__%29.md): Specifies the visibility of the webpage’s natural background color within this view.
- [webViewElementFullscreenBehavior(\_:)](webviewelementfullscreenbehavior%28__%29.md): Determines whether a web view can display content full screen.
- [webViewLinkPreviews(\_:)](webviewlinkpreviews%28__%29.md): Determines whether pressing a link displays a preview of the destination for the link.
- [webViewMagnificationGestures(\_:)](webviewmagnificationgestures%28__%29.md): Determines whether magnify gestures change the view’s magnification.
- [webViewOnScrollGeometryChange(for:of:action:)](webviewonscrollgeometrychange%28for_of_action_%29.md): Adds an action to be performed when a value, created from a scroll geometry, changes.
- [webViewScrollInputBehavior(\_:for:)](webviewscrollinputbehavior%28__for_%29.md): Enables or disables scrolling in web views when using particular inputs.
- [webViewScrollPosition(\_:)](webviewscrollposition%28__%29.md): Associates a binding to a scroll position with the web view.
- [webViewTextSelection(\_:)](webviewtextselection%28__%29.md): Determines whether to allow people to select or otherwise interact with text.
