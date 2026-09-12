> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshinstancecollection/update(_:)](https://developer.apple.com/documentation/realitykit/meshinstancecollection/update(_:))

# update(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Update an existing instance. The old instance is returned.

## Declaration

```swift
@discardableResult mutating func update(_ instance: MeshResource.Instance) -> MeshResource.Instance?
```

## See Also

### Using the collection

- [insert(\_:)](insert%28__%29.md): Add a new instance to the container. Returns true if added. Returns false if it already exists.
- [remove(id:)](remove%28id_%29.md): Remove an instance by name.
- [removeAll()](removeall%28%29.md): Remove all the instances.
- [subscript(\_:)](subscript%28__%29.md): Read an instance given its name.
