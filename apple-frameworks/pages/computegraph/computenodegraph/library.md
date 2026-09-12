> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/library](https://developer.apple.com/documentation/computegraph/computenodegraph/library)

# ComputeNodeGraph.Library

**Framework:** Compute Graph  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

A class defining a library of node definitions that can be added to a ComputeNodeGraph

## Declaration

```swift
final class Library
```

<a id="overview"></a>

## Overview

A Library contains definitions and also stores MTLFunction implementations for built-in nodes and you can construct new libraries containing nodes you provide.

These nodes are functions implemented using the Metal Shading Language and annotated with the `[[stitchable]]` attribute.

## Topics

### Initializers

- [init()](library/init%28%29.md): Creates a new empty library.
- [init(bundle:)](library/init%28bundle_%29.md): Creates a library from the Metal default library in the given bundle, if available.
- [init(from:bundleIdentifier:)](library/init%28from_bundleidentifier_%29.md): Creates a library by extracting node definitions from a Metal library.

### Instance Properties

- [definitions](library/definitions.md): The collection of all node definitions available in this library.

### Instance Methods

- [definition(named:in:)](library/definition%28named_in_%29.md): Returns the first node definition with the given name, or `nil` if none is found.
- [definition(stage:)](library/definition%28stage_%29.md): Returns a definition for the given stage.
- [definitionsMatching(input:)](library/definitionsmatching%28input_%29.md): Returns all definitions that have at least one input matching the given value type.
- [definitionsMatching(inputs:)](library/definitionsmatching%28inputs_%29.md): Returns all definitions whose user-editable inputs, in order, match the given value types.
- [definitionsMatching(output:)](library/definitionsmatching%28output_%29.md): Returns all definitions that have at least one output matching the given value type.
- [merge(contentsOf:)](library/merge%28contentsof_%29.md): Merges nodes from specified library into this library.

### Type Properties

- [shared](library/shared.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
