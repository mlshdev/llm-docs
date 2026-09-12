> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchindexelementdescription/property](https://developer.apple.com/documentation/coredata/nsfetchindexelementdescription/property)

# property (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A property description.

## Declaration

```swift
var property: NSPropertyDescription? { get }
```

<a id="Discussion"></a>

## Discussion

This property may also be an [NSExpressionDescription](../nsexpressiondescription.md) that expresses a function.

## See Also

### Inspecting an Index Element Description

- [collationType](collationtype.md): The type of collation that the index element uses, either binary or R-tree.
- [indexDescription](indexdescription.md)
- [isAscending](isascending.md): A Boolean value that controls whether an index that supports direction is an ascending or descending index.
- [propertyName](propertyname.md): The specified name in the property description.

# property (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A property description.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSPropertyDescription * property;
```

<a id="Discussion"></a>

## Discussion

This property may also be an [NSExpressionDescription](../nsexpressiondescription.md) that expresses a function.

## See Also

### Inspecting an Index Element Description

- [collationType](collationtype.md): The type of collation that the index element uses, either binary or R-tree.
- [indexDescription](indexdescription.md)
- [ascending](isascending.md): A Boolean value that controls whether an index that supports direction is an ascending or descending index.
- [propertyName](propertyname.md): The specified name in the property description.
