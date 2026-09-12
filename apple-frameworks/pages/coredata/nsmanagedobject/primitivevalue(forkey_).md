> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/primitivevalue(forkey:)](https://developer.apple.com/documentation/coredata/nsmanagedobject/primitivevalue(forkey:))

# primitiveValue(forKey:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the value for the specified property from the managed object’s private internal storage .

## Declaration

```swift
func primitiveValue(forKey key: String) -> Any?
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="return-value"></a>

## Return Value

The value of the property specified by `key`. Returns `nil` if no value has been set.

<a id="Discussion"></a>

## Discussion

This method does not invoke the access notification methods ([willAccessValue(forKey:)](willaccessvalue%28forkey_%29.md) and [didAccessValue(forKey:)](didaccessvalue%28forkey_%29.md)). This method is used primarily by subclasses that implement custom accessor methods that need direct access to the receiver’s private storage.

<a id="Special-Considerations"></a>

### Special Considerations

Subclasses should not override this method.

The following points also apply:

- Primitive accessor methods are only supported on *modeled* properties. If you invoke a primitive accessor on an unmodeled property, it will instead operate upon a random modeled property. (The debug libraries and frameworks (available from [Apple Developer Website](http://developer.apple.com/)) have assertions to test for passing unmodeled keys to these methods.)
- You are strongly encouraged to use the dynamically-generated accessors rather than using this method directly (for example, `primitiveName:` instead of `primitiveValueForKey:@"name"`). The dynamic accessors are much more efficient, and allow for compile-time checking.

## See Also

### Related Documentation

- [setObservationInfo(\_:)](setobservationinfo%28__%29.md): Sets the observation info of the managed object.

### Supporting Key-Value Coding

- [value(forKey:)](value%28forkey_%29.md): Returns the value for the property specified by `key`.
- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Sets the specified property of the managed object to the specified value.
- [setPrimitiveValue(\_:forKey:)](setprimitivevalue%28__forkey_%29.md): Sets the value of a given property in the managed object’s private internal storage.
- [objectIDs(forRelationshipNamed:)](objectids%28forrelationshipnamed_%29.md): Returns the object IDs for all of the managed objects that are in the named relationship.

# primitiveValueForKey: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the value for the specified property from the managed object’s private internal storage .

## Declaration

```objectivec
- (id) primitiveValueForKey:(NSString *) key;
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="return-value"></a>

## Return Value

The value of the property specified by `key`. Returns `nil` if no value has been set.

<a id="Discussion"></a>

## Discussion

This method does not invoke the access notification methods ([willAccessValueForKey:](willaccessvalue%28forkey_%29.md) and [didAccessValueForKey:](didaccessvalue%28forkey_%29.md)). This method is used primarily by subclasses that implement custom accessor methods that need direct access to the receiver’s private storage.

<a id="Special-Considerations"></a>

### Special Considerations

Subclasses should not override this method.

The following points also apply:

- Primitive accessor methods are only supported on *modeled* properties. If you invoke a primitive accessor on an unmodeled property, it will instead operate upon a random modeled property. (The debug libraries and frameworks (available from [Apple Developer Website](http://developer.apple.com/)) have assertions to test for passing unmodeled keys to these methods.)
- You are strongly encouraged to use the dynamically-generated accessors rather than using this method directly (for example, `primitiveName:` instead of `primitiveValueForKey:@"name"`). The dynamic accessors are much more efficient, and allow for compile-time checking.

## See Also

### Related Documentation

- [setObservationInfo:](setobservationinfo%28__%29.md): Sets the observation info of the managed object.

### Supporting Key-Value Coding

- [valueForKey:](value%28forkey_%29.md): Returns the value for the property specified by `key`.
- [setValue:forKey:](setvalue%28__forkey_%29.md): Sets the specified property of the managed object to the specified value.
- [setPrimitiveValue:forKey:](setprimitivevalue%28__forkey_%29.md): Sets the value of a given property in the managed object’s private internal storage.
- [objectIDsForRelationshipNamed:](objectids%28forrelationshipnamed_%29.md): Returns the object IDs for all of the managed objects that are in the named relationship.
