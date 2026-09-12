> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbelementarray/object(withid:)](https://developer.apple.com/documentation/scriptingbridge/sbelementarray/object(withid:))

# object(withID:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns the object in the array with the given identifier.

## Declaration

```swift
func object(withID identifier: Any) -> Any
```

## Parameters

- `identifier`: The identifier of one of the receiver’s objects.

<a id="return-value"></a>

## Return Value

A reference to the identified object or `nil` if could not be found.

<a id="discussion"></a>

## Discussion

This method is provided as an alternative to [object(at:)](https://developer.apple.com/documentation/foundation/nsarray/object%28at:%29) for applications where an identifier is available instead of (or in addition to) an index. A unique ID is generally more stable than an index. For example, it may be more useful to identify a contact in Address Book by its identifier (which doesn’t change over time) than by its index in the list of contacts (which can change as contacts are added or removed).

## See Also

### Getting Objects in the Array

- [object(withName:)](object%28withname_%29.md): Returns the object in the array with the given name.
- [object(atLocation:)](object%28atlocation_%29.md): Returns the object at the given location in the receiver.

# objectWithID: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns the object in the array with the given identifier.

## Declaration

```objectivec
- (ObjectType) objectWithID:(id) identifier;
```

## Parameters

- `identifier`: The identifier of one of the receiver’s objects.

<a id="return-value"></a>

## Return Value

A reference to the identified object or `nil` if could not be found.

<a id="discussion"></a>

## Discussion

This method is provided as an alternative to [objectAtIndex:](https://developer.apple.com/documentation/foundation/nsarray/object%28at:%29) for applications where an identifier is available instead of (or in addition to) an index. A unique ID is generally more stable than an index. For example, it may be more useful to identify a contact in Address Book by its identifier (which doesn’t change over time) than by its index in the list of contacts (which can change as contacts are added or removed).

## See Also

### Getting Objects in the Array

- [objectWithName:](object%28withname_%29.md): Returns the object in the array with the given name.
- [objectAtLocation:](object%28atlocation_%29.md): Returns the object at the given location in the receiver.
