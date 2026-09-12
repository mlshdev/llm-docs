> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsservicesmenurequestor/readselection(from:)](https://developer.apple.com/documentation/appkit/nsservicesmenurequestor/readselection(from:))

# readSelection(from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reads data from the pasteboard and uses it to replace the current selection.

## Declaration

```swift
optional func readSelection(from pboard: NSPasteboard) -> Bool
```

## Parameters

- `pboard`: The pasteboard containing the data to read.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if your implementation was able to read the pasteboard data successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md)
- [Supporting Continuity Camera in Your Mac App](../supporting-continuity-camera-in-your-mac-app.md)

<a id="Discussion"></a>

## Discussion

You implement this method to replace your application’s current selection (that is, the text or objects that are currently selected) with the data on the pasteboard. The data would have been placed in the pasteboard by another application in response to a remote message from the Services menu. A [readSelection(from:)](readselection%28from_%29.md) message is sent to the same object that previously received a [writeSelection(to:types:)](writeselection%28to_types_%29.md) message.

## See Also

### Working with Pasteboards

- [writeSelection(to:types:)](writeselection%28to_types_%29.md): Writes the current selection to the pasteboard.

# readSelectionFromPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reads data from the pasteboard and uses it to replace the current selection.

## Declaration

```objectivec
- (BOOL) readSelectionFromPasteboard:(NSPasteboard *) pboard;
```

## Parameters

- `pboard`: The pasteboard containing the data to read.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if your implementation was able to read the pasteboard data successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md)
- [Supporting Continuity Camera in Your Mac App](../supporting-continuity-camera-in-your-mac-app.md)

<a id="Discussion"></a>

## Discussion

You implement this method to replace your application’s current selection (that is, the text or objects that are currently selected) with the data on the pasteboard. The data would have been placed in the pasteboard by another application in response to a remote message from the Services menu. A [readSelectionFromPasteboard:](readselection%28from_%29.md) message is sent to the same object that previously received a [writeSelectionToPasteboard:types:](writeselection%28to_types_%29.md) message.

## See Also

### Working with Pasteboards

- [writeSelectionToPasteboard:types:](writeselection%28to_types_%29.md): Writes the current selection to the pasteboard.
