> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/removeobject(_:)](https://developer.apple.com/documentation/appkit/nsobjectcontroller/removeobject(_:))

# removeObject(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes a given object from the receiver’s content.

## Declaration

```swift
func removeObject(_ object: Any)
```

## Parameters

- `object`: The object to remove from the receiver.

<a id="Discussion"></a>

## Discussion

If `object` is the receiver’s content object, the receiver’s content is set to `nil`. If the receiver’s content is bound to another (primary) object or controller through a relationship key, the relationship of the primary object is cleared.

## See Also

### Managing objects

- [newObject()](newobject%28%29.md): Creates and returns a new object of the appropriate class.
- [addObject(\_:)](addobject%28__%29.md): Sets the receiver’s content object.
- [add(\_:)](add%28__%29.md): Creates a new object and sets it as the receiver’s content object.
- [canAdd](canadd.md): A Boolean value that indicates whether an object can be added to the receiver using [add(\_:)](add%28__%29.md).
- [remove(\_:)](remove%28__%29.md): Removes the receiver’s content object.
- [canRemove](canremove.md): A Boolean value that indicates whether an object can be removed from the receiver.

# removeObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes a given object from the receiver’s content.

## Declaration

```objectivec
- (void) removeObject:(id) object;
```

## Parameters

- `object`: The object to remove from the receiver.

<a id="Discussion"></a>

## Discussion

If `object` is the receiver’s content object, the receiver’s content is set to `nil`. If the receiver’s content is bound to another (primary) object or controller through a relationship key, the relationship of the primary object is cleared.

## See Also

### Managing objects

- [newObject](newobject%28%29.md): Creates and returns a new object of the appropriate class.
- [addObject:](addobject%28__%29.md): Sets the receiver’s content object.
- [add:](add%28__%29.md): Creates a new object and sets it as the receiver’s content object.
- [canAdd](canadd.md): A Boolean value that indicates whether an object can be added to the receiver using [add:](add%28__%29.md).
- [remove:](remove%28__%29.md): Removes the receiver’s content object.
- [canRemove](canremove.md): A Boolean value that indicates whether an object can be removed from the receiver.
