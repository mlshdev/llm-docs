> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocktile/showsapplicationbadge](https://developer.apple.com/documentation/appkit/nsdocktile/showsapplicationbadge)

# showsApplicationBadge (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean showing whether the tile is badged with the application’s icon

## Declaration

```swift
var showsApplicationBadge: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Miniaturized windows include the application badge by default to convey the associated application to the user. In macOS 10.5 and later, application tiles do not support the application badge. A miniaturized window with a custom view does not draw the application badge.

The application icon is positioned automatically in the tile by the [NSDockTile](../nsdocktile.md) object.

## See Also

### Applying Badge Icons to the Tile

- [badgeLabel](badgelabel.md): The string to be displayed in the tile’s badging area.

# showsApplicationBadge (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean showing whether the tile is badged with the application’s icon

## Declaration

```objectivec
@property BOOL showsApplicationBadge;
```

<a id="Discussion"></a>

## Discussion

Miniaturized windows include the application badge by default to convey the associated application to the user. In macOS 10.5 and later, application tiles do not support the application badge. A miniaturized window with a custom view does not draw the application badge.

The application icon is positioned automatically in the tile by the [NSDockTile](../nsdocktile.md) object.

## See Also

### Applying Badge Icons to the Tile

- [badgeLabel](badgelabel.md): The string to be displayed in the tile’s badging area.
