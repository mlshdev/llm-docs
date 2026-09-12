> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboardreading/init(pasteboardpropertylist:oftype:)](https://developer.apple.com/documentation/appkit/nspasteboardreading/init(pasteboardpropertylist:oftype:))

# init(pasteboardPropertyList:ofType:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes an instance with a property list object and a type string.

## Declaration

```swift
init?(pasteboardPropertyList propertyList: Any, ofType type: NSPasteboard.PasteboardType)
```

## Parameters

- `propertyList`: A property list containing data to initialize the receiver.

  By default, the property list object is an instance of `NSData`. If you implement [readingOptions(forType:pasteboard:)](readingoptions%28fortype_pasteboard_%29.md) and specify an option other than [asData](../nspasteboard/readingoptions/asdata.md), the `propertyList` may be any other property list object.
- `type`: A UTI supported by the receiver for reading (one of the types returned by [readableTypes(for:)](readabletypes%28for_%29.md)).

<a id="return-value"></a>

## Return Value

An object initialized using the data in `propertyList`.

<a id="Discussion"></a>

## Discussion

This method is considered optional because, if [readableTypes(for:)](readabletypes%28for_%29.md) returns just a single type, and that type uses the [asKeyedArchive](../nspasteboard/readingoptions/askeyedarchive.md) reading option, then instances are initialized using [init(coder:)](https://developer.apple.com/documentation/foundation/nscoding/init%28coder:%29) instead of this method.

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [NSPasteboard](../nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [Services Functions](../services-functions.md): Configure the contents of your app’s Services menu.

# initWithPasteboardPropertyList:ofType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes an instance with a property list object and a type string.

## Declaration

```objectivec
- (id) initWithPasteboardPropertyList:(id) propertyList ofType:(NSPasteboardType) type;
```

## Parameters

- `propertyList`: A property list containing data to initialize the receiver.

  By default, the property list object is an instance of `NSData`. If you implement [readingOptionsForType:pasteboard:](readingoptions%28fortype_pasteboard_%29.md) and specify an option other than [NSPasteboardReadingAsData](../nspasteboard/readingoptions/asdata.md), the `propertyList` may be any other property list object.
- `type`: A UTI supported by the receiver for reading (one of the types returned by [readableTypesForPasteboard:](readabletypes%28for_%29.md)).

<a id="return-value"></a>

## Return Value

An object initialized using the data in `propertyList`.

<a id="Discussion"></a>

## Discussion

This method is considered optional because, if [readableTypesForPasteboard:](readabletypes%28for_%29.md) returns just a single type, and that type uses the [NSPasteboardReadingAsKeyedArchive](../nspasteboard/readingoptions/askeyedarchive.md) reading option, then instances are initialized using [initWithCoder:](https://developer.apple.com/documentation/foundation/nscoding/init%28coder:%29) instead of this method.

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [NSPasteboard](../nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [Services Functions](../services-functions.md): Configure the contents of your app’s Services menu.
