> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsrelationshipdescription/isordered](https://developer.apple.com/documentation/coredata/nsrelationshipdescription/isordered)

# isOrdered (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the relationship preserves the order of the referenced managed objects.

## Declaration

```swift
var isOrdered: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Destination

- [inverseRelationship](inverserelationship.md): The relationship that represents the inverse of the current relationship.
- [destinationEntity](destinationentity.md): The type of object the relationship contains.

# ordered (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the relationship preserves the order of the referenced managed objects.

## Declaration

```objectivec
@property (getter=isOrdered) BOOL ordered;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Destination

- [inverseRelationship](inverserelationship.md): The relationship that represents the inverse of the current relationship.
- [destinationEntity](destinationentity.md): The type of object the relationship contains.
