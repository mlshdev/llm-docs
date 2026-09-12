> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/add(_:)](https://developer.apple.com/documentation/appkit/nsobjectcontroller/add(_:))

# add(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new object and sets it as the receiver’s content object.

## Declaration

```swift
@IBAction func add(_ sender: Any?)
```

## Parameters

- `sender`: Typically the object that invoked this method.

<a id="Discussion"></a>

## Discussion

Creates a new object of the appropriate entity (specified by [entityName](entityname.md)) or class (specified by [objectClass](objectclass.md))—see [newObject()](newobject%28%29.md)—and sets it as the receiver’s content object using [addObject(\_:)](addobject%28__%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.4 the result of this method is deferred until the next iteration of the runloop so that the error presentation mechanism can provide feedback as a sheet.

## See Also

### Managing objects

- [newObject()](newobject%28%29.md): Creates and returns a new object of the appropriate class.
- [addObject(\_:)](addobject%28__%29.md): Sets the receiver’s content object.
- [removeObject(\_:)](removeobject%28__%29.md): Removes a given object from the receiver’s content.
- [canAdd](canadd.md): A Boolean value that indicates whether an object can be added to the receiver using [add(\_:)](add%28__%29.md).
- [remove(\_:)](remove%28__%29.md): Removes the receiver’s content object.
- [canRemove](canremove.md): A Boolean value that indicates whether an object can be removed from the receiver.

# add: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new object and sets it as the receiver’s content object.

## Declaration

```objectivec
- (void) add:(id) sender;
```

## Parameters

- `sender`: Typically the object that invoked this method.

<a id="Discussion"></a>

## Discussion

Creates a new object of the appropriate entity (specified by [entityName](entityname.md)) or class (specified by [objectClass](objectclass.md))—see [newObject](newobject%28%29.md)—and sets it as the receiver’s content object using [addObject:](addobject%28__%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.4 the result of this method is deferred until the next iteration of the runloop so that the error presentation mechanism can provide feedback as a sheet.

## See Also

### Managing objects

- [newObject](newobject%28%29.md): Creates and returns a new object of the appropriate class.
- [addObject:](addobject%28__%29.md): Sets the receiver’s content object.
- [removeObject:](removeobject%28__%29.md): Removes a given object from the receiver’s content.
- [canAdd](canadd.md): A Boolean value that indicates whether an object can be added to the receiver using [add:](add%28__%29.md).
- [remove:](remove%28__%29.md): Removes the receiver’s content object.
- [canRemove](canremove.md): A Boolean value that indicates whether an object can be removed from the receiver.
