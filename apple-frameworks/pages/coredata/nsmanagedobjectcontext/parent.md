> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/parent](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/parent)

# parent (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The parent of the context.

## Declaration

```swift
var parent: NSManagedObjectContext? { get set }
```

<a id="Discussion"></a>

## Discussion

`nil` indicates there is no parent context. For more details, see [Parent store](../nsmanagedobjectcontext.md#Parent-store).

## See Also

### Configuring a context

- [persistentStoreCoordinator](persistentstorecoordinator.md): The persistent store coordinator of the context.
- [name](name.md): The developer-provided name of the context.
- [userInfo](userinfo.md): The user information for the context.

# parentContext (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The parent of the context.

## Declaration

```objectivec
@property (strong, nullable) NSManagedObjectContext * parentContext;
```

<a id="Discussion"></a>

## Discussion

`nil` indicates there is no parent context. For more details, see [Parent store](../nsmanagedobjectcontext.md#Parent-store).

## See Also

### Configuring a context

- [persistentStoreCoordinator](persistentstorecoordinator.md): The persistent store coordinator of the context.
- [name](name.md): The developer-provided name of the context.
- [userInfo](userinfo.md): The user information for the context.
