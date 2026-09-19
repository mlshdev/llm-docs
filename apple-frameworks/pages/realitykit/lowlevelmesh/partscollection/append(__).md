> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmesh/partscollection/append(_:)

# append(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Adds an element to the end of the collection.

## Declaration

```swift
mutating func append(_ newElement: LowLevelMesh.PartsCollection.Element)
```

## Parameters

- `newElement`: The element to append to the collection.

## See Also

### Updating collection contents

- [append(contentsOf:)](append%28contentsof_%29.md): Adds the elements of a sequence or collection to the end of this collection.
- [replaceAll(\_:)](replaceall%28__%29.md): Replaces all mesh parts in this collection with those from the new sequence.
- [removeAll()](removeall%28%29.md): Removes all mesh parts from this collection.
