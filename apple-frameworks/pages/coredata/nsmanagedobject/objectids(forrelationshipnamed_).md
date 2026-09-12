> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/objectids(forrelationshipnamed:)](https://developer.apple.com/documentation/coredata/nsmanagedobject/objectids(forrelationshipnamed:))

# objectIDs(forRelationshipNamed:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the object IDs for all of the managed objects that are in the named relationship.

## Declaration

```swift
func objectIDs(forRelationshipNamed key: String) -> [NSManagedObjectID]
```

## See Also

### Supporting Key-Value Coding

- [value(forKey:)](value%28forkey_%29.md): Returns the value for the property specified by `key`.
- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Sets the specified property of the managed object to the specified value.
- [primitiveValue(forKey:)](primitivevalue%28forkey_%29.md): Returns the value for the specified property from the managed object’s private internal storage .
- [setPrimitiveValue(\_:forKey:)](setprimitivevalue%28__forkey_%29.md): Sets the value of a given property in the managed object’s private internal storage.

# objectIDsForRelationshipNamed: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the object IDs for all of the managed objects that are in the named relationship.

## Declaration

```objectivec
- (NSArray<NSManagedObjectID *> *) objectIDsForRelationshipNamed:(NSString *) key;
```

## See Also

### Supporting Key-Value Coding

- [valueForKey:](value%28forkey_%29.md): Returns the value for the property specified by `key`.
- [setValue:forKey:](setvalue%28__forkey_%29.md): Sets the specified property of the managed object to the specified value.
- [primitiveValueForKey:](primitivevalue%28forkey_%29.md): Returns the value for the specified property from the managed object’s private internal storage .
- [setPrimitiveValue:forKey:](setprimitivevalue%28__forkey_%29.md): Sets the value of a given property in the managed object’s private internal storage.
