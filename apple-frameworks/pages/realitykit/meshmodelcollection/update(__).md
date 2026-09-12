> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshmodelcollection/update(_:)](https://developer.apple.com/documentation/realitykit/meshmodelcollection/update(_:))

# update(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Update an existing model. The old model is returned.

## Declaration

```swift
@discardableResult mutating func update(_ model: MeshResource.Model) -> MeshResource.Model?
```

## See Also

### Using the collection

- [insert(\_:)](insert%28__%29.md): Add a new model to the container. Returns true if added. Returns false if it already exists.
- [remove(id:)](remove%28id_%29.md): Remove a model by id.
- [removeAll()](removeall%28%29.md): Remove all the models.
- [subscript(\_:)](subscript%28__%29.md): Read a model given its id.
