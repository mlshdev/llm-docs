> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedelementcategory](https://developer.apple.com/documentation/roomplan/capturedelementcategory)

# CapturedElementCategory

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The category of the particular object or surface.

## Declaration

```swift
enum CapturedElementCategory
```

<a id="overview"></a>

## Overview

A  [CapturedRoomAttribute](capturedroomattribute.md) adopter’s [parentCategory](capturedroomattribute/parentcategory.md) property is of this type.

## Topics

### Determining the category type

- [CapturedElementCategory.object(\_:)](capturedelementcategory/object%28__%29.md): A category that’s scoped to the captured object.
- [CapturedElementCategory.surface(\_:)](capturedelementcategory/surface%28__%29.md): A category that’s scoped to the captured surface.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing object details

- [CapturedRoomAttribute](capturedroomattribute.md): Details about an object in the room that the framework observes during a scan.
