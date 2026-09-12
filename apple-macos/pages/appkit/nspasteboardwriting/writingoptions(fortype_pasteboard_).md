> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboardwriting/writingoptions(fortype:pasteboard:)](https://developer.apple.com/documentation/appkit/nspasteboardwriting/writingoptions(fortype:pasteboard:))

# writingOptions(forType:pasteboard:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns options for writing data of a specified type to a given pasteboard.

## Declaration

```swift
optional func writingOptions(forType type: NSPasteboard.PasteboardType, pasteboard: NSPasteboard) -> NSPasteboard.WritingOptions
```

## Parameters

- `type`: One of the types the receiver supports for writing (one of the UTIs returned by its implementation of [writableTypes(for:)](writabletypes%28for_%29.md)).
- `pasteboard`: A pasteboard.

  You can use this argument to provide different options based on the pasteboard name, if you need to.

<a id="return-value"></a>

## Return Value

Options for writing data of type type to `pasteboard`. Return `0` for no options, or a value given in [Pasteboard Writing Options](../pasteboard-writing-options.md).

<a id="Discussion"></a>

## Discussion

Do not perform other pasteboard operations in the method implementation.

## See Also

### Required Methods

- [writableTypes(for:)](writabletypes%28for_%29.md): Returns an array of UTI strings of data types the receiver can write to a given pasteboard.
- [NSPasteboard.WritingOptions](../nspasteboard/writingoptions.md): Type to specify options for writing to a pasteboard.

# writingOptionsForType:pasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns options for writing data of a specified type to a given pasteboard.

## Declaration

```objectivec
- (NSPasteboardWritingOptions) writingOptionsForType:(NSPasteboardType) type pasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `type`: One of the types the receiver supports for writing (one of the UTIs returned by its implementation of [writableTypesForPasteboard:](writabletypes%28for_%29.md)).
- `pasteboard`: A pasteboard.

  You can use this argument to provide different options based on the pasteboard name, if you need to.

<a id="return-value"></a>

## Return Value

Options for writing data of type type to `pasteboard`. Return `0` for no options, or a value given in [Pasteboard Writing Options](../pasteboard-writing-options.md).

<a id="Discussion"></a>

## Discussion

Do not perform other pasteboard operations in the method implementation.

## See Also

### Required Methods

- [writableTypesForPasteboard:](writabletypes%28for_%29.md): Returns an array of UTI strings of data types the receiver can write to a given pasteboard.
- [NSPasteboardWritingOptions](../nspasteboard/writingoptions.md): Type to specify options for writing to a pasteboard.
