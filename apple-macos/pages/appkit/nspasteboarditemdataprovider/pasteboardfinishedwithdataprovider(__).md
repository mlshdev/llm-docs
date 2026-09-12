> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditemdataprovider/pasteboardfinishedwithdataprovider(_:)](https://developer.apple.com/documentation/appkit/nspasteboarditemdataprovider/pasteboardfinishedwithdataprovider(_:))

# pasteboardFinishedWithDataProvider(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the receiver that the pasteboard no longer needs the data provider for any of its pasteboard items.

## Declaration

```swift
nonisolated optional func pasteboardFinishedWithDataProvider(_ pasteboard: NSPasteboard)
```

## Parameters

- `pasteboard`: A pasteboard.

<a id="Discussion"></a>

## Discussion

One data provider can provide data for more than one pasteboard item. This method is called when the pasteboard no longer needs the data provider for any of its pasteboard items. This can be either because the data provider has fulfilled all promises, or because ownership of the pasteboard has changed.

## See Also

### Providing Data

- [pasteboard(\_:item:provideDataForType:)](pasteboard%28__item_providedatafortype_%29.md): Asks the receiver to provide data for a specified type to a given pasteboard.

# pasteboardFinishedWithDataProvider: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the receiver that the pasteboard no longer needs the data provider for any of its pasteboard items.

## Declaration

```objectivec
- (void) pasteboardFinishedWithDataProvider:(NSPasteboard *) pasteboard;
```

## Parameters

- `pasteboard`: A pasteboard.

<a id="Discussion"></a>

## Discussion

One data provider can provide data for more than one pasteboard item. This method is called when the pasteboard no longer needs the data provider for any of its pasteboard items. This can be either because the data provider has fulfilled all promises, or because ownership of the pasteboard has changed.

## See Also

### Providing Data

- [pasteboard:item:provideDataForType:](pasteboard%28__item_providedatafortype_%29.md): Asks the receiver to provide data for a specified type to a given pasteboard.
