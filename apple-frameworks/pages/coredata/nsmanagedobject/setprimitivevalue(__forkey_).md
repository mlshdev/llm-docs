> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/setprimitivevalue(_:forkey:)](https://developer.apple.com/documentation/coredata/nsmanagedobject/setprimitivevalue(_:forkey:))

# setPrimitiveValue(\_:forKey:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the value of a given property in the managed object’s private internal storage.

## Declaration

```swift
func setPrimitiveValue(_ value: Any?, forKey key: String)
```

## Parameters

- `value`: The new value for the property specified by `key`.
- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

Sets in the receiver’s private internal storage the value of the property specified by `key` to `value`. If `key` identifies a to-one relationship, relates the object specified by `value` to the receiver, unrelating the previously related object if there was one. Given a collection object and a key that identifies a to-many relationship, relates the objects contained in the collection to the receiver, unrelating previously related objects if there were any.

This method does not invoke the change notification methods ([willChangeValue(forKey:)](../../objectivec/nsobject-swift.class/willchangevalue%28forkey_%29.md) and [didChangeValue(forKey:)](../../objectivec/nsobject-swift.class/didchangevalue%28forkey_%29.md)). It is typically used by subclasses that implement custom accessor methods that need direct access to the receiver’s private internal storage. It is also used by the Core Data framework to initialize the receiver with values from a persistent store or to restore a value from a snapshot.

<a id="Special-Considerations"></a>

### Special Considerations

You must not override this method.

You should typically use this method only to modify attributes (usually transient), not relationships. If you try to set a to-many relationship to a new `NSMutableSet` object, it will (eventually) fail. In the unusual event that you need to modify a relationship using this method, you first get the existing set using `primitiveValueForKey:` (ensure the method does not return `nil`), create a mutable copy, and then modify the copy—as illustrated in the following example:

```objc
NSMutableSet *recentHires = [[dept primitiveValueForKey:@"recentHires"] mutableCopy];
if (recentHires != nil) {
    [recentHires removeAllObjects];
    [dept setPrimitiveValue:recentHires forKey:@"recentHires"];
}
```

If the relationship is bi-directional (that is, if an inverse relationship is specified) then you are also responsible for maintaining the inverse relationship (regardless of cardinality)—in contrast with Core Data’s normal behavior described in Using Managed Objects.

The following points also apply:

- Primitive accessor methods are only supported on *modeled* properties. If you invoke a primitive accessor on an unmodeled property, it will instead operate upon a random modeled property. (The debug libraries and frameworks from (available from the [Apple Developer Website](http://developer.apple.com/)) have assertions to test for passing unmodeled keys to these methods.)
- You are strongly encouraged to use the dynamically-generated accessors rather than using this method directly (for example, `setPrimitiveName:` instead of `setPrimitiveValue:newName forKey:@"name"`). The dynamic accessors are much more efficient, and allow for compile-time checking.

## See Also

### Related Documentation

- [awakeFromFetch()](awakefromfetch%28%29.md): Provides an opportunity to add code into the life cycle of the managed object when fufilling it from a fault.

### Supporting Key-Value Coding

- [value(forKey:)](value%28forkey_%29.md): Returns the value for the property specified by `key`.
- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Sets the specified property of the managed object to the specified value.
- [primitiveValue(forKey:)](primitivevalue%28forkey_%29.md): Returns the value for the specified property from the managed object’s private internal storage .
- [objectIDs(forRelationshipNamed:)](objectids%28forrelationshipnamed_%29.md): Returns the object IDs for all of the managed objects that are in the named relationship.

# setPrimitiveValue:forKey: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the value of a given property in the managed object’s private internal storage.

## Declaration

```objectivec
- (void) setPrimitiveValue:(id) value forKey:(NSString *) key;
```

## Parameters

- `value`: The new value for the property specified by `key`.
- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

Sets in the receiver’s private internal storage the value of the property specified by `key` to `value`. If `key` identifies a to-one relationship, relates the object specified by `value` to the receiver, unrelating the previously related object if there was one. Given a collection object and a key that identifies a to-many relationship, relates the objects contained in the collection to the receiver, unrelating previously related objects if there were any.

This method does not invoke the change notification methods ([willChangeValueForKey:](../../objectivec/nsobject-swift.class/willchangevalue%28forkey_%29.md) and [didChangeValueForKey:](../../objectivec/nsobject-swift.class/didchangevalue%28forkey_%29.md)). It is typically used by subclasses that implement custom accessor methods that need direct access to the receiver’s private internal storage. It is also used by the Core Data framework to initialize the receiver with values from a persistent store or to restore a value from a snapshot.

<a id="Special-Considerations"></a>

### Special Considerations

You must not override this method.

You should typically use this method only to modify attributes (usually transient), not relationships. If you try to set a to-many relationship to a new `NSMutableSet` object, it will (eventually) fail. In the unusual event that you need to modify a relationship using this method, you first get the existing set using `primitiveValueForKey:` (ensure the method does not return `nil`), create a mutable copy, and then modify the copy—as illustrated in the following example:

```objc
NSMutableSet *recentHires = [[dept primitiveValueForKey:@"recentHires"] mutableCopy];
if (recentHires != nil) {
    [recentHires removeAllObjects];
    [dept setPrimitiveValue:recentHires forKey:@"recentHires"];
}
```

If the relationship is bi-directional (that is, if an inverse relationship is specified) then you are also responsible for maintaining the inverse relationship (regardless of cardinality)—in contrast with Core Data’s normal behavior described in Using Managed Objects.

The following points also apply:

- Primitive accessor methods are only supported on *modeled* properties. If you invoke a primitive accessor on an unmodeled property, it will instead operate upon a random modeled property. (The debug libraries and frameworks from (available from the [Apple Developer Website](http://developer.apple.com/)) have assertions to test for passing unmodeled keys to these methods.)
- You are strongly encouraged to use the dynamically-generated accessors rather than using this method directly (for example, `setPrimitiveName:` instead of `setPrimitiveValue:newName forKey:@"name"`). The dynamic accessors are much more efficient, and allow for compile-time checking.

## See Also

### Related Documentation

- [awakeFromFetch](awakefromfetch%28%29.md): Provides an opportunity to add code into the life cycle of the managed object when fufilling it from a fault.

### Supporting Key-Value Coding

- [valueForKey:](value%28forkey_%29.md): Returns the value for the property specified by `key`.
- [setValue:forKey:](setvalue%28__forkey_%29.md): Sets the specified property of the managed object to the specified value.
- [primitiveValueForKey:](primitivevalue%28forkey_%29.md): Returns the value for the specified property from the managed object’s private internal storage .
- [objectIDsForRelationshipNamed:](objectids%28forrelationshipnamed_%29.md): Returns the object IDs for all of the managed objects that are in the named relationship.
