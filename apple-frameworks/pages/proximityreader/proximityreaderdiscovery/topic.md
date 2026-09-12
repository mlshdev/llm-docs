> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/proximityreaderdiscovery/topic](https://developer.apple.com/documentation/proximityreader/proximityreaderdiscovery/topic)

# ProximityReaderDiscovery.Topic

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

The topics you can present to someone.

## Declaration

```swift
enum Topic
```

## Topics

### Creating a discovery object

- [ProximityReaderDiscovery.Topic.payment(\_:)](topic/payment%28__%29.md): A topic related to accepting payments.
- [ProximityReaderDiscovery.Topic.Payment](topic/payment.md): The subtopics that show merchants how to accept different types of payments with *Tap to Pay* on iPhone.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Fetching the content to display

- [content(for:)](content%28for_%29.md): Fetches the content for the specified topic.
- [ProximityReaderDiscovery.Content](content.md): A type that represents content you can display on the current device.
- [contentList](contentlist.md): The content you can present for the current device.
