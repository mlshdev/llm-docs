> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/undomanager(for:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/undomanager(for:))

# undoManager(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the undo manager for the specified text view.

## Declaration

```swift
@MainActor optional func undoManager(for view: NSTextView) -> UndoManager?
```

## Parameters

- `view`: The text view whose undo manager should be returned.

<a id="return-value"></a>

## Return Value

The undo manager for `view`.

<a id="Discussion"></a>

## Discussion

This method provides the flexibility to return a custom undo manager for the text view. Although `NSTextView` implements undo and redo for changes to text, applications may need a custom undo manager to handle interactions between changes to text and changes to other items in the application.

# undoManagerForTextView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the undo manager for the specified text view.

## Declaration

```objectivec
- (NSUndoManager *) undoManagerForTextView:(NSTextView *) view;
```

## Parameters

- `view`: The text view whose undo manager should be returned.

<a id="return-value"></a>

## Return Value

The undo manager for `view`.

<a id="Discussion"></a>

## Discussion

This method provides the flexibility to return a custom undo manager for the text view. Although `NSTextView` implements undo and redo for changes to text, applications may need a custom undo manager to handle interactions between changes to text and changes to other items in the application.
