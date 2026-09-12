> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontextconcurrencytype/confinementconcurrencytype](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextconcurrencytype/confinementconcurrencytype)

# NSManagedObjectContextConcurrencyType.confinementConcurrencyType (Swift)

**Framework:** Core Data  
**Kind:** Case  
**Availability:** iOS 3.0+ (deprecated in 9.0) · iPadOS 3.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.11) · tvOS  (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Specifies that the context will use the thread confinement pattern.

> Use another NSManagedObjectContextConcurrencyType

## Declaration

```swift
case confinementConcurrencyType
```

## See Also

### Concurrency Types

- [NSManagedObjectContextConcurrencyType.privateQueueConcurrencyType](privatequeueconcurrencytype.md): Specifies that the context will be associated with a private dispatch queue.
- [NSManagedObjectContextConcurrencyType.mainQueueConcurrencyType](mainqueueconcurrencytype.md): Specifies that the context will be associated with the main queue.

# NSConfinementConcurrencyType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.11) · tvOS  (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Specifies that the context will use the thread confinement pattern.

> Use another NSManagedObjectContextConcurrencyType

## Declaration

```objectivec
NSConfinementConcurrencyType
```

## See Also

### Concurrency Types

- [NSPrivateQueueConcurrencyType](privatequeueconcurrencytype.md): Specifies that the context will be associated with a private dispatch queue.
- [NSMainQueueConcurrencyType](mainqueueconcurrencytype.md): Specifies that the context will be associated with the main queue.
