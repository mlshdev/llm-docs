> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboardreading/readingoptions(fortype:pasteboard:)](https://developer.apple.com/documentation/appkit/nspasteboardreading/readingoptions(fortype:pasteboard:))

# readingOptions(forType:pasteboard:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns options for reading data of a specified type from a given pasteboard.

## Declaration

```swift
optional static func readingOptions(forType type: NSPasteboard.PasteboardType, pasteboard: NSPasteboard) -> NSPasteboard.ReadingOptions
```

## Parameters

- `type`: A UTI supported by instances of the receiver for reading (one of the types returned by [readableTypes(for:)](readabletypes%28for_%29.md)).
- `pasteboard`: A pasteboard.

  You can use the pasteboard argument to provide return different based on the pasteboard name, should you need to do so.

<a id="return-value"></a>

## Return Value

Options for reading data of `type` from `pasteboard`. For a list of valid values, see [NSPasteboard.ReadingOptions](../nspasteboard/readingoptions.md).

<a id="Discussion"></a>

## Discussion

Do not perform other pasteboard operations in this method implementation.

## See Also

### Reading From the Pasteboard

- [readableTypes(for:)](readabletypes%28for_%29.md): Returns an array of uniform type identifier strings of data types the receiver can read from the pasteboard and initialize from.
- [NSPasteboard.ReadingOptions](../nspasteboard/readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.

# readingOptionsForType:pasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns options for reading data of a specified type from a given pasteboard.

## Declaration

```objectivec
+ (NSPasteboardReadingOptions) readingOptionsForType:(NSPasteboardType) type pasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `type`: A UTI supported by instances of the receiver for reading (one of the types returned by [readableTypesForPasteboard:](readabletypes%28for_%29.md)).
- `pasteboard`: A pasteboard.

  You can use the pasteboard argument to provide return different based on the pasteboard name, should you need to do so.

<a id="return-value"></a>

## Return Value

Options for reading data of `type` from `pasteboard`. For a list of valid values, see [NSPasteboardReadingOptions](../nspasteboard/readingoptions.md).

<a id="Discussion"></a>

## Discussion

Do not perform other pasteboard operations in this method implementation.

## See Also

### Reading From the Pasteboard

- [readableTypesForPasteboard:](readabletypes%28for_%29.md): Returns an array of uniform type identifier strings of data types the receiver can read from the pasteboard and initialize from.
- [NSPasteboardReadingOptions](../nspasteboard/readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
