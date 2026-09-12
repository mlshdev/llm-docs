> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/compoundindexes](https://developer.apple.com/documentation/coredata/nsentitydescription/compoundindexes)

# compoundIndexes (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 11.0) · iPadOS 3.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

The compound indexes for the entity as an array of arrays.

> Use NSEntityDescription.indexes instead

## Declaration

```swift
var compoundIndexes: [[Any]] { get set }
```

<a id="Discussion"></a>

## Discussion

The arrays contained in the returned array contain instances of `NSAttributeDescription`, `NSRelationshipDescription` that represent properties of the entity, or of `NSString` that match the name of attributes or relationships of the entity.

Compound indexes are only used by stores that natively support compound indices—setting them is only advisory. Indexes apply to the entire inheritance hierarchy.

## See Also

### Configuring indexes and constraints

- [indexes](indexes.md): An array of fetch index descriptions for the entity.
- [uniquenessConstraints](uniquenessconstraints.md): An array of arrays that contains one or more attributes with a value that must be unique over the instances of that entity.

# compoundIndexes (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 11.0) · iPadOS 3.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

The compound indexes for the entity as an array of arrays.

> Use NSEntityDescription.indexes instead

## Declaration

```objectivec
@property (strong) NSArray<NSArray<id> *> * compoundIndexes;
```

<a id="Discussion"></a>

## Discussion

The arrays contained in the returned array contain instances of `NSAttributeDescription`, `NSRelationshipDescription` that represent properties of the entity, or of `NSString` that match the name of attributes or relationships of the entity.

Compound indexes are only used by stores that natively support compound indices—setting them is only advisory. Indexes apply to the entire inheritance hierarchy.

## See Also

### Configuring indexes and constraints

- [indexes](indexes.md): An array of fetch index descriptions for the entity.
- [uniquenessConstraints](uniquenessconstraints.md): An array of arrays that contains one or more attributes with a value that must be unique over the instances of that entity.
