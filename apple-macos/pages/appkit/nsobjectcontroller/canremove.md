> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/canremove](https://developer.apple.com/documentation/appkit/nsobjectcontroller/canremove)

# canRemove (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether an object can be removed from the receiver.

## Declaration

```swift
var canRemove: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Bindings can use this method to control the enabling of user interface objects.

This property is observable using key-value observing.

## See Also

### Managing objects

- [newObject()](newobject%28%29.md): Creates and returns a new object of the appropriate class.
- [addObject(\_:)](addobject%28__%29.md): Sets the receiver’s content object.
- [removeObject(\_:)](removeobject%28__%29.md): Removes a given object from the receiver’s content.
- [add(\_:)](add%28__%29.md): Creates a new object and sets it as the receiver’s content object.
- [canAdd](canadd.md): A Boolean value that indicates whether an object can be added to the receiver using [add(\_:)](add%28__%29.md).
- [remove(\_:)](remove%28__%29.md): Removes the receiver’s content object.

# canRemove (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether an object can be removed from the receiver.

## Declaration

```objectivec
@property (readonly) BOOL canRemove;
```

<a id="Discussion"></a>

## Discussion

Bindings can use this method to control the enabling of user interface objects.

This property is observable using key-value observing.

## See Also

### Managing objects

- [newObject](newobject%28%29.md): Creates and returns a new object of the appropriate class.
- [addObject:](addobject%28__%29.md): Sets the receiver’s content object.
- [removeObject:](removeobject%28__%29.md): Removes a given object from the receiver’s content.
- [add:](add%28__%29.md): Creates a new object and sets it as the receiver’s content object.
- [canAdd](canadd.md): A Boolean value that indicates whether an object can be added to the receiver using [add:](add%28__%29.md).
- [remove:](remove%28__%29.md): Removes the receiver’s content object.
