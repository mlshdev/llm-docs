> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/navigationerror](https://developer.apple.com/documentation/webkit/webpage/navigationerror)

# WebPage.NavigationError

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A specific error that caused a navigation to fail.

## Declaration

```swift
enum NavigationError
```

## Topics

### Enumeration Cases

- [WebPage.NavigationError.failedProvisionalNavigation(\_:)](navigationerror/failedprovisionalnavigation%28__%29.md): An error occurred during the early navigation process.
- [WebPage.NavigationError.invalidURL](navigationerror/invalidurl.md): The URL to navigate to is invalid.
- [WebPage.NavigationError.pageClosed](navigationerror/pageclosed.md): The navigation could not begin because the page has been closed.
- [WebPage.NavigationError.webContentProcessTerminated](navigationerror/webcontentprocessterminated.md): The process for the web content of this page was terminated for any reason.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing navigation between webpages

- [WebPage.BackForwardList](backforwardlist-swift.struct.md): An observable representation of a webpage’s previously loaded resources.
- [WebPage.NavigationEvent](navigationevent.md): A particular state that occurs during the progression of a navigation.
- [navigations](navigations.md): A sequence of all the navigation events that occur throughout the webpage, including both user navigation and programmatic navigation.
