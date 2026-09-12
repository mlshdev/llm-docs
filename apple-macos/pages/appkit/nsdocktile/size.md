> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocktile/size](https://developer.apple.com/documentation/appkit/nsdocktile/size)

# size (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The size of the tile.

## Declaration

```swift
var size: NSSize { get }
```

<a id="Discussion"></a>

## Discussion

This corresponds to the size of the backing store in the dock, which may be bigger than the actual tile displayed on the screen.

## See Also

### Getting the Tile Information

- [owner](owner.md): The object represented by the dock tile.

# size (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The size of the tile.

## Declaration

```objectivec
@property (readonly) NSSize size;
```

<a id="Discussion"></a>

## Discussion

This corresponds to the size of the backing store in the dock, which may be bigger than the actual tile displayed on the screen.

## See Also

### Getting the Tile Information

- [owner](owner.md): The object represented by the dock tile.
