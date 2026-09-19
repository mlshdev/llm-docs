> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/init(_:)

# init(\_:)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Creates a context that uses the specified concurrency type.

## Declaration

```swift
nonisolated convenience init(_ type: NSManagedObjectContext.ConcurrencyType)
```

## Parameters

- `type`: The context’s concurrency type. For possible values, see [NSManagedObjectContext.ConcurrencyType](concurrencytype-swift.struct.md).

<a id="Discussion"></a>

## Discussion

For more information, see [Concurrency](../nsmanagedobjectcontext.md#Concurrency).

## See Also

### Creating a context

- [NSManagedObjectContext.ConcurrencyType](concurrencytype-swift.struct.md): The concurrency types to use with a managed object context.
- [init(concurrencyType:)](init%28concurrencytype_%29.md): Deprecated. Creates a context that uses the specified concurrency type.
- [NSManagedObjectContextConcurrencyType](../nsmanagedobjectcontextconcurrencytype.md): The concurrency types you can use with a managed object context.
