> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/persistentstorecoordinator](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/persistentstorecoordinator)

# persistentStoreCoordinator (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The persistent store coordinator of the context.

## Declaration

```swift
var persistentStoreCoordinator: NSPersistentStoreCoordinator? { get set }
```

<a id="return-value"></a>

## Return Value

The persistent store coordinator of the receiver.

<a id="Discussion"></a>

## Discussion

The coordinator provides the managed object model and handles persistency. Note that multiple contexts can share a coordinator. May not be `nil`.

Setting [persistentStoreCoordinator](persistentstorecoordinator.md) to `nil` will raise an exception. If you want to “disconnect” a context from its persistent store coordinator, you should simply set all strong references to the context to `nil` and allow it to be deallocated normally.

For more details, see [Parent store](../nsmanagedobjectcontext.md#Parent-store).

## See Also

### Configuring a context

- [parent](parent.md): The parent of the context.
- [name](name.md): The developer-provided name of the context.
- [userInfo](userinfo.md): The user information for the context.

# persistentStoreCoordinator (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The persistent store coordinator of the context.

## Declaration

```objectivec
@property (strong, nullable) NSPersistentStoreCoordinator * persistentStoreCoordinator;
```

<a id="return-value"></a>

## Return Value

The persistent store coordinator of the receiver.

<a id="Discussion"></a>

## Discussion

The coordinator provides the managed object model and handles persistency. Note that multiple contexts can share a coordinator. May not be `nil`.

Setting [persistentStoreCoordinator](persistentstorecoordinator.md) to `nil` will raise an exception. If you want to “disconnect” a context from its persistent store coordinator, you should simply set all strong references to the context to `nil` and allow it to be deallocated normally.

For more details, see [Parent store](../nsmanagedobjectcontext.md#Parent-store).

## See Also

### Configuring a context

- [parentContext](parent.md): The parent of the context.
- [name](name.md): The developer-provided name of the context.
- [userInfo](userinfo.md): The user information for the context.
