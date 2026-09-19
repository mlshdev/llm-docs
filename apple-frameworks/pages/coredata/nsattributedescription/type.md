> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsattributedescription/type

# type

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The attribute’s type.

## Declaration

```swift
var type: NSAttributeDescription.AttributeType { get set }
```

<a id="Discussion"></a>

## Discussion

Don’t change an attribute’s type after you add its containing managed object model to a persistent store coordinator; otherwise, Core Data throws an exception.

## See Also

### Managing the type

- [attributeValueClassName](attributevalueclassname.md): The class name that represents the attribute’s value.
- [NSAttributeDescription.AttributeType](attributetype-swift.struct.md): The types of attributes that Core Data supports.
- [attributeType](attributetype-swift.property.md): Deprecated. The attribute’s type.
- [NSAttributeType](../nsattributetype.md): The types of attribute that Core Data supports.
