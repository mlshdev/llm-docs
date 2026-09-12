> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/write(to:)](https://developer.apple.com/documentation/appkit/nscolor/write(to:))

# write(to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the color object’s data to the specified pasteboard.

## Declaration

```swift
func write(to pasteBoard: NSPasteboard)
```

## Parameters

- `pasteBoard`: The pasteboard to which to write the receiver’s color data. If this pasteboard doesn’t support color data, the method does nothing.

## See Also

### Copying and pasting color Information

- [init(from:)](init%28from_%29.md): Creates a color object from color data currently on the pasteboard.

# writeToPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the color object’s data to the specified pasteboard.

## Declaration

```objectivec
- (void) writeToPasteboard:(NSPasteboard *) pasteBoard;
```

## Parameters

- `pasteBoard`: The pasteboard to which to write the receiver’s color data. If this pasteboard doesn’t support color data, the method does nothing.

## See Also

### Copying and pasting color Information

- [colorFromPasteboard:](init%28from_%29.md): Creates a color object from color data currently on the pasteboard.
