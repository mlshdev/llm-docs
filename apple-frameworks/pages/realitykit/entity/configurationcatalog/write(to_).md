> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/configurationcatalog/write(to:)](https://developer.apple.com/documentation/realitykit/entity/configurationcatalog/write(to:))

# write(to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Writes the configurations of the configuration catalog to a reality file.

## Declaration

```swift
@MainActor func write(to url: URL) async throws
```

## Parameters

- `url`: The destination where the configuration catalog writes the `.reality` file.

<a id="discussion"></a>

## Discussion

Another configuration catalog instance can open the `.reality` file for reading.
