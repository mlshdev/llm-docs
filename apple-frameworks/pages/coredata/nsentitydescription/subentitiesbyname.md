> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/subentitiesbyname](https://developer.apple.com/documentation/coredata/nsentitydescription/subentitiesbyname)

# subentitiesByName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A dictionary containing the receiver’s sub-entities.

## Declaration

```swift
var subentitiesByName: [String : NSEntityDescription] { get }
```

<a id="return-value"></a>

## Return Value

The keys in the dictionary are the sub-entity names, the corresponding values are instances of `NSEntityDescription`.

## See Also

### Managing inheritance

- [subentities](subentities.md): An array containing the sub-entities of the receiver.
- [superentity](superentity.md): The super-entity of the receiver.
- [isKindOf(entity:)](iskindof%28entity_%29.md): Returns a Boolean value that indicates whether the receiver is a sub-entity of another given entity.

# subentitiesByName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A dictionary containing the receiver’s sub-entities.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,NSEntityDescription *> * subentitiesByName;
```

<a id="return-value"></a>

## Return Value

The keys in the dictionary are the sub-entity names, the corresponding values are instances of `NSEntityDescription`.

## See Also

### Managing inheritance

- [subentities](subentities.md): An array containing the sub-entities of the receiver.
- [superentity](superentity.md): The super-entity of the receiver.
- [isKindOfEntity:](iskindof%28entity_%29.md): Returns a Boolean value that indicates whether the receiver is a sub-entity of another given entity.
