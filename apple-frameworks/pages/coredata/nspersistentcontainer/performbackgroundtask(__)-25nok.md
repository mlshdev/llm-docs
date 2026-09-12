> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer/performbackgroundtask(_:)-25nok](https://developer.apple.com/documentation/coredata/nspersistentcontainer/performbackgroundtask(_:)-25nok)

# performBackgroundTask(\_:)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

## Declaration

```swift
func performBackgroundTask<T>(_ block: @escaping (NSManagedObjectContext) throws -> T) async rethrows -> T
```

## See Also

### Performing Background Tasks

- [performBackgroundTask(\_:)](performbackgroundtask%28__%29-39sch.md): Executes a closure on a private queue using an ephemeral managed object context.
