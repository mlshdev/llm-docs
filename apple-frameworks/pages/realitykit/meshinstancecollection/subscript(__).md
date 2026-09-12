> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshinstancecollection/subscript(_:)](https://developer.apple.com/documentation/realitykit/meshinstancecollection/subscript(_:))

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Read an instance given its name.

## Declaration

```swift
subscript(id: String) -> MeshResource.Instance? { get }
```

## See Also

### Using the collection

- [insert(\_:)](insert%28__%29.md): Add a new instance to the container. Returns true if added. Returns false if it already exists.
- [remove(id:)](remove%28id_%29.md): Remove an instance by name.
- [removeAll()](removeall%28%29.md): Remove all the instances.
- [update(\_:)](update%28__%29.md): Update an existing instance. The old instance is returned.
