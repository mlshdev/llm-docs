> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshmodelcollection/insert(_:)](https://developer.apple.com/documentation/realitykit/meshmodelcollection/insert(_:))

# insert(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Add a new model to the container. Returns true if added. Returns false if it already exists.

## Declaration

```swift
@discardableResult mutating func insert(_ model: MeshResource.Model) -> Bool
```

## See Also

### Using the collection

- [remove(id:)](remove%28id_%29.md): Remove a model by id.
- [removeAll()](removeall%28%29.md): Remove all the models.
- [update(\_:)](update%28__%29.md): Update an existing model. The old model is returned.
- [subscript(\_:)](subscript%28__%29.md): Read a model given its id.
