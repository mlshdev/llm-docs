> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbelementarray/object(withname:)](https://developer.apple.com/documentation/scriptingbridge/sbelementarray/object(withname:))

# object(withName:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns the object in the array with the given name.

## Declaration

```swift
func object(withName name: String) -> Any
```

## Parameters

- `name`: The name of one of the receiver’s objects.

<a id="return-value"></a>

## Return Value

A reference to the designated object or `nil` if the object couldn’t be found.

<a id="discussion"></a>

## Discussion

This method is provided as an alternative to [object(at:)](https://developer.apple.com/documentation/foundation/nsarray/object%28at:%29) for applications where a name is available instead of (or in addition to) an index. A name is generally more stable than an index. For example, it is typically more useful to identify a mailbox in Mail by its name than by its index in the list of mailboxes.

## See Also

### Getting Objects in the Array

- [object(withID:)](object%28withid_%29.md): Returns the object in the array with the given identifier.
- [object(atLocation:)](object%28atlocation_%29.md): Returns the object at the given location in the receiver.

# objectWithName: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns the object in the array with the given name.

## Declaration

```objectivec
- (ObjectType) objectWithName:(NSString *) name;
```

## Parameters

- `name`: The name of one of the receiver’s objects.

<a id="return-value"></a>

## Return Value

A reference to the designated object or `nil` if the object couldn’t be found.

<a id="discussion"></a>

## Discussion

This method is provided as an alternative to [objectAtIndex:](https://developer.apple.com/documentation/foundation/nsarray/object%28at:%29) for applications where a name is available instead of (or in addition to) an index. A name is generally more stable than an index. For example, it is typically more useful to identify a mailbox in Mail by its name than by its index in the list of mailboxes.

## See Also

### Getting Objects in the Array

- [objectWithID:](object%28withid_%29.md): Returns the object in the array with the given identifier.
- [objectAtLocation:](object%28atlocation_%29.md): Returns the object at the given location in the receiver.
