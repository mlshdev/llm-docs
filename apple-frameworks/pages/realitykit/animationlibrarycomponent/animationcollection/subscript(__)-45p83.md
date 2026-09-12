> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationlibrarycomponent/animationcollection/subscript(_:)-45p83](https://developer.apple.com/documentation/realitykit/animationlibrarycomponent/animationcollection/subscript(_:)-45p83)

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Accesses a single animation in the collection at an index.

## Declaration

```swift
subscript(position: AnimationLibraryComponent.AnimationCollection.Index) -> AnimationLibraryComponent.AnimationCollection.Element { get }
```

## Parameters

- `position`: An index into the collection’s dictionary.

<a id="return-value"></a>

## Return Value

The animation at the dictionary index.

## See Also

### Accessing animations

- [subscript(\_:)](subscript%28__%29-4sfyo.md): Accesses a single animation in the collection with a key.
- [subscript(\_:)](subscript%28__%29-2n5pw.md): Accesses animations in the collection within an index range.
- [AnimationLibraryComponent.AnimationCollection.SubSequence](subsequence.md): A sequence that represents a contiguous subrange of animations in the collection.
- [AnimationLibraryComponent.AnimationCollection.Element](element.md): A key-value pair from the collection consisting of the name of an animation and the animation itself.
