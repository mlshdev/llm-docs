> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/init(from:named:contenttype:)](https://developer.apple.com/documentation/realitykit/entity/init(from:named:contenttype:))

# init(from:named:contentType:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an entity by asynchronously loading it from the in-memory contents of a file stored in a Data object.

## Declaration

```swift
@MainActor @preconcurrency convenience init(from data: Data, named name: String? = nil, contentType: UTType) async throws
```

## Parameters

- `data`: The Data object containing the in-memory contents of the file to load.
- `contentType`: The format of `data`, expressed as a `UTType`. RealityKit uses this value to select a parser instead of guessing the file type from the data.

<a id="return-value"></a>

## Return Value

The root entity of the loaded file.

<a id="discussion"></a>

## Discussion

RealityKit supports loading entities from USD (`.usd`, `.usda`, `.usdc`, `.usdz`) and Reality (`.reality`) files. Pass the data’s format as the `contentType` so RealityKit selects a parser directly instead of guessing the file type from the data. Prefer this initializer over [init(from:named:)](init%28from_named_%29.md) when the format is already known — for example from a server’s `Content-Type` or a MIME type.

The supported content types are:

- `UTType.usd` for USD content (`.usd`, `.usda`, `.usdc`).
- `UTType.usdz` for USD package files (`.usdz`).
- `UTType.realityFile` for Reality files (`.reality`).

When you only have a file name or extension, look up the `UTType` using `UTType()`, e.g.:

```swift
let contentType = UTType(filenameExtension: url.pathExtension) ?? .usd
let entity = try await Entity(from: data, contentType: contentType)
```

For more information on loading entities, see [Loading entities from a file](../loading-entities-from-a-file.md).

See [init(named:in:)](init%28named_in_%29.md) for an example of optimally loading content.
