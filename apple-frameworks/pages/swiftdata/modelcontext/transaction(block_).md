> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/transaction(block:)](https://developer.apple.com/documentation/swiftdata/modelcontext/transaction(block:))

# transaction(block:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Runs the provided closure, and once it finishes, writes any pending inserts, changes, and deletes to the persistent storage.

## Declaration

```swift
func transaction(block: () throws -> Void) throws
```

## Parameters

- `block`: The closure to run before performing a save operation.

## See Also

### Persisting unsaved changes

- [autosaveEnabled](autosaveenabled.md): A Boolean value that indicates whether the context should automatically save any pending changes when certain events occur.
- [save()](save%28%29.md): Writes any pending inserts, changes, and deletes to the persistent storage.
- [rollback()](rollback%28%29.md): Discards pending inserts and deletes, restores changed models to their most recent committed state, and empties the undo stack.
