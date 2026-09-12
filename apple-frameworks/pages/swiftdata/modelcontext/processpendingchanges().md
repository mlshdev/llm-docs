> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/processpendingchanges()](https://developer.apple.com/documentation/swiftdata/modelcontext/processpendingchanges())

# processPendingChanges()

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Tells the undo manager to record any changes made to the context’s registered models.

## Declaration

```swift
func processPendingChanges()
```

<a id="discussion"></a>

## Discussion

In AppKit-based applications, the system invokes this method at the end of each event loop. The framework may call it more frequently if it needs to coalesce your changes before continuing. You can also invoke it manually to coalesce any pending changes.

## See Also

### Performing undo and redo

- [undoManager](undomanager.md): The object that provides undo support for the context.
