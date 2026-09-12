> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musiccatalogresourcerequest/init(matching:equalto:)](https://developer.apple.com/documentation/musickit/musiccatalogresourcerequest/init(matching:equalto:))

# init(matching:equalTo:)

**Framework:** MusicKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a request to fetch items using a filter that matches a specific value.

## Declaration

```swift
init<Value>(matching keyPath: KeyPath<MusicItemType.FilterType, Value>, equalTo value: Value) where MusicItemType : FilterableMusicItem
```
