> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/proximityreaderdiscovery/content(for:)](https://developer.apple.com/documentation/proximityreader/proximityreaderdiscovery/content(for:))

# content(for:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Fetches the content for the specified topic.

## Declaration

```swift
final func content(for topic: ProximityReaderDiscovery.Topic) async throws -> ProximityReaderDiscovery.Content
```

## Parameters

- `topic`: The topic you want to display.

<a id="return-value"></a>

## Return Value

The requested content, when successful.

<a id="discussion"></a>

## Discussion

> **Throws**

> The method throws a [ProximityReaderDiscovery.ContentError](contenterror.md) if it fails to get the content.

Call this method to get the content definition for the specified topic. The discovery interface uses the specified identifier to determine what to display.

## See Also

### Fetching the content to display

- [ProximityReaderDiscovery.Topic](topic.md): The topics you can present to someone.
- [ProximityReaderDiscovery.Content](content.md): A type that represents content you can display on the current device.
- [contentList](contentlist.md): The content you can present for the current device.
