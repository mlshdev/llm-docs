> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/image](https://developer.apple.com/documentation/appkit/nscursor/image)

# image (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.0+

The cursor’s image.

## Declaration

```swift
var image: UIImage { get }
```

```swift
var image: NSImage { get }
```

<a id="Discussion"></a>

## Discussion

The cursor image or `nil` if none exists. Note that an `NSCursor` object is immutable: you cannot change its image after it’s created. Instead, use [init(image:hotSpot:)](init%28image_hotspot_%29.md) to create a new cursor with the new settings.

## See Also

### Related Documentation

- [init(image:hotSpot:)](init%28image_hotspot_%29.md): Initializes a cursor with the given image and hot spot.

### Setting cursor attributes

- [hotSpot](hotspot.md): The position of the click location within the cursor.
- [hide()](hide%28%29.md): Makes the current cursor invisible.
- [unhide()](unhide%28%29.md): Negates an earlier call to [hide()](hide%28%29.md) by showing the current cursor.
- [setHiddenUntilMouseMoves(\_:)](sethiddenuntilmousemoves%28__%29.md): Sets whether the cursor is hidden until the mouse moves.

# image (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

The cursor’s image.

## Declaration

```objectivec
@property (strong, readonly) UIImage * image;
```

```objectivec
@property (strong, readonly) NSImage * image;
```

<a id="Discussion"></a>

## Discussion

The cursor image or `nil` if none exists. Note that an `NSCursor` object is immutable: you cannot change its image after it’s created. Instead, use [initWithImage:hotSpot:](init%28image_hotspot_%29.md) to create a new cursor with the new settings.

## See Also

### Related Documentation

- [initWithImage:hotSpot:](init%28image_hotspot_%29.md): Initializes a cursor with the given image and hot spot.

### Setting cursor attributes

- [hotSpot](hotspot.md): The position of the click location within the cursor.
- [hide](hide%28%29.md): Makes the current cursor invisible.
- [unhide](unhide%28%29.md): Negates an earlier call to [hide](hide%28%29.md) by showing the current cursor.
- [setHiddenUntilMouseMoves:](sethiddenuntilmousemoves%28__%29.md): Sets whether the cursor is hidden until the mouse moves.
