> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontextconcurrencytype/mainqueueconcurrencytype](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextconcurrencytype/mainqueueconcurrencytype)

# NSManagedObjectContextConcurrencyType.mainQueueConcurrencyType (Swift)

**Framework:** Core Data  
**Kind:** Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Specifies that the context will be associated with the main queue.

## Declaration

```swift
case mainQueueConcurrencyType
```

## Mentioned In

- [Using Core Data in the background](../using-core-data-in-the-background.md)

## See Also

### Concurrency Types

- [NSManagedObjectContextConcurrencyType.privateQueueConcurrencyType](privatequeueconcurrencytype.md): Specifies that the context will be associated with a private dispatch queue.
- [NSManagedObjectContextConcurrencyType.confinementConcurrencyType](confinementconcurrencytype.md): Deprecated. Specifies that the context will use the thread confinement pattern.

# NSMainQueueConcurrencyType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Specifies that the context will be associated with the main queue.

## Declaration

```objectivec
NSMainQueueConcurrencyType
```

## Mentioned In

- [Using Core Data in the background](../using-core-data-in-the-background.md)

## See Also

### Concurrency Types

- [NSPrivateQueueConcurrencyType](privatequeueconcurrencytype.md): Specifies that the context will be associated with a private dispatch queue.
- [NSConfinementConcurrencyType](confinementconcurrencytype.md): Deprecated. Specifies that the context will use the thread confinement pattern.
