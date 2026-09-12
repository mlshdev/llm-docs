> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/addobject(_:)](https://developer.apple.com/documentation/appkit/nsobjectcontroller/addobject(_:))

# addObject(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the receiver’s content object.

## Declaration

```swift
func addObject(_ object: Any)
```

## Parameters

- `object`: The content object for the receiver.

<a id="Discussion"></a>

## Discussion

If the receiver’s content is bound to another (primary) object or controller through a relationship key, the relationship of the primary object is changed. In a tree-like structure, the object is added after the current selection at the same depth. If there is no selection, the object is appended to the child nodes of the tree’s arranged objects.

## See Also

### Managing objects

- [newObject()](newobject%28%29.md): Creates and returns a new object of the appropriate class.
- [removeObject(\_:)](removeobject%28__%29.md): Removes a given object from the receiver’s content.
- [add(\_:)](add%28__%29.md): Creates a new object and sets it as the receiver’s content object.
- [canAdd](canadd.md): A Boolean value that indicates whether an object can be added to the receiver using [add(\_:)](add%28__%29.md).
- [remove(\_:)](remove%28__%29.md): Removes the receiver’s content object.
- [canRemove](canremove.md): A Boolean value that indicates whether an object can be removed from the receiver.

# addObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the receiver’s content object.

## Declaration

```objectivec
- (void) addObject:(id) object;
```

## Parameters

- `object`: The content object for the receiver.

<a id="Discussion"></a>

## Discussion

If the receiver’s content is bound to another (primary) object or controller through a relationship key, the relationship of the primary object is changed. In a tree-like structure, the object is added after the current selection at the same depth. If there is no selection, the object is appended to the child nodes of the tree’s arranged objects.

## See Also

### Managing objects

- [newObject](newobject%28%29.md): Creates and returns a new object of the appropriate class.
- [removeObject:](removeobject%28__%29.md): Removes a given object from the receiver’s content.
- [add:](add%28__%29.md): Creates a new object and sets it as the receiver’s content object.
- [canAdd](canadd.md): A Boolean value that indicates whether an object can be added to the receiver using [add:](add%28__%29.md).
- [remove:](remove%28__%29.md): Removes the receiver’s content object.
- [canRemove](canremove.md): A Boolean value that indicates whether an object can be removed from the receiver.
