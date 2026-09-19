> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/concurrencytype-swift.struct/privatequeue

# privateQueue

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A concurrency type where the context performs its tasks on a private queue.

## Declaration

```swift
static let privateQueue: NSManagedObjectContext.ConcurrencyType
```

## See Also

### Concurrency Types

- [mainQueue](mainqueue.md): A concurrency type where the context performs its tasks on the main queue.
