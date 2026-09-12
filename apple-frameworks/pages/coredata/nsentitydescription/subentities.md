> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/subentities](https://developer.apple.com/documentation/coredata/nsentitydescription/subentities)

# subentities (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An array containing the sub-entities of the receiver.

## Declaration

```swift
var subentities: [NSEntityDescription] { get set }
```

<a id="Discussion"></a>

## Discussion

The sub-entities are instances of `NSEntityDescription`.

<a id="Special-Considerations"></a>

### Special Considerations

Setting the sub-entities raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Managing inheritance

- [subentitiesByName](subentitiesbyname.md): A dictionary containing the receiver’s sub-entities.
- [superentity](superentity.md): The super-entity of the receiver.
- [isKindOf(entity:)](iskindof%28entity_%29.md): Returns a Boolean value that indicates whether the receiver is a sub-entity of another given entity.

# subentities (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An array containing the sub-entities of the receiver.

## Declaration

```objectivec
@property (strong) NSArray<NSEntityDescription *> * subentities;
```

<a id="Discussion"></a>

## Discussion

The sub-entities are instances of `NSEntityDescription`.

<a id="Special-Considerations"></a>

### Special Considerations

Setting the sub-entities raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Managing inheritance

- [subentitiesByName](subentitiesbyname.md): A dictionary containing the receiver’s sub-entities.
- [superentity](superentity.md): The super-entity of the receiver.
- [isKindOfEntity:](iskindof%28entity_%29.md): Returns a Boolean value that indicates whether the receiver is a sub-entity of another given entity.
