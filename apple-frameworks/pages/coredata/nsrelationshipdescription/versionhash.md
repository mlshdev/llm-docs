> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsrelationshipdescription/versionhash](https://developer.apple.com/documentation/coredata/nsrelationshipdescription/versionhash)

# versionHash (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The relationship’s unique identity.

## Declaration

```swift
var versionHash: Data { get }
```

<a id="Discussion"></a>

## Discussion

To calculate its version hash, the relationship combines its superclass’s [versionHash](../nspropertydescription/versionhash.md) property with the values of [inverseRelationship](inverserelationship.md), [destinationEntity](destinationentity.md), [minCount](mincount.md), and [maxCount](maxcount.md).

# versionHash (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The relationship’s unique identity.

## Declaration

```objectivec
@property (copy, readonly) NSData * versionHash;
```

<a id="Discussion"></a>

## Discussion

To calculate its version hash, the relationship combines its superclass’s [versionHash](../nspropertydescription/versionhash.md) property with the values of [inverseRelationship](inverserelationship.md), [destinationEntity](destinationentity.md), [minCount](mincount.md), and [maxCount](maxcount.md).
