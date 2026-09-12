> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/sharedcoordinatespaceprovider/coordinatespacedata](https://developer.apple.com/documentation/arkit/sharedcoordinatespaceprovider/coordinatespacedata)

# SharedCoordinateSpaceProvider.CoordinateSpaceData

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A coordinate space data object.

## Declaration

```swift
struct CoordinateSpaceData
```

<a id="overview"></a>

## Overview

> **Note**

> The underlying data needs to be sent to each participant in the shared coordinate space.

## Topics

### Initializers

- [init(data:)](coordinatespacedata/init%28data_%29.md): Initialize a `CoordinateSpaceData` from a data blob.

### Instance Properties

- [data](coordinatespacedata/data.md): Extract a `Data` object.
- [recipientIdentifiers](coordinatespacedata/recipientidentifiers.md): Participant identifiers of the intended recipient for this data. Data should be broadcast if the list is empty.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
