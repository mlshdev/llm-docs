> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:hasmenuforrepresentedobject:)](https://developer.apple.com/documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:hasmenuforrepresentedobject:))

# tokenFieldCell(\_:hasMenuForRepresentedObject:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to specify whether the represented object provides a menu.

## Declaration

```swift
@MainActor optional func tokenFieldCell(_ tokenFieldCell: NSTokenFieldCell, hasMenuForRepresentedObject representedObject: Any) -> Bool
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the  represented object has a menu, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

By default tokens have no menus.

## See Also

### Managing Menus for Represented Objects

- [tokenFieldCell(\_:menuForRepresentedObject:)](tokenfieldcell%28__menuforrepresentedobject_%29.md): Allows the delegate to provide a menu for the specified represented object.

# tokenFieldCell:hasMenuForRepresentedObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to specify whether the represented object provides a menu.

## Declaration

```objectivec
- (BOOL) tokenFieldCell:(NSTokenFieldCell *) tokenFieldCell hasMenuForRepresentedObject:(id) representedObject;
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the  represented object has a menu, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

By default tokens have no menus.

## See Also

### Managing Menus for Represented Objects

- [tokenFieldCell:menuForRepresentedObject:](tokenfieldcell%28__menuforrepresentedobject_%29.md): Allows the delegate to provide a menu for the specified represented object.
