> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/constraintscollection/subscript(_:)](https://developer.apple.com/documentation/realitykit/ikrig/constraintscollection/subscript(_:))

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Accesses the element with the specified identifier.

## Declaration

```swift
subscript(id: IKRig.ConstraintsCollection.Element.ID) -> IKRig.ConstraintsCollection.Element? { get set }
```

## Parameters

- `id`: The identifier of the requested element.

<a id="overview"></a>

## Overview

> **Note**

> Set `nil` to remove the element with matching identifier.
