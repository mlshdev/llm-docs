> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshpartcollection/update(_:)](https://developer.apple.com/documentation/realitykit/meshpartcollection/update(_:))

# update(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Update an existing part. The old part is returned.

## Declaration

```swift
@discardableResult mutating func update(_ part: MeshResource.Part) -> MeshResource.Part?
```

## See Also

### Using the collection

- [insert(\_:)](insert%28__%29.md): Add a new part to the container. Returns true if added. Returns false if it already exists.
- [remove(id:)](remove%28id_%29.md): Remove a part by id.
- [removeAll()](removeall%28%29.md): Remove all the parts.
