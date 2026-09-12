> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/configurationcatalog/init(from:)](https://developer.apple.com/documentation/realitykit/entity/configurationcatalog/init(from:))

# init(from:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Loads a configuration catalog from a USD or reality file.

## Declaration

```swift
init(from url: URL) async throws
```

## Parameters

- `url`: A URL of a USD or `.reality` file.

<a id="discussion"></a>

## Discussion

This method parses a USD or `.reality` file, and provides a collection of available configurations based on USD variant sets or `.reality` file configurations. It doesn’t load large asset files, such as textures and meshes.

You can load an entity, and its assets, with configuration choices by calling [init(from:configurations:)](../init%28from_configurations_%29.md).
