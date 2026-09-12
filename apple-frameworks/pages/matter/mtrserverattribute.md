> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrserverattribute](https://developer.apple.com/documentation/matter/mtrserverattribute)

# MTRServerAttribute (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
class MTRServerAttribute
```

## Topics

### Initializers

- [init(readonlyAttributeWithID:initialValue:requiredPrivilege:)](mtrserverattribute/init%28readonlyattributewithid_initialvalue_requiredprivilege_%29.md)

### Instance Properties

- [attributeID](mtrserverattribute/attributeid.md)
- [isWritable](mtrserverattribute/iswritable.md)
- [requiredReadPrivilege](mtrserverattribute/requiredreadprivilege.md)
- [value](mtrserverattribute/value.md)

### Instance Methods

- [setValue(\_:)](mtrserverattribute/setvalue%28__%29.md)

### Type Methods

- [newFeatureMapAttribute(withInitialValue:)](mtrserverattribute/newfeaturemapattribute%28withinitialvalue_%29.md): Create an attribute description for a FeatureMap attribute with the provided value (expected to be an unsigned integer representing the value of the bitmap). This will automatically set requiredPrivilege to the right value for FeatureMap.

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

# MTRServerAttribute (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
@interface MTRServerAttribute : NSObject
```

## Topics

### Initializers

- [initReadonlyAttributeWithID:initialValue:requiredPrivilege:](mtrserverattribute/init%28readonlyattributewithid_initialvalue_requiredprivilege_%29.md)

### Instance Properties

- [attributeID](mtrserverattribute/attributeid.md)
- [writable](mtrserverattribute/iswritable.md)
- [requiredReadPrivilege](mtrserverattribute/requiredreadprivilege.md)
- [value](mtrserverattribute/value.md)

### Instance Methods

- [setValue:](mtrserverattribute/setvalue%28__%29.md)

### Type Methods

- [newFeatureMapAttributeWithInitialValue:](mtrserverattribute/newfeaturemapattribute%28withinitialvalue_%29.md): Create an attribute description for a FeatureMap attribute with the provided value (expected to be an unsigned integer representing the value of the bitmap). This will automatically set requiredPrivilege to the right value for FeatureMap.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
