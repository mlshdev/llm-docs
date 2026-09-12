> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontextconcurrencytype](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextconcurrencytype)

# NSManagedObjectContextConcurrencyType (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The concurrency types you can use with a managed object context.

## Declaration

```swift
enum NSManagedObjectContextConcurrencyType
```

## Topics

### Concurrency Types

- [NSManagedObjectContextConcurrencyType.privateQueueConcurrencyType](nsmanagedobjectcontextconcurrencytype/privatequeueconcurrencytype.md): Specifies that the context will be associated with a private dispatch queue.
- [NSManagedObjectContextConcurrencyType.mainQueueConcurrencyType](nsmanagedobjectcontextconcurrencytype/mainqueueconcurrencytype.md): Specifies that the context will be associated with the main queue.
- [NSManagedObjectContextConcurrencyType.confinementConcurrencyType](nsmanagedobjectcontextconcurrencytype/confinementconcurrencytype.md): Deprecated. Specifies that the context will use the thread confinement pattern.

### Initializers

- [init(rawValue:)](nsmanagedobjectcontextconcurrencytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a context

- [init(\_:)](nsmanagedobjectcontext/init%28__%29.md): Creates a context that uses the specified concurrency type.
- [NSManagedObjectContext.ConcurrencyType](nsmanagedobjectcontext/concurrencytype-swift.struct.md): The concurrency types to use with a managed object context.
- [init(concurrencyType:)](nsmanagedobjectcontext/init%28concurrencytype_%29.md): Deprecated. Creates a context that uses the specified concurrency type.

# NSManagedObjectContextConcurrencyType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The concurrency types you can use with a managed object context.

## Declaration

```objectivec
enum NSManagedObjectContextConcurrencyType : NSUInteger;
```

## Topics

### Concurrency Types

- [NSPrivateQueueConcurrencyType](nsmanagedobjectcontextconcurrencytype/privatequeueconcurrencytype.md): Specifies that the context will be associated with a private dispatch queue.
- [NSMainQueueConcurrencyType](nsmanagedobjectcontextconcurrencytype/mainqueueconcurrencytype.md): Specifies that the context will be associated with the main queue.
- [NSConfinementConcurrencyType](nsmanagedobjectcontextconcurrencytype/confinementconcurrencytype.md): Deprecated. Specifies that the context will use the thread confinement pattern.

## See Also

### Creating a context

- [initWithConcurrencyType:](nsmanagedobjectcontext/init%28concurrencytype_%29.md): Deprecated. Creates a context that uses the specified concurrency type.
