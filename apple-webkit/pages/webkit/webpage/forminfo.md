> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/forminfo](https://developer.apple.com/documentation/webkit/webpage/forminfo)

# WebPage.FormInfo

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A type that contains information about a form submission from a webpage.

## Declaration

```swift
@MainActor struct FormInfo
```

## Topics

### Instance Properties

- [formValues](forminfo/formvalues.md): A dictionary of the form values that will be submitted during the navigation.
- [httpMethod](forminfo/httpmethod.md): The HTTP method used to submit the form; generally either @“GET” or @“POST”.
- [sourceFrame](forminfo/sourceframe.md): The frame that caused the form submission.
- [submissionURL](forminfo/submissionurl.md): The URL that the frame is being navigated to.
- [targetFrame](forminfo/targetframe.md): The frame where the form is being submitted will cause a navigation.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing navigation between webpages

- [WebPage.NavigationDeciding](navigationdeciding.md): Allows providing custom behavior to handle navigation changes and to coordinate these changes for the web page’s main page.
- [WebPage.NavigationAction](navigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WebPage.NavigationResponse](navigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WebPage.NavigationPreferences](navigationpreferences.md): A type that specifies the behaviors to use when loading and rendering page content.
- [WebPage.FrameInfo](frameinfo.md): A type that contains information about a frame on a webpage.
- [WebPage.NavigationPreferences.ContentMode](navigationpreferences/contentmode.md): Options to indicate how to render web view content.
- [WebPage.NavigationPreferences.UpgradeToHTTPSPolicy](navigationpreferences/upgradetohttpspolicy.md): Preference for loading a webpage with HTTPS, and how failures should be handled.
- [WebPage.NavigationPreferences.SecurityRestrictionMode](navigationpreferences/securityrestrictionmode-swift.enum.md): Security restriction modes for WebView content.
