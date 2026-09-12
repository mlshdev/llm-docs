> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onwebviewimmersiveenvironmentrequest(shouldallow:present:dismiss:)](https://developer.apple.com/documentation/swiftui/view/onwebviewimmersiveenvironmentrequest(shouldallow:present:dismiss:))

# onWebViewImmersiveEnvironmentRequest(shouldAllow:present:dismiss:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Manages the lifecycle of immersive environments requested by websites.

## Declaration

```swift
nonisolated func onWebViewImmersiveEnvironmentRequest(shouldAllow: @escaping @MainActor @Sendable (WebPage.FrameInfo) async -> Bool, present: @escaping @MainActor @Sendable (WebPage.ImmersiveEnvironment) async throws -> Void, dismiss: @escaping @MainActor @Sendable (WebPage.ImmersiveEnvironment) async -> Void) -> some View

```

## Parameters

- `shouldAllow`: An async closure called when a website requests an immersive environment. This can be used to request user consent or apply custom authorization logic. It receives the source `WebPage.FrameInfo` and should return `true` to allow the environment presentation, or `false` to deny it.
- `present`: An async throwing closure called after the environment has loaded and is ready for presentation. It receives the `WebPage.ImmersiveEnvironment`. Use this to open an Immersive Space containing a `WebViewImmersiveEnvironmentView` initialized with this environment. If another immersive space is already being presented, dismiss it first. This closure should return after the presentation transition completes.
- `dismiss`: An async closure called when the website or the application asks to dismiss the immersive environment. It receives the `WebPage.ImmersiveEnvironment` to dismiss. This closure should return after the dismissal transition completes.

<a id="return-value"></a>

## Return Value

A modified view that manages immersive environment lifecycle.

<a id="discussion"></a>

## Discussion

Use this modifier to control authorization, presentation, and dismissal of immersive environments from websites.

## See Also

### Displaying web content

- [WebView](https://developer.apple.com/documentation/webkit/webview-swift.struct): A view that displays some web content.
- [WebPage](https://developer.apple.com/documentation/webkit/webpage): An object that controls and manages the behavior of interactive web content.
- [webViewBackForwardNavigationGestures(\_:)](webviewbackforwardnavigationgestures%28__%29.md): Determines whether horizontal swipe gestures trigger backward and forward page navigation.
- [webViewContentBackground(\_:)](webviewcontentbackground%28__%29.md): Specifies the visibility of the webpage’s natural background color within this view.
- [webViewContextMenu(menu:)](webviewcontextmenu%28menu_%29.md): Adds an item-based context menu to a WebView, replacing the default set of context menu items.
- [webViewElementFullscreenBehavior(\_:)](webviewelementfullscreenbehavior%28__%29.md): Determines whether a web view can display content full screen.
- [webViewLinkPreviews(\_:)](webviewlinkpreviews%28__%29.md): Determines whether pressing a link displays a preview of the destination for the link.
- [webViewMagnificationGestures(\_:)](webviewmagnificationgestures%28__%29.md): Determines whether magnify gestures change the view’s magnification.
- [webViewOnScrollGeometryChange(for:of:action:)](webviewonscrollgeometrychange%28for_of_action_%29.md): Adds an action to be performed when a value, created from a scroll geometry, changes.
- [webViewScrollInputBehavior(\_:for:)](webviewscrollinputbehavior%28__for_%29.md): Enables or disables scrolling in web views when using particular inputs.
- [webViewScrollPosition(\_:)](webviewscrollposition%28__%29.md): Associates a binding to a scroll position with the web view.
- [webViewTextSelection(\_:)](webviewtextselection%28__%29.md): Determines whether to allow people to select or otherwise interact with text.
