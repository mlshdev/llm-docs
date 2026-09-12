> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboardwriting/writabletypes(for:)](https://developer.apple.com/documentation/appkit/nspasteboardwriting/writabletypes(for:))

# writableTypes(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of UTI strings of data types the receiver can write to a given pasteboard.

## Declaration

```swift
func writableTypes(for pasteboard: NSPasteboard) -> [NSPasteboard.PasteboardType]
```

## Parameters

- `pasteboard`: A pasteboard.

  You can use this argument to provide different options based on the pasteboard name, if you need to.

<a id="return-value"></a>

## Return Value

An array of UTI strings of data types the receiver can write to `pasteboard`.

<a id="Discussion"></a>

## Discussion

By default, data for the first returned type is put onto the pasteboard immediately, with the remaining types being promised.

To change the default behavior, implement -writingOptionsForType:pasteboard: and return [promised](../nspasteboard/writingoptions/promised.md) to lazily provide data for types, return no option to provide the data for that type immediately.  Use the pasteboard argument to provide different types based on the pasteboard name, if desired.  Do not perform other pasteboard operations in the method implementation.

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [NSPasteboard](../nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [Services Functions](../services-functions.md): Configure the contents of your app’s Services menu.

### Required Methods

- [writingOptions(forType:pasteboard:)](writingoptions%28fortype_pasteboard_%29.md): Returns options for writing data of a specified type to a given pasteboard.
- [NSPasteboard.WritingOptions](../nspasteboard/writingoptions.md): Type to specify options for writing to a pasteboard.

# writableTypesForPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of UTI strings of data types the receiver can write to a given pasteboard.

## Declaration

```objectivec
- (NSArray<NSString *> *) writableTypesForPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `pasteboard`: A pasteboard.

  You can use this argument to provide different options based on the pasteboard name, if you need to.

<a id="return-value"></a>

## Return Value

An array of UTI strings of data types the receiver can write to `pasteboard`.

<a id="Discussion"></a>

## Discussion

By default, data for the first returned type is put onto the pasteboard immediately, with the remaining types being promised.

To change the default behavior, implement -writingOptionsForType:pasteboard: and return [NSPasteboardWritingPromised](../nspasteboard/writingoptions/promised.md) to lazily provide data for types, return no option to provide the data for that type immediately.  Use the pasteboard argument to provide different types based on the pasteboard name, if desired.  Do not perform other pasteboard operations in the method implementation.

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [NSPasteboard](../nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [Services Functions](../services-functions.md): Configure the contents of your app’s Services menu.

### Required Methods

- [writingOptionsForType:pasteboard:](writingoptions%28fortype_pasteboard_%29.md): Returns options for writing data of a specified type to a given pasteboard.
- [NSPasteboardWritingOptions](../nspasteboard/writingoptions.md): Type to specify options for writing to a pasteboard.
