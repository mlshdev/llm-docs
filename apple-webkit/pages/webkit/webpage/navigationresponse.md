> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/navigationresponse](https://developer.apple.com/documentation/webkit/webpage/navigationresponse)

# WebPage.NavigationResponse

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.

## Declaration

```swift
@MainActor struct NavigationResponse
```

<a id="overview"></a>

## Overview

A `NavigationResponse` value is intended to be used to make policy decisions about whether to allow navigation within a web page via a `NavigationDeciding`.

## Topics

### Instance Properties

- [canShowMimeType](navigationresponse/canshowmimetype.md): Indicates whether WebKit is capable of displaying the response’s MIME type natively.
- [response](navigationresponse/response.md): The frame’s response.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing navigation between webpages

- [WebPage.NavigationDeciding](navigationdeciding.md): Allows providing custom behavior to handle navigation changes and to coordinate these changes for the web page’s main page.
- [WebPage.NavigationAction](navigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WebPage.NavigationPreferences](navigationpreferences.md): A type that specifies the behaviors to use when loading and rendering page content.
- [WebPage.FrameInfo](frameinfo.md): A type that contains information about a frame on a webpage.
- [WebPage.NavigationPreferences.ContentMode](navigationpreferences/contentmode.md): Options to indicate how to render web view content.
- [WebPage.NavigationPreferences.UpgradeToHTTPSPolicy](navigationpreferences/upgradetohttpspolicy.md): Preference for loading a webpage with HTTPS, and how failures should be handled.
- [WebPage.NavigationPreferences.SecurityRestrictionMode](navigationpreferences/securityrestrictionmode-swift.enum.md): Security restriction modes for WebView content.
- [WebPage.FormInfo](forminfo.md): A type that contains information about a form submission from a webpage.
