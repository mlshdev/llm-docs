> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsattributedescription/attributetype-swift.property](https://developer.apple.com/documentation/coredata/nsattributedescription/attributetype-swift.property)

# attributeType (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The attribute’s type.

> Use [type](type.md) instead.

## Declaration

```swift
var attributeType: NSAttributeType { get set }
```

<a id="Discussion"></a>

## Discussion

Don’t change an attribute’s type after you add its containing managed object model to a persistent store coordinator; otherwise, Core Data throws an exception.

## See Also

### Managing the type

- [attributeValueClassName](attributevalueclassname.md): The class name that represents the attribute’s value.
- [type](type.md): The attribute’s type.
- [NSAttributeDescription.AttributeType](attributetype-swift.struct.md): The types of attributes that Core Data supports.
- [NSAttributeType](../nsattributetype.md): The types of attribute that Core Data supports.

# attributeType (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The attribute’s type.

> Use [type](type.md) instead.

## Declaration

```objectivec
@property NSAttributeType attributeType;
```

<a id="Discussion"></a>

## Discussion

Don’t change an attribute’s type after you add its containing managed object model to a persistent store coordinator; otherwise, Core Data throws an exception.

## See Also

### Managing the type

- [attributeValueClassName](attributevalueclassname.md): The class name that represents the attribute’s value.
- [NSAttributeType](../nsattributetype.md): The types of attribute that Core Data supports.
