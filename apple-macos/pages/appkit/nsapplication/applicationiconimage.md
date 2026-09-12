> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/applicationiconimage](https://developer.apple.com/documentation/appkit/nsapplication/applicationiconimage)

# applicationIconImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image used for the app’s icon.

## Declaration

```swift
var applicationIconImage: NSImage! { get set }
```

<a id="Discussion"></a>

## Discussion

Assign an image to this property when you want to temporarily change the app icon in the dock app tile. The image you provide is scaled as needed so that it fits in the tile. To restore your app’s original icon, set this property to `nil`.

## See Also

### Accessing the dock tile

- [dockTile](docktile.md): The app’s Dock tile.

# applicationIconImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image used for the app’s icon.

## Declaration

```objectivec
@property (strong, null_resettable) NSImage * applicationIconImage;
```

<a id="Discussion"></a>

## Discussion

Assign an image to this property when you want to temporarily change the app icon in the dock app tile. The image you provide is scaled as needed so that it fits in the tile. To restore your app’s original icon, set this property to `nil`.

## See Also

### Accessing the dock tile

- [dockTile](docktile.md): The app’s Dock tile.
