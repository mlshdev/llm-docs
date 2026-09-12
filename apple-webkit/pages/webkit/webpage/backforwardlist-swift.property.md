> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/backforwardlist-swift.property](https://developer.apple.com/documentation/webkit/webpage/backforwardlist-swift.property)

# backForwardList

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The webpage’s back-forward list.

## Declaration

```swift
@MainActor final var backForwardList: WebPage.BackForwardList { get }
```

## See Also

### Managing navigation between webpages

- [WebPage.NavigationDeciding](navigationdeciding.md): Allows providing custom behavior to handle navigation changes and to coordinate these changes for the web page’s main page.
- [WebPage.NavigationAction](navigationaction.md): An object that contains information about an action that causes navigation to occur.
- [WebPage.NavigationResponse](navigationresponse.md): An object that contains the response to a navigation request, and which you use to make navigation-related policy decisions.
- [WebPage.NavigationPreferences](navigationpreferences.md): A type that specifies the behaviors to use when loading and rendering page content.
- [WebPage.FrameInfo](frameinfo.md): A type that contains information about a frame on a webpage.
