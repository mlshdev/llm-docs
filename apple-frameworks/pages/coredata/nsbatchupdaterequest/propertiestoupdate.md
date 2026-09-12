> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchupdaterequest/propertiestoupdate](https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/propertiestoupdate)

# propertiesToUpdate (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A dictionary of property description pairs that describe the updates.

## Declaration

```swift
var propertiesToUpdate: [AnyHashable : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

The dictionary keys are either [NSPropertyDescription](../nspropertydescription.md) objects or strings that identify the property name.

The dictionary values are either a constant value or an [NSExpression](../../foundation/nsexpression.md) that evaluates to a scalar value.

## See Also

### Configuring a Request

- [entity](entity.md): The managed entity to update data for.
- [entityName](entityname.md): The name of the managed entity to update data for.
- [includesSubentities](includessubentities.md): A Boolean value that indicates whether to update subentities.
- [predicate](predicate.md): A predicate that identifies the objects to update.
- [resultType](resulttype.md): The type of result that Core Data returns from the request.

# propertiesToUpdate (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A dictionary of property description pairs that describe the updates.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary * propertiesToUpdate;
```

<a id="Discussion"></a>

## Discussion

The dictionary keys are either [NSPropertyDescription](../nspropertydescription.md) objects or strings that identify the property name.

The dictionary values are either a constant value or an [NSExpression](../../foundation/nsexpression.md) that evaluates to a scalar value.

## See Also

### Configuring a Request

- [entity](entity.md): The managed entity to update data for.
- [entityName](entityname.md): The name of the managed entity to update data for.
- [includesSubentities](includessubentities.md): A Boolean value that indicates whether to update subentities.
- [predicate](predicate.md): A predicate that identifies the objects to update.
- [resultType](resulttype.md): The type of result that Core Data returns from the request.
