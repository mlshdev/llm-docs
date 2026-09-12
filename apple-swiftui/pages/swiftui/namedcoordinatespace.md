> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/namedcoordinatespace](https://developer.apple.com/documentation/swiftui/namedcoordinatespace)

# NamedCoordinateSpace

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A named coordinate space.

## Declaration

```swift
struct NamedCoordinateSpace
```

<a id="overview"></a>

## Overview

Use the `coordinateSpace(_:)` modifier to assign a name to the local coordinate space of a  parent view. Child views can then refer to that coordinate space using `.named(_:)`.

## Relationships

### Conforms To

- [CoordinateSpaceProtocol](coordinatespaceprotocol.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Supporting types

- [GlobalCoordinateSpace](globalcoordinatespace.md): The global coordinate space at the root of the view hierarchy.
- [LocalCoordinateSpace](localcoordinatespace.md): The local coordinate space of the current view.
