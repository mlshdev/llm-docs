> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/insert(_:)](https://developer.apple.com/documentation/appkit/nsarraycontroller/insert(_:))

# insert(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new object and inserts it into the receiver’s content array.

## Declaration

```swift
@IBAction func insert(_ sender: Any?)
```

## Parameters

- `sender`: Typically the object that invoked this method.

<a id="Discussion"></a>

## Discussion

If an entity name is specified (see [entityName](../nsobjectcontroller/entityname.md)), this method creates an instance of the of the class specified by the entity, otherwise this method creates an instance of the class specified by  [objectClass](../nsobjectcontroller/objectclass.md).

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.4 the result of this method is deferred until the next iteration of the runloop so that the error presentation mechanism can provide feedback as a sheet.

## See Also

### Inserting

- [canInsert](caninsert.md): Returns a Boolean value that indicates whether an object can be inserted into the receiver’s content collection.

# insert: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new object and inserts it into the receiver’s content array.

## Declaration

```objectivec
- (void) insert:(id) sender;
```

## Parameters

- `sender`: Typically the object that invoked this method.

<a id="Discussion"></a>

## Discussion

If an entity name is specified (see [entityName](../nsobjectcontroller/entityname.md)), this method creates an instance of the of the class specified by the entity, otherwise this method creates an instance of the class specified by  [objectClass](../nsobjectcontroller/objectclass.md).

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.4 the result of this method is deferred until the next iteration of the runloop so that the error presentation mechanism can provide feedback as a sheet.

## See Also

### Inserting

- [canInsert](caninsert.md): Returns a Boolean value that indicates whether an object can be inserted into the receiver’s content collection.
