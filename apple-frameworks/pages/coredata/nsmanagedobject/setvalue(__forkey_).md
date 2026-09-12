> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/setvalue(_:forkey:)](https://developer.apple.com/documentation/coredata/nsmanagedobject/setvalue(_:forkey:))

# setValue(\_:forKey:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the specified property of the managed object to the specified value.

## Declaration

```swift
func setValue(_ value: Any?, forKey key: String)
```

## Parameters

- `value`: The new value for the property specified by `key`.
- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

If `key` is not a property defined by the model, the method raises an exception. If `key` identifies a to-one relationship, relates the object specified by `value` to the receiver, unrelating the previously related object if there was one. Given a collection object and a key that identifies a to-many relationship, relates the objects contained in the collection to the receiver, unrelating previously related objects if there were any.

This method is overridden by `NSManagedObject` to access the managed object’s generic dictionary storage unless the receiver’s class explicitly provides key-value coding compliant accessor methods for `key`.

> **Important**

>  You must not override this method.

## See Also

### Related Documentation

- [setObservationInfo(\_:)](setobservationinfo%28__%29.md): Sets the observation info of the managed object.

### Supporting Key-Value Coding

- [value(forKey:)](value%28forkey_%29.md): Returns the value for the property specified by `key`.
- [primitiveValue(forKey:)](primitivevalue%28forkey_%29.md): Returns the value for the specified property from the managed object’s private internal storage .
- [setPrimitiveValue(\_:forKey:)](setprimitivevalue%28__forkey_%29.md): Sets the value of a given property in the managed object’s private internal storage.
- [objectIDs(forRelationshipNamed:)](objectids%28forrelationshipnamed_%29.md): Returns the object IDs for all of the managed objects that are in the named relationship.

# setValue:forKey: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the specified property of the managed object to the specified value.

## Declaration

```objectivec
- (void) setValue:(id) value forKey:(NSString *) key;
```

## Parameters

- `value`: The new value for the property specified by `key`.
- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

If `key` is not a property defined by the model, the method raises an exception. If `key` identifies a to-one relationship, relates the object specified by `value` to the receiver, unrelating the previously related object if there was one. Given a collection object and a key that identifies a to-many relationship, relates the objects contained in the collection to the receiver, unrelating previously related objects if there were any.

This method is overridden by `NSManagedObject` to access the managed object’s generic dictionary storage unless the receiver’s class explicitly provides key-value coding compliant accessor methods for `key`.

> **Important**

>  You must not override this method.

## See Also

### Related Documentation

- [setObservationInfo:](setobservationinfo%28__%29.md): Sets the observation info of the managed object.

### Supporting Key-Value Coding

- [valueForKey:](value%28forkey_%29.md): Returns the value for the property specified by `key`.
- [primitiveValueForKey:](primitivevalue%28forkey_%29.md): Returns the value for the specified property from the managed object’s private internal storage .
- [setPrimitiveValue:forKey:](setprimitivevalue%28__forkey_%29.md): Sets the value of a given property in the managed object’s private internal storage.
- [objectIDsForRelationshipNamed:](objectids%28forrelationshipnamed_%29.md): Returns the object IDs for all of the managed objects that are in the named relationship.
