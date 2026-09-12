> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/navigationpreferences/upgradetohttpspolicy](https://developer.apple.com/documentation/webkit/webpage/navigationpreferences/upgradetohttpspolicy)

# WebPage.NavigationPreferences.UpgradeToHTTPSPolicy

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Preference for loading a webpage with HTTPS, and how failures should be handled.

## Declaration

```swift
enum UpgradeToHTTPSPolicy
```

## Topics

### Enumeration Cases

- [WebPage.NavigationPreferences.UpgradeToHTTPSPolicy.automaticFallbackToHTTP](upgradetohttpspolicy/automaticfallbacktohttp.md)
- [WebPage.NavigationPreferences.UpgradeToHTTPSPolicy.errorOnFailure](upgradetohttpspolicy/erroronfailure.md)
- [WebPage.NavigationPreferences.UpgradeToHTTPSPolicy.keepAsRequested](upgradetohttpspolicy/keepasrequested.md)
- [WebPage.NavigationPreferences.UpgradeToHTTPSPolicy.userMediatedFallbackToHTTP](upgradetohttpspolicy/usermediatedfallbacktohttp.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing navigation between webpages

- [WebPage.NavigationDeciding](../navigationdeciding.md): Allows providing custom behavior to handle navigation changes and to coordinate these changes for the web page’s main page.
- [WebPage.NavigationAction](../navigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WebPage.NavigationResponse](../navigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WebPage.NavigationPreferences](../navigationpreferences.md): A type that specifies the behaviors to use when loading and rendering page content.
- [WebPage.FrameInfo](../frameinfo.md): A type that contains information about a frame on a webpage.
- [WebPage.NavigationPreferences.ContentMode](contentmode.md): Options to indicate how to render web view content.
- [WebPage.NavigationPreferences.SecurityRestrictionMode](securityrestrictionmode-swift.enum.md): Security restriction modes for WebView content.
- [WebPage.FormInfo](../forminfo.md): A type that contains information about a form submission from a webpage.
