> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshpartcollection/remove(id:)](https://developer.apple.com/documentation/realitykit/meshpartcollection/remove(id:))

# remove(id:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Remove a part by id.

## Declaration

```swift
@discardableResult mutating func remove(id: String) -> MeshResource.Part?
```

## See Also

### Using the collection

- [insert(\_:)](insert%28__%29.md): Add a new part to the container. Returns true if added. Returns false if it already exists.
- [removeAll()](removeall%28%29.md): Remove all the parts.
- [update(\_:)](update%28__%29.md): Update an existing part. The old part is returned.
