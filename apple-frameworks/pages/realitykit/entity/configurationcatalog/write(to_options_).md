> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/configurationcatalog/write(to:options:)](https://developer.apple.com/documentation/realitykit/entity/configurationcatalog/write(to:options:))

# write(to:options:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Writes the configurations of the configuration catalog to a reality file.

## Declaration

```swift
nonisolated(nonsending) func write(to url: URL, options: Entity.WriteOptions) async throws
```

## Parameters

- `url`: The destination where the configuration catalog writes the `.reality` file.
- `options`: Options for writing the `.reality` file.

<a id="discussion"></a>

## Discussion

Another configuration catalog instance can open the `.reality` file for reading.
