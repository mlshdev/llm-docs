> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnrenderingsession-1hzh8/frameattributes/init(timedmetadatagroup:sessionattributes:)](https://developer.apple.com/documentation/cinematic/cnrenderingsession-1hzh8/frameattributes/init(timedmetadatagroup:sessionattributes:))

# init(timedMetadataGroup:sessionAttributes:)

**Framework:** Cinematic  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Creates a structure representing a Cinematic rendering session based on meta group and session attributes.

## Declaration

```swift
init?(timedMetadataGroup metadataGroup: AVTimedMetadataGroup, sessionAttributes: CNRenderingSession.Attributes)
```

## Parameters

- `metadataGroup`: The meta group read from the timed Cinematic metadata track of a Cinematic asset.
- `sessionAttributes`: Rendering session attributes loaded from a Cinematic asset.
