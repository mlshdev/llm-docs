> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/concurrencytype-swift.struct](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/concurrencytype-swift.struct)

# NSManagedObjectContext.ConcurrencyType

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The concurrency types to use with a managed object context.

## Declaration

```swift
struct ConcurrencyType
```

## Topics

### Concurrency Types

- [mainQueue](concurrencytype-swift.struct/mainqueue.md): A concurrency type where the context performs its tasks on the main queue.
- [privateQueue](concurrencytype-swift.struct/privatequeue.md): A concurrency type where the context performs its tasks on a private queue.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Creating a context

- [init(\_:)](init%28__%29.md): Creates a context that uses the specified concurrency type.
- [init(concurrencyType:)](init%28concurrencytype_%29.md): Deprecated. Creates a context that uses the specified concurrency type.
- [NSManagedObjectContextConcurrencyType](../nsmanagedobjectcontextconcurrencytype.md): The concurrency types you can use with a managed object context.
