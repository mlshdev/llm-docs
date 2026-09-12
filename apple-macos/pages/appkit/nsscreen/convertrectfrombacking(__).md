> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/convertrectfrombacking(_:)](https://developer.apple.com/documentation/appkit/nsscreen/convertrectfrombacking(_:))

# convertRectFromBacking(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Converts the rectangle from the device pixel aligned coordinates system of a screen.

## Declaration

```swift
func convertRectFromBacking(_ rect: NSRect) -> NSRect
```

## Parameters

- `rect`: The rectangle.

<a id="return-value"></a>

## Return Value

The rectangle converted from the device pixel aligned coordinates system of the screen.

## See Also

### Converting Between Screen and Backing Coordinates

- [backingAlignedRect(\_:options:)](backingalignedrect%28__options_%29.md): Converts a rectangle in global screen coordinates to a pixel aligned rectangle.
- [backingScaleFactor](backingscalefactor.md): The backing store pixel scale factor for the screen.
- [convertRectToBacking(\_:)](convertrecttobacking%28__%29.md): Converts the rectangle to the device pixel aligned coordinates system of a screen.

# convertRectFromBacking: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Converts the rectangle from the device pixel aligned coordinates system of a screen.

## Declaration

```objectivec
- (NSRect) convertRectFromBacking:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle.

<a id="return-value"></a>

## Return Value

The rectangle converted from the device pixel aligned coordinates system of the screen.

## See Also

### Converting Between Screen and Backing Coordinates

- [backingAlignedRect:options:](backingalignedrect%28__options_%29.md): Converts a rectangle in global screen coordinates to a pixel aligned rectangle.
- [backingScaleFactor](backingscalefactor.md): The backing store pixel scale factor for the screen.
- [convertRectToBacking:](convertrecttobacking%28__%29.md): Converts the rectangle to the device pixel aligned coordinates system of a screen.
