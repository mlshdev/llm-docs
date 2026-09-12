> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/object/category-swift.enum](https://developer.apple.com/documentation/roomplan/capturedroom/object/category-swift.enum)

# CapturedRoom.Object.Category

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Classifications of an object in a captured room.

## Declaration

```swift
enum Category
```

<a id="overview"></a>

## Overview

Each [CapturedRoom.Object](../object.md) instance in a captured room’s [objects](../objects.md) array reflects a classification ([category](category-swift.property.md)) of this type.

## Topics

### Determining the object category

- [CapturedRoom.Object.Category.bathtub](category-swift.enum/bathtub.md): A category for an object that represents a bathtub.
- [CapturedRoom.Object.Category.bed](category-swift.enum/bed.md): A category for an object that represents a bed.
- [CapturedRoom.Object.Category.chair](category-swift.enum/chair.md): A category for an object that represents a chair.
- [CapturedRoom.Object.Category.dishwasher](category-swift.enum/dishwasher.md): A category for an object that represents a dishwasher.
- [CapturedRoom.Object.Category.fireplace](category-swift.enum/fireplace.md): A category for an object that represents a fireplace.
- [CapturedRoom.Object.Category.oven](category-swift.enum/oven.md): A category for an object that represents an oven.
- [CapturedRoom.Object.Category.refrigerator](category-swift.enum/refrigerator.md): A category for an object that represents a refrigerator.
- [CapturedRoom.Object.Category.sink](category-swift.enum/sink.md): A category for an object that represents a sink.
- [CapturedRoom.Object.Category.sofa](category-swift.enum/sofa.md): A category for an object that represents a sofa.
- [CapturedRoom.Object.Category.stairs](category-swift.enum/stairs.md): A category for an object that represents stairs.
- [CapturedRoom.Object.Category.storage](category-swift.enum/storage.md): A category for an object that represents a storage area.
- [CapturedRoom.Object.Category.stove](category-swift.enum/stove.md): A category for an object that represents a stove.
- [CapturedRoom.Object.Category.table](category-swift.enum/table.md): A category for an object that represents a table.
- [CapturedRoom.Object.Category.television](category-swift.enum/television.md): A category for an object that represents a television.
- [CapturedRoom.Object.Category.toilet](category-swift.enum/toilet.md): A category for an object that represents a toilet.
- [CapturedRoom.Object.Category.washerDryer](category-swift.enum/washerdryer.md): A category for an object that represents a clothes washer or dryer.

### Determining supported attributes

- [supportedAttributeTypes](category-swift.enum/supportedattributetypes.md): Defines the attributes types compatible with a particular object category.
- [supportedCombinations](category-swift.enum/supportedcombinations.md): An array of supported attributes that differs by category.
- [supportsCombination(\_:)](category-swift.enum/supportscombination%28__%29.md): Returns a Boolean value that indicates whether a category supports the given attribute combination.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying an object

- [identifier](identifier.md): A unique alphanumeric value that the framework assigns the object.
- [parentIdentifier](parentidentifier.md): A unique alphanumeric value that identifies the object’s parent object or surface.
- [category](category-swift.property.md): A classification that the captured room assigns the object.
- [confidence](confidence.md): A level of certainty in the object’s category.
