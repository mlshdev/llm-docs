> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/undomanager](https://developer.apple.com/documentation/swiftui/environmentvalues/undomanager)

# undoManager

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The undo manager used to register a view’s undo operations.

## Declaration

```swift
var undoManager: UndoManager? { get }
```

<a id="discussion"></a>

## Discussion

This value is `nil` when the environment represents a context that doesn’t support undo and redo operations. You can skip registration of an undo operation when this value is `nil`.

## See Also

### Accessing document configuration

- [documentConfiguration](documentconfiguration.md): The configuration of a document in a [DocumentGroup](../documentgroup.md).
- [DocumentConfiguration](../documentconfiguration.md): The configuration of a document in a [DocumentGroup](../documentgroup.md).
