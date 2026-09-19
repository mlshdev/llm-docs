> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/ikcomponent/constraintcollection/subscript(_:)

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Accesses the element with the specified identifier.

## Declaration

```swift
subscript(id: IKComponent.ConstraintCollection.Element.ID) -> IKComponent.ConstraintCollection.Element? { get set }
```

## Parameters

- `id`: The identifier of the requested element.

<a id="overview"></a>

## Overview

The following set scenarios are ignored:

- Setting nil
- Setting element with different id, e.g. \`collection\[ID(2)\]?.id = ID(3)
- Setting element with id not in the set
