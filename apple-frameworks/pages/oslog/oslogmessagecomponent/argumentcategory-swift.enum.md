> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogmessagecomponent/argumentcategory-swift.enum](https://developer.apple.com/documentation/oslog/oslogmessagecomponent/argumentcategory-swift.enum)

# OSLogMessageComponent.ArgumentCategory (Swift)

**Framework:** OSLog  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The data type corresponding to the argument provided in a message payload.

## Declaration

```swift
enum ArgumentCategory
```

<a id="overview"></a>

## Overview

For example, `OSLogMessageComponent` can represent the number associated with a `%d` placeholder. This value can be undefined if the argument data cann’t be decoded, for example if it were redacted.

## Topics

### Constants

- [OSLogMessageComponent.ArgumentCategory.data](argumentcategory-swift.enum/data.md): The argument is an [NSData](../../foundation/nsdata.md) object.
- [OSLogMessageComponent.ArgumentCategory.double](argumentcategory-swift.enum/double.md): The argument is a double.
- [OSLogMessageComponent.ArgumentCategory.int64](argumentcategory-swift.enum/int64.md): The argument is a 64-bit signed integer.
- [OSLogMessageComponent.ArgumentCategory.string](argumentcategory-swift.enum/string.md): The argument is a string.
- [OSLogMessageComponent.ArgumentCategory.uInt64](argumentcategory-swift.enum/uint64.md): The argument is a 64-bit unsigned integer.
- [OSLogMessageComponent.ArgumentCategory.undefined](argumentcategory-swift.enum/undefined.md): The argument’s type is not defined.

### Initializers

- [init(rawValue:)](argumentcategory-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reading the Argument

- [argument](argument-swift.property.md): The argument passed into the message component.
- [OSLogMessageComponent.Argument](argument-swift.enum.md): An object representing data that corresponds to an argument in a message payload.
- [argumentCategory](argumentcategory-swift.property.md): The type of argument that corresponds to the placeholder.

# OSLogMessageComponentArgumentCategory (Objective-C)

**Framework:** OSLog  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The data type corresponding to the argument provided in a message payload.

## Declaration

```objectivec
enum OSLogMessageComponentArgumentCategory : NSInteger;
```

<a id="overview"></a>

## Overview

For example, `OSLogMessageComponent` can represent the number associated with a `%d` placeholder. This value can be undefined if the argument data cann’t be decoded, for example if it were redacted.

## Topics

### Constants

- [OSLogMessageComponentArgumentCategoryData](argumentcategory-swift.enum/data.md): The argument is an [NSData](../../foundation/nsdata.md) object.
- [OSLogMessageComponentArgumentCategoryDouble](argumentcategory-swift.enum/double.md): The argument is a double.
- [OSLogMessageComponentArgumentCategoryInt64](argumentcategory-swift.enum/int64.md): The argument is a 64-bit signed integer.
- [OSLogMessageComponentArgumentCategoryString](argumentcategory-swift.enum/string.md): The argument is a string.
- [OSLogMessageComponentArgumentCategoryUInt64](argumentcategory-swift.enum/uint64.md): The argument is a 64-bit unsigned integer.
- [OSLogMessageComponentArgumentCategoryUndefined](argumentcategory-swift.enum/undefined.md): The argument’s type is not defined.

## See Also

### Reading the Argument

- [argumentCategory](argumentcategory-swift.property.md): The type of argument that corresponds to the placeholder.
