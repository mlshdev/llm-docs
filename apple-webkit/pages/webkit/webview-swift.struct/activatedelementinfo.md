> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.struct/activatedelementinfo](https://developer.apple.com/documentation/webkit/webview-swift.struct/activatedelementinfo)

# WebView.ActivatedElementInfo

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Contains information about an element the user activated in a webpage, which may be used to configure a context menu for that element.

## Declaration

```swift
struct ActivatedElementInfo
```

<a id="overview"></a>

## Overview

For links, the information contains the URL that is linked to.

## Topics

### Instance Properties

- [linkURL](activatedelementinfo/linkurl.md): The URL of the link that the user clicked.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying web interactions

- [WebView.BackForwardNavigationGesturesBehavior](backforwardnavigationgesturesbehavior.md): A type that defines the behavior of how horizontal swipe gestures trigger backward and forward page navigation.
- [WebView.LinkPreviewBehavior](linkpreviewbehavior.md): A type specifying the behavior for the presentation of link previews when pressing a link.
- [WebView.ElementFullscreenBehavior](elementfullscreenbehavior.md): The behavior that determines whether a web view can display content full screen.
- [WebView.MagnificationGesturesBehavior](magnificationgesturesbehavior.md): The options for controlling the behavior for how magnification gestures interact with web views.
