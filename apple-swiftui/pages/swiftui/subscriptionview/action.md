> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/subscriptionview/action](https://developer.apple.com/documentation/swiftui/subscriptionview/action)

# action

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The `Action` executed when `publisher` emits an event.

## Declaration

```swift
var action: (PublisherType.Output) -> Void
```

## See Also

### Managing the subscription

- [publisher](publisher.md): The `Publisher` that is being subscribed.
- [content](content.md): The content view.
