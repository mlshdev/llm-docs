> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorycategory](https://developer.apple.com/documentation/homekit/hmaccessorycategory)

# HMAccessoryCategory (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A category for a HomeKit accessory.

## Declaration

```swift
class HMAccessoryCategory
```

<a id="overview"></a>

## Overview

A category represents a class of devices, like light bulbs or outlets. You can use a category to help users identify the types of accessories they’re browsing. For example, when adding a lamp and a fan to a home, users might not be able to distinguish these accessories if you display only the manufacturer name and model number for each accessory. To improve the user experience, you can use the category information associated with each accessory to help the user understand which accessory is the lamp and which is the fan.

## Topics

### Reading the category type

- [categoryType](hmaccessorycategory/categorytype.md): The category to which this accessory belongs.
- [Accessory Category Types](accessory-category-types.md): The accessory category types supported by HomeKit.

### Describing the category

- [localizedDescription](hmaccessorycategory/localizeddescription.md): A localized description of the category.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Categorizing an accessory

- [category](hmaccessory/category.md): The category to which the accessory belongs.

# HMAccessoryCategory (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A category for a HomeKit accessory.

## Declaration

```objectivec
@interface HMAccessoryCategory : NSObject
```

<a id="overview"></a>

## Overview

A category represents a class of devices, like light bulbs or outlets. You can use a category to help users identify the types of accessories they’re browsing. For example, when adding a lamp and a fan to a home, users might not be able to distinguish these accessories if you display only the manufacturer name and model number for each accessory. To improve the user experience, you can use the category information associated with each accessory to help the user understand which accessory is the lamp and which is the fan.

## Topics

### Reading the category type

- [categoryType](hmaccessorycategory/categorytype.md): The category to which this accessory belongs.
- [Accessory Category Types](accessory-category-types.md): The accessory category types supported by HomeKit.

### Describing the category

- [localizedDescription](hmaccessorycategory/localizeddescription.md): A localized description of the category.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Categorizing an accessory

- [category](hmaccessory/category.md): The category to which the accessory belongs.
