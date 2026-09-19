> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshmodelcollection/subscript(_:)

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Read a model given its id.

## Declaration

```swift
subscript(id: String) -> MeshResource.Model? { get }
```

## See Also

### Using the collection

- [insert(\_:)](insert%28__%29.md): Add a new model to the container. Returns true if added. Returns false if it already exists.
- [remove(id:)](remove%28id_%29.md): Remove a model by id.
- [removeAll()](removeall%28%29.md): Remove all the models.
- [update(\_:)](update%28__%29.md): Update an existing model. The old model is returned.
