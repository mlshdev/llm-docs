> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymapping/sourceexpression](https://developer.apple.com/documentation/coredata/nsentitymapping/sourceexpression)

# sourceExpression (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The source expression for the entity mapping.

## Declaration

```swift
var sourceExpression: NSExpression? { get set }
```

<a id="Discussion"></a>

## Discussion

The source expression is used to obtain the collection of managed objects to process through the mapping. The expression can be a fetch request expression, or any other expression that evaluates to a collection.

## See Also

### Managing Source Information

- [sourceEntityName](sourceentityname.md): The source entity name for the entity mapping.
- [sourceEntityVersionHash](sourceentityversionhash.md): The version hash of the source entity for the entity mapping.

# sourceExpression (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The source expression for the entity mapping.

## Declaration

```objectivec
@property (strong, nullable) NSExpression * sourceExpression;
```

<a id="Discussion"></a>

## Discussion

The source expression is used to obtain the collection of managed objects to process through the mapping. The expression can be a fetch request expression, or any other expression that evaluates to a collection.

## See Also

### Managing Source Information

- [sourceEntityName](sourceentityname.md): The source entity name for the entity mapping.
- [sourceEntityVersionHash](sourceentityversionhash.md): The version hash of the source entity for the entity mapping.
