> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroomattribute](https://developer.apple.com/documentation/roomplan/capturedroomattribute)

# CapturedRoomAttribute

**Framework:** RoomPlan  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Details about an object in the room that the framework observes during a scan.

## Declaration

```swift
protocol CapturedRoomAttribute : CaseIterable, RawRepresentable, Sendable where Self.RawValue == String
```

<a id="overview"></a>

## Overview

If the framework identifies details about an [CapturedRoom.Object](capturedroom/object.md) during a scan, it adds an adopter of this protocol that represents that detail to the object’s [attributes](capturedroom/object/attributes.md) array. For example, details the framework recognizes as a stool with a star-shaped base contains both of the [ChairType.stool](chairtype/stool.md) and [ChairLegType.star](chairlegtype/star.md) options in the `attributes` array for the object that represents the physical stool.

## Topics

### Identifying an attribute

- [shortIdentifier](capturedroomattribute/shortidentifier.md): A human-readable identifier for the attribute.

### Determining an attribute’s category

- [parentCategory](capturedroomattribute/parentcategory.md): A category to which this room attribute belongs.

## Relationships

### Inherits From

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [ChairArmType](chairarmtype.md)
- [ChairBackType](chairbacktype.md)
- [ChairLegType](chairlegtype.md)
- [ChairType](chairtype.md)
- [SofaType](sofatype.md)
- [StorageType](storagetype.md)
- [TableShapeType](tableshapetype.md)
- [TableType](tabletype.md)

## See Also

### Accessing object details

- [CapturedElementCategory](capturedelementcategory.md): The category of the particular object or surface.
