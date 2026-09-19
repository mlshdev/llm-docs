> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musiccatalogresourcerequest/init(matching:equalto:)

# init(matching:equalTo:)

**Framework:** MusicKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a request to fetch items using a filter that matches a specific value.

## Declaration

```swift
init<Value>(matching keyPath: KeyPath<MusicItemType.FilterType, Value>, equalTo value: Value) where MusicItemType : FilterableMusicItem
```
