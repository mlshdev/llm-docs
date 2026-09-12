> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboardreading/readabletypes(for:)](https://developer.apple.com/documentation/appkit/nspasteboardreading/readabletypes(for:))

# readableTypes(for:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns an array of uniform type identifier strings of data types the receiver can read from the pasteboard and initialize from.

## Declaration

```swift
static func readableTypes(for pasteboard: NSPasteboard) -> [NSPasteboard.PasteboardType]
```

## Parameters

- `pasteboard`: A pasteboard. You can use the pasteboard argument to provide different types based on the pasteboard name, if you need to.

<a id="return-value"></a>

## Return Value

An array of uniform type identifier strings of data types instances that the receiver can read from the pasteboard and initialize from.

<a id="Discussion"></a>

## Discussion

By default, the system provides the data for a type to [init(pasteboardPropertyList:ofType:)](init%28pasteboardpropertylist_oftype_%29.md) as an instance of `NSData`. If you implement [readingOptions(forType:pasteboard:)](readingoptions%28fortype_pasteboard_%29.md) and specify a different option, the system converts the `NSData` object for a type to an `NSString` object or any other property list object.

<a id="Special-Considerations"></a>

### Special Considerations

Don’t perform other pasteboard operations in the method implementation.

## See Also

### Reading From the Pasteboard

- [readingOptions(forType:pasteboard:)](readingoptions%28fortype_pasteboard_%29.md): Returns options for reading data of a specified type from a given pasteboard.
- [NSPasteboard.ReadingOptions](../nspasteboard/readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.

# readableTypesForPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns an array of uniform type identifier strings of data types the receiver can read from the pasteboard and initialize from.

## Declaration

```objectivec
+ (NSArray<NSString *> *) readableTypesForPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `pasteboard`: A pasteboard. You can use the pasteboard argument to provide different types based on the pasteboard name, if you need to.

<a id="return-value"></a>

## Return Value

An array of uniform type identifier strings of data types instances that the receiver can read from the pasteboard and initialize from.

<a id="Discussion"></a>

## Discussion

By default, the system provides the data for a type to [initWithPasteboardPropertyList:ofType:](init%28pasteboardpropertylist_oftype_%29.md) as an instance of `NSData`. If you implement [readingOptionsForType:pasteboard:](readingoptions%28fortype_pasteboard_%29.md) and specify a different option, the system converts the `NSData` object for a type to an `NSString` object or any other property list object.

<a id="Special-Considerations"></a>

### Special Considerations

Don’t perform other pasteboard operations in the method implementation.

## See Also

### Reading From the Pasteboard

- [readingOptionsForType:pasteboard:](readingoptions%28fortype_pasteboard_%29.md): Returns options for reading data of a specified type from a given pasteboard.
- [NSPasteboardReadingOptions](../nspasteboard/readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
