> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbelementarray/object(atlocation:)](https://developer.apple.com/documentation/scriptingbridge/sbelementarray/object(atlocation:))

# object(atLocation:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns the object at the given location in the receiver.

## Declaration

```swift
func object(atLocation location: Any) -> Any
```

<a id="return-value"></a>

## Return Value

A reference to the [SBObject](../sbobject.md) object identified by `loc` or `nil` if the object couldn’t be located.

<a id="discussion"></a>

## Discussion

This method is a generalization of [object(at:)](https://developer.apple.com/documentation/foundation/nsarray/object%28at:%29) for applications where the “index” is not simply an integer. For example, Finder can specify objects using a [NSURL](https://developer.apple.com/documentation/foundation/nsurl) object as a location. In OSA this is known as “absolute position,” a generalization of the notion of “index” in Foundation—it could be an integer, but it doesn’t have to be. A single object may even have a number of different “absolute position” values depending on the container.

## See Also

### Getting Objects in the Array

- [object(withName:)](object%28withname_%29.md): Returns the object in the array with the given name.
- [object(withID:)](object%28withid_%29.md): Returns the object in the array with the given identifier.

# objectAtLocation: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns the object at the given location in the receiver.

## Declaration

```objectivec
- (ObjectType) objectAtLocation:(id) location;
```

<a id="return-value"></a>

## Return Value

A reference to the [SBObject](../sbobject.md) object identified by `loc` or `nil` if the object couldn’t be located.

<a id="discussion"></a>

## Discussion

This method is a generalization of [objectAtIndex:](https://developer.apple.com/documentation/foundation/nsarray/object%28at:%29) for applications where the “index” is not simply an integer. For example, Finder can specify objects using a [NSURL](https://developer.apple.com/documentation/foundation/nsurl) object as a location. In OSA this is known as “absolute position,” a generalization of the notion of “index” in Foundation—it could be an integer, but it doesn’t have to be. A single object may even have a number of different “absolute position” values depending on the container.

## See Also

### Getting Objects in the Array

- [objectWithName:](object%28withname_%29.md): Returns the object in the array with the given name.
- [objectWithID:](object%28withid_%29.md): Returns the object in the array with the given identifier.
