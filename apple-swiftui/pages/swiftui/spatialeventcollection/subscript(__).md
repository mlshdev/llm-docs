> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spatialeventcollection/subscript(_:)](https://developer.apple.com/documentation/swiftui/spatialeventcollection/subscript(_:))

# subscript(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 1.0+ · watchOS 11.0+

Retrieves an event using its unique identifier.

## Declaration

```swift
subscript(index: SpatialEventCollection.Event.ID) -> SpatialEventCollection.Event? { get }
```

<a id="overview"></a>

## Overview

Returns `nil` if the `Event` no longer exists in the collection.

## See Also

### Accessing the collection’s events

- [SpatialEventCollection.Event](event.md): A spatial event generated from an input like a touch or click that can drive gestures in the system.
