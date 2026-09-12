> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/autosaveenabled](https://developer.apple.com/documentation/swiftdata/modelcontext/autosaveenabled)

# autosaveEnabled

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

A Boolean value that indicates whether the context should automatically save any pending changes when certain events occur.

## Declaration

```swift
var autosaveEnabled: Bool { get set }
```

## Mentioned In

- [Preserving your app’s model data across launches](../preserving-your-apps-model-data-across-launches.md)

<a id="discussion"></a>

## Discussion

When `true`, the context calls [save()](save%28%29.md) after you make changes to any inserted or registered models. The context also calls `save()` at various times during the lifecycle of windows, scenes, views, and sheets.

The default value is `false`. SwiftData automatically sets this property to `true` for the model container’s [mainContext](../modelcontainer/maincontext.md).

## See Also

### Persisting unsaved changes

- [save()](save%28%29.md): Writes any pending inserts, changes, and deletes to the persistent storage.
- [transaction(block:)](transaction%28block_%29.md): Runs the provided closure, and once it finishes, writes any pending inserts, changes, and deletes to the persistent storage.
- [rollback()](rollback%28%29.md): Discards pending inserts and deletes, restores changed models to their most recent committed state, and empties the undo stack.
