> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/navigationaction](https://developer.apple.com/documentation/webkit/webpage/navigationaction)

# WebPage.NavigationAction

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

An object that contains information about an action that causes navigation to occur.

## Declaration

```swift
@MainActor struct NavigationAction
```

<a id="overview"></a>

## Overview

A `NavigationAction` value is intended to be used to make policy decisions about whether to allow navigation within a web page via a `NavigationDeciding`.

## Topics

### Instance Properties

- [buttonNumber](navigationaction/buttonnumber-29qsu.md): The number of the mouse button that caused the navigation request.
- [buttonNumber](navigationaction/buttonnumber-4sg9k.md): The number of the mouse button that caused the navigation request.
- [isContentRuleListRedirect](navigationaction/iscontentrulelistredirect.md): Whether or not the navigation is a redirect from a content rule list.
- [modifierFlags](navigationaction/modifierflags.md): The modifier keys that were pressed at the time of the navigation request.
- [navigationType](navigationaction/navigationtype.md): The type of action that triggered the navigation.
- [request](navigationaction/request.md): The URL request object associated with the navigation action.
- [shouldPerformDownload](navigationaction/shouldperformdownload.md): Indicates whether the web content provided an attribute that indicates a download.
- [source](navigationaction/source.md): The frame that requested the navigation.
- [target](navigationaction/target.md): The frame in which to display the new content.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing navigation between webpages

- [WebPage.NavigationDeciding](navigationdeciding.md): Allows providing custom behavior to handle navigation changes and to coordinate these changes for the web page’s main page.
- [WebPage.NavigationResponse](navigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WebPage.NavigationPreferences](navigationpreferences.md): A type that specifies the behaviors to use when loading and rendering page content.
- [WebPage.FrameInfo](frameinfo.md): A type that contains information about a frame on a webpage.
- [WebPage.NavigationPreferences.ContentMode](navigationpreferences/contentmode.md): Options to indicate how to render web view content.
- [WebPage.NavigationPreferences.UpgradeToHTTPSPolicy](navigationpreferences/upgradetohttpspolicy.md): Preference for loading a webpage with HTTPS, and how failures should be handled.
- [WebPage.NavigationPreferences.SecurityRestrictionMode](navigationpreferences/securityrestrictionmode-swift.enum.md): Security restriction modes for WebView content.
- [WebPage.FormInfo](forminfo.md): A type that contains information about a form submission from a webpage.
