> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsrelationshipdescription/inverserelationship](https://developer.apple.com/documentation/coredata/nsrelationshipdescription/inverserelationship)

# inverseRelationship (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The relationship that represents the inverse of the current relationship.

## Declaration

```swift
unowned(unsafe) var inverseRelationship: NSRelationshipDescription? { get set }
```

<a id="Discussion"></a>

## Discussion

The inverse relationship is the description of the current relationship from the destination entity’s perspective. For example, the inverse of a department’s relationship to an employee (a to-many relationship) is the employees’ relationship to the department (a to-one relationship).

## See Also

### Configuring the Destination

- [destinationEntity](destinationentity.md): The type of object the relationship contains.
- [isOrdered](isordered.md): A Boolean value that determines whether the relationship preserves the order of the referenced managed objects.

# inverseRelationship (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The relationship that represents the inverse of the current relationship.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) NSRelationshipDescription * inverseRelationship;
```

<a id="Discussion"></a>

## Discussion

The inverse relationship is the description of the current relationship from the destination entity’s perspective. For example, the inverse of a department’s relationship to an employee (a to-many relationship) is the employees’ relationship to the department (a to-one relationship).

## See Also

### Configuring the Destination

- [destinationEntity](destinationentity.md): The type of object the relationship contains.
- [ordered](isordered.md): A Boolean value that determines whether the relationship preserves the order of the referenced managed objects.
