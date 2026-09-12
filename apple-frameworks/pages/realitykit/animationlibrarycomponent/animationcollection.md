> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationlibrarycomponent/animationcollection](https://developer.apple.com/documentation/realitykit/animationlibrarycomponent/animationcollection)

# AnimationLibraryComponent.AnimationCollection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A collection of animations an entity can play.

## Declaration

```swift
struct AnimationCollection
```

<a id="overview"></a>

## Overview

You use `AnimationCollection` to access animations in an [AnimationLibraryComponent](../animationlibrarycomponent.md).

The initializers for [AnimationLibraryComponent](../animationlibrarycomponent.md) create an `AnimationCollection`, so you don’t need to create one directly. You can access the collection with the [animations](animations.md) property.

## Topics

### Creating an animation collection

- [init(dictionaryLiteral:)](animationcollection/init%28dictionaryliteral_%29.md): Creates an animation collection from a dictionary literal.

### Accessing animations

- [subscript(\_:)](animationcollection/subscript%28__%29-4sfyo.md): Accesses a single animation in the collection with a key.
- [subscript(\_:)](animationcollection/subscript%28__%29-2n5pw.md): Accesses animations in the collection within an index range.
- [subscript(\_:)](animationcollection/subscript%28__%29-45p83.md): Accesses a single animation in the collection at an index.
- [AnimationLibraryComponent.AnimationCollection.SubSequence](animationcollection/subsequence.md): A sequence that represents a contiguous subrange of animations in the collection.
- [AnimationLibraryComponent.AnimationCollection.Element](animationcollection/element.md): A key-value pair from the collection consisting of the name of an animation and the animation itself.

### Manipulating indices

- [startIndex](animationcollection/startindex.md): An index to the first animation in the collection.
- [endIndex](animationcollection/endindex.md): An index to the last animation in the collection.
- [index(after:)](animationcollection/index%28after_%29.md): Returns the position in the collection that follows an index.
- [formIndex(after:)](animationcollection/formindex%28after_%29.md): Replaces the index with its successor.
- [AnimationLibraryComponent.AnimationCollection.Index](animationcollection/index.md): An object that represents a position in the collection.

### Iterating over animations

- [makeIterator()](animationcollection/makeiterator%28%29.md): Returns an iterator over the animations in the collection.
- [AnimationLibraryComponent.AnimationCollection.Iterator](animationcollection/iterator.md): An object to iterate over all animations in the collection.

### Instance Properties

- [count](animationcollection/count.md): The number of animations in the collection.
- [isEmpty](animationcollection/isempty.md): A Boolean value that indicates whether the collection is empty.

### Subscripts

- [subscript(\_:)](animationcollection/subscript%28__%29.md): Accesses animations in the collection within an index range.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Animation playback

- [Automatically animating RealityKit entities](../automatically-animating-realitykit-entities.md): Invoke implicit animations by setting the entity’s desired end state.
- [AnimationResource](../animationresource.md): An animation for the properties of scenes or entities.
- [AnimationLibraryComponent](../animationlibrarycomponent.md): A component that represents a collection of animations that an entity can play.
- [AnimationEvents](../animationevents.md): Notable milestones that the framework signals during animation playback.
- [AnimationPlaybackController](../animationplaybackcontroller.md): A controller that manages animation playback.
- [AnimationRepeatMode](../animationrepeatmode.md): Options that determine whether an animation replays after completion.
