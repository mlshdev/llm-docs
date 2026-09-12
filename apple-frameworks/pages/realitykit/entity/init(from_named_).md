> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/init(from:named:)](https://developer.apple.com/documentation/realitykit/entity/init(from:named:))

# init(from:named:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · tvOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

Creates an entity by asynchronously loading it from the in-memory contents of a file stored in a Data object.

> Use init(from:contentType:) instead. Specify the content type explicitly using a UTType for more reliable format handling.

## Declaration

```swift
@MainActor @preconcurrency convenience init(from data: Data, named name: String? = nil) async throws
```

## Parameters

- `data`: The Data object containing the in-memory contents of the file to load.

<a id="return-value"></a>

## Return Value

The root entity of the loaded file.

<a id="discussion"></a>

## Discussion

RealityKit supports loading entities from USD (`.usd`, `.usda`, `.usdc`, `.usdz`) and Reality (`.reality`) files. This method automatically determines the file type using the first few bytes of the Data object.

For more information on loading entities, see [Loading entities from a file](../loading-entities-from-a-file.md).

See [init(named:in:)](init%28named_in_%29.md) for an example of optimally loading content.
