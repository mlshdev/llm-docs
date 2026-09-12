> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/partscollection/append(contentsof:)](https://developer.apple.com/documentation/realitykit/lowlevelmesh/partscollection/append(contentsof:))

# append(contentsOf:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Adds the elements of a sequence or collection to the end of this collection.

## Declaration

```swift
mutating func append<S>(contentsOf newElements: S) where S : Sequence, S.Element == LowLevelMesh.Part
```

## Parameters

- `newElements`: The elements to append to the collection.

## See Also

### Updating collection contents

- [append(\_:)](append%28__%29.md): Adds an element to the end of the collection.
- [replaceAll(\_:)](replaceall%28__%29.md): Replaces all mesh parts in this collection with those from the new sequence.
- [removeAll()](removeall%28%29.md): Removes all mesh parts from this collection.
