> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/remove(_:)](https://developer.apple.com/documentation/appkit/nsobjectcontroller/remove(_:))

# remove(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the receiver’s content object.

## Declaration

```swift
@IBAction func remove(_ sender: Any?)
```

## Parameters

- `sender`: Typically the object that invoked this method.

<a id="Discussion"></a>

## Discussion

Removes the receiver’s content object using [removeObject(\_:)](removeobject%28__%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.4 the result of this method is deferred until the next iteration of the runloop so that the error presentation mechanism can provide feedback as a sheet.

## See Also

### Managing objects

- [newObject()](newobject%28%29.md): Creates and returns a new object of the appropriate class.
- [addObject(\_:)](addobject%28__%29.md): Sets the receiver’s content object.
- [removeObject(\_:)](removeobject%28__%29.md): Removes a given object from the receiver’s content.
- [add(\_:)](add%28__%29.md): Creates a new object and sets it as the receiver’s content object.
- [canAdd](canadd.md): A Boolean value that indicates whether an object can be added to the receiver using [add(\_:)](add%28__%29.md).
- [canRemove](canremove.md): A Boolean value that indicates whether an object can be removed from the receiver.

# remove: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the receiver’s content object.

## Declaration

```objectivec
- (void) remove:(id) sender;
```

## Parameters

- `sender`: Typically the object that invoked this method.

<a id="Discussion"></a>

## Discussion

Removes the receiver’s content object using [removeObject:](removeobject%28__%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.4 the result of this method is deferred until the next iteration of the runloop so that the error presentation mechanism can provide feedback as a sheet.

## See Also

### Managing objects

- [newObject](newobject%28%29.md): Creates and returns a new object of the appropriate class.
- [addObject:](addobject%28__%29.md): Sets the receiver’s content object.
- [removeObject:](removeobject%28__%29.md): Removes a given object from the receiver’s content.
- [add:](add%28__%29.md): Creates a new object and sets it as the receiver’s content object.
- [canAdd](canadd.md): A Boolean value that indicates whether an object can be added to the receiver using [add:](add%28__%29.md).
- [canRemove](canremove.md): A Boolean value that indicates whether an object can be removed from the receiver.
