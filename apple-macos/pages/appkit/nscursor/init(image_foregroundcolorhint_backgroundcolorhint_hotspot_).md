> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/init(image:foregroundcolorhint:backgroundcolorhint:hotspot:)](https://developer.apple.com/documentation/appkit/nscursor/init(image:foregroundcolorhint:backgroundcolorhint:hotspot:))

# init(image:foregroundColorHint:backgroundColorHint:hotSpot:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 10.12)

Initializes the cursor with the specified image and hot spot.

> Color hints are ignored. Use [init(image:hotSpot:)](init%28image_hotspot_%29.md) instead.

## Declaration

```swift
convenience init(image newImage: NSImage, foregroundColorHint fg: NSColor?, backgroundColorHint bg: NSColor?, hotSpot: NSPoint)
```

## Parameters

- `newImage`: The image to assign to the cursor.
- `fg`: The foreground color. This is currently ignored.
- `bg`: The background color. This is currently ignored.
- `hotSpot`: The point to assign as the cursor’s hot spot.

<a id="return-value"></a>

## Return Value

The initialized cursor object.

## See Also

### Deprecated

- [mouseEntered(with:)](mouseentered%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor enters a cursor rectangle owned by the receiver.
- [setOnMouseEntered(\_:)](setonmouseentered%28__%29.md): Deprecated. Specifies whether the receiver accepts [mouseEntered(with:)](mouseentered%28with_%29.md) events.
- [isSetOnMouseEntered](issetonmouseentered.md): Deprecated. A Boolean value indicating whether the receiver becomes current on receiving a [mouseEntered(with:)](mouseentered%28with_%29.md) message.
- [mouseExited(with:)](mouseexited%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor exits a cursor rectangle owned by the receiver.
- [setOnMouseExited(\_:)](setonmouseexited%28__%29.md): Deprecated. Sets whether the receiver accepts [mouseExited(with:)](mouseexited%28with_%29.md) events.
- [isSetOnMouseExited](issetonmouseexited.md): Deprecated. A Boolean value indicating whether the receiver becomes current when it receives a [mouseExited(with:)](mouseexited%28with_%29.md) message.

# initWithImage:foregroundColorHint:backgroundColorHint:hotSpot: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.12)

Initializes the cursor with the specified image and hot spot.

> Color hints are ignored. Use [initWithImage:hotSpot:](init%28image_hotspot_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithImage:(NSImage *) newImage foregroundColorHint:(NSColor *) fg backgroundColorHint:(NSColor *) bg hotSpot:(NSPoint) hotSpot;
```

## Parameters

- `newImage`: The image to assign to the cursor.
- `fg`: The foreground color. This is currently ignored.
- `bg`: The background color. This is currently ignored.
- `hotSpot`: The point to assign as the cursor’s hot spot.

<a id="return-value"></a>

## Return Value

The initialized cursor object.

## See Also

### Deprecated

- [mouseEntered:](mouseentered%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor enters a cursor rectangle owned by the receiver.
- [setOnMouseEntered:](setonmouseentered%28__%29.md): Deprecated. Specifies whether the receiver accepts [mouseEntered:](mouseentered%28with_%29.md) events.
- [setOnMouseEntered](issetonmouseentered.md): Deprecated. A Boolean value indicating whether the receiver becomes current on receiving a [mouseEntered:](mouseentered%28with_%29.md) message.
- [mouseExited:](mouseexited%28with_%29.md): Deprecated. Automatically sent to the receiver when the cursor exits a cursor rectangle owned by the receiver.
- [setOnMouseExited:](setonmouseexited%28__%29.md): Deprecated. Sets whether the receiver accepts [mouseExited:](mouseexited%28with_%29.md) events.
- [setOnMouseExited](issetonmouseexited.md): Deprecated. A Boolean value indicating whether the receiver becomes current when it receives a [mouseExited:](mouseexited%28with_%29.md) message.
