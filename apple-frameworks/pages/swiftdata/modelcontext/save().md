> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/save()](https://developer.apple.com/documentation/swiftdata/modelcontext/save())

# save()

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Writes any pending inserts, changes, and deletes to the persistent storage.

## Declaration

```swift
func save() throws
```

## Mentioned In

- [Preserving your app’s model data across launches](../preserving-your-apps-model-data-across-launches.md)

<a id="discussion"></a>

## Discussion

> **Important**

> Use the [hasChanges](haschanges.md) property to determine whether the context has uncommitted changes before invoking this method. Otherwise, SwiftData may perform unnecessary work.

## See Also

### Persisting unsaved changes

- [autosaveEnabled](autosaveenabled.md): A Boolean value that indicates whether the context should automatically save any pending changes when certain events occur.
- [transaction(block:)](transaction%28block_%29.md): Runs the provided closure, and once it finishes, writes any pending inserts, changes, and deletes to the persistent storage.
- [rollback()](rollback%28%29.md): Discards pending inserts and deletes, restores changed models to their most recent committed state, and empties the undo stack.
