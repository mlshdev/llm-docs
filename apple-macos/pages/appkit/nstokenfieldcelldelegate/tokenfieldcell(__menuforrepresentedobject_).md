> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:menuforrepresentedobject:)](https://developer.apple.com/documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:menuforrepresentedobject:))

# tokenFieldCell(\_:menuForRepresentedObject:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide a menu for the specified represented object.

## Declaration

```swift
@MainActor optional func tokenFieldCell(_ tokenFieldCell: NSTokenFieldCell, menuForRepresentedObject representedObject: Any) -> NSMenu?
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

The menu associated with the  represented object.

<a id="Discussion"></a>

## Discussion

The returned menu should be autoreleased. By default tokens in a token field cell do not return menus.

## See Also

### Managing Menus for Represented Objects

- [tokenFieldCell(\_:hasMenuForRepresentedObject:)](tokenfieldcell%28__hasmenuforrepresentedobject_%29.md): Allows the delegate to specify whether the represented object provides a menu.

# tokenFieldCell:menuForRepresentedObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide a menu for the specified represented object.

## Declaration

```objectivec
- (NSMenu *) tokenFieldCell:(NSTokenFieldCell *) tokenFieldCell menuForRepresentedObject:(id) representedObject;
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

The menu associated with the  represented object.

<a id="Discussion"></a>

## Discussion

The returned menu should be autoreleased. By default tokens in a token field cell do not return menus.

## See Also

### Managing Menus for Represented Objects

- [tokenFieldCell:hasMenuForRepresentedObject:](tokenfieldcell%28__hasmenuforrepresentedobject_%29.md): Allows the delegate to specify whether the represented object provides a menu.
