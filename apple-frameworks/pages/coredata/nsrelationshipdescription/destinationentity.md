> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsrelationshipdescription/destinationentity](https://developer.apple.com/documentation/coredata/nsrelationshipdescription/destinationentity)

# destinationEntity (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The type of object the relationship contains.

## Declaration

```swift
unowned(unsafe) var destinationEntity: NSEntityDescription? { get set }
```

## See Also

### Configuring the Destination

- [inverseRelationship](inverserelationship.md): The relationship that represents the inverse of the current relationship.
- [isOrdered](isordered.md): A Boolean value that determines whether the relationship preserves the order of the referenced managed objects.

# destinationEntity (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The type of object the relationship contains.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) NSEntityDescription * destinationEntity;
```

## See Also

### Configuring the Destination

- [inverseRelationship](inverserelationship.md): The relationship that represents the inverse of the current relationship.
- [ordered](isordered.md): A Boolean value that determines whether the relationship preserves the order of the referenced managed objects.
