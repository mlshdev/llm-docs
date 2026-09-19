> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entity/init(from:named:)

# init(from:named:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ (deprecated in 27.2) · iPadOS 26.0+ (deprecated in 27.2) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.2) · tvOS 26.0+ (deprecated in 27.2) · visionOS 26.0+ (deprecated in 27.2)

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
