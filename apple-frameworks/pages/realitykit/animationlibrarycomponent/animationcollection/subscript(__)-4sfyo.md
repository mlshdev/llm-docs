> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationlibrarycomponent/animationcollection/subscript(_:)-4sfyo](https://developer.apple.com/documentation/realitykit/animationlibrarycomponent/animationcollection/subscript(_:)-4sfyo)

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Accesses a single animation in the collection with a key.

## Declaration

```swift
subscript(key: String) -> AnimationResource? { get set }
```

## Parameters

- `key`: A name for the animation to look up.

<a id="return-value"></a>

## Return Value

An animation resource, or `nil` if the component can’t find one that maps to the `key`.

## See Also

### Accessing animations

- [subscript(\_:)](subscript%28__%29-2n5pw.md): Accesses animations in the collection within an index range.
- [subscript(\_:)](subscript%28__%29-45p83.md): Accesses a single animation in the collection at an index.
- [AnimationLibraryComponent.AnimationCollection.SubSequence](subsequence.md): A sequence that represents a contiguous subrange of animations in the collection.
- [AnimationLibraryComponent.AnimationCollection.Element](element.md): A key-value pair from the collection consisting of the name of an animation and the animation itself.
