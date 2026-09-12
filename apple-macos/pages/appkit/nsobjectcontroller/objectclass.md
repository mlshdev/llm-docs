> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/objectclass](https://developer.apple.com/documentation/appkit/nsobjectcontroller/objectclass)

# objectClass (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object class to use when creating new objects.

## Declaration

```swift
var objectClass: AnyClass! { get set }
```

<a id="Discussion"></a>

## Discussion

`NSObjectController`’s default implementation assumes that instances of `objectClass` are initialized using a standard `init` method that takes no arguments.

## See Also

### Related Documentation

- [managedObjectContext](managedobjectcontext.md): The receiver’s managed object context.
- [entityName](entityname.md): The entity name used by the receiver to create new objects.

# objectClass (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object class to use when creating new objects.

## Declaration

```objectivec
@property (assign, null_resettable) Class objectClass;
```

<a id="Discussion"></a>

## Discussion

`NSObjectController`’s default implementation assumes that instances of `objectClass` are initialized using a standard `init` method that takes no arguments.

## See Also

### Related Documentation

- [managedObjectContext](managedobjectcontext.md): The receiver’s managed object context.
- [entityName](entityname.md): The entity name used by the receiver to create new objects.
