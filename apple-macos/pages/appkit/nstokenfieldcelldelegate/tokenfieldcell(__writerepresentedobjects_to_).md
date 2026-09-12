> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:writerepresentedobjects:to:)](https://developer.apple.com/documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:writerepresentedobjects:to:))

# tokenFieldCell(\_:writeRepresentedObjects:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate the opportunity to write custom pasteboard types to the pasteboard for the represented objects in `objects`.

## Declaration

```swift
@MainActor optional func tokenFieldCell(_ tokenFieldCell: NSTokenFieldCell, writeRepresentedObjects objects: [Any], to pboard: NSPasteboard) -> Bool
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `objects`: An array of represented objects associated with the token field cell.
- `pboard`: The pasteboard to which to write the represented objects.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the delegate writes the represented objects to the pasteboard, [false](https://developer.apple.com/documentation/swift/false) otherwise. If [false](https://developer.apple.com/documentation/swift/false), the token field writes the display strings to the [NSStringPboardType](../nsstringpboardtype.md) pasteboard.

## See Also

### Reading To and Writing From the Pasteboard

- [tokenFieldCell(\_:readFrom:)](tokenfieldcell%28__readfrom_%29.md): Allows the delegate to return an array of objects representing the data read from `pboard`.

# tokenFieldCell:writeRepresentedObjects:toPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate the opportunity to write custom pasteboard types to the pasteboard for the represented objects in `objects`.

## Declaration

```objectivec
- (BOOL) tokenFieldCell:(NSTokenFieldCell *) tokenFieldCell writeRepresentedObjects:(NSArray *) objects toPasteboard:(NSPasteboard *) pboard;
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `objects`: An array of represented objects associated with the token field cell.
- `pboard`: The pasteboard to which to write the represented objects.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the delegate writes the represented objects to the pasteboard, [false](https://developer.apple.com/documentation/swift/false) otherwise. If [false](https://developer.apple.com/documentation/swift/false), the token field writes the display strings to the [NSStringPboardType](../nsstringpboardtype.md) pasteboard.

## See Also

### Reading To and Writing From the Pasteboard

- [tokenFieldCell:readFromPasteboard:](tokenfieldcell%28__readfrom_%29.md): Allows the delegate to return an array of objects representing the data read from `pboard`.
