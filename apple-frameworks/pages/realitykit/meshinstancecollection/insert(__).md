> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshinstancecollection/insert(_:)

# insert(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Add a new instance to the container. Returns true if added. Returns false if it already exists.

## Declaration

```swift
@discardableResult mutating func insert(_ instance: MeshResource.Instance) -> Bool
```

## See Also

### Using the collection

- [remove(id:)](remove%28id_%29.md): Remove an instance by name.
- [removeAll()](removeall%28%29.md): Remove all the instances.
- [update(\_:)](update%28__%29.md): Update an existing instance. The old instance is returned.
- [subscript(\_:)](subscript%28__%29.md): Read an instance given its name.
