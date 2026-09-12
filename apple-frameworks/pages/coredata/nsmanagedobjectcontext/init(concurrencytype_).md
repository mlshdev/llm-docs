> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/init(concurrencytype:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/init(concurrencytype:))

# init(concurrencyType:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a context that uses the specified concurrency type.

> Use [init(\_:)](init%28__%29.md) instead.

## Declaration

```swift
init(concurrencyType ct: NSManagedObjectContextConcurrencyType)
```

## Parameters

- `ct`: The context’s concurrency type. For possible values, see [NSManagedObjectContextConcurrencyType](../nsmanagedobjectcontextconcurrencytype.md).

## Mentioned In

- [Using Core Data in the background](../using-core-data-in-the-background.md)

<a id="Discussion"></a>

## Discussion

For more information, see [Concurrency](../nsmanagedobjectcontext.md#Concurrency).

## See Also

### Creating a context

- [init(\_:)](init%28__%29.md): Creates a context that uses the specified concurrency type.
- [NSManagedObjectContext.ConcurrencyType](concurrencytype-swift.struct.md): The concurrency types to use with a managed object context.
- [NSManagedObjectContextConcurrencyType](../nsmanagedobjectcontextconcurrencytype.md): The concurrency types you can use with a managed object context.

# initWithConcurrencyType: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a context that uses the specified concurrency type.

> Use [init(\_:)](init%28__%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithConcurrencyType:(NSManagedObjectContextConcurrencyType) ct;
```

## Parameters

- `ct`: The context’s concurrency type. For possible values, see [NSManagedObjectContextConcurrencyType](../nsmanagedobjectcontextconcurrencytype.md).

## Mentioned In

- [Using Core Data in the background](../using-core-data-in-the-background.md)

<a id="Discussion"></a>

## Discussion

For more information, see [Concurrency](../nsmanagedobjectcontext.md#Concurrency).

## See Also

### Creating a context

- [NSManagedObjectContextConcurrencyType](../nsmanagedobjectcontextconcurrencytype.md): The concurrency types you can use with a managed object context.
