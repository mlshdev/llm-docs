> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/newobject()](https://developer.apple.com/documentation/appkit/nsobjectcontroller/newobject())

# newObject() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates and returns a new object of the appropriate class.

## Declaration

```swift
func newObject() -> Any
```

<a id="return-value"></a>

## Return Value

A new object of the appropriate class. The returned object is implicitly retained, the sender is responsible for releasing it (with either release or autorelease).

<a id="Discussion"></a>

## Discussion

If an entity name is set (see [entityName](entityname.md)), the object created is an instance of the class specified for that entity (and the object is inserted into the receiver’s managed object context). Otherwise the object created is an instance of the class returned by [objectClass](objectclass.md).

This method is called when adding and inserting objects if [automaticallyPreparesContent](automaticallypreparescontent.md) is [true](https://developer.apple.com/documentation/swift/true).

The default implementation assumes the class returned by [objectClass](objectclass.md) has a standard  `init` method without arguments. If the object class being controlled is `NSManagedObject` (or a subclass thereof) its designated initializer ([init(entity:insertInto:)](https://developer.apple.com/documentation/coredata/nsmanagedobject/init%28entity:insertinto:%29)) is called instead, using the entity and managed object context specified for the receiver.

## See Also

### Related Documentation

- [objectClass](objectclass.md): The object class to use when creating new objects.
- [entityName](entityname.md): The entity name used by the receiver to create new objects.

### Managing objects

- [addObject(\_:)](addobject%28__%29.md): Sets the receiver’s content object.
- [removeObject(\_:)](removeobject%28__%29.md): Removes a given object from the receiver’s content.
- [add(\_:)](add%28__%29.md): Creates a new object and sets it as the receiver’s content object.
- [canAdd](canadd.md): A Boolean value that indicates whether an object can be added to the receiver using [add(\_:)](add%28__%29.md).
- [remove(\_:)](remove%28__%29.md): Removes the receiver’s content object.
- [canRemove](canremove.md): A Boolean value that indicates whether an object can be removed from the receiver.

# newObject (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates and returns a new object of the appropriate class.

## Declaration

```objectivec
- (id) newObject;
```

<a id="return-value"></a>

## Return Value

A new object of the appropriate class. The returned object is implicitly retained, the sender is responsible for releasing it (with either release or autorelease).

<a id="Discussion"></a>

## Discussion

If an entity name is set (see [entityName](entityname.md)), the object created is an instance of the class specified for that entity (and the object is inserted into the receiver’s managed object context). Otherwise the object created is an instance of the class returned by [objectClass](objectclass.md).

This method is called when adding and inserting objects if [automaticallyPreparesContent](automaticallypreparescontent.md) is [true](https://developer.apple.com/documentation/swift/true).

The default implementation assumes the class returned by [objectClass](objectclass.md) has a standard  `init` method without arguments. If the object class being controlled is `NSManagedObject` (or a subclass thereof) its designated initializer ([initWithEntity:insertIntoManagedObjectContext:](https://developer.apple.com/documentation/coredata/nsmanagedobject/init%28entity:insertinto:%29)) is called instead, using the entity and managed object context specified for the receiver.

## See Also

### Related Documentation

- [objectClass](objectclass.md): The object class to use when creating new objects.
- [entityName](entityname.md): The entity name used by the receiver to create new objects.

### Managing objects

- [addObject:](addobject%28__%29.md): Sets the receiver’s content object.
- [removeObject:](removeobject%28__%29.md): Removes a given object from the receiver’s content.
- [add:](add%28__%29.md): Creates a new object and sets it as the receiver’s content object.
- [canAdd](canadd.md): A Boolean value that indicates whether an object can be added to the receiver using [add:](add%28__%29.md).
- [remove:](remove%28__%29.md): Removes the receiver’s content object.
- [canRemove](canremove.md): A Boolean value that indicates whether an object can be removed from the receiver.
