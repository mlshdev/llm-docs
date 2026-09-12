> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityquerycomparatorsbuilder/buildexpression(_:)-8jx4k](https://developer.apple.com/documentation/appintents/entityquerycomparatorsbuilder/buildexpression(_:)-8jx4k)

# buildExpression(\_:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func buildExpression<InputType>(_ expression: IsBetweenComparator<Property, PropertyType, InputType, ComparatorMappingType>) -> AnyEntityQueryComparator<Entity, Subject, Property, PropertyType, ComparatorMappingType> where InputType : Comparable, InputType == PropertyType.UnwrappedType
```

## See Also

### Building query comparators

- [buildBlock(\_:)](buildblock%28__%29.md)
- [AnyEntityQueryComparator](../anyentityquerycomparator.md): A type that erases the type information of the underlying query comparator.
- [buildExpression(\_:)](buildexpression%28__%29-4g6f9.md)
- [buildExpression(\_:)](buildexpression%28__%29-5tlbq.md)
- [buildExpression(\_:)](buildexpression%28__%29-6v6cj.md)
- [EntityQueryComparator](../entityquerycomparator.md): The base class for all concrete entity query comparators.
