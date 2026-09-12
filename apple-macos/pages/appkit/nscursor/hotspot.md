> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/hotspot](https://developer.apple.com/documentation/appkit/nscursor/hotspot)

# hotSpot (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.0+

The position of the click location within the cursor.

## Declaration

```swift
var hotSpot: NSPoint { get }
```

<a id="Discussion"></a>

## Discussion

The hot spot precisely determines the click location within the cursor’s image. Using its flipped coordinate system, you calculate the hot spot in points with the top-left corner acting as the origin. For example, the arrow cursor’s hot spot is at the intersection of its left and right edges, which is inset 4pts from the image’s corner to account for the arrow’s stroke and shadow.

![A diagram showing an arrow cursor that points up and to the left. At the tip of the arrow, inset slightly, is a cross hair pointing to the cursor’s hot spot.](https://developer.apple.com/images/com.apple.appkit/media-4311497@2x.png)

Note that an `NSCursor` object is immutable: you can’t change its hot spot after it’s created. Instead, use [init(image:hotSpot:)](init%28image_hotspot_%29.md) to create a new cursor with the new settings.

## See Also

### Related Documentation

- [init(image:hotSpot:)](init%28image_hotspot_%29.md): Initializes a cursor with the given image and hot spot.

### Setting cursor attributes

- [image](image.md): The cursor’s image.
- [hide()](hide%28%29.md): Makes the current cursor invisible.
- [unhide()](unhide%28%29.md): Negates an earlier call to [hide()](hide%28%29.md) by showing the current cursor.
- [setHiddenUntilMouseMoves(\_:)](sethiddenuntilmousemoves%28__%29.md): Sets whether the cursor is hidden until the mouse moves.

# hotSpot (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

The position of the click location within the cursor.

## Declaration

```objectivec
@property (readonly) NSPoint hotSpot;
```

<a id="Discussion"></a>

## Discussion

The hot spot precisely determines the click location within the cursor’s image. Using its flipped coordinate system, you calculate the hot spot in points with the top-left corner acting as the origin. For example, the arrow cursor’s hot spot is at the intersection of its left and right edges, which is inset 4pts from the image’s corner to account for the arrow’s stroke and shadow.

![A diagram showing an arrow cursor that points up and to the left. At the tip of the arrow, inset slightly, is a cross hair pointing to the cursor’s hot spot.](https://developer.apple.com/images/com.apple.appkit/media-4311497@2x.png)

Note that an `NSCursor` object is immutable: you can’t change its hot spot after it’s created. Instead, use [initWithImage:hotSpot:](init%28image_hotspot_%29.md) to create a new cursor with the new settings.

## See Also

### Related Documentation

- [initWithImage:hotSpot:](init%28image_hotspot_%29.md): Initializes a cursor with the given image and hot spot.

### Setting cursor attributes

- [image](image.md): The cursor’s image.
- [hide](hide%28%29.md): Makes the current cursor invisible.
- [unhide](unhide%28%29.md): Negates an earlier call to [hide](hide%28%29.md) by showing the current cursor.
- [setHiddenUntilMouseMoves:](sethiddenuntilmousemoves%28__%29.md): Sets whether the cursor is hidden until the mouse moves.
