> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/navigationevent](https://developer.apple.com/documentation/webkit/webpage/navigationevent)

# WebPage.NavigationEvent

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A particular state that occurs during the progression of a navigation.

## Declaration

```swift
enum NavigationEvent
```

## Topics

### Enumeration Cases

- [WebPage.NavigationEvent.committed](navigationevent/committed.md): This event occurs when the page has started to receive content for the main frame.
- [WebPage.NavigationEvent.finished](navigationevent/finished.md): This event occurs once the navigation is complete.
- [WebPage.NavigationEvent.receivedServerRedirect](navigationevent/receivedserverredirect.md): This event occurs when the page received a server redirect for a request.
- [WebPage.NavigationEvent.startedProvisionalNavigation](navigationevent/startedprovisionalnavigation.md): This event occurs when the page receives provisional approval to process a navigation request, but before it receives a response to that request.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing navigation between webpages

- [WebPage.BackForwardList](backforwardlist-swift.struct.md): An observable representation of a webpage’s previously loaded resources.
- [WebPage.BackForwardList.Item](backforwardlist-swift.struct/item.md): A representation of a resource that a webpage previously visited.
- [WebPage.BackForwardList.Item.ID](backforwardlist-swift.struct/item/id-swift.struct.md): An opaque type representing the identifier for an item.
