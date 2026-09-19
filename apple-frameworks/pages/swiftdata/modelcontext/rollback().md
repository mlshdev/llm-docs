> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftdata/modelcontext/rollback()

# rollback()

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Discards pending inserts and deletes, restores changed models to their most recent committed state, and empties the undo stack.

## Declaration

```swift
func rollback()
```

## See Also

### Persisting unsaved changes

- [autosaveEnabled](autosaveenabled.md): A Boolean value that indicates whether the context should automatically save any pending changes when certain events occur.
- [save()](save%28%29.md): Writes any pending inserts, changes, and deletes to the persistent storage.
- [transaction(block:)](transaction%28block_%29.md): Runs the provided closure, and once it finishes, writes any pending inserts, changes, and deletes to the persistent storage.
