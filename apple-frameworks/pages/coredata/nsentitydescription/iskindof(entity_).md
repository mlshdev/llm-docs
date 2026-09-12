> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/iskindof(entity:)](https://developer.apple.com/documentation/coredata/nsentitydescription/iskindof(entity:))

# isKindOf(entity:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the receiver is a sub-entity of another given entity.

## Declaration

```swift
func isKindOf(entity: NSEntityDescription) -> Bool
```

## Parameters

- `entity`: An entity.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver is a sub-entity of `entity`, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing inheritance

- [subentitiesByName](subentitiesbyname.md): A dictionary containing the receiver’s sub-entities.
- [subentities](subentities.md): An array containing the sub-entities of the receiver.
- [superentity](superentity.md): The super-entity of the receiver.

# isKindOfEntity: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the receiver is a sub-entity of another given entity.

## Declaration

```objectivec
- (BOOL) isKindOfEntity:(NSEntityDescription *) entity;
```

## Parameters

- `entity`: An entity.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver is a sub-entity of `entity`, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing inheritance

- [subentitiesByName](subentitiesbyname.md): A dictionary containing the receiver’s sub-entities.
- [subentities](subentities.md): An array containing the sub-entities of the receiver.
- [superentity](superentity.md): The super-entity of the receiver.
