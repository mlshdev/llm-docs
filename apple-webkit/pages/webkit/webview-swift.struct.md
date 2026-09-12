> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.struct](https://developer.apple.com/documentation/webkit/webview-swift.struct)

# WebView

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A view that displays some web content.

## Declaration

```swift
@MainActor @preconcurrency struct WebView
```

<a id="Overview"></a>

## Overview

Present HTML, CSS, and JavaScript content alongside your app’s native views with [WebView](webview-swift.struct.md). Specify web content with a [URL](https://developer.apple.com/documentation/foundation/url) when using the [init(url:)](webview-swift.struct/init%28url_%29.md) initializer, or with a [WebPage](webpage.md) when using the [init(\_:)](webview-swift.struct/init%28__%29.md) initializer, which allows you to fully control the browsing experience. Any updates to the page propagate the information to the view.

[WebView](webview-swift.struct.md) provides a complete browsing experience, including the ability to navigate between different webpages using links, forward and back buttons, and more. When a person clicks a link in your content, the view acts like a browser and displays the content at that link. To customize navigation, use a [WebPage](webpage.md) with your [WebView](webview-swift.struct.md) and customize the [WebPage.Configuration](webpage/configuration.md), or create a new type that conforms to [WebPage.NavigationDeciding](webpage/navigationdeciding.md).

The following example displays two different URLs depending on the state of a toggle, and also prevents back-forward navigation gestures:

```swift
import SwiftUI
import WebKit

struct ContentView: View {
    @State private var toggle = false

    private var url: URL? {
        toggle ? URL(string: "https://www.webkit.org") : URL(string: "https://www.swift.org")
    }

    var body: some View {
        WebView(url: url)
            .toolbar {
                Button(buttonName, systemImage: buttonIcon) {
                    toggle.toggle()
                }
            }
            .webViewBackForwardNavigationGestures(.disabled)
    }
}
```

A [WebView](webview-swift.struct.md) is a scrollable view, and behaves similarly to [ScrollView](https://developer.apple.com/documentation/swiftui/scrollview). Customize scrolling in a [WebView](webview-swift.struct.md) with:

- [scrollBounceBehavior(\_:axes:)](https://developer.apple.com/documentation/swiftui/view/scrollbouncebehavior%28_:axes:%29)
- [webViewScrollInputBehavior(\_:for:)](https://developer.apple.com/documentation/swiftui/view/webviewscrollinputbehavior%28_:for:%29)
- [webViewScrollPosition(\_:)](https://developer.apple.com/documentation/swiftui/view/webviewscrollposition%28_:%29)
- [webViewOnScrollGeometryChange(for:of:action:)](https://developer.apple.com/documentation/swiftui/view/webviewonscrollgeometrychange%28for:of:action:%29)

Customize [WebView](webview-swift.struct.md) display and interactions with view modifiers, such as:

- [webViewBackForwardNavigationGestures(\_:)](https://developer.apple.com/documentation/swiftui/view/webviewbackforwardnavigationgestures%28_:%29)
- [webViewMagnificationGestures(\_:)](https://developer.apple.com/documentation/swiftui/view/webviewmagnificationgestures%28_:%29)
- [webViewLinkPreviews(\_:)](https://developer.apple.com/documentation/swiftui/view/webviewlinkpreviews%28_:%29)
- [webViewTextSelection(\_:)](https://developer.apple.com/documentation/swiftui/view/webviewtextselection%28_:%29)
- [webViewElementFullscreenBehavior(\_:)](https://developer.apple.com/documentation/swiftui/view/webviewelementfullscreenbehavior%28_:%29)
- [webViewContextMenu(menu:)](https://developer.apple.com/documentation/swiftui/view/webviewcontextmenu%28menu:%29)
- [webViewContentBackground(\_:)](https://developer.apple.com/documentation/swiftui/view/webviewcontentbackground%28_:%29)

To further customize and control a web interaction, connect a [WebView](webview-swift.struct.md) to a [WebPage](webpage.md). The following example demonstrates this by configuring the view’s navigation title to be the webpage’s title, which the system updates automatically because [WebPage](webpage.md) is an `Observable` type:

```swift
struct ContentView: View {
    @State private var page = WebPage()

    var body: some View {
        NavigationStack {
            WebView(page)
                .navigationTitle(page.title)
        }
    }
}
```

You can only bind a [WebPage](webpage.md) to a single [WebView](webview-swift.struct.md) at a time.

## Topics

### Creating web views

- [init(\_:)](webview-swift.struct/init%28__%29.md): Create a new WebView.
- [init(url:)](webview-swift.struct/init%28url_%29.md): Create a new WebView with the specified URL.

### Modifying web interactions

- [WebView.BackForwardNavigationGesturesBehavior](webview-swift.struct/backforwardnavigationgesturesbehavior.md): A type that defines the behavior of how horizontal swipe gestures trigger backward and forward page navigation.
- [WebView.LinkPreviewBehavior](webview-swift.struct/linkpreviewbehavior.md): A type specifying the behavior for the presentation of link previews when pressing a link.
- [WebView.ActivatedElementInfo](webview-swift.struct/activatedelementinfo.md): Contains information about an element the user activated in a webpage, which may be used to configure a context menu for that element.
- [WebView.ElementFullscreenBehavior](webview-swift.struct/elementfullscreenbehavior.md): The behavior that determines whether a web view can display content full screen.
- [WebView.MagnificationGesturesBehavior](webview-swift.struct/magnificationgesturesbehavior.md): The options for controlling the behavior for how magnification gestures interact with web views.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Essentials

- [Building a cross-platform web browser](building-a-cross-platform-web-browser.md): Implement a browser on multiple platforms that loads content, manages navigation history, and saves favorite websites, using WebKit for SwiftUI.
- [WebPage](webpage.md): An object that controls and manages the behavior of interactive web content.
