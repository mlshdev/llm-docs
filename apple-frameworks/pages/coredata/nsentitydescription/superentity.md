> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/superentity](https://developer.apple.com/documentation/coredata/nsentitydescription/superentity)

# superentity (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The super-entity of the receiver.

## Declaration

```swift
unowned(unsafe) var superentity: NSEntityDescription? { get }
```

<a id="Discussion"></a>

## Discussion

If the receiver has no super-entity, returns `nil`.

## See Also

### Managing inheritance

- [subentitiesByName](subentitiesbyname.md): A dictionary containing the receiver’s sub-entities.
- [subentities](subentities.md): An array containing the sub-entities of the receiver.
- [isKindOf(entity:)](iskindof%28entity_%29.md): Returns a Boolean value that indicates whether the receiver is a sub-entity of another given entity.

# superentity (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The super-entity of the receiver.

## Declaration

```objectivec
@property (assign, readonly, nullable) NSEntityDescription * superentity;
```

<a id="Discussion"></a>

## Discussion

If the receiver has no super-entity, returns `nil`.

## See Also

### Managing inheritance

- [subentitiesByName](subentitiesbyname.md): A dictionary containing the receiver’s sub-entities.
- [subentities](subentities.md): An array containing the sub-entities of the receiver.
- [isKindOfEntity:](iskindof%28entity_%29.md): Returns a Boolean value that indicates whether the receiver is a sub-entity of another given entity.
