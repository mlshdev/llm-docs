> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musiccatalogchartsrequest/init(genre:kinds:types:)

# init(genre:kinds:types:)

**Framework:** MusicKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a catalog charts request for a specified genre and list of types to include in the catalog charts response.

## Declaration

```swift
init(genre: Genre? = nil, kinds: [MusicCatalogChartKind] = [.mostPlayed], types: [any MusicCatalogChartRequestable.Type])
```
