> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inobjectsection](https://developer.apple.com/documentation/intents/inobjectsection)

# INObjectSection (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
class INObjectSection<ObjectType> where ObjectType : AnyObject
```

## Topics

### Initializers

- [init(coder:)](inobjectsection/init%28coder_%29.md)
- [init(title:items:)](inobjectsection/init%28title_items_%29.md)

### Instance Properties

- [items](inobjectsection/items.md)
- [title](inobjectsection/title.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Custom Objects

- [INObject](inobject.md): A representation of a custom intent parameter or response property.
- [INObjectCollection](inobjectcollection.md)

# INObjectSection (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```objectivec
@interface INObjectSection : NSObject
```

## Topics

### Instance Properties

- [items](inobjectsection/items.md)
- [title](inobjectsection/title.md)

### Instance Methods

- [initWithTitle:items:](inobjectsection/init%28title_items_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Custom Objects

- [INObject](inobject.md): A representation of a custom intent parameter or response property.
- [INObjectCollection](inobjectcollection.md)
