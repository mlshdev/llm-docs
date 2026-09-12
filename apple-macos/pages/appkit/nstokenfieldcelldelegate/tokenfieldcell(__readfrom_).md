> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:readfrom:)](https://developer.apple.com/documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:readfrom:))

# tokenFieldCell(\_:readFrom:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to return an array of objects representing the data read from `pboard`.

## Declaration

```swift
@MainActor optional func tokenFieldCell(_ tokenFieldCell: NSTokenFieldCell, readFrom pboard: NSPasteboard) -> [Any]?
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `pboard`: The pasteboard from which to read the represented objects.

<a id="return-value"></a>

## Return Value

An array of represented objects created from the pasteboard data.

## See Also

### Reading To and Writing From the Pasteboard

- [tokenFieldCell(\_:writeRepresentedObjects:to:)](tokenfieldcell%28__writerepresentedobjects_to_%29.md): Allows the delegate the opportunity to write custom pasteboard types to the pasteboard for the represented objects in `objects`.

# tokenFieldCell:readFromPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to return an array of objects representing the data read from `pboard`.

## Declaration

```objectivec
- (NSArray *) tokenFieldCell:(NSTokenFieldCell *) tokenFieldCell readFromPasteboard:(NSPasteboard *) pboard;
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `pboard`: The pasteboard from which to read the represented objects.

<a id="return-value"></a>

## Return Value

An array of represented objects created from the pasteboard data.

## See Also

### Reading To and Writing From the Pasteboard

- [tokenFieldCell:writeRepresentedObjects:toPasteboard:](tokenfieldcell%28__writerepresentedobjects_to_%29.md): Allows the delegate the opportunity to write custom pasteboard types to the pasteboard for the represented objects in `objects`.
