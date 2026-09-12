> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/userinfo](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/userinfo)

# userInfo (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The user information for the context.

## Declaration

```swift
var userInfo: NSMutableDictionary { get }
```

## See Also

### Configuring a context

- [persistentStoreCoordinator](persistentstorecoordinator.md): The persistent store coordinator of the context.
- [parent](parent.md): The parent of the context.
- [name](name.md): The developer-provided name of the context.

# userInfo (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The user information for the context.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSMutableDictionary * userInfo;
```

## See Also

### Configuring a context

- [persistentStoreCoordinator](persistentstorecoordinator.md): The persistent store coordinator of the context.
- [parentContext](parent.md): The parent of the context.
- [name](name.md): The developer-provided name of the context.
