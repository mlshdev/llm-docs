> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/webviewonscrollgeometrychange(for:of:action:)](https://developer.apple.com/documentation/swiftui/view/webviewonscrollgeometrychange(for:of:action:))

# webViewOnScrollGeometryChange(for:of:action:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Adds an action to be performed when a value, created from a scroll geometry, changes.

## Declaration

```swift
nonisolated func webViewOnScrollGeometryChange<T>(for type: T.Type, of transform: @escaping (ScrollGeometry) -> T, action: @escaping (T, T) -> Void) -> some View where T : Hashable

```

## Parameters

- `type`: The type of value transformed from a [ScrollGeometry](../scrollgeometry.md).
- `transform`: A closure that transforms a [ScrollGeometry](../scrollgeometry.md) to your type.
- `action`: A closure to run when the transformed data changes.

<a id="return-value"></a>

## Return Value

A view that invokes the action when the relevant part of a web view’s scroll geometry changes.

<a id="discussion"></a>

## Discussion

> **Note**

> The content size of web content may exceed the current size of the view’s frame, however it will never be smaller than it.

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
- [webViewScrollInputBehavior(\_:for:)](webviewscrollinputbehavior%28__for_%29.md): Enables or disables scrolling in web views when using particular inputs.
- [webViewScrollPosition(\_:)](webviewscrollposition%28__%29.md): Associates a binding to a scroll position with the web view.
- [webViewTextSelection(\_:)](webviewtextselection%28__%29.md): Determines whether to allow people to select or otherwise interact with text.
