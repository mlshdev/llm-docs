> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(from:)](https://developer.apple.com/documentation/appkit/nscolor/init(from:))

# init(from:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates a color object from color data currently on the pasteboard.

## Declaration

```swift
init?(from pasteBoard: NSPasteboard)
```

## Parameters

- `pasteBoard`: The pasteboard from which to return the color.

<a id="return-value"></a>

## Return Value

The color currently on the pasteboard or `nil` if `pasteBoard` doesn’t contain color data. The returned color’s alpha component is set to 1.0 if [ignoresAlpha](ignoresalpha.md) returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Copying and pasting color Information

- [write(to:)](write%28to_%29.md): Writes the color object’s data to the specified pasteboard.

# colorFromPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates a color object from color data currently on the pasteboard.

## Declaration

```objectivec
+ (NSColor *) colorFromPasteboard:(NSPasteboard *) pasteBoard;
```

## Parameters

- `pasteBoard`: The pasteboard from which to return the color.

<a id="return-value"></a>

## Return Value

The color currently on the pasteboard or `nil` if `pasteBoard` doesn’t contain color data. The returned color’s alpha component is set to 1.0 if [ignoresAlpha](ignoresalpha.md) returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Copying and pasting color Information

- [writeToPasteboard:](write%28to_%29.md): Writes the color object’s data to the specified pasteboard.
