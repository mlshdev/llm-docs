> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inobjectcollection](https://developer.apple.com/documentation/intents/inobjectcollection)

# INObjectCollection (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
class INObjectCollection<ObjectType> where ObjectType : AnyObject
```

## Topics

### Initializers

- [init(coder:)](inobjectcollection/init%28coder_%29.md)
- [init(items:)](inobjectcollection/init%28items_%29.md)
- [init(sections:)](inobjectcollection/init%28sections_%29.md)

### Instance Properties

- [allItems](inobjectcollection/allitems.md)
- [sections](inobjectcollection/sections.md)
- [usesIndexedCollation](inobjectcollection/usesindexedcollation.md)

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
- [INObjectSection](inobjectsection.md)

# INObjectCollection (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```objectivec
@interface INObjectCollection : NSObject
```

## Topics

### Instance Properties

- [allItems](inobjectcollection/allitems.md)
- [sections](inobjectcollection/sections.md)
- [usesIndexedCollation](inobjectcollection/usesindexedcollation.md)

### Instance Methods

- [initWithItems:](inobjectcollection/init%28items_%29.md)
- [initWithSections:](inobjectcollection/init%28sections_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Custom Objects

- [INObject](inobject.md): A representation of a custom intent parameter or response property.
- [INObjectSection](inobjectsection.md)
