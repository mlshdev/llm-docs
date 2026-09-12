> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditemdataprovider/pasteboard(_:item:providedatafortype:)](https://developer.apple.com/documentation/appkit/nspasteboarditemdataprovider/pasteboard(_:item:providedatafortype:))

# pasteboard(\_:item:provideDataForType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the receiver to provide data for a specified type to a given pasteboard.

## Declaration

```swift
nonisolated func pasteboard(_ pasteboard: NSPasteboard?, item: NSPasteboardItem, provideDataForType type: NSPasteboard.PasteboardType)
```

## Parameters

- `pasteboard`: A pasteboard to which the receiver has promised to provide data.
- `item`: A pasteboard item for which the receiver has promised to provide data
- `type`: A UTI type string.

<a id="Discussion"></a>

## Discussion

The receiver was previously set as the provider using [setDataProvider(\_:forTypes:)](../nspasteboarditem/setdataprovider%28__fortypes_%29.md).

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [NSPasteboard](../nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [Services Functions](../services-functions.md): Configure the contents of your app’s Services menu.

### Providing Data

- [pasteboardFinishedWithDataProvider(\_:)](pasteboardfinishedwithdataprovider%28__%29.md): Informs the receiver that the pasteboard no longer needs the data provider for any of its pasteboard items.

# pasteboard:item:provideDataForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the receiver to provide data for a specified type to a given pasteboard.

## Declaration

```objectivec
- (void) pasteboard:(NSPasteboard *) pasteboard item:(NSPasteboardItem *) item provideDataForType:(NSPasteboardType) type;
```

## Parameters

- `pasteboard`: A pasteboard to which the receiver has promised to provide data.
- `item`: A pasteboard item for which the receiver has promised to provide data
- `type`: A UTI type string.

<a id="Discussion"></a>

## Discussion

The receiver was previously set as the provider using [setDataProvider:forTypes:](../nspasteboarditem/setdataprovider%28__fortypes_%29.md).

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [NSPasteboard](../nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [Services Functions](../services-functions.md): Configure the contents of your app’s Services menu.

### Providing Data

- [pasteboardFinishedWithDataProvider:](pasteboardfinishedwithdataprovider%28__%29.md): Informs the receiver that the pasteboard no longer needs the data provider for any of its pasteboard items.
