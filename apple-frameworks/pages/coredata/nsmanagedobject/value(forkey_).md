> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/value(forkey:)](https://developer.apple.com/documentation/coredata/nsmanagedobject/value(forkey:))

# value(forKey:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the value for the property specified by `key`.

## Declaration

```swift
func value(forKey key: String) -> Any?
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="return-value"></a>

## Return Value

The value of the property specified by `key`.

<a id="Discussion"></a>

## Discussion

If `key` is not a property defined by the model, the method raises an exception. This method is overridden by `NSManagedObject` to access the managed object’s generic dictionary storage unless the receiver’s class explicitly provides key-value coding compliant accessor methods for `key`.

> **Important**

>  You must not override this method.

## See Also

### Related Documentation

- [setObservationInfo(\_:)](setobservationinfo%28__%29.md): Sets the observation info of the managed object.

### Supporting Key-Value Coding

- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Sets the specified property of the managed object to the specified value.
- [primitiveValue(forKey:)](primitivevalue%28forkey_%29.md): Returns the value for the specified property from the managed object’s private internal storage .
- [setPrimitiveValue(\_:forKey:)](setprimitivevalue%28__forkey_%29.md): Sets the value of a given property in the managed object’s private internal storage.
- [objectIDs(forRelationshipNamed:)](objectids%28forrelationshipnamed_%29.md): Returns the object IDs for all of the managed objects that are in the named relationship.

# valueForKey: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the value for the property specified by `key`.

## Declaration

```objectivec
- (id) valueForKey:(NSString *) key;
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="return-value"></a>

## Return Value

The value of the property specified by `key`.

<a id="Discussion"></a>

## Discussion

If `key` is not a property defined by the model, the method raises an exception. This method is overridden by `NSManagedObject` to access the managed object’s generic dictionary storage unless the receiver’s class explicitly provides key-value coding compliant accessor methods for `key`.

> **Important**

>  You must not override this method.

## See Also

### Related Documentation

- [setObservationInfo:](setobservationinfo%28__%29.md): Sets the observation info of the managed object.

### Supporting Key-Value Coding

- [setValue:forKey:](setvalue%28__forkey_%29.md): Sets the specified property of the managed object to the specified value.
- [primitiveValueForKey:](primitivevalue%28forkey_%29.md): Returns the value for the specified property from the managed object’s private internal storage .
- [setPrimitiveValue:forKey:](setprimitivevalue%28__forkey_%29.md): Sets the value of a given property in the managed object’s private internal storage.
- [objectIDsForRelationshipNamed:](objectids%28forrelationshipnamed_%29.md): Returns the object IDs for all of the managed objects that are in the named relationship.
