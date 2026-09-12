> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmesh/partscollection/replaceall(_:)](https://developer.apple.com/documentation/realitykit/lowlevelmesh/partscollection/replaceall(_:))

# replaceAll(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Replaces all mesh parts in this collection with those from the new sequence.

## Declaration

```swift
mutating func replaceAll<S>(_ newElements: S) where S : Sequence, S.Element == LowLevelMesh.Part
```

## Parameters

- `newElements`: The elements to replace the contents of the collection.

## See Also

### Updating collection contents

- [append(\_:)](append%28__%29.md): Adds an element to the end of the collection.
- [append(contentsOf:)](append%28contentsof_%29.md): Adds the elements of a sequence or collection to the end of this collection.
- [removeAll()](removeall%28%29.md): Removes all mesh parts from this collection.
