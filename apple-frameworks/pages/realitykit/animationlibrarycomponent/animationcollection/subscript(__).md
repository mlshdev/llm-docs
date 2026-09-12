> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationlibrarycomponent/animationcollection/subscript(_:)](https://developer.apple.com/documentation/realitykit/animationlibrarycomponent/animationcollection/subscript(_:))

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Accesses animations in the collection within an index range.

## Declaration

```swift
subscript(bounds: Range<AnimationLibraryComponent.AnimationCollection.Index>) -> AnimationLibraryComponent.AnimationCollection.SubSequence { get }
```

## Parameters

- `bounds`: A range of indices to look up.

<a id="return-value"></a>

## Return Value

A subsequence of animation resources in the range of `bounds`.
